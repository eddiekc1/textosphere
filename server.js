const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const pg = require("pg");
require("dotenv").config();

const app = express();
const port = Number(process.env.PORT || 3000);
const uploadDir = path.join(__dirname, "uploads");
const publicClusterId = "00000000-0000-4000-8000-000000000001";
const systemUserId = "00000000-0000-4000-8000-000000000002";
const nodeDragBounds = {
  minX: -220,
  maxX: 320,
  minY: -220,
  maxY: 320,
};
const megaCoordinateScale = 10;
const megaClusterRadius = { initialPx: 500, minPx: 200, maxPx: 1000 };
const megaClusterStrength = { initialPx: 2, minPx: 1, maxPx: 5 };
const megaNodeMinDistancePx = 80;
const megaGravityIntervalMs = 20_000;
const megaDriftIntervalMs = 60_000;
let megaGravityTimer = null;
let megaGravityRunning = false;
let lastMegaDriftAt = 0;
const { Pool } = pg;
pg.types.setTypeParser(1082, (value) => value);
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

fs.mkdirSync(uploadDir, { recursive: true });

const maxUploadBytes = 100 * 1024 * 1024;

const seedNodes = [
  {
    id: crypto.randomUUID(),
    type: "text",
    title: "Yoake mae no memo",
    body: "Machi no hikari ga kiekiranai uchini, dareka no kotoba ga betsu no kyoku no rhythm to kasanatte, mada namae no nai kaiwa ga hajimaru.",
    duration: null,
    selectionStart: 16,
    selectionEnd: 42,
    x: 28,
    y: 32,
  },
  {
    id: crypto.randomUUID(),
    type: "music",
    title: "Pulse in Blue",
    body: "",
    duration: 214,
    selectionStart: 64,
    selectionEnd: 118,
    x: 62,
    y: 43,
  },
  {
    id: crypto.randomUUID(),
    type: "video",
    title: "Madobe no 8 seconds",
    body: "",
    duration: 86,
    selectionStart: 12,
    selectionEnd: 28,
    x: 45,
    y: 70,
  },
];

const seedLinks = [
  { source: seedNodes[0].id, target: seedNodes[1].id },
  { source: seedNodes[1].id, target: seedNodes[2].id },
];

const megaClusterDefinitions = [
  { id: 0, name: "愚者", keywords: ["無邪気", "冒険", "自由", "楽天的", "夢想", "愚行", "無計画", "無謀"] },
  { id: 1, name: "魔術師", keywords: ["創造", "自信", "技術", "才能", "混迷", "未熟", "消極的", "自信喪失"] },
  { id: 2, name: "女教皇", keywords: ["知性", "聡明", "神秘", "英知", "判断", "批判", "悲観", "冷徹", "無視", "無神経"] },
  { id: 3, name: "女帝", keywords: ["豊穣", "満足", "包容力", "魅力", "愛情", "嫉妬", "我儘", "浪費", "感情的", "怠惰"] },
  { id: 4, name: "皇帝", keywords: ["支配", "権力", "安定", "成功", "責任", "過信", "傲慢", "孤立", "身勝手", "独断的"] },
  { id: 5, name: "教皇", keywords: ["慈悲", "優しさ", "法令順守", "尊敬", "寛大", "保守", "束縛", "不信感", "虚栄", "頑固"] },
  { id: 6, name: "恋人", keywords: ["恋愛", "情熱", "結婚", "ときめく心", "調和", "誘惑", "不道徳", "関係破綻"] },
  { id: 7, name: "戦車", keywords: ["実行力", "強い意思", "迅速", "勝利", "征服", "無気力", "人任せ", "イライラ", "失敗"] },
  { id: 8, name: "力", keywords: ["力強さ", "自制", "不屈", "理性", "力量", "無力", "力不足", "諦め", "優柔不断", "落胆"] },
  { id: 9, name: "隠者", keywords: ["精神性", "内観", "悟り", "思慮深い", "慎重", "消極", "悲観", "保守的", "閉鎖的", "籠る"] },
  { id: 10, name: "運命の輪", keywords: ["一時的な幸運", "変化", "運命", "出会い", "アクシデント", "急激な悪化", "すれ違い"] },
  { id: 11, name: "正義", keywords: ["公正さ", "均衡", "正しさ", "平等", "罪", "不正", "不均衡", "不平等"] },
  { id: 12, name: "吊るされた男", keywords: ["試練", "修行", "努力", "報われる苦労", "報われない苦悩", "徒労", "投げやり"] },
  { id: 13, name: "死神", keywords: ["強制終了", "中止", "破局", "終焉", "停止", "再生", "再スタート", "起死回生", "新展開"] },
  { id: 14, name: "節制", keywords: ["循環", "順調", "調和", "管理", "淀みない", "浪費", "淀み", "不均衡", "停止", "惰性"] },
  { id: 15, name: "悪魔", keywords: ["誘惑", "堕落", "裏切り", "破滅", "依存", "解放", "再生", "目覚め", "執着を手放す"] },
  { id: 16, name: "塔", keywords: ["災害", "災難", "事故", "崩壊", "ショック", "不名誉", "緊迫状態", "受難", "不安定"] },
  { id: 17, name: "星", keywords: ["直感", "閃き", "希望", "憧れ", "目標", "失望", "高望み", "失意", "幻滅", "無気力"] },
  { id: 18, name: "月", keywords: ["不安", "憂鬱", "中途半端", "誤解", "移ろい", "脱却", "明晰", "トラウマの解消", "回復"] },
  { id: 19, name: "太陽", keywords: ["天真爛漫", "無邪気", "喜び", "栄光", "成功", "不調", "落胆", "失墜", "悪化", "否定"] },
  { id: 20, name: "審判", keywords: ["復活", "祝福", "再生", "再チャレンジ", "警告", "罰", "消滅", "暗闇", "罪の償い"] },
  { id: 21, name: "世界", keywords: ["完成", "理想郷", "成功", "充足", "完璧", "未完成", "惰性", "物足りなさ", "低迷"] },
];

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function pxToCoord(px) {
  return Number(px) / megaCoordinateScale;
}

function coordToPx(coord) {
  return Number(coord) * megaCoordinateScale;
}

function stableNumber(value) {
  return Array.from(String(value || "")).reduce((total, char) => total + char.charCodeAt(0), 0);
}

function getSeedMegaCenter(id) {
  const angle = id * 2.399963229728653;
  const ring = Math.floor(id / 8);
  const radius = 58 + ring * 38;
  return {
    x: 50 + Math.cos(angle) * radius,
    y: 50 + Math.sin(angle) * radius,
  };
}

function validatePassword(password) {
  const value = String(password || "");
  const groups = [
    /[A-Z]/.test(value),
    /[a-z]/.test(value),
    /[0-9]/.test(value),
    /[_\-!#$%()[\]@+*?/]/.test(value),
  ].filter(Boolean).length;
  return value.length >= 8 && groups >= 3 && /^[A-Za-z0-9_\-!#$%()[\]@+*?/]+$/.test(value);
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.scryptSync(String(password), salt, 64).toString("hex");
  return { salt, hash };
}

function verifyPassword(password, salt, expectedHash) {
  const { hash } = hashPassword(password, salt);
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(expectedHash, "hex"));
}

function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function formatDateOnly(value) {
  if (!value) return null;
  if (value instanceof Date) {
    const year = value.getUTCFullYear();
    const month = String(value.getUTCMonth() + 1).padStart(2, "0");
    const day = String(value.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const match = String(value).match(/^\d{4}-\d{2}-\d{2}/);
  return match ? match[0] : null;
}

function toUser(row) {
  return {
    id: row.id,
    email: row.email,
    userId: row.user_identifier,
    userName: row.display_name || row.user_identifier,
    role: Number(row.role),
    loginAllowed: Boolean(row.login_allowed),
    birthDate: formatDateOnly(row.birth_date),
    profileIcon: row.profile_icon || "",
    bio: row.bio || "",
  };
}

function toPublicUser(row) {
  return {
    id: row.id,
    userId: row.user_identifier,
    userName: row.display_name || row.user_identifier,
    profileIcon: row.profile_icon || "",
    bio: row.bio || "",
  };
}

function canManageOwnedResource(user, ownerUserId) {
  return Number(user.role) <= 2 || ownerUserId === user.id;
}

function parseContentDisposition(value) {
  const result = {};
  if (!value) return result;

  value.split(";").forEach((part) => {
    const [rawKey, ...rawValue] = part.trim().split("=");
    if (!rawKey || rawValue.length === 0) return;
    result[rawKey] = rawValue.join("=").replace(/^"|"$/g, "");
  });

  return result;
}

function parseMultipartBuffer(buffer, boundary) {
  const fields = {};
  let file = null;
  const boundaryBuffer = Buffer.from(`--${boundary}`);
  const nextBoundaryBuffer = Buffer.from(`\r\n--${boundary}`);
  const headerBreakBuffer = Buffer.from("\r\n\r\n");
  let boundaryIndex = buffer.indexOf(boundaryBuffer);

  while (boundaryIndex !== -1) {
    let partStart = boundaryIndex + boundaryBuffer.length;
    if (buffer[partStart] === 45 && buffer[partStart + 1] === 45) break;
    if (buffer[partStart] === 13 && buffer[partStart + 1] === 10) {
      partStart += 2;
    }

    const headerEnd = buffer.indexOf(headerBreakBuffer, partStart);
    if (headerEnd === -1) break;

    const contentStart = headerEnd + headerBreakBuffer.length;
    const nextBoundaryIndex = buffer.indexOf(nextBoundaryBuffer, contentStart);
    if (nextBoundaryIndex === -1) break;

    const rawHeaders = buffer.slice(partStart, headerEnd).toString("utf8");
    const content = buffer.slice(contentStart, nextBoundaryIndex);

    const headers = Object.fromEntries(
      rawHeaders.split("\r\n").map((line) => {
        const separator = line.indexOf(":");
        return [line.slice(0, separator).toLowerCase(), line.slice(separator + 1).trim()];
      }),
    );
    const disposition = parseContentDisposition(headers["content-disposition"]);
    if (!disposition.name) return;

    if (disposition.filename) {
      file = {
        originalname: path.basename(disposition.filename),
        mimetype: headers["content-type"] || "application/octet-stream",
        buffer: content,
      };
      boundaryIndex = nextBoundaryIndex + 2;
      continue;
    }

    fields[disposition.name] = content.toString("utf8");
    boundaryIndex = nextBoundaryIndex + 2;
  }

  return { fields, file };
}

function parseMultipartForm(req, res, next) {
  const contentType = req.headers["content-type"] || "";
  if (!contentType.startsWith("multipart/form-data")) {
    next();
    return;
  }

  const boundaryMatch = contentType.match(/boundary=(?:"([^"]+)"|([^;]+))/);
  if (!boundaryMatch) {
    res.status(400).json({ error: "Missing multipart boundary" });
    return;
  }

  let totalBytes = 0;
  const chunks = [];
  req.on("data", (chunk) => {
    totalBytes += chunk.length;
    if (totalBytes > maxUploadBytes) {
      req.destroy();
      return;
    }
    chunks.push(chunk);
  });
  req.on("end", () => {
    try {
      const { fields, file } = parseMultipartBuffer(Buffer.concat(chunks), boundaryMatch[1] || boundaryMatch[2]);
      req.body = fields;
      req.file = file;
      next();
    } catch (error) {
      next(error);
    }
  });
  req.on("error", next);
}

function parseSelection(value) {
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch (error) {
    return undefined;
  }
}

function storeProfileIconFile(file) {
  if (!file) return null;

  const extension = path.extname(file.originalname).toLowerCase();
  const validImage =
    ["image/png", "image/jpeg", "image/gif"].includes(file.mimetype) ||
    [".png", ".jpg", ".jpeg", ".gif"].includes(extension);
  if (!validImage) {
    const error = new Error("Profile icon requires PNG/JPG/GIF");
    error.statusCode = 400;
    throw error;
  }

  const safeExtension =
    extension || (file.mimetype === "image/gif" ? ".gif" : file.mimetype === "image/jpeg" ? ".jpg" : ".png");
  const storedName = `${crypto.randomUUID()}${safeExtension}`;
  const mediaPath = path.join(uploadDir, storedName);
  fs.writeFileSync(mediaPath, file.buffer);
  return {
    mediaPath,
    profileIcon: `/uploads/${storedName}`,
  };
}

function toNode(row) {
  return {
    id: row.id,
    ownerUserId: row.owner_user_id,
    clusterId: row.cluster_id,
    type: row.type,
    title: row.title,
    body: row.body || "",
    duration: row.duration,
    mediaUrl: row.media_url,
    mediaMime: row.media_mime,
    mediaName: row.media_name,
    likeCount: Number(row.like_count || 0),
    likedByCurrentUser: Boolean(row.liked_by_current_user),
    createdAt: row.created_at,
    selection: {
      start: row.selection_start,
      end: row.selection_end,
    },
    megaClusterIds: Array.isArray(row.mega_cluster_ids)
      ? row.mega_cluster_ids.map((id) => Number(id)).filter((id) => Number.isInteger(id))
      : [],
    x: Number(row.x),
    y: Number(row.y),
  };
}

function toCluster(row) {
  return {
    id: row.id,
    ownerUserId: row.owner_user_id,
    name: row.name,
    description: row.description || "",
    createdAt: row.created_at,
  };
}

function toClusterDetail(row) {
  return {
    ...toCluster(row),
    ownerUser: {
      id: row.owner_user_id,
      userId: row.owner_user_identifier || "unknown",
      userName: row.owner_display_name || row.owner_user_identifier || "unknown",
      profileIcon: row.owner_profile_icon || "",
    },
  };
}

function countKeywordOccurrences(text, keyword) {
  if (!text || !keyword) return 0;
  let count = 0;
  let index = 0;
  while (index >= 0) {
    index = text.indexOf(keyword, index);
    if (index >= 0) {
      count += 1;
      index += keyword.length;
    }
  }
  return count;
}

async function classifyNodeMegaClusters({ title, body, clusterDescription, originNodeId }) {
  const sourceMegaClusterIds = [];
  if (originNodeId) {
    const { rows } = await pool.query(
      "select mega_cluster_id from node_mega_clusters where node_id = $1",
      [originNodeId],
    );
    rows.forEach((row) => sourceMegaClusterIds.push(Number(row.mega_cluster_id)));
  }

  const scores = new Map();
  const titleText = String(title || "");
  const bodyText = String(body || "");
  const clusterText = String(clusterDescription || "");

  for (const definition of megaClusterDefinitions) {
    let score = 0;
    for (const keyword of definition.keywords) {
      score += countKeywordOccurrences(titleText, keyword) * 2;
      score += countKeywordOccurrences(bodyText, keyword);
      score += countKeywordOccurrences(clusterText, keyword);
    }
    if (score > 0) {
      scores.set(definition.id, score);
    }
  }

  sourceMegaClusterIds.forEach((id) => {
    scores.set(id, (scores.get(id) || 0) + 1.2);
  });

  return [...scores.entries()]
    .sort((first, second) => second[1] - first[1] || first[0] - second[0])
    .slice(0, 3)
    .map(([id, score]) => ({ id, score }));
}

async function replaceNodeMegaClusters(client, nodeId, assignments) {
  await client.query("delete from node_mega_clusters where node_id = $1", [nodeId]);
  for (const assignment of assignments) {
    await client.query(
      `
        insert into node_mega_clusters (node_id, mega_cluster_id, score)
        values ($1, $2, $3)
        on conflict (node_id, mega_cluster_id) do update
        set score = excluded.score
      `,
      [nodeId, assignment.id, assignment.score],
    );
  }
}

async function getNodeForResponse(nodeId, userId = null) {
  const { rows } = await pool.query(
    `
      select nodes.*,
             coalesce(node_like_counts.like_count, 0)::int as like_count,
             ($2::uuid is not null and current_user_likes.user_id is not null) as liked_by_current_user,
             coalesce(array_agg(node_mega_clusters.mega_cluster_id order by node_mega_clusters.score desc, node_mega_clusters.mega_cluster_id)
               filter (where node_mega_clusters.mega_cluster_id is not null), '{}') as mega_cluster_ids
      from nodes
      left join (
        select node_id, count(*)::int as like_count
        from node_likes
        group by node_id
      ) node_like_counts on node_like_counts.node_id = nodes.id
      left join node_likes current_user_likes
        on current_user_likes.node_id = nodes.id
       and current_user_likes.user_id = $2
      left join node_mega_clusters on node_mega_clusters.node_id = nodes.id
      where nodes.id = $1
      group by nodes.id, node_like_counts.like_count, current_user_likes.user_id
    `,
    [nodeId, userId],
  );
  return rows[0] ? toNode(rows[0]) : null;
}

async function ensureUserPublicCluster(userId) {
  const { rows } = await pool.query(
    `
      insert into clusters (id, owner_user_id, name, description)
      values ($1, $2, 'Public', 'Default public cluster')
      on conflict (owner_user_id, name) do update
      set name = excluded.name
      returning *
    `,
    [crypto.randomUUID(), userId],
  );
  return rows[0];
}

function toLink(row) {
  return {
    id: row.id,
    ownerUserId: row.owner_user_id,
    source: row.source_node_id,
    target: row.target_node_id,
    comment: row.comment || "",
  };
}

async function initDb() {
  await pool.query(`
    create table if not exists users (
      id uuid primary key,
      email text not null unique,
      password_hash text not null,
      password_salt text not null,
      user_identifier text not null unique check (user_identifier ~ '^[A-Za-z0-9_-]+$'),
      display_name text not null default '',
      role integer not null default 3,
      login_allowed boolean not null default true,
      birth_date date,
      profile_icon text,
      bio text not null default '',
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    )
  `);

  await pool.query("alter table users add column if not exists display_name text not null default ''");
  await pool.query("update users set display_name = user_identifier where display_name = ''");

  await pool.query(`
    create table if not exists sessions (
      token_hash text primary key,
      user_id uuid not null references users(id) on delete cascade,
      created_at timestamptz not null default now()
    )
  `);

  const systemPassword = hashPassword(crypto.randomUUID());
  await pool.query(
    `
      insert into users
        (id, email, password_hash, password_salt, user_identifier, display_name, role, login_allowed, bio)
      values
        ($1, 'system@textosphere.local', $2, $3, 'system', 'system', 1, false, 'System-owned legacy data')
      on conflict (id) do nothing
    `,
    [systemUserId, systemPassword.hash, systemPassword.salt],
  );

  await pool.query(`
    create table if not exists clusters (
      id uuid primary key,
      owner_user_id uuid references users(id) on delete set null,
      name text not null,
      description text not null default '',
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    )
  `);

  await pool.query("alter table clusters add column if not exists owner_user_id uuid references users(id) on delete set null");
  await pool.query("update clusters set owner_user_id = $1 where owner_user_id is null", [systemUserId]);
  await pool.query(`
    do $$
    declare
      constraint_name text;
    begin
      select conname
      into constraint_name
      from pg_constraint
      where conrelid = 'clusters'::regclass
        and contype = 'u'
        and pg_get_constraintdef(oid) = 'UNIQUE (name)'
      limit 1;

      if constraint_name is not null then
        execute format('alter table clusters drop constraint %I', constraint_name);
      end if;
    end $$;
  `);
  await pool.query(`
    create unique index if not exists clusters_owner_name_unique
    on clusters (owner_user_id, name)
  `);
  await pool.query(`
    create table if not exists cluster_follows (
      user_id uuid not null references users(id) on delete cascade,
      cluster_id uuid not null references clusters(id) on delete cascade,
      created_at timestamptz not null default now(),
      primary key (user_id, cluster_id)
    )
  `);
  await pool.query(
    `
      insert into clusters (id, owner_user_id, name, description)
      values ($1, $2, 'Public', 'Default public cluster')
      on conflict (owner_user_id, name) do nothing
    `,
    [publicClusterId, systemUserId],
  );

  await pool.query(`
    create table if not exists nodes (
      id uuid primary key,
      owner_user_id uuid references users(id) on delete set null,
      cluster_id uuid references clusters(id) on delete set null,
      type text not null check (type in ('text', 'image', 'music', 'video')),
      title text not null,
      body text not null default '',
      duration integer,
      selection_start integer not null default 0,
      selection_end integer not null default 0,
      media_url text,
      media_mime text,
      media_name text,
      x numeric(5, 2) not null,
      y numeric(5, 2) not null,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    )
  `);

  await pool.query("alter table nodes add column if not exists owner_user_id uuid references users(id) on delete set null");
  await pool.query("update nodes set owner_user_id = $1 where owner_user_id is null", [systemUserId]);
  await pool.query("alter table nodes add column if not exists cluster_id uuid references clusters(id) on delete set null");
  await pool.query("update nodes set cluster_id = $1 where cluster_id is null", [publicClusterId]);
  await pool.query("alter table nodes add column if not exists media_url text");
  await pool.query("alter table nodes add column if not exists media_mime text");
  await pool.query("alter table nodes add column if not exists media_name text");
  await pool.query(`
    create table if not exists mega_clusters (
      id integer primary key check (id between 0 and 21),
      name text not null,
      keywords text[] not null default '{}',
      center_x numeric(8, 2) not null,
      center_y numeric(8, 2) not null,
      radius_px numeric(8, 2) not null default 500,
      strength_px numeric(5, 2) not null default 2,
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now()
    )
  `);
  await pool.query(`
    create table if not exists node_mega_clusters (
      node_id uuid not null references nodes(id) on delete cascade,
      mega_cluster_id integer not null references mega_clusters(id) on delete cascade,
      score numeric(8, 3) not null default 1,
      created_at timestamptz not null default now(),
      primary key (node_id, mega_cluster_id)
    )
  `);
  for (const definition of megaClusterDefinitions) {
    const center = getSeedMegaCenter(definition.id);
    await pool.query(
      `
        insert into mega_clusters (id, name, keywords, center_x, center_y, radius_px, strength_px)
        values ($1, $2, $3, $4, $5, $6, $7)
        on conflict (id) do update
        set name = excluded.name,
            keywords = excluded.keywords,
            updated_at = now()
      `,
      [
        definition.id,
        definition.name,
        definition.keywords,
        center.x,
        center.y,
        megaClusterRadius.initialPx,
        megaClusterStrength.initialPx,
      ],
    );
  }
  await pool.query(`
    create table if not exists node_likes (
      user_id uuid not null references users(id) on delete cascade,
      node_id uuid not null references nodes(id) on delete cascade,
      created_at timestamptz not null default now(),
      primary key (user_id, node_id)
    )
  `);
  await pool.query(`
    do $$
    declare
      constraint_name text;
    begin
      select conname
      into constraint_name
      from pg_constraint
      where conrelid = 'nodes'::regclass
        and contype = 'c'
        and pg_get_constraintdef(oid) like '%type%'
      limit 1;

      if constraint_name is not null then
        execute format('alter table nodes drop constraint %I', constraint_name);
      end if;

      alter table nodes
      add constraint nodes_type_check
      check (type in ('text', 'image', 'music', 'video'));
    end $$;
  `);

  await pool.query(`
    create table if not exists links (
      id uuid primary key,
      owner_user_id uuid references users(id) on delete set null,
      source_node_id uuid not null references nodes(id) on delete cascade,
      target_node_id uuid not null references nodes(id) on delete cascade,
      comment text not null default '',
      created_at timestamptz not null default now(),
      check (source_node_id <> target_node_id)
    )
  `);

  await pool.query("alter table links add column if not exists owner_user_id uuid references users(id) on delete set null");
  await pool.query("update links set owner_user_id = $1 where owner_user_id is null", [systemUserId]);
  await pool.query("alter table links add column if not exists comment text not null default ''");

  await pool.query(`
    create unique index if not exists links_unique_pair
    on links (
      least(source_node_id::text, target_node_id::text),
      greatest(source_node_id::text, target_node_id::text)
    )
  `);

  const { rows } = await pool.query("select count(*)::int as count from nodes");
  if (rows[0].count > 0) return;

  const client = await pool.connect();
  try {
    await client.query("begin");
    for (const node of seedNodes) {
      await client.query(
        `
          insert into nodes
            (id, owner_user_id, cluster_id, type, title, body, duration, selection_start, selection_end, x, y)
          values
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        `,
        [
          node.id,
          systemUserId,
          publicClusterId,
          node.type,
          node.title,
          node.body,
          node.duration,
          node.selectionStart,
          node.selectionEnd,
          node.x,
          node.y,
        ],
      );
    }

    for (const link of seedLinks) {
      await client.query(
        "insert into links (id, owner_user_id, source_node_id, target_node_id) values ($1, $2, $3, $4)",
        [crypto.randomUUID(), systemUserId, link.source, link.target],
      );
    }
    await client.query("commit");
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
}

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }
  next();
});
app.use("/uploads", express.static(uploadDir));
app.use(express.static(__dirname));

app.get("/api/health", async (req, res, next) => {
  try {
    await pool.query("select 1");
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

async function requireAuth(req, res, next) {
  try {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : "";
    if (!token) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }

    const { rows } = await pool.query(
      `
        select users.*
        from sessions
        join users on users.id = sessions.user_id
        where sessions.token_hash = $1
      `,
      [hashToken(token)],
    );
    if (rows.length === 0 || !rows[0].login_allowed) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }

    req.user = toUser(rows[0]);
    next();
  } catch (error) {
    next(error);
  }
}

app.post("/api/auth/register", parseMultipartForm, async (req, res, next) => {
  let mediaPath = null;
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");
    const userName = String(req.body.userName || "").trim();
    const userId = String(req.body.userId || "").trim();
    const birthDate = req.body.birthDate || null;
    let profileIcon = String(req.body.profileIcon || "").trim();
    const bio = String(req.body.bio || "").trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ error: "Invalid email" });
      return;
    }
    if (!/^[A-Za-z0-9_-]+$/.test(userId)) {
      res.status(400).json({ error: "Invalid user ID" });
      return;
    }
    if (!validatePassword(password)) {
      res.status(400).json({ error: "Invalid password" });
      return;
    }
    if (req.file) {
      const storedIcon = storeProfileIconFile(req.file);
      mediaPath = storedIcon.mediaPath;
      profileIcon = storedIcon.profileIcon;
    }

    const { salt, hash } = hashPassword(password);
    const { rows } = await pool.query(
      `
        insert into users
          (id, email, password_hash, password_salt, user_identifier, display_name, role, login_allowed, birth_date, profile_icon, bio)
        values
          ($1, $2, $3, $4, $5, $6, 3, true, $7, $8, $9)
        returning *
      `,
      [crypto.randomUUID(), email, hash, salt, userId, userName || userId, birthDate || null, profileIcon, bio],
    );
    await ensureUserPublicCluster(rows[0].id);
    const token = crypto.randomBytes(32).toString("hex");
    await pool.query("insert into sessions (token_hash, user_id) values ($1, $2)", [hashToken(token), rows[0].id]);
    res.status(201).json({ token, user: toUser(rows[0]) });
  } catch (error) {
    if (mediaPath) {
      fs.rmSync(mediaPath, { force: true });
    }
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
      return;
    }
    if (error.code === "23505") {
      res.status(409).json({ error: "Email or user ID already exists" });
      return;
    }
    next(error);
  }
});

app.post("/api/auth/login", async (req, res, next) => {
  try {
    const login = String(req.body.email || req.body.login || "").trim();
    const normalizedEmail = login.toLowerCase();
    const password = String(req.body.password || "");
    const { rows } = await pool.query(
      `
        select *
        from users
        where email = $1
           or user_identifier = $2
        limit 1
      `,
      [normalizedEmail, login],
    );
    if (rows.length === 0 || !rows[0].login_allowed || !verifyPassword(password, rows[0].password_salt, rows[0].password_hash)) {
      res.status(401).json({ error: "Invalid login" });
      return;
    }
    const token = crypto.randomBytes(32).toString("hex");
    await pool.query("insert into sessions (token_hash, user_id) values ($1, $2)", [hashToken(token), rows[0].id]);
    res.json({ token, user: toUser(rows[0]) });
  } catch (error) {
    next(error);
  }
});

app.get("/api/auth/me", requireAuth, async (req, res) => {
  res.json({ user: req.user });
});

app.patch("/api/auth/me", requireAuth, parseMultipartForm, async (req, res, next) => {
  let mediaPath = null;
  try {
    const userId = String(req.body.userId || "").trim();
    const userName = String(req.body.userName || "").trim();
    const password = String(req.body.password || "");
    const birthDate = req.body.birthDate || null;
    const bio = String(req.body.bio || "").trim();
    let profileIcon = req.user.profileIcon;

    if (!/^[A-Za-z0-9_-]+$/.test(userId)) {
      res.status(400).json({ error: "Invalid user ID" });
      return;
    }
    if (password && !validatePassword(password)) {
      res.status(400).json({ error: "Invalid password" });
      return;
    }
    if (req.file) {
      const storedIcon = storeProfileIconFile(req.file);
      mediaPath = storedIcon.mediaPath;
      profileIcon = storedIcon.profileIcon;
    }

    const passwordValues = password ? hashPassword(password) : null;
    const { rows } = await pool.query(
      `
        update users
        set user_identifier = $2,
            password_hash = coalesce($3, password_hash),
            password_salt = coalesce($4, password_salt),
            birth_date = $5,
            profile_icon = $6,
            bio = $7,
            display_name = $8,
            updated_at = now()
        where id = $1
        returning *
      `,
      [
        req.user.id,
        userId,
        passwordValues?.hash || null,
        passwordValues?.salt || null,
        birthDate || null,
        profileIcon,
        bio,
        userName || userId,
      ],
    );

    res.json({ user: toUser(rows[0]) });
  } catch (error) {
    if (mediaPath) {
      fs.rmSync(mediaPath, { force: true });
    }
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
      return;
    }
    if (error.code === "23505") {
      res.status(409).json({ error: "User ID already exists" });
      return;
    }
    next(error);
  }
});

app.get("/api/state", requireAuth, async (req, res, next) => {
  try {
    await ensureUserPublicCluster(req.user.id);
    const [clusterResult, nodeResult, linkResult, clusterDetailResult, followResult] = await Promise.all([
      pool.query("select * from clusters where owner_user_id = $1 order by created_at asc", [req.user.id]),
      pool.query(
        `
          select nodes.*,
                 coalesce(node_like_counts.like_count, 0)::int as like_count,
                 (current_user_likes.user_id is not null) as liked_by_current_user,
                 coalesce(array_agg(node_mega_clusters.mega_cluster_id order by node_mega_clusters.score desc, node_mega_clusters.mega_cluster_id)
                   filter (where node_mega_clusters.mega_cluster_id is not null), '{}') as mega_cluster_ids
          from nodes
          left join (
            select node_id, count(*)::int as like_count
            from node_likes
            group by node_id
          ) node_like_counts on node_like_counts.node_id = nodes.id
          left join node_likes current_user_likes
            on current_user_likes.node_id = nodes.id
           and current_user_likes.user_id = $1
          left join node_mega_clusters on node_mega_clusters.node_id = nodes.id
          group by nodes.id, node_like_counts.like_count, current_user_likes.user_id
          order by nodes.created_at asc
        `,
        [req.user.id],
      ),
      pool.query("select * from links order by created_at asc"),
      pool.query(`
        select clusters.*,
               users.user_identifier as owner_user_identifier,
               users.display_name as owner_display_name,
               users.profile_icon as owner_profile_icon
        from clusters
        left join users on users.id = clusters.owner_user_id
        order by clusters.created_at asc
      `),
      pool.query("select cluster_id from cluster_follows where user_id = $1", [req.user.id]),
    ]);

    res.json({
      currentUser: req.user,
      clusters: clusterResult.rows.map(toCluster),
      clusterDirectory: clusterDetailResult.rows.map(toClusterDetail),
      followedClusterIds: followResult.rows.map((row) => row.cluster_id),
      nodes: nodeResult.rows.map(toNode),
      links: linkResult.rows.map(toLink),
    });
  } catch (error) {
    next(error);
  }
});

app.put("/api/clusters/:id/follow", requireAuth, async (req, res, next) => {
  try {
    const { rows } = await pool.query("select id from clusters where id = $1", [req.params.id]);
    if (rows.length === 0) {
      res.status(404).json({ error: "Cluster not found" });
      return;
    }

    await pool.query(
      `
        insert into cluster_follows (user_id, cluster_id)
        values ($1, $2)
        on conflict (user_id, cluster_id) do nothing
      `,
      [req.user.id, req.params.id],
    );
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

app.delete("/api/clusters/:id/follow", requireAuth, async (req, res, next) => {
  try {
    await pool.query("delete from cluster_follows where user_id = $1 and cluster_id = $2", [req.user.id, req.params.id]);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

async function getNodeLikeState(nodeId, userId) {
  const { rows } = await pool.query(
    `
      select
        (select count(*)::int from node_likes where node_id = $1) as like_count,
        exists(select 1 from node_likes where node_id = $1 and user_id = $2) as liked_by_current_user
    `,
    [nodeId, userId],
  );
  return {
    nodeId,
    likeCount: Number(rows[0]?.like_count || 0),
    likedByCurrentUser: Boolean(rows[0]?.liked_by_current_user),
  };
}

app.get("/api/users/:id", requireAuth, async (req, res, next) => {
  try {
    const [userResult, clusterResult, nodeResult, followResult] = await Promise.all([
      pool.query("select id, user_identifier, display_name, profile_icon, bio from users where id = $1", [req.params.id]),
      pool.query("select * from clusters where owner_user_id = $1 order by created_at desc", [req.params.id]),
      pool.query(
        `
          select nodes.*,
                 coalesce(node_like_counts.like_count, 0)::int as like_count,
                 (current_user_likes.user_id is not null) as liked_by_current_user,
                 coalesce(array_agg(node_mega_clusters.mega_cluster_id order by node_mega_clusters.score desc, node_mega_clusters.mega_cluster_id)
                   filter (where node_mega_clusters.mega_cluster_id is not null), '{}') as mega_cluster_ids
          from nodes
          left join (
            select node_id, count(*)::int as like_count
            from node_likes
            group by node_id
          ) node_like_counts on node_like_counts.node_id = nodes.id
          left join node_likes current_user_likes
            on current_user_likes.node_id = nodes.id
           and current_user_likes.user_id = $2
          left join node_mega_clusters on node_mega_clusters.node_id = nodes.id
          where nodes.owner_user_id = $1
          group by nodes.id, node_like_counts.like_count, current_user_likes.user_id
          order by nodes.created_at desc
        `,
        [req.params.id, req.user.id],
      ),
      pool.query(
        `
          select cluster_follows.cluster_id
          from cluster_follows
          join clusters on clusters.id = cluster_follows.cluster_id
          where cluster_follows.user_id = $1
            and clusters.owner_user_id = $2
        `,
        [req.user.id, req.params.id],
      ),
    ]);

    if (userResult.rows.length === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json({
      user: toPublicUser(userResult.rows[0]),
      clusters: clusterResult.rows.map(toCluster),
      nodes: nodeResult.rows.map(toNode),
      followedClusterIds: followResult.rows.map((row) => row.cluster_id),
    });
  } catch (error) {
    next(error);
  }
});

app.post("/api/clusters", requireAuth, async (req, res, next) => {
  try {
    const name = String(req.body.name || "").trim();
    const description = String(req.body.description || "").trim();
    if (!name) {
      res.status(400).json({ error: "Cluster name is required" });
      return;
    }

    const { rows } = await pool.query(
      `
        insert into clusters (id, owner_user_id, name, description)
        values ($1, $2, $3, $4)
        on conflict (owner_user_id, name) do update
        set description = excluded.description,
            updated_at = now()
        returning *
      `,
      [crypto.randomUUID(), req.user.id, name, description],
    );
    res.status(201).json(toCluster(rows[0]));
  } catch (error) {
    next(error);
  }
});

app.put("/api/nodes/:id/like", requireAuth, async (req, res, next) => {
  try {
    const existing = await pool.query("select id from nodes where id = $1", [req.params.id]);
    if (existing.rows.length === 0) {
      res.status(404).json({ error: "Node not found" });
      return;
    }

    await pool.query(
      `
        insert into node_likes (user_id, node_id)
        values ($1, $2)
        on conflict (user_id, node_id) do nothing
      `,
      [req.user.id, req.params.id],
    );
    res.json(await getNodeLikeState(req.params.id, req.user.id));
  } catch (error) {
    next(error);
  }
});

app.delete("/api/nodes/:id/like", requireAuth, async (req, res, next) => {
  try {
    const existing = await pool.query("select id from nodes where id = $1", [req.params.id]);
    if (existing.rows.length === 0) {
      res.status(404).json({ error: "Node not found" });
      return;
    }

    await pool.query("delete from node_likes where user_id = $1 and node_id = $2", [req.user.id, req.params.id]);
    res.json(await getNodeLikeState(req.params.id, req.user.id));
  } catch (error) {
    next(error);
  }
});

app.post("/api/nodes", requireAuth, parseMultipartForm, async (req, res, next) => {
  let mediaPath = null;
  try {
    const userPublicCluster = await ensureUserPublicCluster(req.user.id);
    const {
      type,
      title,
      body = "",
      duration = null,
      selection,
      x,
      y,
      clusterId = userPublicCluster.id,
      originNodeId = null,
    } = req.body;
    if (!["text", "image", "music", "video"].includes(type)) {
      res.status(400).json({ error: "Invalid node type" });
      return;
    }

    if (req.file && type === "text") {
      res.status(400).json({ error: "Text nodes cannot include media files" });
      return;
    }

    let mediaUrl = null;
    let mediaMime = null;
    let mediaName = null;
    if (req.file) {
      const extension = path.extname(req.file.originalname).toLowerCase();
      const validMusic =
        type === "music" &&
        (["audio/mpeg", "audio/mp3"].includes(req.file.mimetype) || extension === ".mp3");
      const validVideo = type === "video" && (req.file.mimetype === "video/mp4" || extension === ".mp4");
      const validImage =
        type === "image" &&
        (["image/png", "image/jpeg", "image/gif"].includes(req.file.mimetype) ||
          [".png", ".jpg", ".jpeg", ".gif"].includes(extension));
      if (!validImage && !validMusic && !validVideo) {
        res.status(400).json({ error: "Image requires PNG/JPG/GIF, music requires MP3, and video requires MP4" });
        return;
      }

      const safeExtension = extension || (type === "image" ? ".png" : type === "music" ? ".mp3" : ".mp4");
      const storedName = `${crypto.randomUUID()}${safeExtension}`;
      mediaPath = path.join(uploadDir, storedName);
      fs.writeFileSync(mediaPath, req.file.buffer);
      mediaUrl = `/uploads/${storedName}`;
      mediaMime = req.file.mimetype;
      mediaName = req.file.originalname;
    }

    const parsedSelection = parseSelection(selection);

    const max = type === "text" ? body.length : type === "image" ? 0 : Number(duration || 0);
    const selectionStart = clamp(Number(parsedSelection?.start ?? 0), 0, max);
    const selectionEnd = clamp(Number(parsedSelection?.end ?? max), selectionStart, max);
    const { rows: clusterRows } = await pool.query("select id, description from clusters where id = $1 and owner_user_id = $2", [
      clusterId,
      req.user.id,
    ]);
    const safeClusterId = clusterRows[0]?.id || userPublicCluster.id;
    const clusterDescription = clusterRows[0]?.description || userPublicCluster.description || "";
    const nodeId = crypto.randomUUID();

    const { rows } = await pool.query(
      `
        insert into nodes
          (id, owner_user_id, cluster_id, type, title, body, duration, selection_start, selection_end, media_url, media_mime, media_name, x, y)
        values
          ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        returning *
      `,
      [
        nodeId,
        req.user.id,
        safeClusterId,
        type,
        title || type,
        body,
        type === "music" || type === "video" ? Number(duration || 0) : null,
        selectionStart,
        selectionEnd,
        mediaUrl,
        mediaMime,
        mediaName,
        clamp(Number(x), nodeDragBounds.minX, nodeDragBounds.maxX),
        clamp(Number(y), nodeDragBounds.minY, nodeDragBounds.maxY),
      ],
    );
    const assignments = await classifyNodeMegaClusters({
      title: title || type,
      body,
      clusterDescription,
      originNodeId,
    });
    await replaceNodeMegaClusters(pool, rows[0].id, assignments);

    res.status(201).json((await getNodeForResponse(rows[0].id, req.user.id)) || toNode(rows[0]));
  } catch (error) {
    if (mediaPath) {
      fs.unlink(mediaPath, () => {});
    }
    next(error);
  }
});

app.patch("/api/nodes/:id/selection", requireAuth, async (req, res, next) => {
  try {
    const { rows: existingRows } = await pool.query("select * from nodes where id = $1", [req.params.id]);
    if (existingRows.length === 0) {
      res.sendStatus(404);
      return;
    }

    const node = existingRows[0];
    const max = node.type === "text" ? node.body.length : Number(node.duration || 0);
    const selectionStart = clamp(Number(req.body.start ?? 0), 0, max);
    const selectionEnd = clamp(Number(req.body.end ?? max), selectionStart, max);

    const { rows } = await pool.query(
      `
        update nodes
        set selection_start = $2,
            selection_end = $3,
            updated_at = now()
        where id = $1
        returning *
      `,
      [req.params.id, selectionStart, selectionEnd],
    );

    res.json(toNode(rows[0]));
  } catch (error) {
    next(error);
  }
});

app.patch("/api/nodes/:id/position", requireAuth, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `
        update nodes
        set x = $2,
            y = $3,
            updated_at = now()
        where id = $1
        returning *
      `,
      [
        req.params.id,
        clamp(Number(req.body.x), nodeDragBounds.minX, nodeDragBounds.maxX),
        clamp(Number(req.body.y), nodeDragBounds.minY, nodeDragBounds.maxY),
      ],
    );

    if (rows.length === 0) {
      res.sendStatus(404);
      return;
    }

    res.json(toNode(rows[0]));
  } catch (error) {
    next(error);
  }
});

app.delete("/api/nodes/:id", requireAuth, async (req, res, next) => {
  try {
    const existing = await pool.query("select media_url, owner_user_id from nodes where id = $1", [req.params.id]);
    if (existing.rows.length === 0) {
      res.sendStatus(404);
      return;
    }
    if (!canManageOwnedResource(req.user, existing.rows[0].owner_user_id)) {
      res.status(403).json({ error: "Forbidden" });
      return;
    }

    await pool.query("delete from nodes where id = $1", [req.params.id]);

    const mediaUrl = existing.rows[0].media_url;
    if (mediaUrl && mediaUrl.startsWith("/uploads/")) {
      const mediaPath = path.join(__dirname, mediaUrl.slice(1));
      if (mediaPath.startsWith(uploadDir)) {
        fs.unlink(mediaPath, () => {});
      }
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.post("/api/links", requireAuth, async (req, res, next) => {
  try {
    const { source, target, comment = "" } = req.body;
    if (!source || !target || source === target) {
      res.status(400).json({ error: "Invalid link" });
      return;
    }

    const { rows } = await pool.query(
      `
        insert into links (id, owner_user_id, source_node_id, target_node_id, comment)
        values ($1, $2, $3, $4, $5)
        on conflict do nothing
        returning *
      `,
      [crypto.randomUUID(), req.user.id, source, target, String(comment).slice(0, 200)],
    );

    if (rows.length === 0) {
      const existingLink = await pool.query(
        `
          select *
          from links
          where (source_node_id = $1 and target_node_id = $2)
             or (source_node_id = $2 and target_node_id = $1)
          limit 1
        `,
        [source, target],
      );
      if (existingLink.rows.length === 0) {
        res.status(404).json({ error: "Link not found" });
        return;
      }
      if (!canManageOwnedResource(req.user, existingLink.rows[0].owner_user_id)) {
        res.status(403).json({ error: "Forbidden" });
        return;
      }
      const existing = await pool.query(
        `
          update links
          set comment = $3
          where (source_node_id = $1 and target_node_id = $2)
             or (source_node_id = $2 and target_node_id = $1)
          returning *
        `,
        [source, target, String(comment).slice(0, 200)],
      );
      res.json(toLink(existing.rows[0]));
      return;
    }

    res.status(201).json(toLink(rows[0]));
  } catch (error) {
    next(error);
  }
});

app.delete("/api/links", requireAuth, async (req, res, next) => {
  try {
    if (Number(req.user.role) > 2) {
      res.status(403).json({ error: "Forbidden" });
      return;
    }
    await pool.query("delete from links");
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.get("/api/nodes/positions", requireAuth, async (req, res, next) => {
  try {
    const { rows } = await pool.query("select id, x, y, updated_at from nodes order by created_at asc");
    res.json({
      nodes: rows.map((row) => ({
        id: row.id,
        x: Number(row.x),
        y: Number(row.y),
        updatedAt: row.updated_at,
      })),
    });
  } catch (error) {
    next(error);
  }
});

async function refreshMegaClusterMetrics(client = pool) {
  const { rows } = await client.query(`
    select mega_clusters.id,
           count(node_mega_clusters.node_id)::int as node_count
    from mega_clusters
    left join node_mega_clusters on node_mega_clusters.mega_cluster_id = mega_clusters.id
    group by mega_clusters.id
  `);

  for (const row of rows) {
    const count = Number(row.node_count || 0);
    const radiusPx = clamp(
      megaClusterRadius.initialPx + count * 20,
      megaClusterRadius.minPx,
      megaClusterRadius.maxPx,
    );
    const strengthPx = clamp(
      megaClusterStrength.initialPx + count * 0.08,
      megaClusterStrength.minPx,
      megaClusterStrength.maxPx,
    );
    await client.query(
      "update mega_clusters set radius_px = $2, strength_px = $3, updated_at = now() where id = $1",
      [row.id, radiusPx, strengthPx],
    );
  }
}

async function driftMegaClusters(client = pool) {
  const { rows } = await client.query("select * from mega_clusters order by id asc");
  const clusters = rows.map((row) => ({
    id: Number(row.id),
    x: Number(row.center_x),
    y: Number(row.center_y),
    radius: pxToCoord(row.radius_px),
  }));
  const phase = Math.floor(Date.now() / megaDriftIntervalMs);

  clusters.forEach((cluster) => {
    const seed = stableNumber(cluster.id);
    cluster.x += Math.sin(phase * 0.73 + seed) * pxToCoord(14);
    cluster.y += Math.cos(phase * 0.61 + seed * 1.7) * pxToCoord(14);
  });

  for (let pass = 0; pass < 5; pass += 1) {
    for (let firstIndex = 0; firstIndex < clusters.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < clusters.length; secondIndex += 1) {
        const first = clusters[firstIndex];
        const second = clusters[secondIndex];
        let dx = second.x - first.x;
        let dy = second.y - first.y;
        let distance = Math.hypot(dx, dy);
        if (distance < 0.001) {
          const angle = (first.id + second.id + 1) * 2.399963229728653;
          dx = Math.cos(angle);
          dy = Math.sin(angle);
          distance = 1;
        }
        const minDistance = (first.radius + second.radius) * 0.72;
        if (distance >= minDistance) continue;
        const push = (minDistance - distance) / 2;
        const pushX = (dx / distance) * push;
        const pushY = (dy / distance) * push;
        first.x -= pushX;
        first.y -= pushY;
        second.x += pushX;
        second.y += pushY;
      }
    }
  }

  for (const cluster of clusters) {
    await client.query(
      "update mega_clusters set center_x = $2, center_y = $3, updated_at = now() where id = $1",
      [
        cluster.id,
        clamp(cluster.x, nodeDragBounds.minX, nodeDragBounds.maxX),
        clamp(cluster.y, nodeDragBounds.minY, nodeDragBounds.maxY),
      ],
    );
  }
}

function getMegaGravityVector(node, cluster, index) {
  const radius = pxToCoord(cluster.radius_px);
  const strength = pxToCoord(cluster.strength_px);
  const dx = Number(cluster.center_x) - node.x;
  const dy = Number(cluster.center_y) - node.y;
  const distance = Math.hypot(dx, dy);

  if (distance < radius) {
    const seed = stableNumber(`${node.id}:${cluster.id}`);
    const angle = Date.now() / 45_000 + seed * 0.017 + index * 1.7;
    const targetRadius = radius * 0.55;
    const targetX = Number(cluster.center_x) + Math.cos(angle) * targetRadius;
    const targetY = Number(cluster.center_y) + Math.sin(angle) * targetRadius;
    const tx = targetX - node.x;
    const ty = targetY - node.y;
    const targetDistance = Math.hypot(tx, ty) || 1;
    const step = Math.min(strength * 0.75, targetDistance);
    return { x: (tx / targetDistance) * step, y: (ty / targetDistance) * step };
  }

  const safeDistance = distance || 1;
  const step = Math.min(strength, safeDistance);
  return { x: (dx / safeDistance) * step, y: (dy / safeDistance) * step };
}

function separateMegaGravityNodes(nodesForUpdate) {
  const minDistance = pxToCoord(megaNodeMinDistancePx);
  for (let pass = 0; pass < 5; pass += 1) {
    for (let firstIndex = 0; firstIndex < nodesForUpdate.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < nodesForUpdate.length; secondIndex += 1) {
        const first = nodesForUpdate[firstIndex];
        const second = nodesForUpdate[secondIndex];
        let dx = second.x - first.x;
        let dy = second.y - first.y;
        let distance = Math.hypot(dx, dy);
        if (distance < 0.001) {
          const angle = (firstIndex + secondIndex + 1) * 2.399963229728653;
          dx = Math.cos(angle);
          dy = Math.sin(angle);
          distance = 1;
        }
        if (distance >= minDistance) continue;
        const push = (minDistance - distance) / 2;
        const pushX = (dx / distance) * push;
        const pushY = (dy / distance) * push;
        first.x -= pushX;
        first.y -= pushY;
        second.x += pushX;
        second.y += pushY;
      }
    }
  }

  nodesForUpdate.forEach((node) => {
    node.x = clamp(node.x, nodeDragBounds.minX, nodeDragBounds.maxX);
    node.y = clamp(node.y, nodeDragBounds.minY, nodeDragBounds.maxY);
  });
}

async function applyMegaClusterGravity() {
  if (megaGravityRunning) return;
  megaGravityRunning = true;
  const client = await pool.connect();
  try {
    await client.query("begin");
    await refreshMegaClusterMetrics(client);

    if (Date.now() - lastMegaDriftAt >= megaDriftIntervalMs) {
      await driftMegaClusters(client);
      lastMegaDriftAt = Date.now();
    }

    const clusterResult = await client.query("select * from mega_clusters order by id asc");
    const nodeResult = await client.query(`
        select nodes.id, nodes.x, nodes.y,
               coalesce(array_agg(node_mega_clusters.mega_cluster_id order by node_mega_clusters.score desc)
                 filter (where node_mega_clusters.mega_cluster_id is not null), '{}') as mega_cluster_ids
        from nodes
        left join node_mega_clusters on node_mega_clusters.node_id = nodes.id
        group by nodes.id
        order by nodes.created_at asc
      `);
    const clusterMap = new Map(clusterResult.rows.map((cluster) => [Number(cluster.id), cluster]));
    const nodePositions = nodeResult.rows.map((node) => ({
      id: node.id,
      x: Number(node.x),
      y: Number(node.y),
      originalX: Number(node.x),
      originalY: Number(node.y),
      megaClusterIds: Array.isArray(node.mega_cluster_ids)
        ? node.mega_cluster_ids.map((id) => Number(id)).filter((id) => Number.isInteger(id))
        : [],
    }));
    const maxStep = pxToCoord(8);

    nodePositions.forEach((node) => {
      if (node.megaClusterIds.length === 0) return;
      const vector = node.megaClusterIds.reduce(
        (total, megaClusterId, index) => {
          const cluster = clusterMap.get(megaClusterId);
          if (!cluster) return total;
          const next = getMegaGravityVector(node, cluster, index);
          return { x: total.x + next.x, y: total.y + next.y };
        },
        { x: 0, y: 0 },
      );
      const vectorLength = Math.hypot(vector.x, vector.y);
      if (vectorLength <= 0) return;
      const scale = Math.min(1, maxStep / vectorLength);
      node.x += vector.x * scale;
      node.y += vector.y * scale;
    });

    separateMegaGravityNodes(nodePositions);

    for (const node of nodePositions) {
      if (Math.hypot(node.x - node.originalX, node.y - node.originalY) < 0.01) continue;
      await client.query(
        "update nodes set x = $2, y = $3, updated_at = now() where id = $1",
        [node.id, Number(node.x.toFixed(2)), Number(node.y.toFixed(2))],
      );
    }

    await client.query("commit");
  } catch (error) {
    await client.query("rollback").catch(() => {});
    console.error("Mega cluster gravity failed", error);
  } finally {
    client.release();
    megaGravityRunning = false;
  }
}

function startMegaClusterGravity() {
  if (megaGravityTimer) return;
  megaGravityTimer = setInterval(applyMegaClusterGravity, megaGravityIntervalMs);
  setTimeout(applyMegaClusterGravity, 5_000);
}

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({
    error: "Server error",
    detail: process.env.NODE_ENV === "production" ? undefined : error.message,
  });
});

initDb()
  .then(() => {
    startMegaClusterGravity();
    app.listen(port, () => {
      console.log(`Textosphere API listening on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize database");
    console.error(error);
    process.exitCode = 1;
  });

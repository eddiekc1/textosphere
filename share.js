const statusElement = document.querySelector("#shareStatus");
const viewElement = document.querySelector("#shareView");

const typeMeta = {
  text: { label: "テキスト", glyph: "T", color: "#5ee7ff" },
  image: { label: "画像", glyph: "I", color: "#ffd166" },
  music: { label: "音楽", glyph: "M", color: "#7effb2" },
  video: { label: "映像", glyph: "V", color: "#ff5ea8" },
  private: { label: "非公開", glyph: "-", color: "#8ea0b8" },
};
const linkPreviewCache = new Map();

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getToken() {
  const pathMatch = window.location.pathname.match(/\/share\/([^/]+)/);
  if (pathMatch) return decodeURIComponent(pathMatch[1]);
  return new URLSearchParams(window.location.search).get("token") || "";
}

function resolveMediaUrl(url) {
  if (!url) return "";
  try {
    return new URL(url, window.location.origin).href;
  } catch (error) {
    return "";
  }
}

function getSafeHttpUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : "";
  } catch (error) {
    return "";
  }
}

function linkifyText(value) {
  const text = String(value || "");
  const urlPattern = /https?:\/\/[^\s<>"']+/g;
  let result = "";
  let lastIndex = 0;

  for (const match of text.matchAll(urlPattern)) {
    const rawUrl = match[0];
    const start = match.index;
    const trailing = rawUrl.match(/[.,!?;:、。]*$/u)?.[0] || "";
    const url = rawUrl.slice(0, rawUrl.length - trailing.length);
    const href = getSafeHttpUrl(url);
    if (!href) continue;
    result += escapeHtml(text.slice(lastIndex, start));
    result += `<a class="share-text-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a>`;
    result += escapeHtml(trailing);
    lastIndex = start + rawUrl.length;
  }

  result += escapeHtml(text.slice(lastIndex));
  return result;
}

function getTextUrls(value) {
  return Array.from(String(value || "").matchAll(/https?:\/\/[^\s<>"']+/g), (match) =>
    match[0].replace(/[.,!?;:、。]*$/u, ""),
  ).filter(getSafeHttpUrl);
}

function getYouTubeVideoId(rawUrl) {
  try {
    const url = new URL(rawUrl);
    const host = url.hostname.replace(/^www\./, "").replace(/^m\./, "");
    const pathParts = url.pathname.split("/").filter(Boolean);
    let videoId = "";
    if (host === "youtu.be") {
      videoId = pathParts[0] || "";
    } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v") || "";
      } else if (["embed", "shorts", "live"].includes(pathParts[0])) {
        videoId = pathParts[1] || "";
      }
    }
    return /^[A-Za-z0-9_-]{11}$/.test(videoId) ? videoId : "";
  } catch (error) {
    return "";
  }
}

function renderYouTubeEmbeds(value) {
  const videoIds = [...new Set(getTextUrls(value).map(getYouTubeVideoId).filter(Boolean))];
  if (videoIds.length === 0) return "";
  return `
    <div class="share-youtube-list">
      ${videoIds
        .map(
          (videoId) => `
            <iframe
              class="share-youtube-embed"
              src="https://www.youtube.com/embed/${videoId}"
              title="YouTube video player"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          `,
        )
        .join("")}
    </div>
  `;
}

function getFirstTextUrl(value) {
  return getTextUrls(value)[0] || "";
}

function renderLinkPreviewCard(value) {
  const url = getFirstTextUrl(value);
  if (!url) return "";
  let siteName = "link";
  try {
    siteName = new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {}
  return `
    <a class="share-link-preview-card is-loading" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" data-link-preview-url="${escapeHtml(url)}">
      <span class="share-link-preview-image" aria-hidden="true"></span>
      <span class="share-link-preview-main">
        <span class="share-link-preview-site">${escapeHtml(siteName)}</span>
        <span class="share-link-preview-title">リンクプレビューを取得中</span>
        <span class="share-link-preview-description">${escapeHtml(url)}</span>
      </span>
    </a>
  `;
}

function renderLinkPreviewContent(preview) {
  const imageUrl = getSafeHttpUrl(preview.image);
  const finalUrl = getSafeHttpUrl(preview.finalUrl || preview.url);
  const title = String(preview.title || finalUrl || "リンク").trim();
  const description = String(preview.description || "").trim();
  const siteName = String(preview.siteName || (finalUrl ? new URL(finalUrl).hostname.replace(/^www\./, "") : "")).trim();
  return `
    <span class="share-link-preview-image ${imageUrl ? "has-image" : ""}" aria-hidden="true">
      ${imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="" loading="lazy" />` : ""}
    </span>
    <span class="share-link-preview-main">
      ${siteName ? `<span class="share-link-preview-site">${escapeHtml(siteName)}</span>` : ""}
      <span class="share-link-preview-title">${escapeHtml(title)}</span>
      ${description ? `<span class="share-link-preview-description">${escapeHtml(description)}</span>` : ""}
    </span>
  `;
}

function renderLinkPreviewFallback(url) {
  let siteName = "link";
  try {
    siteName = new URL(url).hostname.replace(/^www\./, "");
  } catch (error) {}
  return `
    <span class="share-link-preview-image" aria-hidden="true"></span>
    <span class="share-link-preview-main">
      <span class="share-link-preview-site">${escapeHtml(siteName)}</span>
      <span class="share-link-preview-title">${escapeHtml(url)}</span>
    </span>
  `;
}

async function loadLinkPreviews(container) {
  const cards = Array.from(container.querySelectorAll(".share-link-preview-card[data-link-preview-url]"));
  await Promise.all(
    cards.map(async (card) => {
      const url = card.dataset.linkPreviewUrl;
      if (!url) return;
      try {
        if (!linkPreviewCache.has(url)) {
          linkPreviewCache.set(
            url,
            fetch(`/api/share-link-preview?url=${encodeURIComponent(url)}`).then((response) =>
              response.ok ? response.json() : null,
            ),
          );
        }
        const preview = await linkPreviewCache.get(url);
        if (!preview || !card.isConnected) {
          if (!card.isConnected) return;
          card.classList.remove("is-loading");
          card.innerHTML = renderLinkPreviewFallback(url);
          return;
        }
        const href = getSafeHttpUrl(preview.finalUrl || preview.url);
        if (href) card.href = href;
        card.classList.remove("is-loading");
        card.innerHTML = renderLinkPreviewContent(preview);
      } catch (error) {
        linkPreviewCache.delete(url);
        if (!card.isConnected) return;
        card.classList.remove("is-loading");
        card.innerHTML = renderLinkPreviewFallback(url);
      }
    }),
  );
}

function renderShareBody(value) {
  return `
    <div class="share-node-body">${linkifyText(value)}</div>
    ${renderLinkPreviewCard(value)}
    ${renderYouTubeEmbeds(value)}
  `;
}

function truncateText(value, max = 150) {
  const text = String(value || "").trim();
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

function renderOwner(owner) {
  if (!owner) return "";
  const name = owner.userName || owner.userId || "unknown";
  const icon = resolveMediaUrl(owner.profileIcon);
  return `
    <div class="share-owner">
      <span class="share-avatar">${icon ? `<img src="${escapeHtml(icon)}" alt="" />` : escapeHtml(name.slice(0, 1).toUpperCase())}</span>
      <span>${escapeHtml(name)}</span>
    </div>
  `;
}

function renderMedia(node) {
  const url = resolveMediaUrl(node.mediaUrl);
  if (node.isPrivate) return "";
  if (node.type === "image") {
    const items = Array.isArray(node.mediaItems) && node.mediaItems.length > 0
      ? node.mediaItems
      : url
        ? [{ url, name: node.mediaName }]
        : [];
    if (items.length === 0) return "";
    return `
      <div class="share-media-list">
        ${items
          .map(
            (item, index) => `
              <figure class="share-media">
                <img src="${escapeHtml(resolveMediaUrl(item.url))}" alt="${escapeHtml(
                  items.length > 1 ? `${node.title} ${index + 1}` : node.title,
                )}" />
                ${items.length > 1 ? `<figcaption>${index + 1} / ${items.length}</figcaption>` : ""}
              </figure>
            `,
          )
          .join("")}
      </div>
    `;
  }
  if (!url) return "";
  if (node.type === "music") {
    return `<div class="share-media"><audio controls src="${escapeHtml(url)}"></audio></div>`;
  }
  if (node.type === "video") {
    return `<div class="share-media"><video controls src="${escapeHtml(url)}"></video></div>`;
  }
  return "";
}

function renderNode(node, { main = false } = {}) {
  const meta = typeMeta[node.type] || typeMeta.text;
  const privateCopy = node.isPrivate ? "この光点は共有されていません。" : "";
  return `
    <article class="share-node${main ? " is-main" : ""}${node.isPrivate ? " is-private" : ""}" style="--node-color:${meta.color}">
      <div class="share-node-head">
        <span class="share-type-dot" aria-hidden="true">${escapeHtml(meta.glyph)}</span>
        <div>
          <div class="share-kind">${escapeHtml(meta.label)}</div>
          <h2>${escapeHtml(node.title || "Untitled")}</h2>
        </div>
      </div>
      ${renderOwner(node.ownerUser)}
      ${renderMedia(node)}
      ${node.body ? renderShareBody(node.body) : ""}
      ${privateCopy ? `<div class="share-node-body">${escapeHtml(privateCopy)}</div>` : ""}
    </article>
  `;
}

function renderRelation(item) {
  const node = item.node || { type: "private", title: "非公開の光点", isPrivate: true };
  const meta = typeMeta[node.type] || typeMeta.private;
  const comment = item.link?.comment || "";
  return `
    <article class="share-relation-card${node.isPrivate ? " is-private" : ""}" style="--node-color:${meta.color}">
      <div class="share-relation-title">
        <span class="share-type-dot" aria-hidden="true">${escapeHtml(meta.glyph)}</span>
        <span>${escapeHtml(node.title || "非公開の光点")}</span>
      </div>
      <div class="share-relation-body">${escapeHtml(node.isPrivate ? "この光点は共有されていません。" : truncateText(node.body || node.mediaName || ""))}</div>
      ${comment ? `<div class="share-link-comment">${escapeHtml(comment)}</div>` : ""}
    </article>
  `;
}

function renderColumn(title, items, className) {
  if (!items.length) {
    return `<aside class="share-column ${className}"><div class="share-empty-column"><p class="share-empty-text">${escapeHtml(title)}はありません</p></div></aside>`;
  }
  return `
    <aside class="share-column ${className}">
      <div class="share-column-heading"><span>${escapeHtml(title)}</span><strong>${items.length}</strong></div>
      ${items.map(renderRelation).join("")}
    </aside>
  `;
}

function renderShare(data) {
  const mode = data.share?.mode || "context";
  const contextMode = mode === "context";
  viewElement.innerHTML = `
    <section class="share-hero">
      <div class="share-kind">${contextMode ? "Shared with context" : "Shared node"}</div>
      <h1>${escapeHtml(data.node.title || "Untitled")}</h1>
    </section>
    <section class="share-network${contextMode ? "" : " share-single"}">
      ${contextMode ? renderColumn("ソース", data.sources || [], "share-column-source") : ""}
      ${renderNode(data.node, { main: true })}
      ${contextMode ? renderColumn("ターゲット", data.targets || [], "share-column-target") : ""}
    </section>
  `;
  statusElement.hidden = true;
  viewElement.hidden = false;
  loadLinkPreviews(viewElement);
  document.title = `${data.node.title || "Shared node"} - Textosphere`;
}

async function loadShare() {
  const token = getToken();
  if (!token) {
    statusElement.textContent = "共有リンクが見つかりません。";
    return;
  }
  try {
    const response = await fetch(`/api/shares/${encodeURIComponent(token)}`);
    if (!response.ok) {
      throw new Error("Share not found");
    }
    renderShare(await response.json());
  } catch (error) {
    statusElement.textContent = "この共有リンクは無効化されたか、共有不可になっています。";
  }
}

loadShare();

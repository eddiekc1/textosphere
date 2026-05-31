const nodesLayer = document.querySelector("#nodesLayer");
const appShell = document.querySelector("#appShell");
const authShell = document.querySelector("#authShell");
const authMessage = document.querySelector("#authMessage");
const loginEmailInput = document.querySelector("#loginEmailInput");
const loginPasswordInput = document.querySelector("#loginPasswordInput");
const loginButton = document.querySelector("#loginButton");
const signupEmailInput = document.querySelector("#signupEmailInput");
const signupUserNameInput = document.querySelector("#signupUserNameInput");
const signupUserIdInput = document.querySelector("#signupUserIdInput");
const signupPasswordInput = document.querySelector("#signupPasswordInput");
const signupBirthDateInput = document.querySelector("#signupBirthDateInput");
const signupProfileIconInput = document.querySelector("#signupProfileIconInput");
const signupBioInput = document.querySelector("#signupBioInput");
const signupButton = document.querySelector("#signupButton");
const currentUserIcon = document.querySelector("#currentUserIcon");
const currentUserId = document.querySelector("#currentUserId");
const currentUserBio = document.querySelector("#currentUserBio");
const userSummaryButton = document.querySelector("#userSummaryButton");
const linkCommentTooltip = document.querySelector("#linkCommentTooltip");
const canvas = document.querySelector("#threadCanvas");
const ctx = canvas.getContext("2d");
const typeInput = document.querySelector("#typeInput");
const titleInput = document.querySelector("#titleInput");
const bodyInput = document.querySelector("#bodyInput");
const durationInput = document.querySelector("#durationInput");
const durationField = document.querySelector("#durationField");
const mediaFileInput = document.querySelector("#mediaFileInput");
const textField = document.querySelector("#textField");
const mediaField = document.querySelector("#mediaField");
const mediaDropZone = document.querySelector("#mediaDropZone");
const mediaDropStatus = document.querySelector("#mediaDropStatus");
const clearDroppedMediaButton = document.querySelector("#clearDroppedMediaButton");
const clipboardImagePanel = document.querySelector("#clipboardImagePanel");
const clipboardImagePreview = document.querySelector("#clipboardImagePreview");
const clipboardImageStatus = document.querySelector("#clipboardImageStatus");
const clearClipboardImageButton = document.querySelector("#clearClipboardImageButton");
const addButton = document.querySelector("#addButton");
const clusterInput = document.querySelector("#clusterInput");
const clusterToggle = document.querySelector("#clusterToggle");
const clusterPanel = document.querySelector("#clusterPanel");
const clusterNameInput = document.querySelector("#clusterNameInput");
const clusterDescriptionInput = document.querySelector("#clusterDescriptionInput");
const addClusterButton = document.querySelector("#addClusterButton");
const shuffleButton = document.querySelector("#shuffleButton");
const clearLinksButton = document.querySelector("#clearLinksButton");
const nodeCount = document.querySelector("#nodeCount");
const nodeList = document.querySelector("#nodeList");
const nodeListTabs = document.querySelectorAll(".node-list-tab");
const ownNodeCount = document.querySelector("#ownNodeCount");
const followedNodeCount = document.querySelector("#followedNodeCount");
const favoriteNodeCount = document.querySelector("#favoriteNodeCount");
const searchTypeInput = document.querySelector("#searchTypeInput");
const searchWordInput = document.querySelector("#searchWordInput");
const searchSortInput = document.querySelector("#searchSortInput");
const searchOrderInput = document.querySelector("#searchOrderInput");
const searchResultCount = document.querySelector("#searchResultCount");
const searchResults = document.querySelector("#searchResults");
const searchSidebar = document.querySelector("#searchSidebar");
const searchSidebarToggle = document.querySelector("#searchSidebarToggle");
const clusterCount = document.querySelector("#clusterCount");
const clusterList = document.querySelector("#clusterList");
const clusterListTabs = document.querySelectorAll(".cluster-list-tab");
const ownClusterCount = document.querySelector("#ownClusterCount");
const followedClusterCount = document.querySelector("#followedClusterCount");
const composerToggle = document.querySelector("#composerToggle");
const composerPanel = document.querySelector("#composerPanel");
const detailDialog = document.querySelector("#detailDialog");
const closeDialogButton = document.querySelector("#closeDialogButton");
const detailType = document.querySelector("#detailType");
const detailTitle = document.querySelector("#detailTitle");
const detailContent = document.querySelector("#detailContent");
const connectionDialog = document.querySelector("#connectionDialog");
const closeConnectionDialogButton = document.querySelector("#closeConnectionDialogButton");
const connectionType = document.querySelector("#connectionType");
const connectionTitle = document.querySelector("#connectionTitle");
const connectionSummary = document.querySelector("#connectionSummary");
const connectionCommentInput = document.querySelector("#connectionCommentInput");
const cancelConnectionButton = document.querySelector("#cancelConnectionButton");
const disconnectConnectionButton = document.querySelector("#disconnectConnectionButton");
const confirmConnectionButton = document.querySelector("#confirmConnectionButton");
const profileDialog = document.querySelector("#profileDialog");
const closeProfileDialogButton = document.querySelector("#closeProfileDialogButton");
const profileUserNameInput = document.querySelector("#profileUserNameInput");
const profileUserIdInput = document.querySelector("#profileUserIdInput");
const profilePasswordInput = document.querySelector("#profilePasswordInput");
const profileBirthDateInput = document.querySelector("#profileBirthDateInput");
const profileIconInput = document.querySelector("#profileIconInput");
const profileBioInput = document.querySelector("#profileBioInput");
const profileMessage = document.querySelector("#profileMessage");
const cancelProfileButton = document.querySelector("#cancelProfileButton");
const saveProfileButton = document.querySelector("#saveProfileButton");
const userDetailDialog = document.querySelector("#userDetailDialog");
const closeUserDetailDialogButton = document.querySelector("#closeUserDetailDialogButton");
const userDetailContent = document.querySelector("#userDetailContent");
const clusterNodesDialog = document.querySelector("#clusterNodesDialog");
const closeClusterNodesDialogButton = document.querySelector("#closeClusterNodesDialogButton");
const clusterNodesType = document.querySelector("#clusterNodesType");
const clusterNodesTitle = document.querySelector("#clusterNodesTitle");
const clusterNodesMeta = document.querySelector("#clusterNodesMeta");
const clusterNodesContent = document.querySelector("#clusterNodesContent");

const API_BASE = window.location.protocol === "file:" ? "http://localhost:3000/api" : "/api";
const PUBLIC_CLUSTER_ID = "00000000-0000-4000-8000-000000000001";
const INPUT_LIMITS = {
  userName: 25,
  userId: 25,
  password: 25,
  clusterName: 100,
  nodeTitle: 300,
  longText: 4000,
  clusterDescription: 1000,
  linkComment: 2000,
};
const MAX_UPLOAD_BYTES = 30 * 1024 * 1024;
const MAX_UPLOAD_MB = 30;

const labels = {
  text: "\u30c6\u30ad\u30b9\u30c8",
  image: "\u753b\u50cf",
  music: "\u97f3\u697d",
  video: "\u6620\u50cf",
  open: "\u3092\u958b\u304f",
  startChar: "\u958b\u59cb\u6587\u5b57",
  endChar: "\u7d42\u4e86\u6587\u5b57",
  startSecond: "\u958b\u59cb\u79d2",
  endSecond: "\u7d42\u4e86\u79d2",
  saveSelection: "\u7bc4\u56f2\u3092\u4fdd\u5b58",
};

const typeMeta = {
  text: { label: labels.text, glyph: "T", color: "#5ee7ff" },
  image: { label: labels.image, glyph: "I", color: "#ffd166" },
  music: { label: labels.music, glyph: "M", color: "#7effb2" },
  video: { label: labels.video, glyph: "V", color: "#ff5ea8" },
};

const NODE_LIST_PAGE_SIZE = 20;
const SEARCH_RESULT_PAGE_SIZE = 20;
const MIN_UNIVERSE_ZOOM = 0.45;
const MAX_UNIVERSE_ZOOM = 2.6;
const NODE_POSITION_REFRESH_MS = 20_000;
const NODE_POSITION_ANIMATION_MS = 1_800;
const NODE_DRAG_MIN_X = -220;
const NODE_DRAG_MAX_X = 320;
const NODE_DRAG_MIN_Y = -220;
const NODE_DRAG_MAX_Y = 320;
const CONNECTION_DROP_BASE_THRESHOLD = 96;
const CONNECTION_DROP_MIN_THRESHOLD = 36;

function createClientId() {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  if (typeof globalThis.crypto?.getRandomValues === "function") {
    const bytes = new Uint8Array(16);
    globalThis.crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0"));
    return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex
      .slice(8, 10)
      .join("")}-${hex.slice(10, 16).join("")}`;
  }

  return `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

let apiAvailable = false;
let selectedNodeId = null;
let activeDetailNodeId = null;
let activeSelectionSyncCleanup = null;
let activeNodeDrag = null;
let activeUniversePan = null;
let pendingConnection = null;
let pendingConnectionDelete = null;
let suppressNodeClick = false;
let nodeListVisibleCount = NODE_LIST_PAGE_SIZE;
let searchResultVisibleCount = SEARCH_RESULT_PAGE_SIZE;
let activeNodeListMode = ["followed", "favorites"].includes(localStorage.getItem("textosphereNodeListMode"))
  ? localStorage.getItem("textosphereNodeListMode")
  : "own";
let activeClusterListMode = localStorage.getItem("textosphereClusterListMode") === "followed" ? "followed" : "own";
let universePan = { x: 0, y: 0 };
let universeZoom = 1;
let viewportPositionedNodeIds = new Set();
let nodePositionRefreshTimer = null;
let nodePositionAnimationFrame = null;
let authToken = localStorage.getItem("textosphereToken") || "";
let currentUser = null;
let clusters = [
  {
    id: PUBLIC_CLUSTER_ID,
    name: "Public",
    description: "Default public cluster",
    createdAt: new Date(0).toISOString(),
  },
];
let clusterDirectory = [...clusters];
let followedClusterIds = new Set();
let nodes = [
  {
    id: createClientId(),
    type: "text",
    title: "Yoake mae no memo",
    body: "Machi no hikari ga kiekiranai uchini, dareka no kotoba ga betsu no kyoku no rhythm to kasanatte, mada namae no nai kaiwa ga hajimaru.",
    duration: null,
    selection: { start: 16, end: 42 },
    x: 28,
    y: 32,
  },
  {
    id: createClientId(),
    type: "music",
    title: "Pulse in Blue",
    body: "",
    duration: 214,
    selection: { start: 64, end: 118 },
    x: 62,
    y: 43,
  },
  {
    id: createClientId(),
    type: "video",
    title: "Madobe no 8 seconds",
    body: "",
    duration: 86,
    selection: { start: 12, end: 28 },
    x: 45,
    y: 70,
  },
];

let links = [
  { source: nodes[0].id, target: nodes[1].id, comment: "" },
  { source: nodes[1].id, target: nodes[2].id, comment: "" },
];
let hiddenLinks = null;
let linkCommentHitboxes = [];
const musicArtworkCache = new Map();
const IMAGE_CLIPBOARD_TYPES = new Set(["image/png", "image/jpeg", "image/gif"]);
const IMAGE_CLIPBOARD_EXTENSIONS = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/gif": ".gif",
};
let pastedComposerImage = { file: null, previewUrl: "" };
let droppedComposerMedia = { file: null };

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function getClipboardImageFile(event) {
  const items = Array.from(event.clipboardData?.items || []);
  const imageItem = items.find((item) => item.kind === "file" && IMAGE_CLIPBOARD_TYPES.has(item.type));
  if (!imageItem) return null;

  const blob = imageItem.getAsFile();
  if (!blob) return null;

  const extension = IMAGE_CLIPBOARD_EXTENSIONS[blob.type] || ".png";
  return new File([blob], `clipboard-image-${Date.now()}${extension}`, { type: blob.type });
}

function isFileWithinUploadLimit(file) {
  return !file || file.size <= MAX_UPLOAD_BYTES;
}

function getUploadLimitMessage() {
  return `ファイルサイズは${MAX_UPLOAD_MB}MB以下にしてください`;
}

function clearPastedImage(state, previewElement, statusElement, clearButtonElement, panelElement) {
  if (state.previewUrl) {
    URL.revokeObjectURL(state.previewUrl);
  }
  state.file = null;
  state.previewUrl = "";
  if (previewElement) {
    previewElement.src = "";
    previewElement.hidden = true;
  }
  if (statusElement) {
    statusElement.textContent = "ここをクリックして Ctrl+V で貼り付けできます";
  }
  if (clearButtonElement) {
    clearButtonElement.hidden = true;
  }
  if (panelElement) {
    panelElement.classList.remove("has-image");
  }
}

function setPastedImage(state, file, previewElement, statusElement, clearButtonElement, panelElement, fileInputElement) {
  clearPastedImage(state, previewElement, statusElement, clearButtonElement, panelElement);
  state.file = file;
  state.previewUrl = URL.createObjectURL(file);
  if (fileInputElement) {
    fileInputElement.value = "";
  }
  if (previewElement) {
    previewElement.src = state.previewUrl;
    previewElement.hidden = false;
  }
  if (statusElement) {
    statusElement.textContent = `${file.name} を貼り付けました`;
  }
  if (clearButtonElement) {
    clearButtonElement.hidden = false;
  }
  if (panelElement) {
    panelElement.classList.add("has-image");
  }
}

function handleImagePaste(event, state, previewElement, statusElement, clearButtonElement, panelElement, fileInputElement) {
  const file = getClipboardImageFile(event);
  if (!file) return false;
  event.preventDefault();
  if (!isFileWithinUploadLimit(file)) {
    clearPastedImage(state, previewElement, statusElement, clearButtonElement, panelElement);
    if (statusElement) {
      statusElement.textContent = getUploadLimitMessage();
    }
    return false;
  }
  setPastedImage(state, file, previewElement, statusElement, clearButtonElement, panelElement, fileInputElement);
  return true;
}

function updateImagePastePanel(type, panelElement, state, previewElement, statusElement, clearButtonElement) {
  if (!panelElement) return;
  const isImage = type === "image";
  panelElement.classList.toggle("is-hidden", !isImage);
  if (!isImage) {
    clearPastedImage(state, previewElement, statusElement, clearButtonElement, panelElement);
  }
}

function getMediaDropMessage(type) {
  if (type === "image") return "PNG/JPG/GIFをここへドラッグ＆ドロップできます";
  if (type === "music") return "MP3をここへドラッグ＆ドロップできます";
  if (type === "video") return "MP4をここへドラッグ＆ドロップできます";
  return "ここへファイルをドラッグ＆ドロップできます";
}

function getMediaFileExtension(file) {
  return String(file?.name || "").toLowerCase().match(/\.[^.]+$/)?.[0] || "";
}

function isMediaFileAcceptedForType(type, file) {
  const extension = getMediaFileExtension(file);
  if (type === "image") {
    return IMAGE_CLIPBOARD_TYPES.has(file.type) || [".png", ".jpg", ".jpeg", ".gif"].includes(extension);
  }
  if (type === "music") {
    return ["audio/mpeg", "audio/mp3"].includes(file.type) || extension === ".mp3";
  }
  if (type === "video") {
    return file.type === "video/mp4" || extension === ".mp4";
  }
  return false;
}

function clearDroppedMedia(state, statusElement, clearButtonElement, dropZoneElement, type) {
  state.file = null;
  if (statusElement) {
    statusElement.textContent = getMediaDropMessage(type);
  }
  if (clearButtonElement) {
    clearButtonElement.hidden = true;
  }
  if (dropZoneElement) {
    dropZoneElement.classList.remove("has-file", "is-invalid", "is-dragover");
  }
}

function setDroppedMedia(state, file, statusElement, clearButtonElement, dropZoneElement, fileInputElement) {
  state.file = file;
  if (fileInputElement) {
    fileInputElement.value = "";
  }
  if (statusElement) {
    statusElement.textContent = `${file.name} をドロップしました`;
  }
  if (clearButtonElement) {
    clearButtonElement.hidden = false;
  }
  if (dropZoneElement) {
    dropZoneElement.classList.add("has-file");
    dropZoneElement.classList.remove("is-invalid", "is-dragover");
  }
}

function handleMediaFileDrop(
  event,
  type,
  state,
  statusElement,
  clearButtonElement,
  dropZoneElement,
  fileInputElement,
  onAccepted,
) {
  event.preventDefault();
  dropZoneElement.classList.remove("is-dragover");
  const file = event.dataTransfer?.files?.[0] || null;
  if (!file) return false;

  if (!isMediaFileAcceptedForType(type, file)) {
    clearDroppedMedia(state, statusElement, clearButtonElement, dropZoneElement, type);
    dropZoneElement.classList.add("is-invalid");
    statusElement.textContent = "このタイプでは使えないファイルです";
    return false;
  }

  if (!isFileWithinUploadLimit(file)) {
    clearDroppedMedia(state, statusElement, clearButtonElement, dropZoneElement, type);
    dropZoneElement.classList.add("is-invalid");
    statusElement.textContent = getUploadLimitMessage();
    return false;
  }

  setDroppedMedia(state, file, statusElement, clearButtonElement, dropZoneElement, fileInputElement);
  onAccepted?.(file);
  return true;
}

function bindMediaDropZone({
  dropZoneElement,
  statusElement,
  clearButtonElement,
  state,
  fileInputElement,
  getType,
  onAccepted,
  onClear,
}) {
  dropZoneElement.addEventListener("dragenter", (event) => {
    event.preventDefault();
    dropZoneElement.classList.add("is-dragover");
    dropZoneElement.classList.remove("is-invalid");
  });
  dropZoneElement.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    dropZoneElement.classList.add("is-dragover");
    dropZoneElement.classList.remove("is-invalid");
  });
  dropZoneElement.addEventListener("dragleave", (event) => {
    if (!dropZoneElement.contains(event.relatedTarget)) {
      dropZoneElement.classList.remove("is-dragover");
    }
  });
  dropZoneElement.addEventListener("drop", (event) => {
    handleMediaFileDrop(
      event,
      getType(),
      state,
      statusElement,
      clearButtonElement,
      dropZoneElement,
      fileInputElement,
      onAccepted,
    );
  });
  clearButtonElement.addEventListener("click", () => {
    clearDroppedMedia(state, statusElement, clearButtonElement, dropZoneElement, getType());
    onClear?.();
  });
}

function updateMediaDropZone(type, dropZoneElement, state, statusElement, clearButtonElement) {
  if (!dropZoneElement) return;
  const isText = type === "text";
  dropZoneElement.classList.toggle("is-hidden", isText);
  if (isText || (state.file && !isMediaFileAcceptedForType(type, state.file))) {
    clearDroppedMedia(state, statusElement, clearButtonElement, dropZoneElement, type);
  } else if (!state.file && statusElement) {
    statusElement.textContent = getMediaDropMessage(type);
  }
}

function getMediaFileForType(type, fileInputElement, pastedImageState, droppedMediaState = null) {
  if (type === "text") return null;
  const selectedFile = fileInputElement.files ? fileInputElement.files[0] : null;
  const file = selectedFile || droppedMediaState?.file || (type === "image" ? pastedImageState.file : null);
  if (!isFileWithinUploadLimit(file)) {
    window.alert(getUploadLimitMessage());
    return null;
  }
  return file;
}

function hasOversizedMediaFile(type, fileInputElement, pastedImageState, droppedMediaState = null) {
  if (type === "text") return false;
  const selectedFile = fileInputElement.files ? fileInputElement.files[0] : null;
  const file = selectedFile || droppedMediaState?.file || (type === "image" ? pastedImageState.file : null);
  return !!file && !isFileWithinUploadLimit(file);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSafeResourceUrl(value, options = {}) {
  const {
    allowRelative = true,
    allowBlob = true,
    allowDataImage = false,
    allowHttp = true,
    uploadsOnly = false,
  } = options;
  const rawUrl = String(value || "").trim();
  if (!rawUrl || /[\u0000-\u001f\u007f]/.test(rawUrl)) return "";

  if (rawUrl.startsWith("/")) {
    if (!allowRelative || (uploadsOnly && !rawUrl.startsWith("/uploads/"))) return "";
    if (rawUrl.includes("\\") || rawUrl.split("/").includes("..")) return "";
    return window.location.protocol === "file:" ? `http://localhost:3000${rawUrl}` : rawUrl;
  }

  if (rawUrl.startsWith("blob:")) {
    return allowBlob ? rawUrl : "";
  }

  if (rawUrl.startsWith("data:")) {
    return allowDataImage && /^data:image\/(?:png|jpeg|gif|webp);base64,[A-Za-z0-9+/=]+$/i.test(rawUrl) ? rawUrl : "";
  }

  try {
    const url = new URL(rawUrl);
    return allowHttp && (url.protocol === "https:" || url.protocol === "http:") ? url.href : "";
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
    const trailing = rawUrl.match(/[.,!?;:、。)]*$/)?.[0] || "";
    const url = rawUrl.slice(0, rawUrl.length - trailing.length);
    if (!url) continue;
    const href = getSafeResourceUrl(url, { allowRelative: false, allowBlob: false });
    if (!href) continue;

    result += escapeHtml(text.slice(lastIndex, start));
    result += `<a class="detail-text-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a>`;
    result += escapeHtml(trailing);
    lastIndex = start + rawUrl.length;
  }

  result += escapeHtml(text.slice(lastIndex));
  return result;
}

function getTextUrls(value) {
  return Array.from(String(value || "").matchAll(/https?:\/\/[^\s<>"']+/g), (match) =>
    match[0].replace(/[.,!?;:、。)]*$/u, ""),
  ).filter((url) => getSafeResourceUrl(url, { allowRelative: false, allowBlob: false }));
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
    <div class="youtube-embed-list">
      ${videoIds
        .map(
          (videoId) => `
            <iframe
              class="youtube-embed"
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

function renderDetailBody(value, attributes = "") {
  const attributeText = attributes ? ` ${attributes}` : "";
  return `
    <p class="detail-text"${attributeText}>${linkifyText(value)}</p>
    ${renderYouTubeEmbeds(value)}
  `;
}

function truncateComment(comment, length = 10) {
  return Array.from(String(comment || "")).slice(0, length).join("");
}

function truncateText(value, length) {
  return Array.from(String(value || "")).slice(0, length).join("");
}

function getUserName(user) {
  return String(user?.userName || user?.userId || "unknown");
}

function toDateInputValue(value) {
  return value ? String(value).slice(0, 10) : "";
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function resolveMediaUrl(url) {
  return getSafeResourceUrl(url, { allowDataImage: true });
}

async function apiRequest(path, options = {}) {
  const isFormData = typeof FormData !== "undefined" && options.body instanceof FormData;
  const headers = isFormData ? options.headers || {} : { "Content-Type": "application/json", ...(options.headers || {}) };
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }
  const response = await fetch(`${API_BASE}${path}`, {
    headers,
    ...options,
  });

  if (!response.ok) {
    if (response.status === 401) {
      clearAuth();
    }
    const error = new Error(`API ${response.status}`);
    error.status = response.status;
    throw error;
  }

  if (response.status === 204) return null;
  return response.json();
}

function setAuthMessage(message) {
  authMessage.textContent = message || "";
}

function clearInitialAuthFields() {
  loginPasswordInput.value = "";
  signupUserIdInput.value = "";
}

function setAuthenticatedView(user) {
  currentUser = user;
  authShell.hidden = true;
  appShell.hidden = false;
  startNodePositionRefresh();
  shuffleButton.hidden = Number(user.role) !== 1;
  currentUserId.textContent = getUserName(user);
  currentUserBio.textContent = user.bio || "自己紹介文は未設定です";
  currentUserIcon.replaceChildren();
  const profileIconUrl = resolveMediaUrl(user.profileIcon);
  if (profileIconUrl) {
    const image = document.createElement("img");
    image.src = profileIconUrl;
    image.alt = "";
    image.addEventListener("error", () => {
      currentUserIcon.textContent = getUserName(user).slice(0, 1).toUpperCase();
    });
    currentUserIcon.appendChild(image);
  } else {
    currentUserIcon.textContent = getUserName(user).slice(0, 1).toUpperCase();
  }
}

function showAuth() {
  currentUser = null;
  stopNodePositionRefresh();
  shuffleButton.hidden = true;
  appShell.hidden = true;
  authShell.hidden = false;
  clearInitialAuthFields();
  requestAnimationFrame(clearInitialAuthFields);
  setTimeout(clearInitialAuthFields, 120);
}

function clearAuth() {
  authToken = "";
  localStorage.removeItem("textosphereToken");
  if (profileDialog.open) {
    closeProfileDialog();
  }
  if (userDetailDialog.open) {
    closeUserDetailDialog();
  }
  showAuth();
}

function canManageOwner(ownerUserId) {
  if (!currentUser) return false;
  return Number(currentUser.role) <= 2 || ownerUserId === currentUser.id;
}

function canDeleteLink(ownerUserId) {
  if (!currentUser) return false;
  return Number(currentUser.role) === 1 || ownerUserId === currentUser.id;
}

function updateConnectionActionsLayout() {
  const visibleButtons = [cancelConnectionButton, disconnectConnectionButton, confirmConnectionButton].filter(
    (button) => !button.hidden,
  ).length;
  confirmConnectionButton.parentElement.style.gridTemplateColumns = `repeat(${Math.max(visibleButtons, 1)}, minmax(0, 1fr))`;
}

async function handleAuthResponse(response) {
  authToken = response.token;
  localStorage.setItem("textosphereToken", authToken);
  setAuthenticatedView(response.user);
  setAuthMessage("");
  await loadState();
}

async function login() {
  try {
    await handleAuthResponse(
      await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: loginEmailInput.value,
          password: loginPasswordInput.value,
        }),
      }),
    );
  } catch (error) {
    setAuthMessage("ログインできませんでした。メールアドレス、パスワード、ログイン許可を確認してください。");
  }
}

async function signup() {
  try {
    const formData = new FormData();
    formData.append("email", signupEmailInput.value);
    formData.append("userName", signupUserNameInput.value);
    formData.append("userId", signupUserIdInput.value);
    formData.append("password", signupPasswordInput.value);
    formData.append("birthDate", signupBirthDateInput.value || "");
    formData.append("bio", signupBioInput.value);
    if (signupProfileIconInput.files && signupProfileIconInput.files[0]) {
      if (!isFileWithinUploadLimit(signupProfileIconInput.files[0])) {
        setAuthMessage(getUploadLimitMessage());
        return;
      }
      formData.append("profileIconFile", signupProfileIconInput.files[0]);
    }

    await handleAuthResponse(
      await apiRequest("/auth/register", {
        method: "POST",
        body: formData,
      }),
    );
  } catch (error) {
    setAuthMessage("ユーザーを作成できませんでした。ユーザーID、メール、パスワード条件を確認してください。");
  }
}

function openProfileDialog() {
  if (!currentUser) return;
  profileUserNameInput.value = currentUser.userName || currentUser.userId || "";
  profileUserIdInput.value = currentUser.userId || "";
  profilePasswordInput.value = "";
  profileBirthDateInput.value = toDateInputValue(currentUser.birthDate);
  profileIconInput.value = "";
  profileBioInput.value = currentUser.bio || "";
  profileMessage.textContent = "";
  if (!profileDialog.open) {
    profileDialog.showModal();
  }
}

function closeProfileDialog() {
  if (profileDialog.open) {
    profileDialog.close();
  }
}

async function saveProfile() {
  if (!currentUser) return;

  const formData = new FormData();
  formData.append("userName", profileUserNameInput.value);
  formData.append("userId", profileUserIdInput.value);
  formData.append("password", profilePasswordInput.value);
  formData.append("birthDate", profileBirthDateInput.value || "");
  formData.append("bio", profileBioInput.value);
  if (profileIconInput.files && profileIconInput.files[0]) {
    if (!isFileWithinUploadLimit(profileIconInput.files[0])) {
      profileMessage.textContent = getUploadLimitMessage();
      return;
    }
    formData.append("profileIconFile", profileIconInput.files[0]);
  }

  try {
    saveProfileButton.disabled = true;
    profileMessage.textContent = "";
    const response = await apiRequest("/auth/me", {
      method: "PATCH",
      body: formData,
    });
    setAuthenticatedView(response.user);
    closeProfileDialog();
  } catch (error) {
    profileMessage.textContent = "プロフィールを保存できませんでした。ユーザーIDやパスワード条件を確認してください。";
  } finally {
    saveProfileButton.disabled = false;
  }
}

function normalizeNode(node) {
  const max = node.type === "text" ? (node.body || "").length : Number(node.duration || 0);
  const selection = node.selection || { start: 0, end: max };
  const selectionStart = clamp(Number(selection.start || 0), 0, max);
  return {
    ...node,
    ownerUserId: node.ownerUserId || null,
    clusterId: node.clusterId || getPublicClusterId(),
    body: node.body || "",
    duration: node.type === "text" ? null : Number(node.duration || 0),
    mediaUrl: node.mediaUrl || null,
    mediaMime: node.mediaMime || null,
    mediaName: node.mediaName || null,
    megaClusterIds: Array.isArray(node.megaClusterIds) ? node.megaClusterIds.map((id) => Number(id)) : [],
    likeCount: Number(node.likeCount || 0),
    likedByCurrentUser: Boolean(node.likedByCurrentUser),
    favoritedByCurrentUser: Boolean(node.favoritedByCurrentUser),
    createdAt: node.createdAt || new Date().toISOString(),
    selection: {
      start: selectionStart,
      end: clamp(Number(selection.end ?? max), selectionStart, max),
    },
    x: clamp(Number(node.x), NODE_DRAG_MIN_X, NODE_DRAG_MAX_X),
    y: clamp(Number(node.y), NODE_DRAG_MIN_Y, NODE_DRAG_MAX_Y),
  };
}

function normalizeCluster(cluster) {
  return {
    id: cluster.id || createClientId(),
    ownerUserId: cluster.ownerUserId || null,
    ownerUser: cluster.ownerUser || null,
    name: String(cluster.name || "").trim() || "Untitled cluster",
    description: cluster.description || "",
    createdAt: cluster.createdAt || new Date().toISOString(),
  };
}

function normalizeLink(link) {
  return {
    source: link.source,
    target: link.target,
    ownerUserId: link.ownerUserId || null,
    ownerUser: link.ownerUser || null,
    comment: link.comment || "",
    createdAt: link.createdAt || new Date().toISOString(),
  };
}

function ensurePublicCluster(items) {
  const normalized = items.map(normalizeCluster);
  if (normalized.some((cluster) => cluster.id === PUBLIC_CLUSTER_ID || cluster.name === "Public")) {
    return normalized;
  }
  return [
    {
      id: PUBLIC_CLUSTER_ID,
      ownerUserId: currentUser?.id || null,
      name: "Public",
      description: "Default public cluster",
      createdAt: new Date(0).toISOString(),
    },
    ...normalized,
  ];
}

function getPublicClusterId() {
  return (
    clusters.find((cluster) => cluster.name === "Public" && (!currentUser || cluster.ownerUserId === currentUser.id))?.id ||
    clusters.find((cluster) => cluster.name === "Public")?.id ||
    clusters[0]?.id ||
    PUBLIC_CLUSTER_ID
  );
}

async function loadState() {
  try {
    const state = await apiRequest("/state");
    if (state.currentUser) {
      setAuthenticatedView(state.currentUser);
    }
    nodeListVisibleCount = NODE_LIST_PAGE_SIZE;
    searchResultVisibleCount = SEARCH_RESULT_PAGE_SIZE;
    universePan = { x: 0, y: 0 };
    universeZoom = 1;
    viewportPositionedNodeIds = new Set();
    clusters = ensurePublicCluster(state.clusters || []);
    clusterDirectory = ensurePublicCluster(state.clusterDirectory || state.clusters || []);
    followedClusterIds = new Set(state.followedClusterIds || []);
    nodes = state.nodes.map(normalizeNode);
    links = state.links.map(normalizeLink);
    hiddenLinks = null;
    apiAvailable = true;
  } catch (error) {
    apiAvailable = false;
  }

  renderAll();
  requestAnimationFrame(resizeCanvas);
}

function getMapRect() {
  return nodesLayer.getBoundingClientRect();
}

function getNodeLayoutMetrics() {
  const rect = getMapRect();
  const width = rect.width || window.innerWidth || 960;
  const height = rect.height || window.innerHeight || 640;
  return {
    width,
    height,
    minDistance: clamp(Math.min(width, height) * 0.14, 92, 132),
  };
}

function separateNodePositions(sourceNodes, iterations = 90) {
  const metrics = getNodeLayoutMetrics();
  const positionedNodes = sourceNodes.map((node) => ({
    ...node,
    x: clamp(Number(node.x), 12, 88),
    y: clamp(Number(node.y), 16, 84),
  }));

  for (let iteration = 0; iteration < iterations; iteration += 1) {
    let moved = false;

    for (let firstIndex = 0; firstIndex < positionedNodes.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < positionedNodes.length; secondIndex += 1) {
        const first = positionedNodes[firstIndex];
        const second = positionedNodes[secondIndex];
        let dx = ((second.x - first.x) / 100) * metrics.width;
        let dy = ((second.y - first.y) / 100) * metrics.height;
        let distance = Math.hypot(dx, dy);

        if (distance >= metrics.minDistance) continue;

        if (distance < 0.001) {
          const angle = (firstIndex + secondIndex + 1) * 2.399963;
          dx = Math.cos(angle);
          dy = Math.sin(angle);
          distance = 1;
        }

        const push = (metrics.minDistance - distance) / 2 + 0.8;
        const pushX = (dx / distance) * push;
        const pushY = (dy / distance) * push;
        first.x = clamp(first.x - (pushX / metrics.width) * 100, 12, 88);
        first.y = clamp(first.y - (pushY / metrics.height) * 100, 16, 84);
        second.x = clamp(second.x + (pushX / metrics.width) * 100, 12, 88);
        second.y = clamp(second.y + (pushY / metrics.height) * 100, 16, 84);
        moved = true;
      }
    }

    if (!moved) break;
  }

  return positionedNodes;
}

function resizeCanvas() {
  const rect = getMapRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(rect.width * scale);
  canvas.height = Math.floor(rect.height * scale);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  renderNodes();
  drawLinks();
}

function getUniverseInitialNodeIds() {
  return new Set(getNodesByCreatedDesc(getVisibleScopeNodes()).slice(0, nodeListVisibleCount).map((node) => node.id));
}

function usesStoredNodePosition(node, initialNodeIds = getUniverseInitialNodeIds()) {
  return initialNodeIds.has(node.id) || viewportPositionedNodeIds.has(node.id);
}

function getStoredNodeWorldPoint(node, rect = getMapRect()) {
  return {
    x: (node.x / 100) * rect.width,
    y: (node.y / 100) * rect.height,
  };
}

function getLinkedNodeIds(id) {
  const linkedIds = [];
  getAllKnownLinks().forEach((link) => {
    if (link.source === id) linkedIds.push(link.target);
    if (link.target === id) linkedIds.push(link.source);
  });
  return linkedIds;
}

function getOutsideNodes(initialNodeIds) {
  return getNodesByCreatedDesc(nodes.filter((item) => !usesStoredNodePosition(item, initialNodeIds)));
}

function getStableNumber(id) {
  return Array.from(String(id || "")).reduce((total, char) => total + char.charCodeAt(0), 0);
}

function getOutsideFallbackWorldPoint(node, initialNodeIds, rect) {
  const outsideNodes = getOutsideNodes(initialNodeIds);
  const index = Math.max(0, outsideNodes.findIndex((item) => item.id === node.id));
  const angle = index * 2.399963229728653;
  const ring = Math.floor(index / 12);
  const radius = Math.max(rect.width, rect.height) * 0.88 + 160 + ring * 120;
  return {
    x: rect.width / 2 + Math.cos(angle) * radius,
    y: rect.height / 2 + Math.sin(angle) * radius,
  };
}

function getOutsideComponentNodeIds(startId, initialNodeIds) {
  const visited = new Set([startId]);
  const queue = [startId];

  while (queue.length > 0) {
    const currentId = queue.shift();
    getLinkedNodeIds(currentId).forEach((linkedId) => {
      if (visited.has(linkedId)) return;
      const linkedNode = getLinkedNode(linkedId);
      if (!linkedNode || usesStoredNodePosition(linkedNode, initialNodeIds)) return;
      visited.add(linkedId);
      queue.push(linkedId);
    });
  }

  return getOutsideNodes(initialNodeIds)
    .filter((item) => visited.has(item.id))
    .map((item) => item.id);
}

function getNearestStoredAnchorNode(startId, initialNodeIds) {
  const visited = new Set([startId]);
  const queue = [startId];

  while (queue.length > 0) {
    const currentId = queue.shift();
    for (const linkedId of getLinkedNodeIds(currentId)) {
      const linkedNode = getLinkedNode(linkedId);
      if (!linkedNode || visited.has(linkedId)) continue;
      if (usesStoredNodePosition(linkedNode, initialNodeIds)) return linkedNode;
      visited.add(linkedId);
      queue.push(linkedId);
    }
  }

  return null;
}

function getOutsideClusterCenterNearAnchor(anchorPoint, anchorId, rect) {
  const distances = [
    { side: "left", value: anchorPoint.x },
    { side: "right", value: rect.width - anchorPoint.x },
    { side: "top", value: anchorPoint.y },
    { side: "bottom", value: rect.height - anchorPoint.y },
  ].sort((first, second) => first.value - second.value);
  const side = distances[0].side;
  const jitter = (getStableNumber(anchorId) % 7) * 24 - 72;
  const gap = 130;

  if (side === "left") return { x: -gap, y: clamp(anchorPoint.y + jitter, -120, rect.height + 120) };
  if (side === "right") return { x: rect.width + gap, y: clamp(anchorPoint.y + jitter, -120, rect.height + 120) };
  if (side === "top") return { x: clamp(anchorPoint.x + jitter, -120, rect.width + 120), y: -gap };
  return { x: clamp(anchorPoint.x + jitter, -120, rect.width + 120), y: rect.height + gap };
}

function getClusteredOutsideWorldPoint(node, initialNodeIds, rect) {
  const componentIds = getOutsideComponentNodeIds(node.id, initialNodeIds);
  const componentIndex = Math.max(0, componentIds.indexOf(node.id));
  const anchorNode = getNearestStoredAnchorNode(node.id, initialNodeIds);
  const center = anchorNode
    ? getOutsideClusterCenterNearAnchor(getStoredNodeWorldPoint(anchorNode, rect), anchorNode.id, rect)
    : getOutsideFallbackWorldPoint(getLinkedNode(componentIds[0]) || node, initialNodeIds, rect);
  const ring = Math.floor(componentIndex / 8);
  const radius = componentIndex === 0 ? 0 : 70 + ring * 46;
  const angle = componentIndex * 2.399963229728653;

  return {
    x: center.x + Math.cos(angle) * radius,
    y: center.y + Math.sin(angle) * radius,
  };
}

function getNodeWorldPoint(node) {
  return getStoredNodeWorldPoint(node);
}

function materializeNodePositionForDrag(id) {
  return;
}

function getNodePoint(node) {
  const worldPoint = getNodeWorldPoint(node);
  return {
    x: worldPoint.x * universeZoom + universePan.x,
    y: worldPoint.y * universeZoom + universePan.y,
  };
}

function centerUniverseOnNode(id) {
  const node = nodes.find((item) => item.id === id);
  if (!node) return;

  const rect = getMapRect();
  const worldPoint = getNodeWorldPoint(node);
  universePan = {
    x: rect.width / 2 - worldPoint.x * universeZoom,
    y: rect.height / 2 - worldPoint.y * universeZoom,
  };
  renderNodes();
  drawLinks();
}

function getBezierPoint(start, controlA, controlB, end, t) {
  const inv = 1 - t;
  return {
    x: inv ** 3 * start.x + 3 * inv ** 2 * t * controlA.x + 3 * inv * t ** 2 * controlB.x + t ** 3 * end.x,
    y: inv ** 3 * start.y + 3 * inv ** 2 * t * controlA.y + 3 * inv * t ** 2 * controlB.y + t ** 3 * end.y,
  };
}

function getBezierTangent(start, controlA, controlB, end, t) {
  return {
    x: 3 * (1 - t) ** 2 * (controlA.x - start.x) + 6 * (1 - t) * t * (controlB.x - controlA.x) + 3 * t ** 2 * (end.x - controlB.x),
    y: 3 * (1 - t) ** 2 * (controlA.y - start.y) + 6 * (1 - t) * t * (controlB.y - controlA.y) + 3 * t ** 2 * (end.y - controlB.y),
  };
}

function getBezierPositionAtDistance(start, controlA, controlB, end, distance) {
  let traveled = 0;
  let previous = start;

  for (let index = 1; index <= 80; index += 1) {
    const t = index / 80;
    const current = getBezierPoint(start, controlA, controlB, end, t);
    const segment = Math.hypot(current.x - previous.x, current.y - previous.y);
    if (traveled + segment >= distance) {
      const ratio = segment === 0 ? 0 : (distance - traveled) / segment;
      return {
        t: (index - 1 + ratio) / 80,
        point: {
          x: previous.x + (current.x - previous.x) * ratio,
          y: previous.y + (current.y - previous.y) * ratio,
        },
      };
    }
    traveled += segment;
    previous = current;
  }

  return { t: 0.18, point: getBezierPoint(start, controlA, controlB, end, 0.18) };
}

function drawSourceArrow(source, from, controlFrom, controlTo, to) {
  const zoomedScale = clamp(universeZoom, 0.55, 2.4);
  const nodeRadius = (source.type === "text" ? 37 : 43) * zoomedScale;
  const arrowPosition = getBezierPositionAtDistance(from, controlFrom, controlTo, to, nodeRadius + 10 * zoomedScale);
  const tangent = getBezierTangent(from, controlFrom, controlTo, to, arrowPosition.t);
  let length = Math.hypot(tangent.x, tangent.y) || 1;
  const ux = tangent.x / length;
  const uy = tangent.y / length;
  const tipX = arrowPosition.point.x;
  const tipY = arrowPosition.point.y;
  const arrowLength = 14 * zoomedScale;
  const arrowWidth = 8 * zoomedScale;
  const baseX = tipX + ux * arrowLength;
  const baseY = tipY + uy * arrowLength;
  const perpX = -uy;
  const perpY = ux;

  ctx.beginPath();
  ctx.moveTo(tipX, tipY);
  ctx.lineTo(baseX + perpX * arrowWidth, baseY + perpY * arrowWidth);
  ctx.lineTo(baseX - perpX * arrowWidth, baseY - perpY * arrowWidth);
  ctx.closePath();
  ctx.fillStyle = typeMeta[source.type].color;
  ctx.shadowColor = typeMeta[source.type].color;
  ctx.shadowBlur = 12 * zoomedScale;
  ctx.fill();
  ctx.shadowBlur = 0;
}

function drawLinks() {
  const rect = getMapRect();
  ctx.clearRect(0, 0, rect.width, rect.height);
  ctx.lineCap = "round";
  ctx.textBaseline = "middle";
  linkCommentHitboxes = [];

  links.forEach((link) => {
    const source = nodes.find((node) => node.id === link.source);
    const target = nodes.find((node) => node.id === link.target);
    if (!source || !target) return;

    const from = getNodePoint(source);
    const to = getNodePoint(target);
    const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
    gradient.addColorStop(0, `${typeMeta[source.type].color}cc`);
    gradient.addColorStop(1, `${typeMeta[target.type].color}cc`);

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    const bend = Math.min(90, Math.hypot(to.x - from.x, to.y - from.y) * 0.22);
    const controlFrom = { x: from.x + bend, y: from.y - bend };
    const controlTo = { x: to.x - bend, y: to.y + bend };
    ctx.bezierCurveTo(controlFrom.x, controlFrom.y, controlTo.x, controlTo.y, to.x, to.y);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = Math.max(0.8, 1.4 * clamp(universeZoom, 0.6, 2.2));
    ctx.shadowColor = typeMeta[target.type].color;
    ctx.shadowBlur = 14 * clamp(universeZoom, 0.6, 2.2);
    ctx.stroke();
    ctx.shadowBlur = 0;
    drawSourceArrow(source, from, controlFrom, controlTo, to);

    const fullComment = String(link.comment || "");
    const comment = truncateComment(fullComment);
    if (comment) {
      const midX = (from.x + to.x) / 2 + 10;
      const midY = (from.y + to.y) / 2 - 10;
      ctx.font = "12px Inter, system-ui, sans-serif";
      const textWidth = ctx.measureText(comment).width;
      const box = {
        x: midX - 7,
        y: midY - 11,
        width: textWidth + 14,
        height: 22,
      };
      ctx.fillStyle = "rgba(1, 1, 4, 0.72)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(box.x, box.y, box.width, box.height, 8);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "rgba(246, 251, 255, 0.9)";
      ctx.shadowColor = typeMeta[target.type].color;
      ctx.shadowBlur = 10;
      ctx.fillText(comment, midX, midY);
      ctx.shadowBlur = 0;
      linkCommentHitboxes.push({
        ...box,
        source: link.source,
        target: link.target,
        ownerUserId: link.ownerUserId,
        ownerUser: link.ownerUser || null,
        comment: fullComment,
        createdAt: link.createdAt,
        isTruncated: Array.from(fullComment).length > Array.from(comment).length,
      });
    }
  });
}

function renderNodes() {
  nodesLayer.innerHTML = "";

  nodes.forEach((node) => {
    const isInVisibleScope = isNodeInVisibleScope(node);
    const point = getNodePoint(node);
    const button = document.createElement("button");
    button.className = `node ${isInVisibleScope ? getNodeGlowClass(node.id) : "node-glow-muted node-out-of-scope"}${node.id === selectedNodeId ? " is-selected" : ""}`;
    button.type = "button";
    button.style.left = `${point.x}px`;
    button.style.top = `${point.y}px`;
    button.style.setProperty("--node-color", isInVisibleScope ? typeMeta[node.type].color : "#3f4652");
    button.style.setProperty("--size", `${node.type === "text" ? 74 : 86}px`);
    button.style.setProperty("--node-scale", String(clamp(universeZoom, 0.45, 2.6)));
    button.setAttribute("aria-label", `${node.title}${labels.open}`);
    button.dataset.nodeId = node.id;
    button.innerHTML = `
      <span class="node-type">${typeMeta[node.type].glyph}</span>
      <span class="node-label">${escapeHtml(node.title)}</span>
    `;
    button.addEventListener("pointerdown", (event) => startNodeDrag(event, node.id, button));
    button.addEventListener("pointermove", moveNodeDrag);
    button.addEventListener("pointerup", finishNodeDrag);
    button.addEventListener("pointercancel", cancelNodeDrag);
    button.addEventListener("click", (event) => {
      if (suppressNodeClick) {
        event.preventDefault();
        suppressNodeClick = false;
        return;
      }
      selectedNodeId = node.id;
      updateSelectedNodeClass(node.id);
    });
    button.addEventListener("dblclick", () => openDetail(node.id));
    nodesLayer.appendChild(button);
  });
}

function getNodeRelationCount(id) {
  const relatedIds = new Set();
  getAllKnownLinks().forEach((link) => {
    if (link.source === id) {
      relatedIds.add(link.target);
    } else if (link.target === id) {
      relatedIds.add(link.source);
    }
  });
  return relatedIds.size;
}

function getNodeGlowClass(id) {
  const relationCount = getNodeRelationCount(id);
  if (relationCount === 0) return "node-glow-strong";
  if (relationCount <= 3) return "node-glow-normal";
  return "node-glow-dim";
}

function isNodeInVisibleScope(node) {
  if (!currentUser) return true;
  return node.ownerUserId === currentUser.id || followedClusterIds.has(node.clusterId) || node.favoritedByCurrentUser;
}

function getVisibleScopeNodes() {
  return nodes.filter(isNodeInVisibleScope);
}

function refreshScopeViews() {
  renderNodeList();
  renderSearchResults();
  renderClusterList();
  renderStats();
  renderNodes();
  drawLinks();
}

function hideLinkCommentTooltip() {
  linkCommentTooltip.classList.remove("is-visible");
  linkCommentTooltip.setAttribute("aria-hidden", "true");
}

function getLinkCommentHitbox(event) {
  const rect = getMapRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return linkCommentHitboxes.find((box) => {
    return x >= box.x && x <= box.x + box.width && y >= box.y && y <= box.y + box.height;
  });
}

function updateLinkCommentTooltip(event) {
  if (linkCommentHitboxes.length === 0) {
    hideLinkCommentTooltip();
    return;
  }

  const rect = getMapRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const hitbox = getLinkCommentHitbox(event);

  if (!hitbox || !hitbox.isTruncated) {
    hideLinkCommentTooltip();
    return;
  }

  linkCommentTooltip.textContent = hitbox.comment;
  linkCommentTooltip.style.left = `${clamp(x + 14, 8, rect.width - 260)}px`;
  linkCommentTooltip.style.top = `${clamp(y + 14, 8, rect.height - 80)}px`;
  linkCommentTooltip.classList.add("is-visible");
  linkCommentTooltip.setAttribute("aria-hidden", "false");
}

function handleLinkCommentDoubleClick(event) {
  const hitbox = getLinkCommentHitbox(event);
  if (!hitbox) return;
  event.preventDefault();
  event.stopPropagation();
  openConnectionCommentEditor(hitbox);
}

function getNodesByCreatedDesc(sourceNodes = nodes) {
  return [...sourceNodes].sort((first, second) => {
    return new Date(second.createdAt || 0).getTime() - new Date(first.createdAt || 0).getTime();
  });
}

function getPointerMapPosition(event) {
  const rect = getMapRect();
  return {
    x: clamp(((event.clientX - rect.left - universePan.x) / universeZoom / rect.width) * 100, NODE_DRAG_MIN_X, NODE_DRAG_MAX_X),
    y: clamp(((event.clientY - rect.top - universePan.y) / universeZoom / rect.height) * 100, NODE_DRAG_MIN_Y, NODE_DRAG_MAX_Y),
  };
}

function setNodePosition(id, x, y, button) {
  nodes = nodes.map((node) => (node.id === id ? { ...node, x, y } : node));
  if (button) {
    const node = nodes.find((item) => item.id === id);
    if (node) {
      const point = getNodePoint(node);
      button.style.left = `${point.x}px`;
      button.style.top = `${point.y}px`;
    }
  }
  drawLinks();
}

function updateSelectedNodeClass(id) {
  nodesLayer.querySelectorAll(".node").forEach((nodeButton) => {
    nodeButton.classList.toggle("is-selected", nodeButton.dataset.nodeId === id);
  });
  nodeList.querySelectorAll(".node-list-item").forEach((nodeButton) => {
    nodeButton.classList.toggle("is-selected", nodeButton.dataset.nodeId === id);
  });
  searchResults.querySelectorAll(".search-result-item").forEach((nodeButton) => {
    nodeButton.classList.toggle("is-selected", nodeButton.dataset.nodeId === id);
  });
}

function startUniversePan(event) {
  if (event.button !== 0 || event.target.closest(".node")) return;
  event.preventDefault();
  hideLinkCommentTooltip();
  activeUniversePan = {
    pointerId: event.pointerId,
    startClientX: event.clientX,
    startClientY: event.clientY,
    startPanX: universePan.x,
    startPanY: universePan.y,
  };
  nodesLayer.classList.add("is-panning");
  if (nodesLayer.setPointerCapture) {
    nodesLayer.setPointerCapture(event.pointerId);
  }
}

function moveUniversePan(event) {
  if (!activeUniversePan || activeUniversePan.pointerId !== event.pointerId) return;
  event.preventDefault();
  universePan = {
    x: activeUniversePan.startPanX + event.clientX - activeUniversePan.startClientX,
    y: activeUniversePan.startPanY + event.clientY - activeUniversePan.startClientY,
  };
  renderNodes();
  drawLinks();
}

function finishUniversePan(event) {
  if (!activeUniversePan || activeUniversePan.pointerId !== event.pointerId) return;
  event.preventDefault();
  activeUniversePan = null;
  nodesLayer.classList.remove("is-panning");
  if (nodesLayer.releasePointerCapture) {
    nodesLayer.releasePointerCapture(event.pointerId);
  }
}

function handleUniverseWheel(event) {
  event.preventDefault();
  hideLinkCommentTooltip();
  const rect = getMapRect();
  const pointerX = event.clientX - rect.left;
  const pointerY = event.clientY - rect.top;
  const worldX = (pointerX - universePan.x) / universeZoom;
  const worldY = (pointerY - universePan.y) / universeZoom;
  const zoomFactor = Math.exp(-event.deltaY * 0.0012);
  const nextZoom = clamp(universeZoom * zoomFactor, MIN_UNIVERSE_ZOOM, MAX_UNIVERSE_ZOOM);
  if (nextZoom === universeZoom) return;

  universeZoom = nextZoom;
  universePan = {
    x: pointerX - worldX * universeZoom,
    y: pointerY - worldY * universeZoom,
  };
  renderNodes();
  drawLinks();
}

function startNodeDrag(event, id, button) {
  if (event.button !== 0) return;
  event.preventDefault();
  event.stopPropagation();
  materializeNodePositionForDrag(id);
  selectedNodeId = id;
  updateSelectedNodeClass(id);
  activeNodeDrag = {
    id,
    button,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    moved: false,
  };
  button.classList.add("is-dragging");
  if (button.setPointerCapture) {
    button.setPointerCapture(event.pointerId);
  }
}

function moveNodeDrag(event) {
  if (!activeNodeDrag || activeNodeDrag.pointerId !== event.pointerId) return;
  event.preventDefault();
  const distance = Math.hypot(event.clientX - activeNodeDrag.startX, event.clientY - activeNodeDrag.startY);
  if (distance > 3) {
    activeNodeDrag.moved = true;
  }
  const position = getPointerMapPosition(event);
  setNodePosition(activeNodeDrag.id, position.x, position.y, activeNodeDrag.button);
}

async function persistNodePosition(id) {
  const node = nodes.find((item) => item.id === id);
  if (!node || !apiAvailable) return;

  try {
    const updatedNode = normalizeNode(
      await apiRequest(`/nodes/${id}/position`, {
        method: "PATCH",
        body: JSON.stringify({ x: node.x, y: node.y }),
      }),
    );
    nodes = nodes.map((item) => (item.id === id ? updatedNode : item));
  } catch (error) {
    apiAvailable = false;
  }
}

function getConnectionDropThreshold() {
  return Math.max(
    CONNECTION_DROP_MIN_THRESHOLD,
    CONNECTION_DROP_BASE_THRESHOLD * clamp(universeZoom, MIN_UNIVERSE_ZOOM, MAX_UNIVERSE_ZOOM),
  );
}

function findNearbyNodeForConnection(draggedId, threshold = getConnectionDropThreshold()) {
  const draggedNode = nodes.find((node) => node.id === draggedId);
  if (!draggedNode) return null;

  const draggedPoint = getNodePoint(draggedNode);
  let nearest = null;
  let nearestDistance = threshold;
  nodes.forEach((node) => {
    if (node.id === draggedId) return;
    const point = getNodePoint(node);
    const distance = Math.hypot(point.x - draggedPoint.x, point.y - draggedPoint.y);
    if (distance < nearestDistance) {
      nearest = node;
      nearestDistance = distance;
    }
  });
  return nearest;
}

function openConnectionDialog(sourceNode, targetNode) {
  pendingConnection = {
    source: sourceNode.id,
    target: targetNode.id,
  };
  pendingConnectionDelete = null;
  connectionType.textContent = "接続";
  connectionTitle.textContent = "光点を接続";
  connectionSummary.textContent = `${sourceNode.title} から ${targetNode.title} へ接続します`;
  connectionCommentInput.value = "";
  connectionCommentInput.readOnly = false;
  confirmConnectionButton.textContent = "線で繋ぐ";
  confirmConnectionButton.hidden = false;
  disconnectConnectionButton.hidden = true;
  updateConnectionActionsLayout();
  cancelConnectionButton.textContent = "キャンセル";
  if (!connectionDialog.open) {
    connectionDialog.showModal();
  }
  connectionCommentInput.focus();
}

function openConnectionCommentEditor(hitbox) {
  const sourceNode = nodes.find((node) => node.id === hitbox.source);
  const targetNode = nodes.find((node) => node.id === hitbox.target);
  if (!sourceNode || !targetNode) return;

  const canEdit = canManageOwner(hitbox.ownerUserId);
  const canDelete = canDeleteLink(hitbox.ownerUserId);
  const ownerUser =
    hitbox.ownerUser ||
    (currentUser && hitbox.ownerUserId === currentUser.id
      ? { id: currentUser.id, userId: currentUser.userId, userName: currentUser.userName, profileIcon: currentUser.profileIcon }
      : null);
  const createdAtMarkup = renderCreatedAtMeta(hitbox.createdAt);
  pendingConnection = canEdit
    ? {
        source: sourceNode.id,
        target: targetNode.id,
      }
    : null;
  pendingConnectionDelete = canDelete
    ? {
        source: sourceNode.id,
        target: targetNode.id,
      }
    : null;
  connectionType.innerHTML = `
    <span class="detail-kind">接続</span>
    <span class="detail-cluster-meta">${renderOwnerLink(ownerUser)}</span>
    ${createdAtMarkup}
  `;
  bindOwnerDetailLinks(connectionType);
  connectionTitle.textContent = canEdit ? "接続コメントを編集" : "接続コメント";
  connectionSummary.textContent = `${sourceNode.title} から ${targetNode.title} へのコメント`;
  connectionCommentInput.value = hitbox.comment;
  connectionCommentInput.readOnly = !canEdit;
  confirmConnectionButton.textContent = "保存";
  confirmConnectionButton.hidden = !canEdit;
  disconnectConnectionButton.hidden = !canDelete;
  updateConnectionActionsLayout();
  cancelConnectionButton.textContent = canEdit ? "キャンセル" : "閉じる";
  hideLinkCommentTooltip();
  if (!connectionDialog.open) {
    connectionDialog.showModal();
  }
  if (canEdit) {
    connectionCommentInput.focus();
  }
}

function closeConnectionDialog() {
  pendingConnection = null;
  pendingConnectionDelete = null;
  connectionType.textContent = "接続";
  connectionCommentInput.readOnly = false;
  confirmConnectionButton.hidden = false;
  disconnectConnectionButton.hidden = true;
  updateConnectionActionsLayout();
  cancelConnectionButton.textContent = "キャンセル";
  connectionDialog.close();
}

function finishNodeDrag(event) {
  if (!activeNodeDrag || activeNodeDrag.pointerId !== event.pointerId) return;
  event.preventDefault();
  const drag = activeNodeDrag;
  activeNodeDrag = null;
  drag.button.classList.remove("is-dragging");
  if (drag.button.releasePointerCapture) {
    drag.button.releasePointerCapture(event.pointerId);
  }
  if (drag.moved) {
    suppressNodeClick = true;
    persistNodePosition(drag.id);
    const nearbyNode = findNearbyNodeForConnection(drag.id);
    const draggedNode = nodes.find((node) => node.id === drag.id);
    if (nearbyNode && draggedNode) {
      openConnectionDialog(nearbyNode, draggedNode);
    }
  }
}

function cancelNodeDrag(event) {
  if (!activeNodeDrag || activeNodeDrag.pointerId !== event.pointerId) return;
  activeNodeDrag.button.classList.remove("is-dragging");
  activeNodeDrag = null;
}

function renderNodeList() {
  const visibleNodes = getNodesByCreatedDesc(getNodeListItems());
  const displayedNodes = visibleNodes.slice(0, nodeListVisibleCount);
  updateNodeListTabs();
  if (visibleNodes.length === 0) {
    const emptyMessage =
      activeNodeListMode === "followed"
        ? "フォロー中クラスタの光点はまだありません"
        : activeNodeListMode === "favorites"
          ? "お気に入りの光点はまだありません"
          : "光点はまだありません";
    nodeList.innerHTML = `<p class="node-list-empty">${emptyMessage}</p>`;
    return;
  }

  nodeList.innerHTML = "";
  displayedNodes.forEach((node) => {
    const button = document.createElement("button");
    button.className = `node-list-item${node.id === selectedNodeId ? " is-selected" : ""}`;
    button.type = "button";
    button.dataset.nodeId = node.id;
    button.style.setProperty("--node-color", typeMeta[node.type].color);
    button.innerHTML = `
      <span class="node-list-dot" aria-hidden="true">${typeMeta[node.type].glyph}</span>
      <span class="node-list-main">
        <span class="node-list-title">${escapeHtml(node.title)}</span>
        <span class="node-list-meta">${typeMeta[node.type].label}</span>
      </span>
      <span class="node-list-preview">${escapeHtml(truncateText(node.body, 20))}</span>
    `;
    button.addEventListener("click", () => {
      selectedNodeId = node.id;
      updateSelectedNodeClass(node.id);
      centerUniverseOnNode(node.id);
    });
    button.addEventListener("dblclick", () => openDetail(node.id));
    nodeList.appendChild(button);
  });

  if (displayedNodes.length < visibleNodes.length) {
    const showMoreButton = document.createElement("button");
    showMoreButton.className = "node-list-more";
    showMoreButton.type = "button";
    showMoreButton.title = "さらに20件表示";
    showMoreButton.setAttribute("aria-label", "さらに20件表示");
    showMoreButton.textContent = "▽";
    showMoreButton.addEventListener("click", () => {
      nodeListVisibleCount = Math.min(nodeListVisibleCount + NODE_LIST_PAGE_SIZE, visibleNodes.length);
      renderNodeList();
      renderNodes();
      drawLinks();
    });
    nodeList.appendChild(showMoreButton);
  }
}

function renderStats() {
  nodeCount.textContent = String(getNodeListItems().length);
  clusterCount.textContent = String(getClusterListItems().length);
}

function getOwnNodeListItems() {
  if (!currentUser) return getVisibleScopeNodes();
  return nodes.filter((node) => node.ownerUserId === currentUser.id);
}

function getFollowedNodeListItems() {
  if (!currentUser) return [];
  return nodes.filter((node) => node.ownerUserId !== currentUser.id && followedClusterIds.has(node.clusterId));
}

function getFavoriteNodeListItems() {
  if (!currentUser) return [];
  return nodes.filter((node) => node.ownerUserId !== currentUser.id && node.favoritedByCurrentUser);
}

function getNodeListItems(mode = activeNodeListMode) {
  if (mode === "followed") return getFollowedNodeListItems();
  if (mode === "favorites") return getFavoriteNodeListItems();
  return getOwnNodeListItems();
}

function updateNodeListTabs() {
  ownNodeCount.textContent = String(getOwnNodeListItems().length);
  followedNodeCount.textContent = String(getFollowedNodeListItems().length);
  favoriteNodeCount.textContent = String(getFavoriteNodeListItems().length);
  nodeCount.textContent = String(getNodeListItems().length);
  nodeListTabs.forEach((tab) => {
    const isActive = tab.dataset.nodeListMode === activeNodeListMode;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function setNodeListMode(mode) {
  activeNodeListMode = mode === "followed" || mode === "favorites" ? mode : "own";
  nodeListVisibleCount = NODE_LIST_PAGE_SIZE;
  localStorage.setItem("textosphereNodeListMode", activeNodeListMode);
  renderNodeList();
  renderNodes();
  drawLinks();
  renderStats();
}

function getNodeSearchValue(node, sortKey) {
  if (sortKey === "likeCount") return Number(node.likeCount || 0);
  if (sortKey === "connectionCount") return getNodeRelationCount(node.id);
  return new Date(node.createdAt || 0).getTime();
}

function getSearchFilteredNodes() {
  const type = searchTypeInput.value;
  const terms = String(searchWordInput.value || "")
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  const sortKey = searchSortInput.value;
  const direction = searchOrderInput.value === "asc" ? 1 : -1;

  if (terms.length === 0) {
    return [];
  }

  return [...nodes]
    .filter((node) => {
      if (type !== "all" && node.type !== type) return false;
      const haystack = `${node.title || ""}\n${node.body || ""}`.toLowerCase();
      return terms.every((term) => haystack.includes(term));
    })
    .sort((first, second) => {
      const firstValue = getNodeSearchValue(first, sortKey);
      const secondValue = getNodeSearchValue(second, sortKey);
      if (firstValue !== secondValue) return (firstValue - secondValue) * direction;
      return String(first.title || "").localeCompare(String(second.title || ""), "ja");
    });
}

function renderSearchResults() {
  const hasSearchWord = String(searchWordInput.value || "").trim().length > 0;
  const results = getSearchFilteredNodes();
  const displayedResults = results.slice(0, searchResultVisibleCount);
  searchResultCount.textContent = String(results.length);

  if (!hasSearchWord) {
    searchResults.innerHTML = `<p class="search-empty">\u691c\u7d22\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3059\u308b\u3068\u7d50\u679c\u304c\u8868\u793a\u3055\u308c\u307e\u3059</p>`;
    return;
  }

  if (results.length === 0) {
    searchResults.innerHTML = `<p class="search-empty">該当する光点はありません</p>`;
    return;
  }

  searchResults.innerHTML = "";
  displayedResults.forEach((node) => {
    const button = document.createElement("button");
    button.className = `search-result-item${node.id === selectedNodeId ? " is-selected" : ""}`;
    button.type = "button";
    button.dataset.nodeId = node.id;
    button.style.setProperty("--node-color", typeMeta[node.type].color);
    button.innerHTML = `
      <span class="node-list-dot" aria-hidden="true">${typeMeta[node.type].glyph}</span>
      <span class="search-result-main">
        <span class="search-result-title">${escapeHtml(node.title)}</span>
        <span class="search-result-preview">${escapeHtml(truncateText(node.body, 42))}</span>
        <span class="search-result-meta">${typeMeta[node.type].label} / ${escapeHtml(formatDateTime(node.createdAt) || "-")} / 👍 ${Number(node.likeCount || 0)} / 接続 ${getNodeRelationCount(node.id)}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      selectedNodeId = node.id;
      updateSelectedNodeClass(node.id);
      centerUniverseOnNode(node.id);
    });
    button.addEventListener("dblclick", () => openDetail(node.id));
    searchResults.appendChild(button);
  });

  if (displayedResults.length < results.length) {
    const showMoreButton = document.createElement("button");
    showMoreButton.className = "search-result-more";
    showMoreButton.type = "button";
    showMoreButton.title = "さらに20件表示";
    showMoreButton.setAttribute("aria-label", "さらに20件表示");
    showMoreButton.textContent = "▽";
    showMoreButton.addEventListener("click", () => {
      searchResultVisibleCount = Math.min(searchResultVisibleCount + SEARCH_RESULT_PAGE_SIZE, results.length);
      renderSearchResults();
    });
    searchResults.appendChild(showMoreButton);
  }
}

function resetSearchResults() {
  searchResultVisibleCount = SEARCH_RESULT_PAGE_SIZE;
  renderSearchResults();
}

function setSearchSidebarCollapsed(collapsed) {
  appShell.classList.toggle("search-collapsed", collapsed);
  searchSidebar.classList.toggle("is-collapsed", collapsed);
  searchSidebarToggle.textContent = collapsed ? "<<" : ">>";
  searchSidebarToggle.title = collapsed ? "光点検索を表示" : "光点検索を隠す";
  searchSidebarToggle.setAttribute("aria-label", collapsed ? "光点検索を表示" : "光点検索を隠す");
  searchSidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  localStorage.setItem("textosphereSearchCollapsed", collapsed ? "1" : "0");
  requestAnimationFrame(() => {
    resizeCanvas();
    setTimeout(resizeCanvas, 180);
  });
}

function toggleSearchSidebar() {
  setSearchSidebarCollapsed(!searchSidebar.classList.contains("is-collapsed"));
}

function getOwnClusterListItems() {
  return clusters;
}

function getFollowedClusterListItems() {
  const clusterById = new Map();
  clusterDirectory.forEach((cluster) => {
    if (!followedClusterIds.has(cluster.id)) return;
    if (currentUser && cluster.ownerUserId === currentUser.id) return;
    clusterById.set(cluster.id, cluster);
  });
  return [...clusterById.values()].sort((first, second) => {
    return String(first.name || "").localeCompare(String(second.name || ""), "ja");
  });
}

function getClusterListItems(mode = activeClusterListMode) {
  return mode === "followed" ? getFollowedClusterListItems() : getOwnClusterListItems();
}

function getClusterListDescription(cluster) {
  const description = truncateText(cluster.description || "\u8aac\u660e\u306a\u3057", activeClusterListMode === "followed" ? 28 : 34);
  if (activeClusterListMode !== "followed") return description;
  return `${getUserName(cluster.ownerUser)} / ${description}`;
}

function updateClusterListTabs() {
  const ownCount = getOwnClusterListItems().length;
  const followedCount = getFollowedClusterListItems().length;
  ownClusterCount.textContent = String(ownCount);
  followedClusterCount.textContent = String(followedCount);
  clusterListTabs.forEach((tab) => {
    const isActive = tab.dataset.clusterListMode === activeClusterListMode;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function setClusterListMode(mode) {
  activeClusterListMode = mode === "followed" ? "followed" : "own";
  localStorage.setItem("textosphereClusterListMode", activeClusterListMode);
  renderClusterList();
  renderStats();
}

function renderClusterList() {
  const listItems = getClusterListItems();
  updateClusterListTabs();

  if (listItems.length === 0) {
    const emptyMessage =
      activeClusterListMode === "followed"
        ? "\u30d5\u30a9\u30ed\u30fc\u4e2d\u306e\u30af\u30e9\u30b9\u30bf\u306f\u307e\u3060\u3042\u308a\u307e\u305b\u3093"
        : "\u30af\u30e9\u30b9\u30bf\u306f\u307e\u3060\u3042\u308a\u307e\u305b\u3093";
    clusterList.innerHTML = `<p class="cluster-list-empty">${emptyMessage}</p>`;
    return;
  }

  clusterList.innerHTML = listItems
    .map(
      (cluster) => `
        <button class="cluster-list-item" type="button" data-cluster-id="${escapeHtml(cluster.id)}">
          <span class="cluster-list-title">${escapeHtml(cluster.name)}</span>
          <span class="cluster-list-description">${escapeHtml(getClusterListDescription(cluster))}</span>
        </button>
      `,
    )
    .join("");

  clusterList.querySelectorAll(".cluster-list-item").forEach((clusterButton) => {
    clusterButton.addEventListener("dblclick", () => {
      openClusterNodesDialog(clusterButton.dataset.clusterId);
    });
  });
}

function getClusterById(id) {
  return clusters.find((cluster) => cluster.id === id) || clusterDirectory.find((cluster) => cluster.id === id) || null;
}

function renderClusterNodeList(clusterId) {
  const clusterNodes = getNodesByCreatedDesc(nodes.filter((node) => node.clusterId === clusterId));
  if (clusterNodes.length === 0) {
    clusterNodesContent.innerHTML = `<p class="cluster-nodes-empty">\u3053\u306e\u30af\u30e9\u30b9\u30bf\u306b\u5149\u70b9\u306f\u307e\u3060\u3042\u308a\u307e\u305b\u3093</p>`;
    return clusterNodes.length;
  }

  clusterNodesContent.innerHTML = "";
  clusterNodes.forEach((node) => {
    const button = document.createElement("button");
    button.className = "cluster-node-item";
    button.type = "button";
    button.dataset.nodeId = node.id;
    button.style.setProperty("--node-color", typeMeta[node.type].color);
    button.innerHTML = `
      <span class="node-list-dot" aria-hidden="true">${typeMeta[node.type].glyph}</span>
      <span class="cluster-node-main">
        <span class="cluster-node-title">${escapeHtml(node.title)}</span>
        <span class="cluster-node-preview">${escapeHtml(truncateText(node.body || node.mediaName || "", 56))}</span>
        <span class="cluster-node-meta">${typeMeta[node.type].label} / ${escapeHtml(formatDateTime(node.createdAt) || "-")} / Like ${Number(node.likeCount || 0)} / \u63a5\u7d9a ${getNodeRelationCount(node.id)}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      selectedNodeId = node.id;
      updateSelectedNodeClass(node.id);
      centerUniverseOnNode(node.id);
    });
    button.addEventListener("dblclick", () => {
      closeClusterNodesDialog();
      openDetail(node.id);
    });
    clusterNodesContent.appendChild(button);
  });
  return clusterNodes.length;
}

function openClusterNodesDialog(clusterId) {
  const cluster = getClusterById(clusterId);
  if (!cluster) return;

  clusterNodesTitle.textContent = cluster.name;
  const nodeCountInCluster = renderClusterNodeList(cluster.id);
  const clusterDetail = getClusterDetail(cluster.id) || cluster;
  const description = String(cluster.description || "").trim();
  const createdAtMarkup = renderCreatedAtMeta(clusterDetail.createdAt);
  clusterNodesType.innerHTML = `
    <span class="detail-kind">クラスタ</span>
    <span class="detail-cluster-meta">${renderOwnerLink(clusterDetail.ownerUser)}</span>
    ${createdAtMarkup}
  `;
  bindOwnerDetailLinks(clusterNodesType);
  const metaParts = [`${nodeCountInCluster}\u4ef6`];
  if (description) {
    metaParts.push(description);
  }
  clusterNodesMeta.textContent = metaParts.join(" / ");
  if (!clusterNodesDialog.open) {
    clusterNodesDialog.showModal();
  }
}

function closeClusterNodesDialog() {
  if (clusterNodesDialog.open) {
    clusterNodesDialog.close();
  }
  clusterNodesType.textContent = "クラスタ";
}

function getClusterOptionsMarkup() {
  return clusters
    .map((cluster) => `<option value="${escapeHtml(cluster.id)}">${escapeHtml(cluster.name)}</option>`)
    .join("");
}

function renderClusterOptions(selectedId = clusterInput.value || getPublicClusterId()) {
  const options = getClusterOptionsMarkup();
  const fallbackClusterId = getPublicClusterId();
  clusterInput.innerHTML = options;
  clusterInput.value = clusters.some((cluster) => cluster.id === selectedId) ? selectedId : fallbackClusterId;

  document.querySelectorAll(".detailComposerCluster").forEach((select) => {
    const currentValue = select.value || selectedId;
    select.innerHTML = options;
    select.value = clusters.some((cluster) => cluster.id === currentValue) ? currentValue : fallbackClusterId;
  });
}

function updateClearLinksButton() {
  const label = hiddenLinks !== null ? "線を戻す" : "線を消す";
  clearLinksButton.title = label;
  clearLinksButton.setAttribute("aria-label", label);
}

function setPanelOpen(button, panel, isOpen) {
  panel.hidden = !isOpen;
  button.setAttribute("aria-expanded", String(isOpen));
}

function togglePanel(button, panel) {
  setPanelOpen(button, panel, panel.hidden);
}

function stopDetailPlayback() {
  detailDialog.querySelectorAll("audio, video").forEach((media) => {
    media.pause();
    media.removeAttribute("src");
    media.load();
  });
  detailDialog.querySelectorAll("iframe.youtube-embed").forEach((frame) => {
    frame.src = "about:blank";
  });
}

function closeDetailDialog() {
  activeDetailNodeId = null;
  if (activeSelectionSyncCleanup) {
    activeSelectionSyncCleanup();
    activeSelectionSyncCleanup = null;
  }
  stopDetailPlayback();
  detailDialog.close();
}

function pruneLinksForNode(id) {
  links = links.filter((link) => link.source !== id && link.target !== id);
  if (hiddenLinks !== null) {
    hiddenLinks = hiddenLinks.filter((link) => link.source !== id && link.target !== id);
    if (hiddenLinks.length === 0) {
      hiddenLinks = null;
    }
  }
}

async function deleteNode(id) {
  if (!id) return;

  try {
    if (apiAvailable) {
      await apiRequest(`/nodes/${id}`, { method: "DELETE" });
    }
  } catch (error) {
    apiAvailable = false;
  }

  nodes = nodes.filter((node) => node.id !== id);
  pruneLinksForNode(id);
  if (selectedNodeId === id) {
    selectedNodeId = null;
  }
  closeDetailDialog();
  renderAll();
}

function renderAll() {
  renderNodes();
  renderNodeList();
  renderSearchResults();
  renderClusterList();
  renderClusterOptions();
  renderStats();
  updateClearLinksButton();
  drawLinks();
}

function animateNodePositionSnapshot(positionRows) {
  const targetById = new Map((positionRows || []).map((row) => [row.id, row]));
  const movingNodes = nodes
    .map((node) => {
      const target = targetById.get(node.id);
      if (!target) return null;
      const targetX = clamp(Number(target.x), NODE_DRAG_MIN_X, NODE_DRAG_MAX_X);
      const targetY = clamp(Number(target.y), NODE_DRAG_MIN_Y, NODE_DRAG_MAX_Y);
      if (Math.hypot(targetX - node.x, targetY - node.y) < 0.01) return null;
      return {
        id: node.id,
        startX: node.x,
        startY: node.y,
        targetX,
        targetY,
      };
    })
    .filter(Boolean);

  if (movingNodes.length === 0) return;
  if (nodePositionAnimationFrame !== null) {
    cancelAnimationFrame(nodePositionAnimationFrame);
  }

  const startedAt = performance.now();
  const animate = (timestamp) => {
    const progress = clamp((timestamp - startedAt) / NODE_POSITION_ANIMATION_MS, 0, 1);
    const eased = 1 - (1 - progress) ** 3;
    nodes = nodes.map((node) => {
      const moving = movingNodes.find((item) => item.id === node.id);
      if (!moving) return node;
      return {
        ...node,
        x: moving.startX + (moving.targetX - moving.startX) * eased,
        y: moving.startY + (moving.targetY - moving.startY) * eased,
      };
    });
    renderNodes();
    drawLinks();

    if (progress < 1) {
      nodePositionAnimationFrame = requestAnimationFrame(animate);
      return;
    }

    nodePositionAnimationFrame = null;
    nodes = nodes.map((node) => {
      const moving = movingNodes.find((item) => item.id === node.id);
      return moving ? { ...node, x: moving.targetX, y: moving.targetY } : node;
    });
    renderNodes();
    drawLinks();
  };

  nodePositionAnimationFrame = requestAnimationFrame(animate);
}

async function refreshNodePositionsFromServer() {
  if (!currentUser || !apiAvailable) return;
  try {
    const result = await apiRequest("/nodes/positions");
    animateNodePositionSnapshot(result?.nodes || []);
  } catch (error) {
    apiAvailable = false;
  }
}

function startNodePositionRefresh() {
  if (nodePositionRefreshTimer !== null) return;
  nodePositionRefreshTimer = setInterval(refreshNodePositionsFromServer, NODE_POSITION_REFRESH_MS);
}

function stopNodePositionRefresh() {
  if (nodePositionRefreshTimer !== null) {
    clearInterval(nodePositionRefreshTimer);
    nodePositionRefreshTimer = null;
  }
  if (nodePositionAnimationFrame !== null) {
    cancelAnimationFrame(nodePositionAnimationFrame);
    nodePositionAnimationFrame = null;
  }
}

function getDefaultSelection(type, body, duration) {
  if (type === "text") {
    return { start: 0, end: body.length };
  }
  if (type === "image") {
    return { start: 0, end: 0 };
  }
  return { start: 0, end: duration };
}

function getNewNodePosition(originNode = null) {
  if (originNode) {
    return {
      x: clamp(originNode.x + 12 + Math.random() * 8 - 4, NODE_DRAG_MIN_X, NODE_DRAG_MAX_X),
      y: clamp(originNode.y + 10 + Math.random() * 8 - 4, NODE_DRAG_MIN_Y, NODE_DRAG_MAX_Y),
    };
  }

  const angle = nodes.length * 0.92;
  return {
    x: clamp(50 + Math.cos(angle) * 25 + Math.random() * 10 - 5, 12, 88),
    y: clamp(50 + Math.sin(angle) * 25 + Math.random() * 10 - 5, 16, 84),
  };
}

async function createNodeFromValues({ type, title, body, duration, mediaFile, clusterId = getPublicClusterId(), originNode = null }) {
  const hasDuration = type === "music" || type === "video";
  const safeDuration = hasDuration ? clamp(Number(duration || 180), 10, 900) : null;
  const position = getNewNodePosition(originNode);
  const safeTitle = title.trim() || `${typeMeta[type].label} ${nodes.length + 1}`;
  const safeBody = String(body || "").replace(/\r\n/g, "\n");
  const safeClusterId = clusters.some((cluster) => cluster.id === clusterId) ? clusterId : getPublicClusterId();
  const newNode = normalizeNode({
    id: createClientId(),
    ownerUserId: currentUser?.id || null,
    clusterId: safeClusterId,
    type,
    title: safeTitle,
    body: safeBody,
    duration: safeDuration,
    createdAt: new Date().toISOString(),
    mediaUrl: type !== "text" && mediaFile ? URL.createObjectURL(mediaFile) : null,
    mediaMime: type !== "text" && mediaFile ? mediaFile.type : null,
    mediaName: type !== "text" && mediaFile ? mediaFile.name : null,
    likeCount: 0,
    likedByCurrentUser: false,
    favoritedByCurrentUser: false,
    selection: getDefaultSelection(type, safeBody, safeDuration),
    x: position.x,
    y: position.y,
  });

  try {
    let savedNode = newNode;
    if (apiAvailable) {
      if (type !== "text" && mediaFile) {
        const formData = new FormData();
        formData.append("type", type);
        formData.append("title", safeTitle);
        formData.append("body", safeBody);
        formData.append("duration", String(safeDuration));
        formData.append("clusterId", safeClusterId);
        formData.append("selection", JSON.stringify(newNode.selection));
        formData.append("x", String(newNode.x));
        formData.append("y", String(newNode.y));
        if (originNode) {
          formData.append("originNodeId", originNode.id);
        }
        formData.append("mediaFile", mediaFile);
        savedNode = normalizeNode(
          await apiRequest("/nodes", {
            method: "POST",
            body: formData,
          }),
        );
      } else {
        savedNode = normalizeNode(
          await apiRequest("/nodes", {
            method: "POST",
            body: JSON.stringify(originNode ? { ...newNode, originNodeId: originNode.id } : newNode),
          }),
        );
      }
    }
    nodes = [...nodes, savedNode];
    return savedNode;
  } catch (error) {
    apiAvailable = false;
    nodes = [...nodes, newNode];
    return newNode;
  }
}

async function addNode() {
  if (hasOversizedMediaFile(typeInput.value, mediaFileInput, pastedComposerImage, droppedComposerMedia)) {
    window.alert(getUploadLimitMessage());
    return;
  }
  const mediaFile = getMediaFileForType(typeInput.value, mediaFileInput, pastedComposerImage, droppedComposerMedia);
  await createNodeFromValues({
    type: typeInput.value,
    title: titleInput.value,
    body: bodyInput.value,
    duration: durationInput.value,
    mediaFile,
    clusterId: clusterInput.value,
  });

  titleInput.value = "";
  bodyInput.value = "";
  mediaFileInput.value = "";
  clearDroppedMedia(droppedComposerMedia, mediaDropStatus, clearDroppedMediaButton, mediaDropZone, typeInput.value);
  clearPastedImage(pastedComposerImage, clipboardImagePreview, clipboardImageStatus, clearClipboardImageButton, clipboardImagePanel);
  clusterInput.value = getPublicClusterId();
  setPanelOpen(composerToggle, composerPanel, false);
  renderAll();
}

async function addCluster() {
  const name = clusterNameInput.value.trim();
  const description = clusterDescriptionInput.value.trim();
  if (!name) return;

  const localCluster = normalizeCluster({
    id: createClientId(),
    ownerUserId: currentUser?.id || null,
    name,
    description,
    createdAt: new Date().toISOString(),
  });

  try {
    let savedCluster = localCluster;
    if (apiAvailable) {
      savedCluster = normalizeCluster(
        await apiRequest("/clusters", {
          method: "POST",
          body: JSON.stringify({ name, description }),
        }),
      );
    }
    clusters = ensurePublicCluster([...clusters.filter((cluster) => cluster.name !== savedCluster.name), savedCluster]);
    clusterDirectory = ensurePublicCluster([...clusterDirectory.filter((cluster) => cluster.id !== savedCluster.id), savedCluster]);
    renderClusterList();
    renderClusterOptions(savedCluster.id);
    renderStats();
    clusterNameInput.value = "";
    clusterDescriptionInput.value = "";
    setPanelOpen(clusterToggle, clusterPanel, false);
  } catch (error) {
    apiAvailable = false;
    clusters = ensurePublicCluster([...clusters.filter((cluster) => cluster.name !== localCluster.name), localCluster]);
    clusterDirectory = ensurePublicCluster([...clusterDirectory.filter((cluster) => cluster.id !== localCluster.id), localCluster]);
    renderClusterList();
    renderClusterOptions(localCluster.id);
    renderStats();
    clusterNameInput.value = "";
    clusterDescriptionInput.value = "";
    setPanelOpen(clusterToggle, clusterPanel, false);
  }
}

async function createLinkBetween(source, target, comment = "") {
  if (!source || !target || source === target) return false;

  const currentLinks = hiddenLinks ?? links;
  const exists = currentLinks.some(
    (link) =>
      (link.source === source && link.target === target) ||
      (link.source === target && link.target === source),
  );

  const safeComment = String(comment || "").trim();
  if (exists) {
    const existingLink = currentLinks.find(
      (link) =>
        (link.source === source && link.target === target) ||
        (link.source === target && link.target === source),
    );
    if (!canManageOwner(existingLink?.ownerUserId)) {
      return false;
    }
    links = currentLinks.map((link) =>
      (link.source === source && link.target === target) || (link.source === target && link.target === source)
        ? { ...link, comment: safeComment }
        : link,
    );
    hiddenLinks = null;
    try {
      if (apiAvailable) {
        await apiRequest("/links", {
          method: "POST",
          body: JSON.stringify({ source, target, comment: safeComment }),
        });
      }
    } catch (error) {
      if (error.status === 403) {
        await loadState();
        window.alert("この接続は作成または編集できません");
        return false;
      }
      apiAvailable = false;
    }
    renderStats();
    updateClearLinksButton();
    drawLinks();
    return true;
  }

  let newLink = normalizeLink({
    source,
    target,
    ownerUserId: currentUser?.id,
    ownerUser: currentUser
      ? { id: currentUser.id, userId: currentUser.userId, userName: currentUser.userName, profileIcon: currentUser.profileIcon }
      : null,
    comment: safeComment,
    createdAt: new Date().toISOString(),
  });
  try {
    if (apiAvailable) {
      const savedLink = normalizeLink(await apiRequest("/links", {
        method: "POST",
        body: JSON.stringify(newLink),
      }));
      newLink = { ...savedLink, ownerUser: savedLink.ownerUser || newLink.ownerUser };
    }
  } catch (error) {
    if (error.status === 403) {
      window.alert("この接続は作成できません");
      return false;
    }
    apiAvailable = false;
  }

  links = currentLinks;
  hiddenLinks = null;
  links = [...links, newLink];
  renderStats();
  updateClearLinksButton();
  drawLinks();
  return true;
}

async function deleteLinkBetween(source, target) {
  const currentLinks = hiddenLinks ?? links;
  const existingLink = currentLinks.find(
    (link) =>
      (link.source === source && link.target === target) ||
      (link.source === target && link.target === source),
  );
  if (!existingLink || !canDeleteLink(existingLink.ownerUserId)) {
    return false;
  }

  links = currentLinks.filter(
    (link) =>
      !(
        (link.source === source && link.target === target) ||
        (link.source === target && link.target === source)
      ),
  );
  hiddenLinks = null;

  try {
    if (apiAvailable) {
      await apiRequest(`/links/${encodeURIComponent(source)}/${encodeURIComponent(target)}`, {
        method: "DELETE",
      });
    }
  } catch (error) {
    apiAvailable = false;
  }

  renderStats();
  updateClearLinksButton();
  drawLinks();
  return true;
}

function updateTypeFields() {
  const type = typeInput.value;
  const isText = type === "text";
  const hasDuration = type === "music" || type === "video";
  textField.classList.remove("is-hidden");
  mediaField.classList.toggle("is-hidden", isText);
  durationField.classList.toggle("is-hidden", !hasDuration);
  mediaFileInput.accept =
    type === "image"
      ? "image/png,image/jpeg,image/gif,.png,.jpg,.jpeg,.gif"
      : type === "music"
        ? "audio/mpeg,.mp3"
        : type === "video"
          ? "video/mp4,.mp4"
          : "";
  if (isText) {
    mediaFileInput.value = "";
  }
  updateMediaDropZone(type, mediaDropZone, droppedComposerMedia, mediaDropStatus, clearDroppedMediaButton);
  updateImagePastePanel(type, clipboardImagePanel, pastedComposerImage, clipboardImagePreview, clipboardImageStatus, clearClipboardImageButton);
}

function updateDurationFromMediaFile() {
  const file = mediaFileInput.files ? mediaFileInput.files[0] : null;
  if (file && !isFileWithinUploadLimit(file)) {
    window.alert(getUploadLimitMessage());
    mediaFileInput.value = "";
    return;
  }
  if (file) {
    clearDroppedMedia(droppedComposerMedia, mediaDropStatus, clearDroppedMediaButton, mediaDropZone, typeInput.value);
    clearPastedImage(pastedComposerImage, clipboardImagePreview, clipboardImageStatus, clearClipboardImageButton, clipboardImagePanel);
  }
  if (!file || (typeInput.value !== "music" && typeInput.value !== "video")) return;

  const media = document.createElement(typeInput.value === "music" ? "audio" : "video");
  const objectUrl = URL.createObjectURL(file);
  media.preload = "metadata";
  media.src = objectUrl;
  media.addEventListener("loadedmetadata", () => {
    if (Number.isFinite(media.duration) && media.duration > 0) {
      durationInput.value = String(Math.max(1, Math.round(media.duration)));
    }
    URL.revokeObjectURL(objectUrl);
  });
  media.addEventListener("error", () => URL.revokeObjectURL(objectUrl));
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function getSelectionBounds(node) {
  const max = node.type === "text" ? node.body.length : node.duration;
  const start = clamp(node.selection.start, 0, max);
  const end = clamp(node.selection.end, start, max);
  return { start, end, max };
}

async function updateNodeSelection(id, start, end) {
  const targetNode = nodes.find((node) => node.id === id);
  if (!targetNode) return;

  const max = targetNode.type === "text" ? targetNode.body.length : targetNode.duration;
  const safeStart = clamp(Number(start || 0), 0, max);
  const safeEnd = clamp(Number(end || max), safeStart, max);
  let updatedNode = { ...targetNode, selection: { start: safeStart, end: safeEnd } };

  try {
    if (apiAvailable) {
      updatedNode = normalizeNode(
        await apiRequest(`/nodes/${id}/selection`, {
          method: "PATCH",
          body: JSON.stringify({ start: safeStart, end: safeEnd }),
        }),
      );
    }
  } catch (error) {
    apiAvailable = false;
  }

  nodes = nodes.map((node) => (node.id === id ? updatedNode : node));
  openDetail(id);
}

function renderTextDetail(node) {
  return `
    <div class="detail-editor">
      ${renderDetailBody(node.body, 'id="detailTextBody"')}
    </div>
  `;
}

function renderMarkedText(body, start, end) {
  const safeStart = clamp(Number(start || 0), 0, body.length);
  const safeEnd = clamp(Number(end || body.length), safeStart, body.length);
  return `${escapeHtml(body.slice(0, safeStart))}<mark class="marked-text">${escapeHtml(
    body.slice(safeStart, safeEnd),
  )}</mark>${escapeHtml(body.slice(safeEnd))}`;
}

function updateTextMarker(container, body, start, end) {
  container.innerHTML = renderMarkedText(body, start, end);
}

function readFrameSize(view, offset, version) {
  if (version === 4) {
    return ((view.getUint8(offset) & 0x7f) << 21) | ((view.getUint8(offset + 1) & 0x7f) << 14) | ((view.getUint8(offset + 2) & 0x7f) << 7) | (view.getUint8(offset + 3) & 0x7f);
  }
  return view.getUint32(offset);
}

function readSyncsafeInteger(view, offset) {
  return ((view.getUint8(offset) & 0x7f) << 21) | ((view.getUint8(offset + 1) & 0x7f) << 14) | ((view.getUint8(offset + 2) & 0x7f) << 7) | (view.getUint8(offset + 3) & 0x7f);
}

function readAscii(bytes, start, length) {
  return Array.from(bytes.slice(start, start + length), (byte) => String.fromCharCode(byte)).join("");
}

function findStringTerminator(bytes, start, encoding) {
  if (encoding === 1 || encoding === 2) {
    for (let index = start; index < bytes.length - 1; index += 2) {
      if (bytes[index] === 0 && bytes[index + 1] === 0) return index;
    }
    return bytes.length;
  }

  const index = bytes.indexOf(0, start);
  return index === -1 ? bytes.length : index;
}

function bytesToDataUrl(bytes, mime) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.slice(index, index + chunkSize));
  }
  return `data:${mime || "image/jpeg"};base64,${btoa(binary)}`;
}

function parseApicFrame(frameBytes) {
  if (frameBytes.length < 5) return null;
  const encoding = frameBytes[0];
  const mimeEnd = frameBytes.indexOf(0, 1);
  if (mimeEnd === -1) return null;
  const mime = readAscii(frameBytes, 1, mimeEnd - 1) || "image/jpeg";
  const descriptionStart = mimeEnd + 2;
  const descriptionEnd = findStringTerminator(frameBytes, descriptionStart, encoding);
  const imageStart = descriptionEnd + (encoding === 1 || encoding === 2 ? 2 : 1);
  if (imageStart >= frameBytes.length) return null;
  return {
    mime,
    dataUrl: bytesToDataUrl(frameBytes.slice(imageStart), mime),
  };
}

function parsePicFrame(frameBytes) {
  if (frameBytes.length < 6) return null;
  const encoding = frameBytes[0];
  const format = readAscii(frameBytes, 1, 3).toUpperCase();
  const mime = format === "PNG" ? "image/png" : "image/jpeg";
  const descriptionStart = 5;
  const descriptionEnd = findStringTerminator(frameBytes, descriptionStart, encoding);
  const imageStart = descriptionEnd + (encoding === 1 || encoding === 2 ? 2 : 1);
  if (imageStart >= frameBytes.length) return null;
  return {
    mime,
    dataUrl: bytesToDataUrl(frameBytes.slice(imageStart), mime),
  };
}

function parseEmbeddedMusicArtwork(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  if (bytes.length < 10 || readAscii(bytes, 0, 3) !== "ID3") return null;

  const view = new DataView(arrayBuffer);
  const version = bytes[3];
  const flags = bytes[5];
  const tagEnd = 10 + readSyncsafeInteger(view, 6);
  let offset = 10;

  if (flags & 0x40) {
    if (version === 3 && offset + 4 <= bytes.length) {
      offset += 4 + view.getUint32(offset);
    } else if (version === 4 && offset + 4 <= bytes.length) {
      offset += readSyncsafeInteger(view, offset);
    }
  }

  while (offset < tagEnd && offset < bytes.length) {
    if (version === 2) {
      if (offset + 6 > bytes.length) break;
      const frameId = readAscii(bytes, offset, 3);
      const frameSize = (bytes[offset + 3] << 16) | (bytes[offset + 4] << 8) | bytes[offset + 5];
      offset += 6;
      if (!frameId.trim() || frameSize <= 0) break;
      if (frameId === "PIC") return parsePicFrame(bytes.slice(offset, offset + frameSize));
      offset += frameSize;
      continue;
    }

    if (offset + 10 > bytes.length) break;
    const frameId = readAscii(bytes, offset, 4);
    const frameSize = readFrameSize(view, offset + 4, version);
    offset += 10;
    if (!frameId.trim() || frameSize <= 0) break;
    if (frameId === "APIC") return parseApicFrame(bytes.slice(offset, offset + frameSize));
    offset += frameSize;
  }

  return null;
}

async function getMusicArtwork(mediaUrl) {
  const resolvedUrl = resolveMediaUrl(mediaUrl);
  if (!resolvedUrl) return null;
  if (!musicArtworkCache.has(resolvedUrl)) {
    musicArtworkCache.set(
      resolvedUrl,
      fetch(resolvedUrl)
        .then((response) => (response.ok ? response.arrayBuffer() : null))
        .then((buffer) => (buffer ? parseEmbeddedMusicArtwork(buffer) : null))
        .catch(() => null),
    );
  }
  return musicArtworkCache.get(resolvedUrl);
}

function renderMediaDetail(node) {
  const bars = Array.from({ length: 20 }, (_, index) => {
    const height = 24 + Math.abs(Math.sin(index * 1.7 + node.duration)) * 116;
    return `<span class="wave-bar" style="height: ${height}px"></span>`;
  }).join("");

  const source = node.mediaUrl ? escapeHtml(resolveMediaUrl(node.mediaUrl)) : "";
  const stage =
    node.type === "image"
      ? `<div class="media-stage image">${
          source
            ? `<img class="media-player image-player" src="${source}" alt="${escapeHtml(node.title)}" />`
            : `<div class="image-glyph"></div>`
        }</div>`
      : node.type === "music"
      ? `<div class="media-stage music">
          <div class="music-artwork-frame" data-music-artwork-node-id="${escapeHtml(node.id)}">
            <span class="music-artwork-glyph">M</span>
          </div>
          ${bars}${
          source ? `<audio class="media-player audio-player" controls src="${source}"></audio>` : ""
        }</div>`
      : `<div class="media-stage video">${
          source
            ? `<video class="media-player video-player" controls src="${source}"></video>`
            : `<div class="play-glyph"></div>`
        }</div>`;

  return `
    <div class="media-preview">
      ${stage}
      ${node.body ? renderDetailBody(node.body) : ""}
    </div>
  `;
}

function getAllKnownLinks() {
  return hiddenLinks ?? links;
}

function getLinkedNode(id) {
  return nodes.find((node) => node.id === id);
}

function getClusterDetail(clusterId) {
  const cluster = clusterDirectory.find((item) => item.id === clusterId) || clusters.find((item) => item.id === clusterId);
  if (!cluster) return null;
  const ownerUser =
    cluster.ownerUser ||
    (currentUser && cluster.ownerUserId === currentUser.id
      ? { id: currentUser.id, userId: currentUser.userId, userName: currentUser.userName, profileIcon: currentUser.profileIcon }
      : null);
  return {
    ...cluster,
    ownerUser,
  };
}

function renderMiniUserIcon(user) {
  const fallback = escapeHtml(getUserName(user).slice(0, 1).toUpperCase());
  const icon = resolveMediaUrl(user?.profileIcon);
  if (icon) {
    return `<span class="detail-cluster-avatar" aria-hidden="true"><img src="${escapeHtml(icon)}" alt="" /></span>`;
  }
  return `<span class="detail-cluster-avatar" aria-hidden="true">${fallback}</span>`;
}

function renderUserDetailAvatar(user) {
  const fallback = escapeHtml(getUserName(user).slice(0, 1).toUpperCase());
  const icon = resolveMediaUrl(user?.profileIcon);
  if (icon) {
    return `<span class="user-detail-avatar" aria-hidden="true"><img src="${escapeHtml(icon)}" alt="" /></span>`;
  }
  return `<span class="user-detail-avatar" aria-hidden="true">${fallback}</span>`;
}

function renderOwnerLink(user) {
  const ownerName = getUserName(user);
  const content = `${renderMiniUserIcon(user)}<span>${escapeHtml(ownerName)}</span>`;
  if (!user?.id) {
    return `<span class="detail-owner-link">${content}</span>`;
  }
  return `<button class="detail-owner-link" type="button" data-user-id="${escapeHtml(user.id)}">${content}</button>`;
}

function bindOwnerDetailLinks(container) {
  container.querySelectorAll(".detail-owner-link[data-user-id]").forEach((ownerLink) => {
    ownerLink.addEventListener("click", () => {
      openUserDetail(ownerLink.dataset.userId);
    });
  });
}

function renderCreatedAtMeta(value) {
  const createdAt = formatDateTime(value);
  return createdAt ? `<span class="detail-created-at">登録日時 ${escapeHtml(createdAt)}</span>` : "";
}

function renderDetailMeta(node) {
  const cluster = getClusterDetail(node.clusterId);
  const createdAtMarkup = renderCreatedAtMeta(node.createdAt);
  if (!cluster) {
    return `<span class="detail-kind">${typeMeta[node.type].label}</span>${createdAtMarkup}`;
  }

  const owner = cluster.ownerUser;
  const isOwnCluster = currentUser && cluster.ownerUserId === currentUser.id;
  const isFollowed = isOwnCluster || followedClusterIds.has(cluster.id);
  const locked = isOwnCluster ? "disabled" : "";
  return `
    <span class="detail-kind">${typeMeta[node.type].label}</span>
    <span class="detail-cluster-meta">
      ${renderOwnerLink(owner)}
      <span class="detail-cluster-label">- ${escapeHtml(cluster.name)}</span>
      <label class="detail-cluster-follow" title="クラスタをフォロー">
        <input class="detailClusterFollowInput" type="checkbox" data-cluster-id="${escapeHtml(cluster.id)}" ${isFollowed ? "checked" : ""} ${locked} />
        <span>フォロー</span>
      </label>
    </span>
    ${createdAtMarkup}
  `;
}

async function setClusterFollow(clusterId, shouldFollow, checkbox = null) {
  const cluster = clusterDirectory.find((item) => item.id === clusterId) || clusters.find((item) => item.id === clusterId);
  if (currentUser && cluster?.ownerUserId === currentUser.id) {
    followedClusterIds.add(clusterId);
    if (checkbox) {
      checkbox.checked = true;
      checkbox.disabled = true;
    }
    refreshScopeViews();
    return;
  }

  if (shouldFollow) {
    followedClusterIds.add(clusterId);
  } else {
    followedClusterIds.delete(clusterId);
  }

  refreshScopeViews();

  if (!apiAvailable) return;
  try {
    await apiRequest(`/clusters/${clusterId}/follow`, {
      method: shouldFollow ? "PUT" : "DELETE",
    });
  } catch (error) {
    apiAvailable = false;
    if (checkbox) {
      checkbox.checked = !shouldFollow;
    }
    if (shouldFollow) {
      followedClusterIds.delete(clusterId);
    } else {
      followedClusterIds.add(clusterId);
    }
    refreshScopeViews();
  }
}

function bindDetailMetaActions() {
  const checkbox = detailType.querySelector(".detailClusterFollowInput");
  if (checkbox) {
    checkbox.addEventListener("change", () => {
      setClusterFollow(checkbox.dataset.clusterId, checkbox.checked, checkbox);
    });
  }

  bindOwnerDetailLinks(detailType);
}

function renderUserDetailCluster(cluster) {
  const isOwnCluster = currentUser && cluster.ownerUserId === currentUser.id;
  const checked = isOwnCluster || followedClusterIds.has(cluster.id) ? "checked" : "";
  const locked = isOwnCluster ? "disabled" : "";
  return `
    <label class="user-detail-cluster">
      <span>
        <strong>${escapeHtml(cluster.name)}</strong>
        <small>${escapeHtml(truncateText(cluster.description || "説明なし", 60))}</small>
      </span>
      <input class="userDetailClusterFollowInput" type="checkbox" data-cluster-id="${escapeHtml(cluster.id)}" ${checked} ${locked} />
    </label>
  `;
}

function renderUserDetailNode(node) {
  return `
    <button class="user-detail-node" type="button" data-user-detail-node-id="${escapeHtml(node.id)}" style="--node-color: ${typeMeta[node.type].color}">
      <span class="node-list-dot" aria-hidden="true">${typeMeta[node.type].glyph}</span>
      <span>
        <strong>${escapeHtml(node.title)}</strong>
        <small>${escapeHtml(getDetailPreview(node))}</small>
      </span>
    </button>
  `;
}

function renderUserDetailPage(data) {
  const user = data.user;
  const userNodes = data.nodes.map(normalizeNode);
  const userClusters = data.clusters.map(normalizeCluster);
  const isCurrentUser = currentUser && user.id === currentUser.id;
  const userActions = isCurrentUser
    ? `<div class="user-detail-actions"><button class="secondary-button user-detail-edit-profile" type="button">プロフィール編集</button><button class="secondary-button user-detail-logout" type="button">ログアウト</button></div>`
    : `<div class="user-detail-actions"><button class="${
        data.blockedByCurrentUser ? "secondary-button" : "danger-button"
      } user-detail-block" type="button" data-user-id="${escapeHtml(user.id)}" data-blocked="${
        data.blockedByCurrentUser ? "1" : "0"
      }">${data.blockedByCurrentUser ? "ブロック解除" : "ブロック"}</button></div>`;
  return `
    <header class="user-detail-header">
      ${renderUserDetailAvatar(user)}
      <div>
        <p class="eyebrow">User</p>
        <h2>${escapeHtml(getUserName(user))} <span class="user-detail-user-id">${escapeHtml(user.userId)}</span></h2>
      </div>
      ${userActions}
    </header>
    <section class="user-detail-section">
      <h3>自己紹介文</h3>
      <p class="user-detail-bio">${escapeHtml(user.bio || "自己紹介文は未設定です")}</p>
    </section>
    <section class="user-detail-section">
      <div class="user-detail-section-heading"><h3>クラスタ一覧</h3><span>${userClusters.length}</span></div>
      <div class="user-detail-list">
        ${userClusters.length ? userClusters.map(renderUserDetailCluster).join("") : `<p class="user-detail-empty">クラスタはまだありません</p>`}
      </div>
    </section>
    <section class="user-detail-section">
      <div class="user-detail-section-heading"><h3>光点一覧</h3><span>${userNodes.length}</span></div>
      <div class="user-detail-list">
        ${userNodes.length ? userNodes.map(renderUserDetailNode).join("") : `<p class="user-detail-empty">光点はまだありません</p>`}
      </div>
    </section>
  `;
}

async function setUserBlock(userId, shouldBlock, button) {
  if (!userId || (currentUser && userId === currentUser.id)) return;
  if (
    shouldBlock &&
    !window.confirm(
      "このユーザーは自分の光点に対して接続線を作ることが出来なくなります。既存の接続線についてもこのユーザーが作成したものは削除されます。よろしいですか？",
    )
  ) {
    return;
  }

  if (button) button.disabled = true;
  try {
    await apiRequest(`/users/${userId}/block`, {
      method: shouldBlock ? "PUT" : "DELETE",
    });
    if (shouldBlock) {
      await loadState();
    }
    await openUserDetail(userId);
  } catch (error) {
    if (button) button.disabled = false;
    window.alert(shouldBlock ? "ブロックできませんでした" : "ブロック解除できませんでした");
  }
}

function bindUserDetailPage() {
  const editProfileButton = userDetailContent.querySelector(".user-detail-edit-profile");
  if (editProfileButton) {
    editProfileButton.addEventListener("click", () => {
      closeUserDetailDialog();
      openProfileDialog();
    });
  }

  const logoutFromDetailButton = userDetailContent.querySelector(".user-detail-logout");
  if (logoutFromDetailButton) {
    logoutFromDetailButton.addEventListener("click", clearAuth);
  }

  const blockButton = userDetailContent.querySelector(".user-detail-block");
  if (blockButton) {
    blockButton.addEventListener("click", () => {
      setUserBlock(blockButton.dataset.userId, blockButton.dataset.blocked !== "1", blockButton);
    });
  }

  userDetailContent.querySelectorAll(".userDetailClusterFollowInput").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      setClusterFollow(checkbox.dataset.clusterId, checkbox.checked, checkbox);
    });
  });

  userDetailContent.querySelectorAll(".user-detail-node").forEach((button) => {
    button.addEventListener("click", () => {
      closeUserDetailDialog();
      openDetail(button.dataset.userDetailNodeId);
    });
  });
}

async function openUserDetail(userId) {
  if (!userId) return;
  try {
    const data = await apiRequest(`/users/${userId}`);
    data.followedClusterIds.forEach((clusterId) => followedClusterIds.add(clusterId));
    userDetailContent.innerHTML = renderUserDetailPage(data);
    bindUserDetailPage();
    if (!userDetailDialog.open) {
      userDetailDialog.showModal();
    }
  } catch (error) {
    userDetailContent.innerHTML = `<p class="user-detail-empty">ユーザー詳細を表示できませんでした</p>`;
    if (!userDetailDialog.open) {
      userDetailDialog.showModal();
    }
  }
}

function closeUserDetailDialog() {
  if (userDetailDialog.open) {
    userDetailDialog.close();
  }
}

function getDetailPreview(node) {
  if (node.body) {
    return truncateText(node.body, 90);
  }
  if (node.mediaName) {
    return node.mediaName;
  }
  if (node.type === "music" || node.type === "video") {
    return `${formatTime(node.duration || 0)} の${typeMeta[node.type].label}`;
  }
  return "本文なし";
}

function renderRelationNodeCard(node, link) {
  const comment = String(link.comment || "").trim();
  const imageUrl = node.type === "image" ? resolveMediaUrl(node.mediaUrl) : "";
  const mediaThumb =
    imageUrl
      ? `<img class="relation-thumb-image" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(node.title)}" />`
      : `<span class="relation-thumb-glyph">${typeMeta[node.type].glyph}</span>`;

  return `
    <button class="relation-node-card" type="button" data-related-node-id="${escapeHtml(node.id)}" style="--node-color: ${typeMeta[node.type].color}">
      <span class="relation-thumb" aria-hidden="true">${mediaThumb}</span>
      <span class="relation-card-main">
        <span class="relation-card-meta">${typeMeta[node.type].label}</span>
        <span class="relation-card-title">${escapeHtml(node.title)}</span>
        <span class="relation-card-body">${escapeHtml(getDetailPreview(node))}</span>
        ${comment ? `<span class="relation-card-comment">${escapeHtml(comment)}</span>` : ""}
      </span>
    </button>
  `;
}

function renderRelationColumn(title, relationItems, side) {
  if (relationItems.length === 0) return "";

  return `
    <aside class="detail-relation-column detail-relation-${side}" aria-label="${title}">
      <div class="relation-column-heading">
        <span>${title}</span>
        <strong>${relationItems.length}</strong>
      </div>
      <div class="relation-card-list">
        ${relationItems.map(({ node, link }) => renderRelationNodeCard(node, link)).join("")}
      </div>
    </aside>
  `;
}

function renderDetailLayout(node) {
  const knownLinks = getAllKnownLinks();
  const sourceItems = knownLinks
    .filter((link) => link.target === node.id)
    .map((link) => ({ link, node: getLinkedNode(link.source) }))
    .filter((item) => item.node);
  const targetItems = knownLinks
    .filter((link) => link.source === node.id)
    .map((link) => ({ link, node: getLinkedNode(link.target) }))
    .filter((item) => item.node);
  const layoutClass = [
    "detail-network",
    sourceItems.length > 0 ? "has-sources" : "",
    targetItems.length > 0 ? "has-targets" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `
    <div class="${layoutClass}">
      ${renderRelationColumn("ソースノード", sourceItems, "source")}
      <section class="detail-current-node" aria-label="現在の光点">
        ${node.type === "text" ? renderTextDetail(node) : renderMediaDetail(node)}
        ${renderNodeLikeAction(node)}
        ${renderNodeFavoriteAction(node)}
        ${renderDetailComposer()}
        ${renderDeleteNodeAction()}
      </section>
      ${renderRelationColumn("ターゲットノード", targetItems, "target")}
    </div>
  `;
}

function renderNodeLikeAction(node) {
  const pressed = node.likedByCurrentUser ? "true" : "false";
  const className = node.likedByCurrentUser ? "node-like-button is-liked" : "node-like-button";
  return `
    <section class="node-like-panel" aria-label="like node">
      <button class="${className}" id="detailLikeButton" type="button" aria-pressed="${pressed}">
        <span class="node-like-icon" aria-hidden="true">👍</span>
        <span>Like</span>
        <strong id="detailLikeCount">${Number(node.likeCount || 0)}</strong>
      </button>
    </section>
  `;
}

function renderNodeFavoriteAction(node) {
  if (!currentUser || node.ownerUserId === currentUser.id) return "";
  const pressed = node.favoritedByCurrentUser ? "true" : "false";
  const className = node.favoritedByCurrentUser ? "node-favorite-button is-favorited" : "node-favorite-button";
  return `
    <section class="node-favorite-panel" aria-label="favorite node">
      <button class="${className}" id="detailFavoriteButton" type="button" aria-pressed="${pressed}">
        <span class="node-favorite-icon" aria-hidden="true">★</span>
        <span>${node.favoritedByCurrentUser ? "お気に入り解除" : "お気に入りに追加"}</span>
      </button>
    </section>
  `;
}

function updateNodeLikeState(id, likeCount, likedByCurrentUser) {
  nodes = nodes.map((node) =>
    node.id === id
      ? {
          ...node,
          likeCount: Math.max(0, Number(likeCount || 0)),
          likedByCurrentUser: Boolean(likedByCurrentUser),
        }
      : node,
  );
}

function updateNodeFavoriteState(id, favoritedByCurrentUser) {
  nodes = nodes.map((node) =>
    node.id === id
      ? {
          ...node,
          favoritedByCurrentUser: Boolean(favoritedByCurrentUser),
        }
      : node,
  );
}

function refreshDetailLikeButton(id) {
  const node = nodes.find((item) => item.id === id);
  const likeButton = detailContent.querySelector("#detailLikeButton");
  const likeCount = detailContent.querySelector("#detailLikeCount");
  if (!node || !likeButton || !likeCount) return;

  likeButton.classList.toggle("is-liked", node.likedByCurrentUser);
  likeButton.setAttribute("aria-pressed", String(node.likedByCurrentUser));
  likeCount.textContent = String(Number(node.likeCount || 0));
}

function refreshDetailFavoriteButton(id) {
  const node = nodes.find((item) => item.id === id);
  const favoriteButton = detailContent.querySelector("#detailFavoriteButton");
  if (!node || !favoriteButton) return;

  favoriteButton.classList.toggle("is-favorited", node.favoritedByCurrentUser);
  favoriteButton.setAttribute("aria-pressed", String(node.favoritedByCurrentUser));
  favoriteButton.querySelector("span:last-child").textContent = node.favoritedByCurrentUser
    ? "お気に入り解除"
    : "お気に入りに追加";
}

async function toggleNodeLike(id) {
  const node = nodes.find((item) => item.id === id);
  if (!node) return;

  const nextLiked = !node.likedByCurrentUser;
  const previousLikeCount = Number(node.likeCount || 0);
  updateNodeLikeState(id, previousLikeCount + (nextLiked ? 1 : -1), nextLiked);
  refreshDetailLikeButton(id);

  if (!apiAvailable) return;

  try {
    const result = await apiRequest(`/nodes/${id}/like`, {
      method: nextLiked ? "PUT" : "DELETE",
    });
    updateNodeLikeState(id, result.likeCount, result.likedByCurrentUser);
    refreshDetailLikeButton(id);
    renderSearchResults();
  } catch (error) {
    apiAvailable = false;
    updateNodeLikeState(id, previousLikeCount, node.likedByCurrentUser);
    refreshDetailLikeButton(id);
    renderSearchResults();
  }
}

async function toggleNodeFavorite(id) {
  const node = nodes.find((item) => item.id === id);
  if (!node || !currentUser || node.ownerUserId === currentUser.id) return;

  const nextFavorited = !node.favoritedByCurrentUser;
  updateNodeFavoriteState(id, nextFavorited);
  refreshDetailFavoriteButton(id);
  renderNodeList();
  renderStats();
  renderNodes();
  drawLinks();

  if (!apiAvailable) return;

  try {
    const result = await apiRequest(`/nodes/${id}/favorite`, {
      method: nextFavorited ? "PUT" : "DELETE",
    });
    updateNodeFavoriteState(id, result.favoritedByCurrentUser);
    refreshDetailFavoriteButton(id);
    refreshScopeViews();
  } catch (error) {
    apiAvailable = false;
    updateNodeFavoriteState(id, node.favoritedByCurrentUser);
    refreshDetailFavoriteButton(id);
    refreshScopeViews();
  }
}

function renderDetailComposer() {
  return `
    <section class="detail-node-composer" aria-label="linked node composer">
      <div class="panel-heading"><h2>この光点から追加</h2></div>
      <button class="panel-toggle detailComposerToggle" type="button" aria-expanded="false" aria-controls="detailComposerPanel">\u3053\u306e\u5149\u70b9\u304b\u3089\u8ffd\u52a0</button>
      <div class="detail-composer-grid" id="detailComposerPanel" hidden>
        <label class="field">
          <span>クラスタ</span>
          <select class="detailComposerCluster"></select>
        </label>
        <label class="field">
          <span>タイプ</span>
          <select class="detailComposerType">
            <option value="text">テキスト</option>
            <option value="image">画像</option>
            <option value="music">音楽</option>
            <option value="video">映像</option>
          </select>
        </label>
        <label class="field">
          <span>タイトル</span>
          <input class="detailComposerTitle" type="text" placeholder="新しい光点のタイトル" maxlength="${INPUT_LIMITS.nodeTitle}" />
        </label>
        <label class="field">
          <span>本文</span>
          <textarea class="detailComposerBody" rows="4" placeholder="本文を入力してください" maxlength="${INPUT_LIMITS.longText}"></textarea>
        </label>
        <div class="field detailComposerMedia is-hidden">
          <span>ファイル</span>
          <input class="detailComposerFile" type="file" accept="image/png,image/jpeg,image/gif,audio/mpeg,video/mp4,.png,.jpg,.jpeg,.gif,.mp3,.mp4" />
          <div class="media-drop-zone detailComposerDropZone">
            <strong>ファイルをドロップ</strong>
            <small class="detailComposerDropStatus">ここへファイルをドラッグ＆ドロップできます</small>
            <button class="ghost-button detailComposerDropClear" type="button" hidden>解除</button>
          </div>
          <div class="clipboard-image-panel detailComposerPastePanel is-hidden" tabindex="0">
            <div class="clipboard-image-copy">
              <strong>画像を貼り付け</strong>
              <small class="detailComposerPasteStatus">ここをクリックして Ctrl+V で貼り付けできます</small>
            </div>
            <img class="detailComposerPastePreview" alt="" hidden />
            <button class="ghost-button detailComposerPasteClear" type="button" hidden>解除</button>
          </div>
          <div class="duration-field detailComposerDurationField is-hidden">
            <span>再生時間</span>
            <div class="duration-grid">
              <input class="detailComposerDuration" type="number" min="10" max="900" value="180" />
              <span>秒</span>
            </div>
          </div>
        </div>
        <button class="primary-button detailComposerAdd" type="button">光点を追加して線で繋ぐ</button>
      </div>
    </section>
  `;
}

function renderDeleteNodeAction() {
  const node = nodes.find((item) => item.id === activeDetailNodeId);
  if (!node || !canManageOwner(node.ownerUserId)) return "";

  return `
    <div class="detail-actions">
      <button class="danger-button" id="deleteNodeButton" type="button">光点を削除</button>
    </div>
  `;
}

function updateComposerMediaFields(type, mediaFieldElement, fileInputElement, durationFieldElement) {
  const isText = type === "text";
  const hasDuration = type === "music" || type === "video";
  mediaFieldElement.classList.toggle("is-hidden", isText);
  durationFieldElement.classList.toggle("is-hidden", !hasDuration);
  fileInputElement.accept =
    type === "image"
      ? "image/png,image/jpeg,image/gif,.png,.jpg,.jpeg,.gif"
      : type === "music"
        ? "audio/mpeg,.mp3"
        : type === "video"
          ? "video/mp4,.mp4"
          : "";
  if (isText) {
    fileInputElement.value = "";
  }
}

function updateDurationFromFile(type, file, durationInputElement) {
  if (!file || (type !== "music" && type !== "video")) return;

  const media = document.createElement(type === "music" ? "audio" : "video");
  const objectUrl = URL.createObjectURL(file);
  media.preload = "metadata";
  media.src = objectUrl;
  media.addEventListener("loadedmetadata", () => {
    if (Number.isFinite(media.duration) && media.duration > 0) {
      durationInputElement.value = String(Math.max(1, Math.round(media.duration)));
    }
    URL.revokeObjectURL(objectUrl);
  });
  media.addEventListener("error", () => URL.revokeObjectURL(objectUrl));
}

function bindDetailComposer(originNode) {
  const composer = detailContent.querySelector(".detail-node-composer");
  if (!composer) return;

  const typeField = composer.querySelector(".detailComposerType");
  const clusterField = composer.querySelector(".detailComposerCluster");
  const titleField = composer.querySelector(".detailComposerTitle");
  const bodyField = composer.querySelector(".detailComposerBody");
  const mediaFieldElement = composer.querySelector(".detailComposerMedia");
  const fileField = composer.querySelector(".detailComposerFile");
  const dropZone = composer.querySelector(".detailComposerDropZone");
  const dropStatus = composer.querySelector(".detailComposerDropStatus");
  const dropClearButton = composer.querySelector(".detailComposerDropClear");
  const pastePanel = composer.querySelector(".detailComposerPastePanel");
  const pastePreview = composer.querySelector(".detailComposerPastePreview");
  const pasteStatus = composer.querySelector(".detailComposerPasteStatus");
  const pasteClearButton = composer.querySelector(".detailComposerPasteClear");
  const durationFieldElement = composer.querySelector(".detailComposerDurationField");
  const durationFieldInput = composer.querySelector(".detailComposerDuration");
  const addButtonElement = composer.querySelector(".detailComposerAdd");
  const toggleButton = composer.querySelector(".detailComposerToggle");
  const composerPanel = composer.querySelector(".detail-composer-grid");
  const pastedDetailImage = { file: null, previewUrl: "" };
  const droppedDetailMedia = { file: null };

  toggleButton.addEventListener("click", () => togglePanel(toggleButton, composerPanel));
  clusterField.innerHTML = getClusterOptionsMarkup();
  clusterField.value = getPublicClusterId();
  const updateDetailMediaFields = () => {
    updateComposerMediaFields(typeField.value, mediaFieldElement, fileField, durationFieldElement);
    updateMediaDropZone(typeField.value, dropZone, droppedDetailMedia, dropStatus, dropClearButton);
    updateImagePastePanel(typeField.value, pastePanel, pastedDetailImage, pastePreview, pasteStatus, pasteClearButton);
  };
  updateDetailMediaFields();
  typeField.addEventListener("change", () => {
    updateDetailMediaFields();
  });
  fileField.addEventListener("change", () => {
    if (fileField.files && fileField.files[0] && !isFileWithinUploadLimit(fileField.files[0])) {
      window.alert(getUploadLimitMessage());
      fileField.value = "";
      return;
    }
    if (fileField.files && fileField.files[0]) {
      clearDroppedMedia(droppedDetailMedia, dropStatus, dropClearButton, dropZone, typeField.value);
      clearPastedImage(pastedDetailImage, pastePreview, pasteStatus, pasteClearButton, pastePanel);
    }
    updateDurationFromFile(typeField.value, fileField.files ? fileField.files[0] : null, durationFieldInput);
  });
  bindMediaDropZone({
    dropZoneElement: dropZone,
    statusElement: dropStatus,
    clearButtonElement: dropClearButton,
    state: droppedDetailMedia,
    fileInputElement: fileField,
    getType: () => typeField.value,
    onAccepted: (file) => {
      clearPastedImage(pastedDetailImage, pastePreview, pasteStatus, pasteClearButton, pastePanel);
      updateDurationFromFile(typeField.value, file, durationFieldInput);
    },
  });
  pastePanel.addEventListener("click", () => pastePanel.focus());
  pastePanel.addEventListener("paste", (event) => {
    const pasted = handleImagePaste(event, pastedDetailImage, pastePreview, pasteStatus, pasteClearButton, pastePanel, fileField);
    if (pasted) {
      clearDroppedMedia(droppedDetailMedia, dropStatus, dropClearButton, dropZone, typeField.value);
    }
  });
  pasteClearButton.addEventListener("click", () => {
    clearPastedImage(pastedDetailImage, pastePreview, pasteStatus, pasteClearButton, pastePanel);
  });
  addButtonElement.addEventListener("click", async () => {
    if (hasOversizedMediaFile(typeField.value, fileField, pastedDetailImage, droppedDetailMedia)) {
      window.alert(getUploadLimitMessage());
      return;
    }
    const mediaFile = getMediaFileForType(typeField.value, fileField, pastedDetailImage, droppedDetailMedia);
    const createdNode = await createNodeFromValues({
      type: typeField.value,
      title: titleField.value,
      body: bodyField.value,
      duration: durationFieldInput.value,
      mediaFile,
      clusterId: clusterField.value,
      originNode,
    });
    await createLinkBetween(originNode.id, createdNode.id, "link");
    titleField.value = "";
    bodyField.value = "";
    fileField.value = "";
    clearDroppedMedia(droppedDetailMedia, dropStatus, dropClearButton, dropZone, typeField.value);
    clearPastedImage(pastedDetailImage, pastePreview, pasteStatus, pasteClearButton, pastePanel);
    durationFieldInput.value = "180";
    renderAll();
    closeDetailDialog();
  });
}

function bindDeleteNodeAction(node) {
  const deleteButton = detailContent.querySelector("#deleteNodeButton");
  if (!deleteButton) return;

  deleteButton.addEventListener("click", () => {
    const shouldDelete = window.confirm("この光点を削除しますか？");
    if (!shouldDelete) return;
    deleteNode(node.id);
  });
}

function bindNodeLikeAction(node) {
  const likeButton = detailContent.querySelector("#detailLikeButton");
  if (!likeButton) return;

  likeButton.addEventListener("click", () => {
    toggleNodeLike(node.id);
  });
}

function bindNodeFavoriteAction(node) {
  const favoriteButton = detailContent.querySelector("#detailFavoriteButton");
  if (!favoriteButton) return;

  favoriteButton.addEventListener("click", () => {
    toggleNodeFavorite(node.id);
  });
}

function bindRelationNodeCards() {
  detailContent.querySelectorAll(".relation-node-card").forEach((card) => {
    card.addEventListener("click", () => {
      const relatedNodeId = card.dataset.relatedNodeId;
      selectedNodeId = relatedNodeId;
      updateSelectedNodeClass(relatedNodeId);
      centerUniverseOnNode(relatedNodeId);
      openDetail(relatedNodeId);
    });
  });
}

async function bindMusicArtwork(node) {
  if (node.type !== "music" || !node.mediaUrl) return;

  const artworkFrame = Array.from(detailContent.querySelectorAll("[data-music-artwork-node-id]")).find(
    (element) => element.dataset.musicArtworkNodeId === node.id,
  );
  if (!artworkFrame) return;

  artworkFrame.classList.add("is-loading");
  const artwork = await getMusicArtwork(node.mediaUrl);
  if (!artworkFrame.isConnected || activeDetailNodeId !== node.id) return;

  artworkFrame.classList.remove("is-loading");
  if (!artwork) {
    artworkFrame.classList.add("has-no-artwork");
    return;
  }

  artworkFrame.classList.add("has-artwork");
  artworkFrame.innerHTML = `<img class="music-artwork-image" src="${artwork.dataUrl}" alt="${escapeHtml(node.title)}" />`;
}

function bindDetailSelectionEditor(node) {
  const startInput = document.querySelector("#detailStartInput");
  const endInput = document.querySelector("#detailEndInput");
  const saveButton = document.querySelector("#saveSelectionButton");
  if (!startInput || !endInput || !saveButton) return;

  if (activeSelectionSyncCleanup) {
    activeSelectionSyncCleanup();
    activeSelectionSyncCleanup = null;
  }

  if (node.type === "text") {
    const textBody = document.querySelector("#detailTextBody");
    if (textBody) {
      let dragStartOffset = null;
      const syncOffsets = (offsets) => {
        if (!offsets) return;
        startInput.value = String(offsets.start);
        endInput.value = String(offsets.end);
        updateTextMarker(textBody, node.body, offsets.start, offsets.end);
      };
      const syncSelectionInputs = (shouldUpdateMarker = false) => {
        const offsets = getTextSelectionOffsets(textBody);
        if (!offsets) return;
        startInput.value = String(offsets.start);
        endInput.value = String(offsets.end);
        if (shouldUpdateMarker) {
          updateTextMarker(textBody, node.body, offsets.start, offsets.end);
        }
      };
      const syncSelectionMarker = () => syncSelectionInputs(true);
      const syncManualMarker = () => updateTextMarker(textBody, node.body, startInput.value, endInput.value);
      const syncPointerStart = (event) => {
        dragStartOffset = getTextOffsetFromPoint(textBody, event.clientX, event.clientY);
      };
      const syncPointerEnd = (event) => {
        if (dragStartOffset === null) {
          syncSelectionMarker();
          return;
        }

        const endOffset = getTextOffsetFromPoint(textBody, event.clientX, event.clientY);
        if (endOffset === null || endOffset === dragStartOffset) {
          dragStartOffset = null;
          syncSelectionMarker();
          return;
        }

        syncOffsets({
          start: Math.min(dragStartOffset, endOffset),
          end: Math.max(dragStartOffset, endOffset),
        });
        dragStartOffset = null;
      };

      textBody.addEventListener("pointerdown", syncPointerStart);
      textBody.addEventListener("pointerup", syncPointerEnd);
      textBody.addEventListener("mouseup", syncSelectionMarker);
      textBody.addEventListener("keyup", syncSelectionMarker);
      textBody.addEventListener("touchend", syncSelectionMarker);
      document.addEventListener("selectionchange", syncSelectionInputs);
      document.addEventListener("pointerup", syncPointerEnd);
      startInput.addEventListener("input", syncManualMarker);
      startInput.addEventListener("change", syncManualMarker);
      startInput.addEventListener("keyup", syncManualMarker);
      endInput.addEventListener("input", syncManualMarker);
      endInput.addEventListener("change", syncManualMarker);
      endInput.addEventListener("keyup", syncManualMarker);
      activeSelectionSyncCleanup = () => {
        textBody.removeEventListener("pointerdown", syncPointerStart);
        textBody.removeEventListener("pointerup", syncPointerEnd);
        textBody.removeEventListener("mouseup", syncSelectionMarker);
        textBody.removeEventListener("keyup", syncSelectionMarker);
        textBody.removeEventListener("touchend", syncSelectionMarker);
        document.removeEventListener("selectionchange", syncSelectionInputs);
        document.removeEventListener("pointerup", syncPointerEnd);
        startInput.removeEventListener("input", syncManualMarker);
        startInput.removeEventListener("change", syncManualMarker);
        startInput.removeEventListener("keyup", syncManualMarker);
        endInput.removeEventListener("input", syncManualMarker);
        endInput.removeEventListener("change", syncManualMarker);
        endInput.removeEventListener("keyup", syncManualMarker);
      };
    }
  } else {
    const timeline = document.querySelector("#detailTimeline");
    const timelineSelection = document.querySelector("#detailTimelineSelection");
    const rangeLabel = document.querySelector("#detailRangeLabel");
    if (timeline && timelineSelection && rangeLabel) {
      const max = node.duration || 0;
      let dragStartOffset = null;
      let isDragging = false;
      const syncMediaOffsets = (start, end) => {
        const safeStart = clamp(Math.round(Number(start || 0)), 0, max);
        const safeEnd = clamp(Math.round(Number(end || max)), safeStart, max);
        const startPercent = max === 0 ? 0 : (safeStart / max) * 100;
        const widthPercent = max === 0 ? 0 : ((safeEnd - safeStart) / max) * 100;

        startInput.value = String(safeStart);
        endInput.value = String(safeEnd);
        timelineSelection.style.setProperty("--start", `${startPercent}%`);
        timelineSelection.style.setProperty("--width", `${widthPercent}%`);
        rangeLabel.textContent = `${formatTime(safeStart)} - ${formatTime(safeEnd)}`;
      };
      const getTimelineOffset = (event) => {
        const rect = timeline.getBoundingClientRect();
        const ratio = rect.width === 0 ? 0 : clamp((event.clientX - rect.left) / rect.width, 0, 1);
        return Math.round(ratio * max);
      };
      const syncManualMarker = () => syncMediaOffsets(startInput.value, endInput.value);
      const syncPointerStart = (event) => {
        event.preventDefault();
        dragStartOffset = getTimelineOffset(event);
        isDragging = true;
        if (timeline.setPointerCapture) {
          timeline.setPointerCapture(event.pointerId);
        }
      };
      const syncPointerMove = (event) => {
        if (!isDragging || dragStartOffset === null) return;
        event.preventDefault();
        const currentOffset = getTimelineOffset(event);
        syncMediaOffsets(Math.min(dragStartOffset, currentOffset), Math.max(dragStartOffset, currentOffset));
      };
      const syncPointerEnd = (event) => {
        if (!isDragging || dragStartOffset === null) return;
        event.preventDefault();
        const endOffset = getTimelineOffset(event);
        syncMediaOffsets(Math.min(dragStartOffset, endOffset), Math.max(dragStartOffset, endOffset));
        dragStartOffset = null;
        isDragging = false;
      };

      timeline.addEventListener("pointerdown", syncPointerStart);
      timeline.addEventListener("pointermove", syncPointerMove);
      timeline.addEventListener("pointerup", syncPointerEnd);
      document.addEventListener("pointerup", syncPointerEnd);
      startInput.addEventListener("input", syncManualMarker);
      startInput.addEventListener("change", syncManualMarker);
      startInput.addEventListener("keyup", syncManualMarker);
      endInput.addEventListener("input", syncManualMarker);
      endInput.addEventListener("change", syncManualMarker);
      endInput.addEventListener("keyup", syncManualMarker);
      activeSelectionSyncCleanup = () => {
        timeline.removeEventListener("pointerdown", syncPointerStart);
        timeline.removeEventListener("pointermove", syncPointerMove);
        timeline.removeEventListener("pointerup", syncPointerEnd);
        document.removeEventListener("pointerup", syncPointerEnd);
        startInput.removeEventListener("input", syncManualMarker);
        startInput.removeEventListener("change", syncManualMarker);
        startInput.removeEventListener("keyup", syncManualMarker);
        endInput.removeEventListener("input", syncManualMarker);
        endInput.removeEventListener("change", syncManualMarker);
        endInput.removeEventListener("keyup", syncManualMarker);
      };
    }
  }

  saveButton.addEventListener("click", () => {
    updateNodeSelection(node.id, startInput.value, endInput.value);
  });
}

function getTextSelectionOffsets(container) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return null;

  const range = selection.getRangeAt(0);
  if (!range.intersectsNode(container)) return null;

  const max = container.textContent.length;
  const start = getTextOffset(container, range.startContainer, range.startOffset, 0);
  const end = getTextOffset(container, range.endContainer, range.endOffset, max);

  return {
    start: clamp(start, 0, max),
    end: clamp(end, start, max),
  };
}

function getTextOffset(container, boundaryNode, boundaryOffset, outsideFallback) {
  if (!container.contains(boundaryNode)) return outsideFallback;

  let textOffset = 0;
  let foundOffset = null;

  const measure = (node) => node.textContent.length;
  const walk = (node) => {
    if (foundOffset !== null) return;

    if (node === boundaryNode) {
      if (node.nodeType === Node.TEXT_NODE) {
        foundOffset = textOffset + boundaryOffset;
        return;
      }

      let childText = 0;
      for (let index = 0; index < boundaryOffset; index += 1) {
        childText += measure(node.childNodes[index]);
      }
      foundOffset = textOffset + childText;
      return;
    }

    if (node.nodeType === Node.TEXT_NODE) {
      textOffset += node.nodeValue.length;
      return;
    }

    node.childNodes.forEach(walk);
  };

  walk(container);
  return foundOffset ?? outsideFallback;
}

function getTextOffsetFromPoint(container, clientX, clientY) {
  const range = getCaretRangeFromPoint(clientX, clientY);
  if (!range) return null;
  return getTextOffset(container, range.startContainer, range.startOffset, null);
}

function getCaretRangeFromPoint(clientX, clientY) {
  if (document.caretPositionFromPoint) {
    const position = document.caretPositionFromPoint(clientX, clientY);
    if (!position) return null;
    const range = document.createRange();
    range.setStart(position.offsetNode, position.offset);
    range.collapse(true);
    return range;
  }

  if (document.caretRangeFromPoint) {
    return document.caretRangeFromPoint(clientX, clientY);
  }

  return null;
}

function openDetail(id) {
  const node = nodes.find((item) => item.id === id);
  if (!node) return;

  activeDetailNodeId = id;
  detailType.innerHTML = renderDetailMeta(node);
  detailTitle.textContent = node.title;
  detailContent.innerHTML = renderDetailLayout(node);
  bindDetailMetaActions();
  bindDetailComposer(node);
  bindNodeLikeAction(node);
  bindNodeFavoriteAction(node);
  bindDeleteNodeAction(node);
  bindRelationNodeCards();
  bindMusicArtwork(node);
  if (activeSelectionSyncCleanup) {
    activeSelectionSyncCleanup();
    activeSelectionSyncCleanup = null;
  }

  if (!detailDialog.open) {
    detailDialog.showModal();
  }
}

async function shuffleNodes() {
  if (!currentUser || Number(currentUser.role) !== 1) return;

  nodes = separateNodePositions(
    nodes.map((node) => ({
      ...node,
      x: clamp(node.x + Math.random() * 18 - 9, 12, 88),
      y: clamp(node.y + Math.random() * 18 - 9, 16, 84),
    })),
    120,
  );

  renderAll();

  if (!apiAvailable) return;
  try {
    await Promise.all(
      nodes.map((node) =>
        apiRequest(`/nodes/${node.id}/position`, {
          method: "PATCH",
          body: JSON.stringify({ x: node.x, y: node.y }),
        }),
      ),
    );
  } catch (error) {
    apiAvailable = false;
  }
}

function clearLinks() {
  if (hiddenLinks !== null) {
    links = hiddenLinks;
    hiddenLinks = null;
  } else if (links.length > 0) {
    hiddenLinks = links;
    links = [];
  }

  renderStats();
  updateClearLinksButton();
  drawLinks();
}

typeInput.addEventListener("change", updateTypeFields);
mediaFileInput.addEventListener("change", updateDurationFromMediaFile);
bindMediaDropZone({
  dropZoneElement: mediaDropZone,
  statusElement: mediaDropStatus,
  clearButtonElement: clearDroppedMediaButton,
  state: droppedComposerMedia,
  fileInputElement: mediaFileInput,
  getType: () => typeInput.value,
  onAccepted: (file) => {
    clearPastedImage(pastedComposerImage, clipboardImagePreview, clipboardImageStatus, clearClipboardImageButton, clipboardImagePanel);
    updateDurationFromFile(typeInput.value, file, durationInput);
  },
});
clipboardImagePanel.addEventListener("click", () => clipboardImagePanel.focus());
clipboardImagePanel.addEventListener("paste", (event) => {
  const pasted = handleImagePaste(
    event,
    pastedComposerImage,
    clipboardImagePreview,
    clipboardImageStatus,
    clearClipboardImageButton,
    clipboardImagePanel,
    mediaFileInput,
  );
  if (pasted) {
    clearDroppedMedia(droppedComposerMedia, mediaDropStatus, clearDroppedMediaButton, mediaDropZone, typeInput.value);
  }
});
clearClipboardImageButton.addEventListener("click", () => {
  clearPastedImage(pastedComposerImage, clipboardImagePreview, clipboardImageStatus, clearClipboardImageButton, clipboardImagePanel);
});
addButton.addEventListener("click", addNode);
addClusterButton.addEventListener("click", addCluster);
loginButton.addEventListener("click", login);
loginPasswordInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.isComposing) return;
  event.preventDefault();
  login();
});
signupButton.addEventListener("click", signup);
userSummaryButton.addEventListener("click", () => {
  if (currentUser) {
    openUserDetail(currentUser.id);
  }
});
closeProfileDialogButton.addEventListener("click", closeProfileDialog);
cancelProfileButton.addEventListener("click", closeProfileDialog);
saveProfileButton.addEventListener("click", saveProfile);
closeUserDetailDialogButton.addEventListener("click", closeUserDetailDialog);
closeClusterNodesDialogButton.addEventListener("click", closeClusterNodesDialog);
composerToggle.addEventListener("click", () => togglePanel(composerToggle, composerPanel));
clusterToggle.addEventListener("click", () => togglePanel(clusterToggle, clusterPanel));
nodeListTabs.forEach((tab) => {
  tab.addEventListener("click", () => setNodeListMode(tab.dataset.nodeListMode));
});
clusterListTabs.forEach((tab) => {
  tab.addEventListener("click", () => setClusterListMode(tab.dataset.clusterListMode));
});
shuffleButton.addEventListener("click", shuffleNodes);
clearLinksButton.addEventListener("click", clearLinks);
searchTypeInput.addEventListener("change", resetSearchResults);
searchWordInput.addEventListener("input", resetSearchResults);
searchSortInput.addEventListener("change", resetSearchResults);
searchOrderInput.addEventListener("change", resetSearchResults);
searchSidebarToggle.addEventListener("click", toggleSearchSidebar);
closeDialogButton.addEventListener("click", () => {
  closeDetailDialog();
});
closeConnectionDialogButton.addEventListener("click", closeConnectionDialog);
cancelConnectionButton.addEventListener("click", closeConnectionDialog);
disconnectConnectionButton.addEventListener("click", async () => {
  if (!pendingConnectionDelete) return;
  await deleteLinkBetween(pendingConnectionDelete.source, pendingConnectionDelete.target);
  closeConnectionDialog();
});
confirmConnectionButton.addEventListener("click", async () => {
  if (!pendingConnection) return;
  await createLinkBetween(pendingConnection.source, pendingConnection.target, connectionCommentInput.value);
  closeConnectionDialog();
});
nodesLayer.addEventListener("pointermove", updateLinkCommentTooltip);
nodesLayer.addEventListener("pointerleave", hideLinkCommentTooltip);
nodesLayer.addEventListener("dblclick", handleLinkCommentDoubleClick);
nodesLayer.addEventListener("pointerdown", startUniversePan);
nodesLayer.addEventListener("pointermove", moveUniversePan);
nodesLayer.addEventListener("pointerup", finishUniversePan);
nodesLayer.addEventListener("pointercancel", finishUniversePan);
nodesLayer.addEventListener("wheel", handleUniverseWheel, { passive: false });
window.addEventListener("resize", resizeCanvas);
detailDialog.addEventListener("close", stopDetailPlayback);

setSearchSidebarCollapsed(localStorage.getItem("textosphereSearchCollapsed") === "1");
updateTypeFields();
if (authToken) {
  loadState();
} else {
  showAuth();
}

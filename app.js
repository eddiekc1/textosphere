const nodesLayer = document.querySelector("#nodesLayer");
const temporaryNodeBin = document.querySelector("#temporaryNodeBin");
const temporaryNodeList = document.querySelector("#temporaryNodeList");
const temporaryNodeCount = document.querySelector("#temporaryNodeCount");
const appShell = document.querySelector("#appShell");
const leftSidebar = document.querySelector("#leftSidebar");
const sidebarToggleButton = document.querySelector("#sidebarToggleButton");
const authShell = document.querySelector("#authShell");
const authGrid = document.querySelector(".auth-grid");
const loginPanel = document.querySelector("#loginPanel");
const signupPanel = document.querySelector("#signupPanel");
const passwordResetPanel = document.querySelector("#passwordResetPanel");
const authMessage = document.querySelector("#authMessage");
const loginEmailInput = document.querySelector("#loginEmailInput");
const loginPasswordInput = document.querySelector("#loginPasswordInput");
const loginButton = document.querySelector("#loginButton");
const forgotPasswordButton = document.querySelector("#forgotPasswordButton");
const resetEmailInput = document.querySelector("#resetEmailInput");
const resetPasswordButton = document.querySelector("#resetPasswordButton");
const backToLoginButton = document.querySelector("#backToLoginButton");
const signupEmailInput = document.querySelector("#signupEmailInput");
const signupUserNameInput = document.querySelector("#signupUserNameInput");
const signupUserIdInput = document.querySelector("#signupUserIdInput");
const signupPasswordInput = document.querySelector("#signupPasswordInput");
const signupBirthDateInput = document.querySelector("#signupBirthDateInput");
const signupProfileIconInput = document.querySelector("#signupProfileIconInput");
const signupBioInput = document.querySelector("#signupBioInput");
const signupVerificationField = document.querySelector("#signupVerificationField");
const signupVerificationCodeInput = document.querySelector("#signupVerificationCodeInput");
const signupButton = document.querySelector("#signupButton");
const currentUserIcon = document.querySelector("#currentUserIcon");
const currentUserId = document.querySelector("#currentUserId");
const currentUserBio = document.querySelector("#currentUserBio");
const userSummaryButton = document.querySelector("#userSummaryButton");
const notificationTriggerButton = document.querySelector("#notificationTriggerButton");
const notificationCount = document.querySelector("#notificationCount");
const notificationDialog = document.querySelector("#notificationDialog");
const closeNotificationDialogButton = document.querySelector("#closeNotificationDialogButton");
const notificationList = document.querySelector("#notificationList");
const markNotificationsReadButton = document.querySelector("#markNotificationsReadButton");
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
const universeModeButton = document.querySelector("#universeModeButton");
const homeButton = document.querySelector("#homeButton");
const saveHomeButton = document.querySelector("#saveHomeButton");
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
const shareDialog = document.querySelector("#shareDialog");
const closeShareDialogButton = document.querySelector("#closeShareDialogButton");
const shareDialogTitle = document.querySelector("#shareDialogTitle");
const shareDialogContent = document.querySelector("#shareDialogContent");
const relayDialog = document.querySelector("#relayDialog");
const closeRelayDialogButton = document.querySelector("#closeRelayDialogButton");
const relayDialogTitle = document.querySelector("#relayDialogTitle");
const relayDialogContent = document.querySelector("#relayDialogContent");
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
const clusterNodesActions = document.querySelector("#clusterNodesActions");
const clusterNodesContent = document.querySelector("#clusterNodesContent");
const nodeProcessingDialog = document.querySelector("#nodeProcessingDialog");
const nodeProcessingMessage = document.querySelector("#nodeProcessingMessage");
const brandInfoButtons = document.querySelectorAll(".brand-info-button");
const brandInfoDialog = document.querySelector("#brandInfoDialog");
const closeBrandInfoDialogButton = document.querySelector("#closeBrandInfoDialogButton");
const brandInfoTabs = document.querySelectorAll(".brand-info-tab");
const brandInfoPanels = document.querySelectorAll(".brand-info-panel");

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
const DEFAULT_LINK_COMMENT = "link";
const MAX_UPLOAD_BYTES = 30 * 1024 * 1024;
const MAX_UPLOAD_MB = 30;
const MAX_VIDEO_UPLOAD_BYTES = 50 * 1024 * 1024;
const MAX_VIDEO_UPLOAD_MB = 50;
const LOCALE_STORAGE_KEY = "textosphereLocale";
const SUPPORTED_LOCALES = ["en", "ja"];

const i18n = {
  en: {
    "common.cancel": "Cancel",
    "common.close": "Close",
    "common.clear": "Clear",
    "common.save": "Save",
    "common.all": "All",
    "common.own": "Own",
    "common.following": "Following",
    "common.followingShort": "Following",
    "common.favorites": "Favorites",
    "common.none": "None",
    "common.empty": "Empty",
    "common.enabled": "Enabled",
    "common.disabled": "Disabled",
    "common.loading": "Loading",
    "common.copy": "Copy",
    "common.copied": "Copied",
    "common.delete": "Delete",
    "common.file": "File",
    "common.open": "Open",
    "common.block": "Block",
    "common.unblock": "Unblock",
    "common.logout": "Log out",
    "locale.label": "Language",
    "locale.english": "English",
    "locale.japanese": "Japanese",
    "nav.menu": "Menu",
    "nav.hideSidebar": "Hide sidebar",
    "nav.showSidebar": "Show sidebar",
    "composer.createPost": "Create post",
    "composer.newNode": "New node",
    "composer.addNode": "Add node",
    "composer.addFromNode": "Add from this node",
    "composer.addAndConnect": "Add node and connect",
    "type.text": "Text",
    "type.image": "Image",
    "type.music": "Music",
    "type.video": "Video",
    "type.relay": "Relay",
    "node.listTitle": "Nodes",
    "node.listTabs": "Node list view",
    "node.type": "Type",
    "node.title": "Title",
    "node.titlePlaceholder": "A memory fragment, song title, video title",
    "node.newTitlePlaceholder": "New node title",
    "node.body": "Body",
    "node.bodyPlaceholder": "Enter body text",
    "node.addButton": "Add node",
    "node.delete": "Delete node",
    "node.noBody": "No body",
    "node.emptyOwn": "No nodes yet",
    "node.emptyFollowing": "No nodes from followed clusters yet",
    "node.emptyFavorites": "No favorite nodes yet",
    "node.open": "Open node",
    "node.createdAt": "Created at {date}",
    "node.connectionCount": "Connections {count}",
    "node.tempLimit": "You can keep up to {limit} nodes in the temporary area.",
    "node.restoreFromTemporary": "Take {title} out of the temporary area",
    "node.deleteConfirm": "Delete this node?",
    "node.sourceNodes": "Source nodes",
    "node.targetNodes": "Target nodes",
    "cluster.type": "Cluster",
    "cluster.listTitle": "Clusters",
    "cluster.listTabs": "Cluster list view",
    "cluster.newCluster": "New cluster",
    "cluster.name": "Cluster name",
    "cluster.description": "Description",
    "cluster.descriptionPlaceholder": "Enter a description",
    "cluster.addCluster": "Add cluster",
    "cluster.noDescription": "No description",
    "cluster.noClusters": "No clusters yet",
    "cluster.follow": "Follow",
    "cluster.followTitle": "Follow cluster",
    "cluster.followers": "Followers {count}",
    "cluster.delete": "Delete cluster",
    "cluster.deleteConfirm": "Delete this cluster?\nNodes in the cluster will move to the Public cluster.",
    "cluster.deleteError": "Unable to delete the cluster. Please try again later.",
    "cluster.moveError": "Unable to move the node to another cluster. Please try again later.",
    "cluster.move": "Move",
    "cluster.moveTo": "Move to",
    "cluster.noMoveTarget": "No destination",
    "cluster.cannotMove": "Cannot move",
    "cluster.otherUserNode": "Another user's node",
    "cluster.nodes": "Cluster nodes",
    "home.button": "Home",
    "home.moveTitle": "Move to home",
    "home.notSetTitle": "Home is not set yet",
    "home.saveButton": "Set home here",
    "home.saveTitle": "Set this place as home",
    "home.saving": "Saving",
    "home.saved": "Saved",
    "home.saveError": "Unable to save home",
    "universe.aria": "Information star map",
    "universe.context": "Context",
    "universe.explore": "Explore",
    "universe.switchToContext": "Switch to context mode",
    "universe.switchToExplore": "Switch to explore mode",
    "universe.coordinate": "Coordinates {x}, {y}",
    "temporary.aria": "Temporary area",
    "temporary.title": "Temporary",
    "temporary.restore": "Restore",
    "search.title": "Search",
    "search.show": "Show search",
    "search.hide": "Hide search",
    "search.kind": "Kind",
    "search.word": "Word",
    "search.wordPlaceholder": "Title, body, user name, bio, cluster name, cluster description",
    "search.sort": "Sort",
    "search.order": "Order",
    "search.createdAt": "Created at",
    "search.likeCount": "Likes",
    "search.connectionCount": "Connections",
    "search.followerCount": "Followers",
    "search.desc": "Descending",
    "search.asc": "Ascending",
    "search.noResults": "No results found",
    "search.showMore": "Show 20 more",
    "media.dropFile": "Drop file",
    "media.dropAny": "Drag and drop a file here",
    "media.dropImage": "Drag and drop a PNG/JPG/GIF here",
    "media.dropMusic": "Drag and drop an MP3 here",
    "media.dropVideo": "Drag and drop an MP4 here",
    "media.pasteImage": "Paste image",
    "media.pasteHint": "Click here and press Ctrl+V to paste",
    "media.pasted": "Pasted {name}",
    "media.dropped": "Dropped {name}",
    "media.unsupported": "This file cannot be used for the selected type.",
    "media.duration": "Duration",
    "media.seconds": "sec",
    "media.selectFile": "Choose file",
    "media.noFile": "No file selected",
    "media.relayImage": "Relay image",
    "link.previewLoading": "Loading link preview",
    "link.defaultTitle": "Link",
    "connection.type": "Connection",
    "connection.connectTitle": "Connect nodes",
    "connection.editTitle": "Edit connection comment",
    "connection.commentTitle": "Connection comment",
    "connection.summary": "Connect {source} to {target}",
    "connection.commentSummary": "Comment from {source} to {target}",
    "connection.comment": "Comment",
    "connection.commentPlaceholder": "Add a comment to this connection",
    "connection.connectButton": "Connect",
    "connection.disconnect": "Disconnect",
    "connection.save": "Save",
    "connection.cannotEdit": "This connection cannot be created or edited.",
    "connection.cannotCreate": "This connection cannot be created.",
    "connection.kind": "Connection",
    "profile.emptyBio": "Bio is not set.",
    "profile.bioHeading": "Bio",
    "profile.userClusters": "Clusters",
    "profile.userNodes": "Nodes",
    "profile.deleteUser": "Delete user",
    "profile.editProfile": "Edit profile",
    "profile.noUserDetail": "Unable to show user details",
    "profile.blockConfirm": "This user will no longer be able to create connections to your nodes. Existing connections created by this user will also be deleted. Continue?",
    "profile.blockError": "Unable to block",
    "profile.unblockError": "Unable to unblock",
    "profile.deleteConfirm": "Delete your user account? This cannot be undone. Your posts, clusters, connections, and login information will also be deleted.",
    "profile.deleteError": "Unable to delete the user. Please try again later.",
    "favorite.pinned": "Pinned favorite",
    "favorite.remove": "Remove favorite",
    "favorite.add": "Add favorite",
    "share.title": "Share",
    "share.panelTitle": "Share",
    "share.enabled": "Share enabled",
    "share.disabled": "Share disabled",
    "share.publicLinks": "View public links",
    "share.settings": "Share settings",
    "share.links": "Share links",
    "share.loading": "Loading share settings",
    "share.loadError": "Unable to load share settings",
    "share.allow": "Allow sharing this node",
    "share.disableNote": "When disabled, new share links cannot be created and existing links cannot be viewed.",
    "share.range": "Share range",
    "share.context": "Share with context",
    "share.contextHint": "Show source/target nodes and connection comments too",
    "share.single": "Share this node only",
    "share.singleHint": "Show only the body and media",
    "share.create": "Create share link",
    "share.ownerLinks": "Showing share links published by the node owner.",
    "share.nodeOnly": "Node only",
    "share.withContext": "With context",
    "share.disabledStatus": "Disabled",
    "share.enabledStatus": "Enabled",
    "share.noLinks": "No share links yet",
    "share.noPublicLinks": "No public share links yet",
    "share.urlLabel": "Share URL",
    "share.disable": "Disable",
    "share.saveError": "Unable to save share settings. Please try again later.",
    "share.createError": "Unable to create a share link. Check whether sharing is enabled.",
    "share.disableConfirm": "Disable this share link?",
    "share.disableError": "Unable to disable the share link. Please try again later.",
    "relay.start": "Start relay",
    "relay.viewLog": "View relay log",
    "relay.closed": "Relay has ended",
    "relay.active": "Relay active",
    "relay.private": "Visible only to relay participants",
    "relay.selectable": "You can choose relay recipients",
    "relay.ownerStarts": "Available when the owner starts a relay",
    "relay.recipients": "Recipients",
    "relay.peopleCount": "{count} users",
    "relay.noLikedUsers": "No users have liked this node yet",
    "relay.confirmRecipients": "Confirm",
    "relay.readonly": "Relay log is read-only",
    "relay.messagePlaceholder": "Enter a message",
    "relay.send": "Send",
    "relay.loading": "Loading relay",
    "relay.self": "You",
    "relay.chat": "Chat",
    "relay.noMessages": "No messages yet",
    "relay.selectThenStart": "Select recipients and confirm to start the relay",
    "relay.others": "Participants",
    "relay.undecided": "Not decided",
    "relay.close": "End relay",
    "relay.openError": "Unable to open relay",
    "relay.reactionError": "Unable to send reaction",
    "relay.selectError": "Select at least one recipient",
    "relay.startError": "Unable to start relay",
    "relay.messageError": "Unable to send message",
    "relay.closeConfirm": "End the relay on this node?",
    "relay.closeError": "Unable to end relay",
    "notification.trigger": "Notifications",
    "notification.listTitle": "Notifications",
    "notification.markAllRead": "Mark all read",
    "notification.empty": "No notifications yet",
    "notification.more": "Show next 20",
    "notification.someone": "Someone",
    "notification.yourNode": "your node",
    "notification.relatedNode": "another node",
    "notification.yourCluster": "your cluster",
    "notification.relayInvite": "{actor} invited you to a relay",
    "notification.linkCreated": "{actor} connected \"{related}\" to \"{node}\"",
    "notification.like": "{actor} liked \"{node}\"",
    "notification.favorite": "{actor} added \"{node}\" to favorites",
    "notification.clusterFollow": "{actor} followed cluster \"{cluster}\"",
    "notification.generic": "You have a new notification",
    "notification.openNode": "Open node",
    "notification.openCluster": "Open cluster",
    "processing.addingNode": "Adding node",
    "processing.uploadSave": "Uploading and saving. Please keep this screen open.",
    "processing.saveNode": "Saving node.",
    "processing.uploadConnect": "Uploading and connecting. Please keep this screen open.",
    "processing.saveConnect": "Saving and connecting node.",
    "auth.brandStatement": "Connect points into lines.",
    "auth.loginTitle": "Log in",
    "auth.loginIdLabel": "Email address / User ID",
    "auth.passwordLabel": "Password",
    "auth.loginButton": "Log in",
    "auth.forgotPassword": "Forgot your password?",
    "auth.signupTitle": "Create account",
    "auth.emailLabel": "Email address",
    "auth.userNameLabel": "Display name",
    "auth.userNamePlaceholder": "Display name",
    "auth.userIdLabel": "User ID",
    "auth.userIdPlaceholder": "Letters, numbers, _, -",
    "auth.userIdHint": "Letters, numbers, _, and - only. 1-25 characters. You can use this to log in.",
    "auth.passwordHint":
      "8-25 characters. Use at least 3 of these: uppercase letters, lowercase letters, numbers, symbols (_ - ! # $ % ( ) [ ] @ + * ? /).",
    "auth.passwordHintShort": "8-25 characters. Use at least 3 of these: uppercase letters, lowercase letters, numbers, symbols.",
    "auth.birthDateLabel": "Birth date",
    "auth.birthDateHint": "This is not public.",
    "auth.profileIconLabel": "Profile icon",
    "auth.bioLabel": "Bio",
    "auth.bioPlaceholder": "Bio",
    "auth.signupButton": "Create account",
    "auth.sendVerificationButton": "Send verification code",
    "auth.verifySignupButton": "Verify and create account",
    "auth.verificationCodeLabel": "Verification code",
    "auth.verificationCodePlaceholder": "6-digit code",
    "auth.verificationSent": "We sent a verification code to {email}. Enter it to create your account.",
    "auth.errorVerification": "Unable to verify the code. Check the latest email and try again.",
    "auth.resetTitle": "Password reset",
    "auth.resetInstruction":
      'To reset your password, enter your registered email address and press the "Password reset" button.',
    "auth.resetButton": "Password reset",
    "auth.backToLogin": "Back to log in",
    "auth.resetSent": "If that email address is registered, a reset password has been sent.",
    "auth.errorReset": "Unable to reset the password. Check the email address and try again.",
    "auth.errorLogin": "Unable to log in. Check your email address, password, and login permission.",
    "auth.errorSignup": "Unable to create the account. Check your User ID, email address, and password requirements.",
    "profile.type": "User",
    "profile.title": "Edit profile",
    "profile.passwordPlaceholder": "Leave blank to keep current password",
    "profile.passwordHint":
      "Leave blank to keep current password. To change it, use 8-25 characters and at least 3 of these: uppercase letters, lowercase letters, numbers, symbols (_ - ! # $ % ( ) [ ] @ + * ? /).",
    "profile.passwordHintShort": "Leave blank to keep current password. To change it, use 8-25 characters and at least 3 character types.",
    "profile.errorSave": "Unable to save the profile. Check your User ID and password requirements.",
    "upload.limit": "Please keep the file size at {mb}MB or less.",
  },
  ja: {
    "common.cancel": "キャンセル",
    "common.close": "閉じる",
    "common.clear": "解除",
    "common.save": "保存",
    "common.all": "すべて",
    "common.own": "自分",
    "common.following": "フォロー中",
    "common.followingShort": "フォロー",
    "common.favorites": "お気に入り",
    "common.none": "なし",
    "common.empty": "空",
    "common.enabled": "有効",
    "common.disabled": "無効",
    "common.loading": "読み込み中",
    "common.copy": "コピー",
    "common.copied": "コピー済み",
    "common.delete": "削除",
    "common.file": "ファイル",
    "common.open": "開く",
    "common.block": "ブロック",
    "common.unblock": "ブロック解除",
    "common.logout": "ログアウト",
    "locale.label": "言語",
    "locale.english": "英語",
    "locale.japanese": "日本語",
    "nav.menu": "メニュー",
    "nav.hideSidebar": "左サイドバーを隠す",
    "nav.showSidebar": "左サイドバーを表示",
    "composer.createPost": "投稿作成",
    "composer.newNode": "新しい光点",
    "composer.addNode": "光点を追加",
    "composer.addFromNode": "この光点から追加",
    "composer.addAndConnect": "光点を追加して線で繋ぐ",
    "type.text": "テキスト",
    "type.image": "画像",
    "type.music": "音楽",
    "type.video": "映像",
    "type.relay": "中継通信",
    "node.listTitle": "光点一覧",
    "node.listTabs": "光点一覧の表示切替",
    "node.type": "タイプ",
    "node.title": "タイトル",
    "node.titlePlaceholder": "記憶の断片、曲名、映像名",
    "node.newTitlePlaceholder": "新しい光点のタイトル",
    "node.body": "本文",
    "node.bodyPlaceholder": "本文を入力してください",
    "node.addButton": "光点を追加",
    "node.delete": "光点を削除",
    "node.noBody": "本文なし",
    "node.emptyOwn": "光点はまだありません",
    "node.emptyFollowing": "フォロー中クラスタの光点はまだありません",
    "node.emptyFavorites": "お気に入りの光点はまだありません",
    "node.open": "光点を開く",
    "node.createdAt": "登録日時 {date}",
    "node.connectionCount": "接続 {count}",
    "node.tempLimit": "一時領域に保管できる光点は{limit}つまでです。",
    "node.restoreFromTemporary": "{title}を一時領域から取り出す",
    "node.deleteConfirm": "この光点を削除しますか？",
    "node.sourceNodes": "ソースノード",
    "node.targetNodes": "ターゲットノード",
    "cluster.type": "クラスタ",
    "cluster.listTitle": "クラスタ一覧",
    "cluster.listTabs": "クラスタ一覧の表示切替",
    "cluster.newCluster": "新しいクラスタ",
    "cluster.name": "クラスタ名",
    "cluster.description": "説明",
    "cluster.descriptionPlaceholder": "説明を入力してください",
    "cluster.addCluster": "クラスタを追加",
    "cluster.noDescription": "説明なし",
    "cluster.noClusters": "クラスタはまだありません",
    "cluster.follow": "フォロー",
    "cluster.followTitle": "クラスタをフォロー",
    "cluster.followers": "フォロワー {count}",
    "cluster.delete": "クラスタを削除",
    "cluster.deleteConfirm": "このクラスタを削除しますか？\nクラスタ内の光点は削除せず、Publicクラスタへ移動します。",
    "cluster.deleteError": "クラスタを削除できませんでした。時間をおいてもう一度お試しください。",
    "cluster.moveError": "光点のクラスタを移動できませんでした。時間をおいてもう一度お試しください。",
    "cluster.move": "移動",
    "cluster.moveTo": "移動先",
    "cluster.noMoveTarget": "移動先なし",
    "cluster.cannotMove": "移動不可",
    "cluster.otherUserNode": "他ユーザーの光点",
    "cluster.nodes": "クラスタ",
    "home.button": "ホーム",
    "home.moveTitle": "ホームへ移動",
    "home.notSetTitle": "ホームがまだ設定されていません",
    "home.saveButton": "この場所をホームにする",
    "home.saveTitle": "この場所をホームにする",
    "home.saving": "保存中",
    "home.saved": "保存しました",
    "home.saveError": "ホームを保存できませんでした",
    "universe.aria": "情報の星図",
    "universe.context": "文脈",
    "universe.explore": "探索",
    "universe.switchToContext": "文脈モードに切り替え",
    "universe.switchToExplore": "探索モードに切り替え",
    "universe.coordinate": "座標 {x}, {y}",
    "temporary.aria": "一時領域",
    "temporary.title": "一時領域",
    "temporary.restore": "元に戻す",
    "search.title": "検索",
    "search.show": "検索を表示",
    "search.hide": "検索を隠す",
    "search.kind": "種別",
    "search.word": "ワード",
    "search.wordPlaceholder": "タイトル・本文・ユーザー名・自己紹介・クラスタ名・クラスタ説明",
    "search.sort": "並べ替え",
    "search.order": "順序",
    "search.createdAt": "登録日時",
    "search.likeCount": "Like数",
    "search.connectionCount": "接続ノード数",
    "search.followerCount": "フォロワー数",
    "search.desc": "降順",
    "search.asc": "昇順",
    "search.noResults": "該当する結果はありません",
    "search.showMore": "さらに20件表示",
    "media.dropFile": "ファイルをドロップ",
    "media.dropAny": "ここへファイルをドラッグ＆ドロップできます",
    "media.dropImage": "PNG/JPG/GIFをここへドラッグ＆ドロップできます",
    "media.dropMusic": "MP3をここへドラッグ＆ドロップできます",
    "media.dropVideo": "MP4をここへドラッグ＆ドロップできます",
    "media.pasteImage": "画像を貼り付け",
    "media.pasteHint": "ここをクリックして Ctrl+V で貼り付けできます",
    "media.pasted": "{name} を貼り付けました",
    "media.dropped": "{name} をドロップしました",
    "media.unsupported": "このタイプでは使えないファイルです",
    "media.duration": "再生時間",
    "media.seconds": "秒",
    "media.selectFile": "ファイル選択",
    "media.noFile": "ファイルが選択されていません",
    "media.relayImage": "通信画像",
    "link.previewLoading": "リンクプレビューを取得中",
    "link.defaultTitle": "リンク",
    "connection.type": "接続",
    "connection.connectTitle": "光点を接続",
    "connection.editTitle": "接続コメントを編集",
    "connection.commentTitle": "接続コメント",
    "connection.summary": "{source} から {target} へ接続します",
    "connection.commentSummary": "{source} から {target} へのコメント",
    "connection.comment": "コメント",
    "connection.commentPlaceholder": "接続にコメントを付ける",
    "connection.connectButton": "線で繋ぐ",
    "connection.disconnect": "接続を切る",
    "connection.save": "保存",
    "connection.cannotEdit": "この接続は作成または編集できません",
    "connection.cannotCreate": "この接続は作成できません",
    "connection.kind": "接続",
    "profile.emptyBio": "自己紹介文は未設定です",
    "profile.bioHeading": "自己紹介文",
    "profile.userClusters": "クラスタ一覧",
    "profile.userNodes": "光点一覧",
    "profile.deleteUser": "ユーザー削除",
    "profile.editProfile": "プロフィール編集",
    "profile.noUserDetail": "ユーザー詳細を表示できませんでした",
    "profile.blockConfirm": "このユーザーは自分の光点に対して接続線を作ることが出来なくなります。既存の接続線についてもこのユーザーが作成したものは削除されます。よろしいですか？",
    "profile.blockError": "ブロックできませんでした",
    "profile.unblockError": "ブロック解除できませんでした",
    "profile.deleteConfirm": "ユーザーを削除します。この操作は取り消せません。あなたの投稿、クラスタ、接続、ログイン情報も削除されます。よろしいですか？",
    "profile.deleteError": "ユーザーを削除できませんでした。時間をおいてもう一度お試しください。",
    "favorite.pinned": "固定お気に入り",
    "favorite.remove": "お気に入り解除",
    "favorite.add": "お気に入りに追加",
    "share.title": "共有",
    "share.panelTitle": "共有",
    "share.enabled": "共有可能",
    "share.disabled": "共有不可",
    "share.publicLinks": "公開リンクを見る",
    "share.settings": "共有設定",
    "share.links": "共有リンク",
    "share.loading": "共有設定を読み込んでいます",
    "share.loadError": "共有設定を読み込めませんでした",
    "share.allow": "この光点を共有可能にする",
    "share.disableNote": "共有不可にすると、新しい共有リンクは作成できず、既存の共有リンクも閲覧できなくなります。",
    "share.range": "共有範囲",
    "share.context": "文脈まで共有",
    "share.contextHint": "ソース・ターゲットの光点と接続コメントも表示",
    "share.single": "この光点だけ共有",
    "share.singleHint": "本文とメディアのみ表示",
    "share.create": "共有リンクを作成",
    "share.ownerLinks": "この光点の所有者が公開した共有リンクを表示しています。",
    "share.nodeOnly": "光点だけ",
    "share.withContext": "文脈まで",
    "share.disabledStatus": "無効化済み",
    "share.enabledStatus": "有効",
    "share.noLinks": "共有リンクはまだありません",
    "share.noPublicLinks": "公開中の共有リンクはまだありません",
    "share.urlLabel": "共有URL",
    "share.disable": "無効化",
    "share.saveError": "共有設定を保存できませんでした。時間をおいてもう一度お試しください。",
    "share.createError": "共有リンクを作成できませんでした。共有可能になっているか確認してください。",
    "share.disableConfirm": "この共有リンクを無効化しますか？",
    "share.disableError": "共有リンクを無効化できませんでした。時間をおいてもう一度お試しください。",
    "relay.start": "通信開始",
    "relay.viewLog": "通信ログ閲覧",
    "relay.closed": "通信は終了しています",
    "relay.active": "通信中",
    "relay.private": "通信相手にのみ公開",
    "relay.selectable": "通信先を選択できます",
    "relay.ownerStarts": "持ち主が通信を開始すると有効になります",
    "relay.recipients": "通信先",
    "relay.peopleCount": "{count}人",
    "relay.noLikedUsers": "この光点にLikeしているユーザーはまだいません",
    "relay.confirmRecipients": "決定",
    "relay.readonly": "通信ログは読み取り専用です",
    "relay.messagePlaceholder": "メッセージを入力",
    "relay.send": "送信",
    "relay.loading": "通信を読み込んでいます",
    "relay.self": "自分",
    "relay.chat": "チャット",
    "relay.noMessages": "メッセージはまだありません",
    "relay.selectThenStart": "通信先を選択して決定すると通信が始まります",
    "relay.others": "通信相手",
    "relay.undecided": "未決定",
    "relay.close": "通信終了",
    "relay.openError": "通信を開けませんでした",
    "relay.reactionError": "リアクションを送信できませんでした",
    "relay.selectError": "通信先を選択してください",
    "relay.startError": "通信を開始できませんでした",
    "relay.messageError": "メッセージを送信できませんでした",
    "relay.closeConfirm": "この光点での通信を終了しますか？",
    "relay.closeError": "通信を終了できませんでした",
    "notification.trigger": "通知",
    "notification.listTitle": "通知一覧",
    "notification.markAllRead": "すべて既読",
    "notification.empty": "通知はまだありません",
    "notification.more": "次の20件を表示",
    "notification.someone": "誰か",
    "notification.yourNode": "あなたの光点",
    "notification.relatedNode": "別の光点",
    "notification.yourCluster": "あなたのクラスタ",
    "notification.relayInvite": "{actor}さんから通信に招待されました",
    "notification.linkCreated": "{actor}さんが「{related}」から「{node}」へ接続しました",
    "notification.like": "{actor}さんが「{node}」にLikeしました",
    "notification.favorite": "{actor}さんが「{node}」をお気に入りに追加しました",
    "notification.clusterFollow": "{actor}さんがクラスタ「{cluster}」をフォローしました",
    "notification.generic": "新しい通知があります",
    "notification.openNode": "光点を開く",
    "notification.openCluster": "クラスタを開く",
    "processing.addingNode": "光点を追加しています",
    "processing.uploadSave": "アップロードと保存を処理中です。画面を閉じずにお待ちください。",
    "processing.saveNode": "光点を保存しています。",
    "processing.uploadConnect": "ファイルのアップロードと接続を処理中です。画面を閉じずにお待ちください。",
    "processing.saveConnect": "光点の保存と接続を処理中です。",
    "auth.brandStatement": "新たにつなげよう、点を線に。",
    "auth.loginTitle": "ログイン",
    "auth.loginIdLabel": "メールアドレス / ユーザーID",
    "auth.passwordLabel": "パスワード",
    "auth.loginButton": "ログイン",
    "auth.forgotPassword": "パスワードを忘れた場合",
    "auth.signupTitle": "ユーザー作成",
    "auth.emailLabel": "メールアドレス",
    "auth.userNameLabel": "ユーザー名",
    "auth.userNamePlaceholder": "表示名",
    "auth.userIdLabel": "ユーザーID",
    "auth.userIdPlaceholder": "半角英数、_、-",
    "auth.userIdHint": "半角英数字、_、- のみ。1〜25文字。ログインにも使います。",
    "auth.passwordHint": "8〜25文字。半角英大文字・小文字・数字・記号（_ - ! # $ % ( ) [ ] @ + * ? /）のうち3種類以上を含めてください。",
    "auth.passwordHintShort": "8〜25文字。半角英大文字・小文字・数字・記号（_ - ! # $ % ( ) [ ] @ + * ? /）のうち3種類以上。",
    "auth.birthDateLabel": "生年月日",
    "auth.birthDateHint": "この情報は公開されません",
    "auth.profileIconLabel": "プロフィールアイコン",
    "auth.bioLabel": "自己紹介文",
    "auth.bioPlaceholder": "自己紹介文",
    "auth.signupButton": "ユーザーを作成",
    "auth.sendVerificationButton": "認証番号を送信",
    "auth.verifySignupButton": "確認して作成",
    "auth.verificationCodeLabel": "認証番号",
    "auth.verificationCodePlaceholder": "6桁の番号",
    "auth.verificationSent": "{email} に認証番号を送信しました。番号を入力するとユーザーを作成します。",
    "auth.errorVerification": "認証番号を確認できませんでした。最新のメールを確認してもう一度お試しください。",
    "auth.resetTitle": "パスワードリセット",
    "auth.resetInstruction":
      "パスワードをリセットする場合、登録されているメールアドレスを入力し、\"パスワードリセット\"ボタンを押してください",
    "auth.resetButton": "パスワードリセット",
    "auth.backToLogin": "ログインに戻る",
    "auth.resetSent": "登録されているメールアドレスの場合、リセット後のパスワードを送信しました。",
    "auth.errorReset": "パスワードをリセットできませんでした。メールアドレスを確認してもう一度お試しください。",
    "auth.errorLogin": "ログインできませんでした。メールアドレス、パスワード、ログイン許可を確認してください。",
    "auth.errorSignup": "ユーザーを作成できませんでした。ユーザーID、メール、パスワード条件を確認してください。",
    "profile.type": "ユーザー",
    "profile.title": "プロフィール編集",
    "profile.passwordPlaceholder": "変更する場合のみ入力",
    "profile.passwordHint":
      "空欄なら変更しません。変更する場合は8〜25文字で、半角英大文字・小文字・数字・記号（_ - ! # $ % ( ) [ ] @ + * ? /）のうち3種類以上を含めてください。",
    "profile.passwordHintShort": "空欄なら変更しません。変更する場合は8〜25文字で、半角英大文字・小文字・数字・記号（_ - ! # $ % ( ) [ ] @ + * ? /）のうち3種類以上。",
    "profile.errorSave": "プロフィールを保存できませんでした。ユーザーIDやパスワード条件を確認してください。",
    "upload.limit": "ファイルサイズは{mb}MB以下にしてください",
  },
};

const labels = {
  text: "Text",
  relay: "Relay",
  image: "Image",
  music: "Music",
  video: "Video",
  open: "Open",
  startChar: "Start character",
  endChar: "End character",
  startSecond: "Start second",
  endSecond: "End second",
  saveSelection: "Save selection",
};

const typeMeta = {
  text: { label: labels.text, glyph: "T", color: "#5ee7ff" },
  relay: { label: labels.relay, glyph: "C", color: "#ff9f1c" },
  image: { label: labels.image, glyph: "I", color: "#ffd166" },
  music: { label: labels.music, glyph: "M", color: "#7effb2" },
  video: { label: labels.video, glyph: "V", color: "#ff5ea8" },
};

function getTypeLabel(type) {
  return t(`type.${type}`);
}

const NODE_LIST_PAGE_SIZE = 20;
const SEARCH_RESULT_PAGE_SIZE = 20;
const TEMPORARY_NODE_LIMIT = 5;
const MIN_UNIVERSE_ZOOM = 0.45;
const MAX_UNIVERSE_ZOOM = 2.6;
const VIEWPORT_CULL_PADDING = 260;
const IOS_CANVAS_DPR_CAP = 1.5;
const IOS_NODE_DOUBLE_TAP_MS = 420;
const IOS_NODE_DOUBLE_TAP_DISTANCE = 28;
const STATE_REFRESH_MS = 30_000;
const NOTIFICATION_REFRESH_MS = 30_000;
const RELAY_REFRESH_MS = 5_000;
const NOTIFICATION_PAGE_SIZE = 20;
const NODE_POSITION_REFRESH_MS = 20_000;
const NODE_POSITION_ANIMATION_MS = 1_800;
const UNIVERSE_COORD_UNIT_PX = 10;
const UNIVERSE_DEFAULT_CENTER = { x: 50, y: 50 };
const MEGA_CLUSTER_VISUAL_SCALE = 1;
const NEW_NODE_COLLISION_DISTANCE = 11;
const NEW_NODE_PLACEMENT_STEP = 12;
const NEW_NODE_HIGHLIGHT_MS = 6_500;
const UNIVERSE_MODE_STORAGE_KEY = "textosphereUniverseMode";
const UNIVERSE_MODES = {
  context: "context",
  explore: "explore",
};
const EXPLORATION_AREA_RADIUS_RATIO = 0.28;
const EXPLORATION_AREA_MIN_RADIUS = 116;
const EXPLORATION_AREA_MAX_RADIUS = 280;
const NODE_DRAG_MIN_X = -220;
const NODE_DRAG_MAX_X = 320;
const NODE_DRAG_MIN_Y = -220;
const NODE_DRAG_MAX_Y = 320;
const DEFAULT_NODE_DRAG_BOUNDS = {
  minX: NODE_DRAG_MIN_X,
  maxX: NODE_DRAG_MAX_X,
  minY: NODE_DRAG_MIN_Y,
  maxY: NODE_DRAG_MAX_Y,
};
const NODE_DISPLAY_LAYERS = {
  home: { className: "node-layer-home", scale: 1, useTypeColor: true },
  interest: { className: "node-layer-interest", scale: 0.82, useTypeColor: true },
  connected: { className: "node-layer-connected", scale: 0.52, useTypeColor: true },
  background: { className: "node-layer-background", scale: 0.34, useTypeColor: false },
};
const RELAY_MESSAGE_COLORS = [
  { border: "255, 209, 102", background: "255, 209, 102" },
  { border: "126, 255, 178", background: "126, 255, 178" },
  { border: "255, 94, 120", background: "255, 94, 120" },
  { border: "255, 159, 28", background: "255, 159, 28" },
  { border: "190, 132, 255", background: "190, 132, 255" },
  { border: "94, 231, 255", background: "94, 231, 255" },
  { border: "181, 129, 82", background: "181, 129, 82" },
  { border: "255, 94, 168", background: "255, 94, 168" },
];
const RELAY_REACTION_EMOJIS = ["👍", "❤️", "😂", "😮", "😢", "🎉"];
const CONNECTION_DROP_BASE_THRESHOLD = 96;
const CONNECTION_DROP_MIN_THRESHOLD = 36;
const IS_IOS =
  /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
document.documentElement.classList.toggle("is-ios", IS_IOS);

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

function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale);
}

function isProbablyJapaneseUser() {
  const languages = Array.isArray(navigator.languages) && navigator.languages.length ? navigator.languages : [navigator.language];
  if (languages.some((language) => String(language || "").toLowerCase().startsWith("ja"))) {
    return true;
  }

  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone === "Asia/Tokyo";
  } catch (error) {
    return false;
  }
}

function getInitialLocale() {
  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (isSupportedLocale(storedLocale)) {
    return storedLocale;
  }
  return isProbablyJapaneseUser() ? "ja" : "en";
}

function t(key, variables = {}) {
  const template = i18n[currentLocale]?.[key] ?? i18n.en[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (match, name) => (variables[name] ?? match));
}

function setLocalizedMessage(element, key, variables = {}) {
  if (!element) return;
  if (!key) {
    element.textContent = "";
    delete element.dataset.i18nMessageKey;
    delete element.dataset.i18nMessageVars;
    return;
  }
  element.dataset.i18nMessageKey = key;
  element.dataset.i18nMessageVars = JSON.stringify(variables);
  element.textContent = t(key, variables);
}

function refreshLocalizedMessages() {
  [authMessage, profileMessage].forEach((element) => {
    const key = element?.dataset.i18nMessageKey;
    if (!key) return;
    let variables = {};
    try {
      variables = JSON.parse(element.dataset.i18nMessageVars || "{}");
    } catch (error) {
      variables = {};
    }
    element.textContent = t(key, variables);
  });
}

function applyLocale() {
  document.documentElement.lang = currentLocale;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll(".locale-switch").forEach((element) => {
    element.setAttribute("aria-label", t("locale.label"));
  });
  document.querySelectorAll("[data-locale-choice]").forEach((button) => {
    const isActive = button.dataset.localeChoice === currentLocale;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  refreshLocalizedMessages();
}

function refreshLocaleSensitiveViews() {
  if (typeof updateHomeControls === "function") updateHomeControls();
  if (typeof updateUniverseModeButton === "function") updateUniverseModeButton();
  if (typeof updateTypeFields === "function") updateTypeFields();
  if (typeof renderNodeList === "function") renderNodeList();
  if (typeof renderClusterList === "function") renderClusterList();
  if (typeof renderSearchResults === "function") renderSearchResults();
  if (typeof renderNotifications === "function") renderNotifications();
  if (typeof renderTemporaryNodeBin === "function") renderTemporaryNodeBin();
  if (typeof updateConnectionActionsLayout === "function") updateConnectionActionsLayout();
  if (detailDialog?.open && activeDetailNodeId && typeof openDetail === "function") {
    openDetail(activeDetailNodeId);
  }
  if (userDetailDialog?.open && activeUserDetailId && typeof openUserDetail === "function") {
    openUserDetail(activeUserDetailId);
  }
  if (shareDialog?.open && activeDetailNodeId && typeof openShareDialog === "function") {
    openShareDialog();
  }
  if (relayDialog?.open && activeRelayData && typeof renderRelayDialogContent === "function") {
    renderRelayDialogContent(activeRelayData);
  }
}

function setLocale(locale) {
  if (!isSupportedLocale(locale) || locale === currentLocale) return;
  currentLocale = locale;
  localStorage.setItem(LOCALE_STORAGE_KEY, currentLocale);
  applyLocale();
  refreshLocaleSensitiveViews();
}

let apiAvailable = false;
let selectedNodeId = null;
let activeDetailNodeId = null;
let activeUserDetailId = null;
let activeSelectionSyncCleanup = null;
let activeNodeDrag = null;
let activeTemporaryNodeDrag = null;
let activeUniversePan = null;
let activeUniversePinch = null;
const activeUniversePointers = new Map();
let pendingConnection = null;
let pendingConnectionDelete = null;
let suppressNodeClick = false;
let nodeListVisibleCount = NODE_LIST_PAGE_SIZE;
let searchResultVisibleCount = SEARCH_RESULT_PAGE_SIZE;
let activeNodeListMode = ["followed", "favorites"].includes(localStorage.getItem("textosphereNodeListMode"))
  ? localStorage.getItem("textosphereNodeListMode")
  : "own";
let activeClusterListMode = localStorage.getItem("textosphereClusterListMode") === "followed" ? "followed" : "own";
let isNodeSubmissionPending = false;
let universePan = { x: 0, y: 0 };
let universeZoom = 1;
let universeMode = localStorage.getItem(UNIVERSE_MODE_STORAGE_KEY) === UNIVERSE_MODES.explore ? UNIVERSE_MODES.explore : UNIVERSE_MODES.context;
let nodeDragBounds = { ...DEFAULT_NODE_DRAG_BOUNDS };
let currentHomeLocation = null;
let lastMapSize = null;
let viewportPositionedNodeIds = new Set();
let lastNodeTouchTap = null;
let universeRenderFrame = null;
let pendingUniverseRender = { nodes: false, links: false };
let stateRefreshTimer = null;
let stateRefreshInFlight = false;
let notificationRefreshTimer = null;
let notificationRefreshInFlight = false;
let relayRefreshTimer = null;
let relayRefreshInFlight = false;
let activeRelayNodeId = null;
let activeRelayData = null;
let pastedRelayImage = { file: null, previewUrl: "" };
let nodePositionRefreshTimer = null;
let nodePositionAnimationFrame = null;
let authToken = localStorage.getItem("textosphereToken") || "";
let currentLocale = getInitialLocale();
let currentUser = null;
let pendingSignupEmail = "";
let signupVerificationRequested = false;
let clusters = [
  {
    id: PUBLIC_CLUSTER_ID,
    name: "Public",
    description: "Default public cluster",
    createdAt: new Date(0).toISOString(),
  },
];
let clusterDirectory = [...clusters];
let publicUsers = [];
let followedClusterIds = new Set();
let megaClusters = [];
const highlightedNewNodeIds = new Map();
let notifications = [];
let unreadNotificationCount = 0;
let hasMoreNotifications = false;
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
const temporaryNodeIds = new Set();
const linkPreviewCache = new Map();
const musicArtworkCache = new Map();
const IMAGE_CLIPBOARD_TYPES = new Set(["image/png", "image/jpeg", "image/gif"]);
const IMAGE_CLIPBOARD_EXTENSIONS = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/gif": ".gif",
};
const IMAGE_UPLOAD_MAX_WIDTH = 1280;
const IMAGE_UPLOAD_MAX_HEIGHT = 720;
const IMAGE_UPLOAD_QUALITY = 0.82;
const COMPRESSED_IMAGE_MIME = "image/jpeg";
const IMAGE_NODE_MAX_FILES = 10;
let pastedComposerImage = { file: null, previewUrl: "" };
let droppedComposerMedia = { file: null, files: [] };

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

function getUploadLimitForType(type) {
  return type === "video"
    ? { bytes: MAX_VIDEO_UPLOAD_BYTES, mb: MAX_VIDEO_UPLOAD_MB }
    : { bytes: MAX_UPLOAD_BYTES, mb: MAX_UPLOAD_MB };
}

function isFileWithinUploadLimit(file, type = "") {
  return !file || file.size <= getUploadLimitForType(type).bytes;
}

function getUploadLimitMessage(type = "") {
  return t("upload.limit", { mb: getUploadLimitForType(type).mb });
}

function isCompressibleImageFile(file) {
  if (!file) return false;
  const extension = getMediaFileExtension(file);
  return ["image/png", "image/jpeg"].includes(file.type) || [".png", ".jpg", ".jpeg"].includes(extension);
}

function getCompressedImageFileName(fileName) {
  const baseName = String(fileName || "image").replace(/\.[^.]*$/, "").trim() || "image";
  return `${baseName}.jpg`;
}

function loadImageFile(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);
    image.addEventListener(
      "load",
      () => {
        URL.revokeObjectURL(objectUrl);
        resolve(image);
      },
      { once: true },
    );
    image.addEventListener(
      "error",
      () => {
        URL.revokeObjectURL(objectUrl);
        reject(new Error("Image could not be loaded"));
      },
      { once: true },
    );
    image.src = objectUrl;
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve) => {
    canvas.toBlob(resolve, type, quality);
  });
}

async function prepareImageFileForUpload(file) {
  if (!isCompressibleImageFile(file)) return file;

  try {
    const image = await loadImageFile(file);
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    if (!width || !height) return file;

    const scale = Math.min(1, IMAGE_UPLOAD_MAX_WIDTH / width, IMAGE_UPLOAD_MAX_HEIGHT / height);
    if (scale >= 1) return file;

    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(width * scale));
    canvas.height = Math.max(1, Math.round(height * scale));
    const context = canvas.getContext("2d");
    if (!context) return file;

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const blob = await canvasToBlob(canvas, COMPRESSED_IMAGE_MIME, IMAGE_UPLOAD_QUALITY);
    if (!blob) return file;

    return new File([blob], getCompressedImageFileName(file.name), {
      type: COMPRESSED_IMAGE_MIME,
      lastModified: Date.now(),
    });
  } catch (error) {
    return file;
  }
}

function isTextNodeType(type) {
  return type === "text" || type === "relay";
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
    statusElement.textContent = t("media.pasteHint");
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
    statusElement.textContent = t("media.pasted", { name: file.name });
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
  if (type === "image") return t("media.dropImage");
  if (type === "music") return t("media.dropMusic");
  if (type === "video") return t("media.dropVideo");
  return t("media.dropAny");
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
  state.files = [];
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
  state.files = file ? [file] : [];
  if (fileInputElement) {
    fileInputElement.value = "";
  }
  if (statusElement) {
    statusElement.textContent = t("media.dropped", { name: file.name });
  }
  if (clearButtonElement) {
    clearButtonElement.hidden = false;
  }
  if (dropZoneElement) {
    dropZoneElement.classList.add("has-file");
    dropZoneElement.classList.remove("is-invalid", "is-dragover");
  }
}

function setDroppedMediaFiles(state, files, statusElement, clearButtonElement, dropZoneElement, fileInputElement) {
  state.files = files;
  state.file = files[0] || null;
  if (fileInputElement) {
    fileInputElement.value = "";
  }
  if (statusElement) {
    statusElement.textContent =
      files.length > 1 ? `${files.length} files selected` : files[0] ? t("media.dropped", { name: files[0].name }) : getMediaDropMessage("image");
  }
  if (clearButtonElement) {
    clearButtonElement.hidden = files.length === 0;
  }
  if (dropZoneElement) {
    dropZoneElement.classList.toggle("has-file", files.length > 0);
    dropZoneElement.classList.remove("is-invalid", "is-dragover");
  }
}

function getUploadLimitExceededFile(files, type) {
  return files.find((file) => !isFileWithinUploadLimit(file, type)) || null;
}

function getFilesTotalSize(files) {
  return files.reduce((total, file) => total + Number(file?.size || 0), 0);
}

function areImageNodeFilesWithinTotalUploadLimit(files) {
  return getFilesTotalSize(files) <= MAX_VIDEO_UPLOAD_BYTES;
}

function getImageNodeTotalUploadLimitMessage() {
  return t("upload.limit", { mb: MAX_VIDEO_UPLOAD_MB });
}

function getSelectedFilesFromInput(fileInputElement) {
  return Array.from(fileInputElement.files || []);
}

function getImageNodeFileCountMessage() {
  return `Image nodes can include up to ${IMAGE_NODE_MAX_FILES} files.`;
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
  const files = Array.from(event.dataTransfer?.files || []);
  const acceptedFiles = type === "image" ? files.slice(0, IMAGE_NODE_MAX_FILES) : files.slice(0, 1);
  const file = acceptedFiles[0] || null;
  if (!file) return false;

  if (type === "image" && files.length > IMAGE_NODE_MAX_FILES) {
    clearDroppedMedia(state, statusElement, clearButtonElement, dropZoneElement, type);
    dropZoneElement.classList.add("is-invalid");
    statusElement.textContent = getImageNodeFileCountMessage();
    return false;
  }

  if (acceptedFiles.some((item) => !isMediaFileAcceptedForType(type, item))) {
    clearDroppedMedia(state, statusElement, clearButtonElement, dropZoneElement, type);
    dropZoneElement.classList.add("is-invalid");
    statusElement.textContent = t("media.unsupported");
    return false;
  }

  if (getUploadLimitExceededFile(acceptedFiles, type)) {
    clearDroppedMedia(state, statusElement, clearButtonElement, dropZoneElement, type);
    dropZoneElement.classList.add("is-invalid");
    statusElement.textContent = getUploadLimitMessage(type);
    return false;
  }
  if (type === "image" && !areImageNodeFilesWithinTotalUploadLimit(acceptedFiles)) {
    clearDroppedMedia(state, statusElement, clearButtonElement, dropZoneElement, type);
    dropZoneElement.classList.add("is-invalid");
    statusElement.textContent = getImageNodeTotalUploadLimitMessage();
    return false;
  }

  setDroppedMediaFiles(state, acceptedFiles, statusElement, clearButtonElement, dropZoneElement, fileInputElement);
  onAccepted?.(file, acceptedFiles);
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
  const isText = isTextNodeType(type);
  dropZoneElement.classList.toggle("is-hidden", isText);
  const files = Array.isArray(state.files) && state.files.length > 0 ? state.files : state.file ? [state.file] : [];
  if (isText || files.some((file) => !isMediaFileAcceptedForType(type, file))) {
    clearDroppedMedia(state, statusElement, clearButtonElement, dropZoneElement, type);
  } else if (files.length === 0 && statusElement) {
    statusElement.textContent = getMediaDropMessage(type);
  }
}

function getMediaFilesForType(type, fileInputElement, pastedImageState, droppedMediaState = null) {
  if (isTextNodeType(type)) return [];
  const selectedFiles = getSelectedFilesFromInput(fileInputElement);
  const droppedFiles = Array.isArray(droppedMediaState?.files) && droppedMediaState.files.length > 0
    ? droppedMediaState.files
    : droppedMediaState?.file
      ? [droppedMediaState.file]
      : [];
  const pastedFiles = type === "image" && pastedImageState.file ? [pastedImageState.file] : [];
  const files = selectedFiles.length > 0 ? selectedFiles : droppedFiles.length > 0 ? droppedFiles : pastedFiles;
  if (type === "image" && files.length > IMAGE_NODE_MAX_FILES) {
    window.alert(getImageNodeFileCountMessage());
    return null;
  }
  if (type !== "image" && files.length > 1) {
    return files.slice(0, 1);
  }
  const oversizedFile = getUploadLimitExceededFile(files, type);
  if (oversizedFile) {
    window.alert(getUploadLimitMessage(type));
    return null;
  }
  if (type === "image" && !areImageNodeFilesWithinTotalUploadLimit(files)) {
    window.alert(getImageNodeTotalUploadLimitMessage());
    return null;
  }
  return files;
}

function getMediaFileForType(type, fileInputElement, pastedImageState, droppedMediaState = null) {
  return getMediaFilesForType(type, fileInputElement, pastedImageState, droppedMediaState)?.[0] || null;
}

function hasOversizedMediaFile(type, fileInputElement, pastedImageState, droppedMediaState = null) {
  if (isTextNodeType(type)) return false;
  const selectedFiles = getSelectedFilesFromInput(fileInputElement);
  const droppedFiles = Array.isArray(droppedMediaState?.files) && droppedMediaState.files.length > 0
    ? droppedMediaState.files
    : droppedMediaState?.file
      ? [droppedMediaState.file]
      : [];
  const pastedFiles = type === "image" && pastedImageState.file ? [pastedImageState.file] : [];
  const files = selectedFiles.length > 0 ? selectedFiles : droppedFiles.length > 0 ? droppedFiles : pastedFiles;
  return !!getUploadLimitExceededFile(files, type) || (type === "image" && !areImageNodeFilesWithinTotalUploadLimit(files));
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

function getFirstTextUrl(value) {
  return getTextUrls(value)[0] || "";
}

function renderLinkPreviewCard(value) {
  const url = getFirstTextUrl(value);
  if (!url) return "";

  return `
    <a class="link-preview-card is-loading" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" data-link-preview-url="${escapeHtml(url)}">
      <span class="link-preview-image" aria-hidden="true"></span>
      <span class="link-preview-main">
        <span class="link-preview-site">${escapeHtml(new URL(url).hostname.replace(/^www\./, ""))}</span>
        <span class="link-preview-title">${escapeHtml(t("link.previewLoading"))}</span>
        <span class="link-preview-description">${escapeHtml(url)}</span>
      </span>
    </a>
  `;
}

function renderLinkPreviewContent(preview) {
  const imageUrl = getSafeResourceUrl(preview.image, { allowRelative: false, allowBlob: false });
  const finalUrl = getSafeResourceUrl(preview.finalUrl || preview.url, { allowRelative: false, allowBlob: false });
  const title = String(preview.title || finalUrl || t("link.defaultTitle")).trim();
  const description = String(preview.description || "").trim();
  const siteName = String(preview.siteName || (finalUrl ? new URL(finalUrl).hostname.replace(/^www\./, "") : "")).trim();
  return `
    <span class="link-preview-image ${imageUrl ? "has-image" : ""}" aria-hidden="true">
      ${imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="" loading="lazy" />` : ""}
    </span>
    <span class="link-preview-main">
      ${siteName ? `<span class="link-preview-site">${escapeHtml(siteName)}</span>` : ""}
      <span class="link-preview-title">${escapeHtml(title)}</span>
      ${description ? `<span class="link-preview-description">${escapeHtml(description)}</span>` : ""}
    </span>
  `;
}

function renderLinkPreviewFallback(url) {
  const safeUrl = getSafeResourceUrl(url, { allowRelative: false, allowBlob: false }) || url;
  let siteName = "";
  try {
    siteName = new URL(safeUrl).hostname.replace(/^www\./, "");
  } catch (error) {
    siteName = "link";
  }
  return `
    <span class="link-preview-image" aria-hidden="true"></span>
    <span class="link-preview-main">
      <span class="link-preview-site">${escapeHtml(siteName)}</span>
      <span class="link-preview-title">${escapeHtml(safeUrl)}</span>
    </span>
  `;
}

async function loadLinkPreviews(container) {
  const cards = Array.from(container.querySelectorAll(".link-preview-card[data-link-preview-url]"));
  await Promise.all(
    cards.map(async (card) => {
      const url = card.dataset.linkPreviewUrl;
      if (!url) return;
      try {
        if (!linkPreviewCache.has(url)) {
          linkPreviewCache.set(url, apiRequest(`/link-preview?url=${encodeURIComponent(url)}`).catch(() => null));
        }
        const preview = await linkPreviewCache.get(url);
        if (!preview || !card.isConnected) {
          if (!card.isConnected) return;
          card.classList.remove("is-loading");
          card.classList.add("is-fallback");
          card.innerHTML = renderLinkPreviewFallback(url);
          return;
        }
        const href = getSafeResourceUrl(preview.finalUrl || preview.url, { allowRelative: false, allowBlob: false });
        if (href) card.href = href;
        card.classList.remove("is-loading");
        card.innerHTML = renderLinkPreviewContent(preview);
      } catch (error) {
        linkPreviewCache.delete(url);
        if (!card.isConnected) return;
        card.classList.remove("is-loading");
        card.classList.add("is-fallback");
        card.innerHTML = renderLinkPreviewFallback(url);
      }
    }),
  );
}

function renderDetailBody(value, attributes = "") {
  const attributeText = attributes ? ` ${attributes}` : "";
  return `
    <p class="detail-text"${attributeText}>${linkifyText(value)}</p>
    ${renderLinkPreviewCard(value)}
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
  delete authMessage.dataset.i18nMessageKey;
  delete authMessage.dataset.i18nMessageVars;
}

function setAuthMessageKey(key, variables = {}) {
  setLocalizedMessage(authMessage, key, variables);
}

function setSignupVerificationMode(enabled, email = "") {
  signupVerificationRequested = Boolean(enabled);
  pendingSignupEmail = enabled ? email : "";
  if (signupVerificationField) {
    signupVerificationField.hidden = !enabled;
  }
  if (signupVerificationCodeInput && !enabled) {
    signupVerificationCodeInput.value = "";
  }
  const buttonKey = enabled ? "auth.verifySignupButton" : "auth.sendVerificationButton";
  signupButton.dataset.i18n = buttonKey;
  signupButton.textContent = t(buttonKey);
}

function resetSignupVerification() {
  if (!signupVerificationRequested) return;
  setSignupVerificationMode(false);
  setAuthMessage("");
}

function showPasswordResetView() {
  authGrid?.classList.add("is-reset");
  if (loginPanel) loginPanel.hidden = true;
  if (signupPanel) signupPanel.hidden = true;
  if (passwordResetPanel) passwordResetPanel.hidden = false;
  resetEmailInput.value = loginEmailInput.value.includes("@") ? loginEmailInput.value : "";
  setAuthMessage("");
  resetEmailInput?.focus();
}

function showLoginSignupView() {
  authGrid?.classList.remove("is-reset");
  if (loginPanel) loginPanel.hidden = false;
  if (signupPanel) signupPanel.hidden = false;
  if (passwordResetPanel) passwordResetPanel.hidden = true;
  setAuthMessage("");
}

function setProfileMessage(message) {
  profileMessage.textContent = message || "";
  delete profileMessage.dataset.i18nMessageKey;
  delete profileMessage.dataset.i18nMessageVars;
}

function setProfileMessageKey(key, variables = {}) {
  setLocalizedMessage(profileMessage, key, variables);
}

function clearInitialAuthFields() {
  loginPasswordInput.value = "";
  signupUserIdInput.value = "";
  setSignupVerificationMode(false);
  showLoginSignupView();
}

function setAuthenticatedView(user) {
  currentUser = user;
  authShell.hidden = true;
  appShell.hidden = false;
  startStateRefresh();
  startNotificationRefresh();
  startNodePositionRefresh();
  currentUserId.textContent = getUserName(user);
  currentUserBio.textContent = user.bio || t("profile.emptyBio");
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
  currentHomeLocation = null;
  stopStateRefresh();
  stopNotificationRefresh();
  stopNodePositionRefresh();
  updateHomeControls();
  appShell.hidden = true;
  authShell.hidden = false;
  clearInitialAuthFields();
  requestAnimationFrame(clearInitialAuthFields);
  setTimeout(clearInitialAuthFields, 120);
}

function clearAuth() {
  authToken = "";
  localStorage.removeItem("textosphereToken");
  setNodeSubmissionPending(false);
  temporaryNodeIds.clear();
  renderTemporaryNodeBin();
  if (profileDialog.open) {
    closeProfileDialog();
  }
  if (userDetailDialog.open) {
    closeUserDetailDialog();
  }
  if (relayDialog?.open) {
    closeRelayDialog();
  }
  showAuth();
}

function updateNodeSubmissionControls() {
  addButton.disabled = isNodeSubmissionPending;
  composerToggle.disabled = isNodeSubmissionPending;
  document.querySelectorAll(".detailComposerAdd, .detailComposerToggle").forEach((button) => {
    button.disabled = isNodeSubmissionPending;
  });
}

function setNodeSubmissionPending(pending, message = "") {
  isNodeSubmissionPending = Boolean(pending);
  if (nodeProcessingMessage && message) {
    nodeProcessingMessage.textContent = message;
  }
  updateNodeSubmissionControls();
  if (!nodeProcessingDialog) return;

  if (isNodeSubmissionPending) {
    if (!nodeProcessingDialog.open) {
      nodeProcessingDialog.showModal();
    }
    return;
  }

  if (nodeProcessingDialog.open) {
    nodeProcessingDialog.close();
  }
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
    setAuthMessageKey("auth.errorLogin");
  }
}

async function signup() {
  try {
    if (signupVerificationRequested) {
      await handleAuthResponse(
        await apiRequest("/auth/verify-registration", {
          method: "POST",
          body: JSON.stringify({
            email: pendingSignupEmail || signupEmailInput.value,
            code: signupVerificationCodeInput.value,
          }),
        }),
      );
      setSignupVerificationMode(false);
      return;
    }

    const formData = new FormData();
    formData.append("email", signupEmailInput.value);
    formData.append("userName", signupUserNameInput.value);
    formData.append("userId", signupUserIdInput.value);
    formData.append("password", signupPasswordInput.value);
    formData.append("birthDate", signupBirthDateInput.value || "");
    formData.append("bio", signupBioInput.value);
    if (signupProfileIconInput.files && signupProfileIconInput.files[0]) {
      if (!isFileWithinUploadLimit(signupProfileIconInput.files[0])) {
        setAuthMessageKey("upload.limit", { mb: getUploadLimitForType().mb });
        return;
      }
      formData.append("profileIconFile", await prepareImageFileForUpload(signupProfileIconInput.files[0]));
    }

    const response = await apiRequest("/auth/register", {
      method: "POST",
      body: formData,
    });
    if (response?.verificationRequired) {
      setSignupVerificationMode(true, response.email || signupEmailInput.value);
      setAuthMessageKey("auth.verificationSent", { email: response.email || signupEmailInput.value });
      signupVerificationCodeInput?.focus();
      return;
    }
    await handleAuthResponse(response);
  } catch (error) {
    setAuthMessageKey(signupVerificationRequested ? "auth.errorVerification" : "auth.errorSignup");
  }
}

async function resetPassword() {
  try {
    await apiRequest("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({
        email: resetEmailInput.value,
      }),
    });
    setAuthMessageKey("auth.resetSent");
  } catch (error) {
    setAuthMessageKey("auth.errorReset");
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
  setProfileMessage("");
  if (!profileDialog.open) {
    profileDialog.showModal();
  }
}

function closeProfileDialog() {
  if (profileDialog.open) {
    profileDialog.close();
  }
}

function setBrandInfoTab(targetTab) {
  brandInfoTabs.forEach((tab) => {
    const isActive = tab.dataset.brandInfoTab === targetTab;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  brandInfoPanels.forEach((panel) => {
    panel.hidden = panel.id !== `brandInfo${targetTab === "about" ? "About" : "Terms"}Panel`;
  });
}

function openBrandInfoDialog() {
  setBrandInfoTab("about");
  if (!brandInfoDialog.open) {
    brandInfoDialog.showModal();
  }
}

function closeBrandInfoDialog() {
  if (brandInfoDialog.open) {
    brandInfoDialog.close();
  }
}

function focusAdjacentBrandInfoTab(direction) {
  const tabs = Array.from(brandInfoTabs);
  const activeIndex = tabs.findIndex((tab) => tab.classList.contains("is-active"));
  const nextIndex = (activeIndex + direction + tabs.length) % tabs.length;
  const nextTab = tabs[nextIndex];
  setBrandInfoTab(nextTab.dataset.brandInfoTab);
  nextTab.focus();
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
      setProfileMessageKey("upload.limit", { mb: getUploadLimitForType().mb });
      return;
    }
    formData.append("profileIconFile", await prepareImageFileForUpload(profileIconInput.files[0]));
  }

  try {
    saveProfileButton.disabled = true;
    setProfileMessage("");
    const response = await apiRequest("/auth/me", {
      method: "PATCH",
      body: formData,
    });
    setAuthenticatedView(response.user);
    closeProfileDialog();
  } catch (error) {
    setProfileMessageKey("profile.errorSave");
  } finally {
    saveProfileButton.disabled = false;
  }
}

function normalizeUniverseBounds(bounds) {
  const next = {
    minX: Number(bounds?.minX ?? DEFAULT_NODE_DRAG_BOUNDS.minX),
    maxX: Number(bounds?.maxX ?? DEFAULT_NODE_DRAG_BOUNDS.maxX),
    minY: Number(bounds?.minY ?? DEFAULT_NODE_DRAG_BOUNDS.minY),
    maxY: Number(bounds?.maxY ?? DEFAULT_NODE_DRAG_BOUNDS.maxY),
  };
  if (![next.minX, next.maxX, next.minY, next.maxY].every(Number.isFinite) || next.minX >= next.maxX || next.minY >= next.maxY) {
    return { ...DEFAULT_NODE_DRAG_BOUNDS };
  }
  return next;
}

function normalizeNode(node) {
  const max = isTextNodeType(node.type) ? (node.body || "").length : Number(node.duration || 0);
  const selection = node.selection || { start: 0, end: max };
  const selectionStart = clamp(Number(selection.start || 0), 0, max);
  const mediaItems = Array.isArray(node.mediaItems)
    ? node.mediaItems
        .map((item, index) => ({
          url: item.url || item.mediaUrl || "",
          mime: item.mime || item.mediaMime || null,
          name: item.name || item.mediaName || null,
          position: Number(item.position ?? index),
        }))
        .filter((item) => item.url)
        .sort((a, b) => a.position - b.position)
    : [];
  const fallbackMediaItems =
    mediaItems.length > 0 || !node.mediaUrl
      ? mediaItems
      : [{ url: node.mediaUrl, mime: node.mediaMime || null, name: node.mediaName || null, position: 0 }];
  return {
    ...node,
    ownerUserId: node.ownerUserId || null,
    clusterId: node.clusterId || getPublicClusterId(),
    body: node.body || "",
    duration: isTextNodeType(node.type) ? null : Number(node.duration || 0),
    mediaUrl: fallbackMediaItems[0]?.url || node.mediaUrl || null,
    mediaMime: fallbackMediaItems[0]?.mime || node.mediaMime || null,
    mediaName: fallbackMediaItems[0]?.name || node.mediaName || null,
    mediaItems: fallbackMediaItems,
    shareEnabled: node.shareEnabled !== false,
    megaClusterIds: Array.isArray(node.megaClusterIds) ? node.megaClusterIds.map((id) => Number(id)) : [],
    likeCount: Number(node.likeCount || 0),
    likedByCurrentUser: Boolean(node.likedByCurrentUser),
    favoritedByCurrentUser: Boolean(node.favoritedByCurrentUser),
    fixedFavoriteByCurrentUser: Boolean(node.fixedFavoriteByCurrentUser),
    relaySessionId: node.relaySessionId || null,
    relayStatus: node.relayStatus || null,
    relayParticipant: Boolean(node.relayParticipant),
    createdAt: node.createdAt || new Date().toISOString(),
    selection: {
      start: selectionStart,
      end: clamp(Number(selection.end ?? max), selectionStart, max),
    },
    x: clamp(Number(node.x), nodeDragBounds.minX, nodeDragBounds.maxX),
    y: clamp(Number(node.y), nodeDragBounds.minY, nodeDragBounds.maxY),
  };
}

function normalizeCluster(cluster) {
  return {
    id: cluster.id || createClientId(),
    ownerUserId: cluster.ownerUserId || null,
    ownerUser: cluster.ownerUser || null,
    name: String(cluster.name || "").trim() || "Untitled cluster",
    description: cluster.description || "",
    followerCount: Number(cluster.followerCount || 0),
    createdAt: cluster.createdAt || new Date().toISOString(),
  };
}

function normalizePublicUser(user) {
  return {
    id: user.id || "",
    userId: user.userId || "unknown",
    userName: user.userName || user.userId || "unknown",
    profileIcon: user.profileIcon || "",
    bio: user.bio || "",
    createdAt: user.createdAt || new Date().toISOString(),
  };
}

function normalizeLink(link) {
  const comment = String(link.comment || "").trim() || DEFAULT_LINK_COMMENT;
  return {
    source: link.source,
    target: link.target,
    ownerUserId: link.ownerUserId || null,
    ownerUser: link.ownerUser || null,
    comment,
    createdAt: link.createdAt || new Date().toISOString(),
  };
}

function normalizeHomeLocation(home) {
  if (!home) return null;
  const x = Number(home.x);
  const y = Number(home.y);
  const zoom = Number(home.zoom);
  if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(zoom)) return null;
  return {
    ...home,
    x,
    y,
    zoom: clamp(zoom, MIN_UNIVERSE_ZOOM, MAX_UNIVERSE_ZOOM),
  };
}

function normalizeNotification(notification) {
  return {
    ...notification,
    actorUser: notification.actorUser || null,
    node: notification.node || null,
    relatedNode: notification.relatedNode || null,
    cluster: notification.cluster || null,
    readAt: notification.readAt || null,
    createdAt: notification.createdAt || new Date().toISOString(),
  };
}

function normalizeMegaCluster(cluster) {
  return {
    id: Number(cluster.id),
    name: String(cluster.name || `Mega ${cluster.id}`),
    centerX: Number(cluster.centerX || 0),
    centerY: Number(cluster.centerY || 0),
    radius: Math.max(0, Number(cluster.radius || 0)),
    strength: Number(cluster.strength || 0),
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
    currentHomeLocation = normalizeHomeLocation(state.homeLocation);
    viewportPositionedNodeIds = new Set();
    nodeDragBounds = normalizeUniverseBounds(state.universeBounds);
    clusters = ensurePublicCluster(state.clusters || []);
    clusterDirectory = ensurePublicCluster(state.clusterDirectory || state.clusters || []);
    publicUsers = (state.users || []).map(normalizePublicUser);
    followedClusterIds = new Set(state.followedClusterIds || []);
    megaClusters = Number(state.currentUser?.role || currentUser?.role) === 1 ? (state.megaClusters || []).map(normalizeMegaCluster) : [];
    nodes = state.nodes.map(normalizeNode);
    links = state.links.map(normalizeLink);
    hiddenLinks = null;
    temporaryNodeIds.clear();
    apiAvailable = true;
    refreshNotifications();
  } catch (error) {
    apiAvailable = false;
    currentHomeLocation = null;
  }

  lastMapSize = null;
  if (currentHomeLocation) {
    setUniverseViewCenter(currentHomeLocation.x, currentHomeLocation.y, currentHomeLocation.zoom);
  } else {
    setUniverseViewCenter(UNIVERSE_DEFAULT_CENTER.x, UNIVERSE_DEFAULT_CENTER.y, 1);
    updateHomeControls();
  }
  renderAll();
  requestAnimationFrame(resizeCanvas);
}

function applyRemoteState(state) {
  nodeDragBounds = normalizeUniverseBounds(state.universeBounds || nodeDragBounds);
  const nextNodes = (state.nodes || []).map(normalizeNode);
  const nextLinks = (state.links || []).map(normalizeLink);
  const nextNodeIds = new Set(nextNodes.map((node) => node.id));
  const keepLinksHidden = hiddenLinks !== null;

  if (state.currentUser) {
    setAuthenticatedView(state.currentUser);
  }
  currentHomeLocation = normalizeHomeLocation(state.homeLocation);
  clusters = ensurePublicCluster(state.clusters || []);
  clusterDirectory = ensurePublicCluster(state.clusterDirectory || state.clusters || []);
  publicUsers = (state.users || publicUsers).map(normalizePublicUser);
  followedClusterIds = new Set(state.followedClusterIds || []);
  megaClusters = Number(currentUser?.role) === 1 ? (state.megaClusters || []).map(normalizeMegaCluster) : [];
  nodes = nextNodes;

  if (keepLinksHidden) {
    links = [];
    hiddenLinks = nextLinks.length > 0 ? nextLinks : null;
  } else {
    links = nextLinks;
    hiddenLinks = null;
  }

  [...temporaryNodeIds].forEach((id) => {
    if (!nextNodeIds.has(id)) {
      temporaryNodeIds.delete(id);
    }
  });
  if (selectedNodeId && !nextNodeIds.has(selectedNodeId)) {
    selectedNodeId = null;
  }
  if (activeDetailNodeId && !nextNodeIds.has(activeDetailNodeId)) {
    activeDetailNodeId = null;
  }

  apiAvailable = true;
  renderAll();
  updateHomeControls();
  requestAnimationFrame(resizeCanvas);
}

async function refreshStateFromServer() {
  if (
    !currentUser ||
    !apiAvailable ||
    stateRefreshInFlight ||
    activeNodeDrag ||
    activeTemporaryNodeDrag ||
    activeUniversePan ||
    activeUniversePinch ||
    pendingConnection
  ) {
    return;
  }
  stateRefreshInFlight = true;
  try {
    const state = await apiRequest("/state");
    applyRemoteState(state);
  } catch (error) {
    if (error.status !== 401) {
      console.warn("State refresh failed", error);
    }
  } finally {
    stateRefreshInFlight = false;
  }
}

function startStateRefresh() {
  if (stateRefreshTimer !== null) return;
  stateRefreshTimer = setInterval(refreshStateFromServer, STATE_REFRESH_MS);
}

function stopStateRefresh() {
  if (stateRefreshTimer !== null) {
    clearInterval(stateRefreshTimer);
    stateRefreshTimer = null;
  }
  stateRefreshInFlight = false;
}

function getNotificationMessage(notification) {
  if (notification.type === "relay_invite") {
    const actorName = notification.actorUser ? getUserName(notification.actorUser) : t("notification.someone");
    return t("notification.relayInvite", { actor: actorName });
  }
  const actorName = notification.actorUser ? getUserName(notification.actorUser) : t("notification.someone");
  if (notification.type === "node_link") {
    const nodeTitle = notification.node?.title || t("notification.yourNode");
    const relatedTitle = notification.relatedNode?.title || t("notification.relatedNode");
    return t("notification.linkCreated", { actor: actorName, related: relatedTitle, node: nodeTitle });
  }
  if (notification.type === "node_like") {
    return t("notification.like", { actor: actorName, node: notification.node?.title || t("notification.yourNode") });
  }
  if (notification.type === "node_favorite") {
    return t("notification.favorite", { actor: actorName, node: notification.node?.title || t("notification.yourNode") });
  }
  if (notification.type === "cluster_follow") {
    return t("notification.clusterFollow", { actor: actorName, cluster: notification.cluster?.name || t("notification.yourCluster") });
  }
  return t("notification.generic");
}

function getNotificationTargetLabel(notification) {
  if (notification.node?.id) return t("notification.openNode");
  if (notification.cluster?.id) return t("notification.openCluster");
  return "";
}

function renderNotificationActor(notification) {
  const actorName = notification.actorUser ? getUserName(notification.actorUser) : t("notification.someone");
  if (!notification.actorUser?.id) {
    return `<span class="notification-actor-text">${escapeHtml(actorName)}</span>`;
  }
  return `<button class="notification-actor" type="button" data-user-id="${escapeHtml(notification.actorUser.id)}">${escapeHtml(actorName)}</button>`;
}

function renderNotificationMessage(notification) {
  const actor = renderNotificationActor(notification);
  const tail = (key, variables = {}) => escapeHtml(t(key, { actor: "", ...variables }).trimStart());
  if (notification.type === "relay_invite") {
    return `${actor}<span>${tail("notification.relayInvite")}</span>`;
  }
  if (notification.type === "node_link") {
    const nodeTitle = notification.node?.title || t("notification.yourNode");
    const relatedTitle = notification.relatedNode?.title || t("notification.relatedNode");
    return `${actor}<span>${tail("notification.linkCreated", { related: relatedTitle, node: nodeTitle })}</span>`;
  }
  if (notification.type === "node_like") {
    return `${actor}<span>${tail("notification.like", { node: notification.node?.title || t("notification.yourNode") })}</span>`;
  }
  if (notification.type === "node_favorite") {
    return `${actor}<span>${tail("notification.favorite", { node: notification.node?.title || t("notification.yourNode") })}</span>`;
  }
  if (notification.type === "cluster_follow") {
    return `${actor}<span>${tail("notification.clusterFollow", { cluster: notification.cluster?.name || t("notification.yourCluster") })}</span>`;
  }
  return `<span>${escapeHtml(t("notification.generic"))}</span>`;
}

function renderNotifications() {
  if (!notificationCount || !notificationTriggerButton || !notificationList || !markNotificationsReadButton) return;
  notificationCount.textContent = String(unreadNotificationCount);
  notificationTriggerButton.classList.toggle("has-unread", unreadNotificationCount > 0);
  markNotificationsReadButton.disabled = unreadNotificationCount === 0 || notifications.length === 0;
  if (notifications.length === 0) {
    notificationList.innerHTML = `<p class="notification-empty">${escapeHtml(t("notification.empty"))}</p>`;
    return;
  }

  const itemsMarkup = notifications
    .map((notification) => {
      const unread = notification.readAt ? "" : " is-unread";
      const targetLabel = getNotificationTargetLabel(notification);
      return `
        <article class="notification-item${unread}" data-notification-id="${escapeHtml(notification.id)}">
          <p class="notification-message">${renderNotificationMessage(notification)}</p>
          <span class="notification-meta">
            ${escapeHtml(formatDateTime(notification.createdAt) || "-")}
          </span>
          ${targetLabel ? `<button class="notification-target" type="button" data-notification-id="${escapeHtml(notification.id)}">${escapeHtml(targetLabel)}</button>` : ""}
        </article>
      `;
    })
    .join("");
  const moreMarkup = hasMoreNotifications
    ? `<button class="notification-more" type="button" aria-label="${escapeHtml(t("notification.more"))}">▽</button>`
    : "";
  notificationList.innerHTML = `${itemsMarkup}${moreMarkup}`;

  notificationList.querySelectorAll(".notification-target").forEach((button) => {
    button.addEventListener("click", () => openNotification(button.dataset.notificationId));
  });
  notificationList.querySelectorAll(".notification-actor").forEach((button) => {
    button.addEventListener("click", async () => {
      const notificationItem = button.closest(".notification-item");
      const notificationId = notificationItem?.dataset.notificationId;
      if (notificationId) {
        await markNotificationRead(notificationId);
      }
      closeNotificationDialog();
      openUserDetail(button.dataset.userId);
    });
  });
  notificationList.querySelector(".notification-more")?.addEventListener("click", loadMoreNotifications);
}

async function loadNotificationsPage({ append = false } = {}) {
  if (!currentUser || !apiAvailable || notificationRefreshInFlight) return;
  notificationRefreshInFlight = true;
  try {
    const offset = append ? notifications.length : 0;
    const limit = append ? NOTIFICATION_PAGE_SIZE : Math.max(NOTIFICATION_PAGE_SIZE, notifications.length || NOTIFICATION_PAGE_SIZE);
    const result = await apiRequest(`/notifications?limit=${limit}&offset=${offset}`);
    const nextNotifications = (result.notifications || []).map(normalizeNotification);
    if (append) {
      const existingIds = new Set(notifications.map((notification) => notification.id));
      notifications = [...notifications, ...nextNotifications.filter((notification) => !existingIds.has(notification.id))];
    } else {
      notifications = nextNotifications;
    }
    unreadNotificationCount = Number(result.unreadCount || 0);
    hasMoreNotifications = Boolean(result.hasMore);
    renderNotifications();
  } catch (error) {
    if (error.status !== 401) {
      console.warn("Notification refresh failed", error);
    }
  } finally {
    notificationRefreshInFlight = false;
  }
}

async function refreshNotifications() {
  await loadNotificationsPage({ append: false });
}

async function loadMoreNotifications() {
  await loadNotificationsPage({ append: true });
}

function startNotificationRefresh() {
  if (notificationRefreshTimer !== null) return;
  notificationRefreshTimer = setInterval(refreshNotifications, NOTIFICATION_REFRESH_MS);
}

function stopNotificationRefresh() {
  if (notificationRefreshTimer !== null) {
    clearInterval(notificationRefreshTimer);
    notificationRefreshTimer = null;
  }
  notificationRefreshInFlight = false;
  notifications = [];
  unreadNotificationCount = 0;
  hasMoreNotifications = false;
  renderNotifications();
}

async function markNotificationRead(notificationId) {
  const notification = notifications.find((item) => item.id === notificationId);
  if (!notification || notification.readAt) return;
  notification.readAt = new Date().toISOString();
  unreadNotificationCount = Math.max(0, unreadNotificationCount - 1);
  renderNotifications();
  if (!apiAvailable) return;
  try {
    await apiRequest(`/notifications/${notificationId}/read`, { method: "PATCH" });
  } catch (error) {
    refreshNotifications();
  }
}

async function markAllNotificationsRead() {
  if (notifications.length === 0 || unreadNotificationCount === 0) return;
  const readAt = new Date().toISOString();
  notifications = notifications.map((notification) => ({ ...notification, readAt: notification.readAt || readAt }));
  unreadNotificationCount = 0;
  renderNotifications();
  if (!apiAvailable) return;
  try {
    await apiRequest("/notifications/read-all", { method: "POST" });
  } catch (error) {
    refreshNotifications();
  }
}

function openNotification(notificationId) {
  const notification = notifications.find((item) => item.id === notificationId);
  if (!notification) return;
  markNotificationRead(notificationId);
  closeNotificationDialog();
  if (notification.node?.id) {
    selectedNodeId = notification.node.id;
    updateSelectedNodeClass(notification.node.id);
    centerUniverseOnNode(notification.node.id);
    openDetail(notification.node.id);
    return;
  }
  if (notification.cluster?.id) {
    openClusterNodesDialog(notification.cluster.id);
  }
}

function openNotificationDialog() {
  refreshNotifications();
  if (notificationDialog && !notificationDialog.open) {
    notificationDialog.showModal();
  }
}

function closeNotificationDialog() {
  if (notificationDialog?.open) {
    notificationDialog.close();
  }
}

function getMapRect() {
  return nodesLayer.getBoundingClientRect();
}

function getCanvasPixelRatio() {
  const ratio = window.devicePixelRatio || 1;
  return IS_IOS ? Math.min(ratio, IOS_CANVAS_DPR_CAP) : ratio;
}

function scheduleUniverseRender({ nodes: shouldRenderNodes = true, links: shouldDrawLinks = true } = {}) {
  pendingUniverseRender.nodes = pendingUniverseRender.nodes || shouldRenderNodes;
  pendingUniverseRender.links = pendingUniverseRender.links || shouldDrawLinks;
  if (universeRenderFrame !== null) return;

  universeRenderFrame = requestAnimationFrame(() => {
    universeRenderFrame = null;
    const renderNodesNow = pendingUniverseRender.nodes;
    const drawLinksNow = pendingUniverseRender.links;
    pendingUniverseRender = { nodes: false, links: false };
    if (renderNodesNow) {
      renderNodes();
    }
    if (drawLinksNow) {
      drawLinks();
    }
  });
}

function coordToWorld(value) {
  return Number(value) * UNIVERSE_COORD_UNIT_PX;
}

function worldToCoord(value) {
  return Number(value) / UNIVERSE_COORD_UNIT_PX;
}

function getCoordinateWorldPoint(point) {
  return {
    x: coordToWorld(point.x),
    y: coordToWorld(point.y),
  };
}

function getViewportCenterWorldPoint(rect = getMapRect()) {
  const width = rect.width || window.innerWidth || 960;
  const height = rect.height || window.innerHeight || 640;
  return {
    x: (width / 2 - universePan.x) / universeZoom,
    y: (height / 2 - universePan.y) / universeZoom,
  };
}

function setUniverseViewCenter(x, y, zoom = universeZoom) {
  const rect = getMapRect();
  const width = rect.width || window.innerWidth || 960;
  const height = rect.height || window.innerHeight || 640;
  const worldPoint = getCoordinateWorldPoint({ x, y });
  universeZoom = clamp(Number(zoom) || 1, MIN_UNIVERSE_ZOOM, MAX_UNIVERSE_ZOOM);
  universePan = {
    x: width / 2 - worldPoint.x * universeZoom,
    y: height / 2 - worldPoint.y * universeZoom,
  };
}

function updateHomeControls() {
  if (!homeButton || !saveHomeButton) return;
  homeButton.disabled = !currentHomeLocation;
  homeButton.title = currentHomeLocation ? t("home.moveTitle") : t("home.notSetTitle");
  homeButton.setAttribute("aria-label", homeButton.title);
  homeButton.textContent = t("home.button");
  if (!saveHomeButton.disabled) {
    saveHomeButton.textContent = t("home.saveButton");
  }
  saveHomeButton.title = t("home.saveTitle");
  saveHomeButton.setAttribute("aria-label", t("home.saveTitle"));
}

function getCurrentUniverseLocation() {
  const center = getViewportCenterWorldPoint();
  return {
    x: worldToCoord(center.x),
    y: worldToCoord(center.y),
    zoom: universeZoom,
  };
}

function moveUniverseToHome() {
  const home = normalizeHomeLocation(currentHomeLocation);
  if (!home) {
    updateHomeControls();
    return;
  }

  setUniverseViewCenter(home.x, home.y, home.zoom);
  renderNodes();
  drawLinks();
  updateHomeControls();
}

async function saveCurrentHomeLocation() {
  if (!currentUser || !apiAvailable) return;
  const previousLabel = saveHomeButton.textContent;
  saveHomeButton.disabled = true;
  saveHomeButton.textContent = t("home.saving");

  try {
    const result = await apiRequest("/space-home", {
      method: "PATCH",
      body: JSON.stringify(getCurrentUniverseLocation()),
    });
    currentHomeLocation = normalizeHomeLocation(result);
    updateHomeControls();
    saveHomeButton.textContent = t("home.saved");
    setTimeout(() => {
      saveHomeButton.textContent = previousLabel;
      saveHomeButton.disabled = false;
    }, 900);
  } catch (error) {
    saveHomeButton.textContent = previousLabel;
    saveHomeButton.disabled = false;
    window.alert(t("home.saveError"));
  }
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
  const width = rect.width || window.innerWidth || 960;
  const height = rect.height || window.innerHeight || 640;
  if (lastMapSize && lastMapSize.width > 0 && lastMapSize.height > 0 && (lastMapSize.width !== width || lastMapSize.height !== height)) {
    const center = {
      x: (lastMapSize.width / 2 - universePan.x) / universeZoom,
      y: (lastMapSize.height / 2 - universePan.y) / universeZoom,
    };
    universePan = {
      x: width / 2 - center.x * universeZoom,
      y: height / 2 - center.y * universeZoom,
    };
  }
  lastMapSize = { width, height };
  const scale = getCanvasPixelRatio();
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
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

function getStoredNodeWorldPoint(node) {
  return {
    x: coordToWorld(node.x),
    y: coordToWorld(node.y),
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

function getViewportCullRect(rect = getMapRect(), padding = VIEWPORT_CULL_PADDING) {
  return {
    left: -padding,
    top: -padding,
    right: rect.width + padding,
    bottom: rect.height + padding,
  };
}

function isPointInCullRect(point, cullRect) {
  return point.x >= cullRect.left && point.x <= cullRect.right && point.y >= cullRect.top && point.y <= cullRect.bottom;
}

function isBoundsInCullRect(bounds, cullRect) {
  return bounds.right >= cullRect.left && bounds.left <= cullRect.right && bounds.bottom >= cullRect.top && bounds.top <= cullRect.bottom;
}

function getCurveBounds(from, controlFrom, controlTo, to) {
  return {
    left: Math.min(from.x, controlFrom.x, controlTo.x, to.x),
    right: Math.max(from.x, controlFrom.x, controlTo.x, to.x),
    top: Math.min(from.y, controlFrom.y, controlTo.y, to.y),
    bottom: Math.max(from.y, controlFrom.y, controlTo.y, to.y),
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
  const nodeRadius = (isTextNodeType(source.type) ? 37 : 43) * zoomedScale;
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

function getMegaClusterPoint(cluster) {
  return {
    x: cluster.centerX * MEGA_CLUSTER_VISUAL_SCALE * universeZoom + universePan.x,
    y: cluster.centerY * MEGA_CLUSTER_VISUAL_SCALE * universeZoom + universePan.y,
  };
}

function drawMegaClusterGuides() {
  if (!currentUser || Number(currentUser.role) !== 1 || megaClusters.length === 0) return;

  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  megaClusters.forEach((cluster) => {
    const center = getMegaClusterPoint(cluster);
    const radius = Math.max(12, cluster.radius * MEGA_CLUSTER_VISUAL_SCALE * universeZoom);
    const hue = (cluster.id * 47) % 360;
    const stroke = `hsla(${hue}, 92%, 70%, 0.24)`;
    const fill = `hsla(${hue}, 92%, 60%, 0.045)`;

    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = Math.max(1, 1.2 * clamp(universeZoom, 0.55, 1.8));
    ctx.setLineDash([8, 10]);
    ctx.fill();
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.arc(center.x, center.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${hue}, 92%, 76%, 0.62)`;
    ctx.shadowColor = `hsla(${hue}, 92%, 72%, 0.72)`;
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.font = "11px Inter, system-ui, sans-serif";
    ctx.fillStyle = "rgba(246, 251, 255, 0.52)";
    ctx.fillText(cluster.name, center.x, center.y - Math.min(radius + 13, 42));
  });
  ctx.restore();
}

function drawUniverseCenterGuide() {
  const rect = getMapRect();
  const center = {
    x: rect.width / 2,
    y: rect.height / 2,
  };
  const centerWorld = getViewportCenterWorldPoint(rect);
  const centerCoord = {
    x: worldToCoord(centerWorld.x),
    y: worldToCoord(centerWorld.y),
  };
  const guideScale = clamp(universeZoom, 0.7, 1.5);
  const arm = 18 * guideScale;
  const ring = 7 * guideScale;
  ctx.save();
  ctx.globalAlpha = 0.34;
  ctx.strokeStyle = "rgba(246, 251, 255, 0.46)";
  ctx.fillStyle = "rgba(246, 251, 255, 0.38)";
  ctx.lineWidth = 1;
  ctx.shadowColor = "rgba(94, 231, 255, 0.38)";
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.moveTo(center.x - arm, center.y);
  ctx.lineTo(center.x - ring, center.y);
  ctx.moveTo(center.x + ring, center.y);
  ctx.lineTo(center.x + arm, center.y);
  ctx.moveTo(center.x, center.y - arm);
  ctx.lineTo(center.x, center.y - ring);
  ctx.moveTo(center.x, center.y + ring);
  ctx.lineTo(center.x, center.y + arm);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(center.x, center.y, ring, 0, Math.PI * 2);
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.font = "11px Inter, ui-sans-serif, system-ui";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText(t("universe.coordinate", { x: centerCoord.x.toFixed(1), y: centerCoord.y.toFixed(1) }), center.x + arm + 8, center.y + arm * 0.55);
  ctx.restore();
}

function isExplorationMode() {
  return universeMode === UNIVERSE_MODES.explore;
}

function getExplorationArea(rect = getMapRect()) {
  const radius = clamp(
    Math.min(rect.width, rect.height) * EXPLORATION_AREA_RADIUS_RATIO,
    EXPLORATION_AREA_MIN_RADIUS,
    EXPLORATION_AREA_MAX_RADIUS,
  );
  return {
    x: rect.width / 2,
    y: rect.height / 2,
    radius,
  };
}

function isPointInExplorationArea(point, rect = getMapRect()) {
  const area = getExplorationArea(rect);
  return Math.hypot(point.x - area.x, point.y - area.y) <= area.radius;
}

function drawExplorationArea(rect = getMapRect()) {
  if (!isExplorationMode()) return;
  const area = getExplorationArea(rect);
  ctx.save();
  ctx.beginPath();
  ctx.arc(area.x, area.y, area.radius, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(94, 231, 255, 0.045)";
  ctx.strokeStyle = "rgba(94, 231, 255, 0.52)";
  ctx.lineWidth = Math.max(1.2, 1.8 * clamp(universeZoom, 0.55, 1.5));
  ctx.setLineDash([8, 10]);
  ctx.shadowColor = "rgba(94, 231, 255, 0.52)";
  ctx.shadowBlur = 18;
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();
}

function drawLinks() {
  const rect = getMapRect();
  const cullRect = getViewportCullRect(rect);
  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  ctx.clearRect(0, 0, rect.width, rect.height);
  ctx.lineCap = "round";
  ctx.textBaseline = "middle";
  linkCommentHitboxes = [];
  drawMegaClusterGuides();
  drawUniverseCenterGuide();
  drawExplorationArea(rect);
  if (isExplorationMode()) return;
  const displayLayerContext = createNodeDisplayLayerContext();

  links.forEach((link) => {
    const source = nodeById.get(link.source);
    const target = nodeById.get(link.target);
    if (!source || !target) return;
    if (getNodeDisplayLayer(source, displayLayerContext) === "background" || getNodeDisplayLayer(target, displayLayerContext) === "background") return;

    const from = getNodePoint(source);
    const to = getNodePoint(target);
    const bend = Math.min(90, Math.hypot(to.x - from.x, to.y - from.y) * 0.22);
    const controlFrom = { x: from.x + bend, y: from.y - bend };
    const controlTo = { x: to.x - bend, y: to.y + bend };
    if (!isBoundsInCullRect(getCurveBounds(from, controlFrom, controlTo, to), cullRect)) return;

    const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
    gradient.addColorStop(0, `${typeMeta[source.type].color}cc`);
    gradient.addColorStop(1, `${typeMeta[target.type].color}cc`);

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
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

function highlightNewNode(id) {
  if (!id) return;
  highlightedNewNodeIds.set(id, Date.now() + NEW_NODE_HIGHLIGHT_MS);
  setTimeout(() => {
    const expiresAt = highlightedNewNodeIds.get(id);
    if (!expiresAt || expiresAt > Date.now()) return;
    highlightedNewNodeIds.delete(id);
    document.querySelector(`.node[data-node-id="${CSS.escape(id)}"]`)?.classList.remove("is-newly-created");
  }, NEW_NODE_HIGHLIGHT_MS + 80);
}

function isNewNodeHighlighted(id) {
  const expiresAt = highlightedNewNodeIds.get(id);
  if (!expiresAt) return false;
  if (expiresAt > Date.now()) return true;
  highlightedNewNodeIds.delete(id);
  return false;
}

function handleNodeTouchDoubleTap(event, id) {
  if (!IS_IOS || event.pointerType !== "touch" || suppressNodeClick || activeUniversePinch) return;
  const node = nodes.find((item) => item.id === id);
  if (!node || !canOpenNodeInUniverse(node, getNodePoint(node))) {
    lastNodeTouchTap = null;
    return;
  }

  const now = performance.now();
  const previous = lastNodeTouchTap;
  lastNodeTouchTap = {
    id,
    time: now,
    clientX: event.clientX,
    clientY: event.clientY,
  };

  if (!previous || previous.id !== id || now - previous.time > IOS_NODE_DOUBLE_TAP_MS) return;
  const distance = Math.hypot(event.clientX - previous.clientX, event.clientY - previous.clientY);
  if (distance > IOS_NODE_DOUBLE_TAP_DISTANCE) return;

  event.preventDefault();
  event.stopPropagation();
  lastNodeTouchTap = null;
  selectedNodeId = id;
  updateSelectedNodeClass(id);
  openDetail(id);
}

function renderNodes() {
  nodesLayer.innerHTML = "";
  const rect = getMapRect();
  const cullRect = getViewportCullRect(rect);
  const displayLayerContext = createNodeDisplayLayerContext();

  nodes.forEach((node) => {
    const displayLayer = getNodeDisplayLayer(node, displayLayerContext);
    const layerStyle = NODE_DISPLAY_LAYERS[displayLayer] || NODE_DISPLAY_LAYERS.background;
    const point = getNodePoint(node);
    if (!isPointInCullRect(point, cullRect)) return;
    const isExplore = isExplorationMode();
    const isInExplorationArea = displayLayer === "background" && isExplore && isPointInExplorationArea(point);
    const isOutsideExplorationArea = isExplore && !isPointInExplorationArea(point);
    const modeClass = isExplore ? "node-mode-explore" : "node-mode-context";
    const exploreClass = isExplore
      ? displayLayer === "background"
        ? ` node-explore-background${isInExplorationArea ? " node-explore-in-area" : ""}`
        : ` node-explore-muted${isOutsideExplorationArea ? " node-explore-outside-area" : ""}`
      : "";
    const nodeColor = isExplore && displayLayer !== "background" ? "#5b6470" : isExplore && displayLayer === "background" ? typeMeta[node.type].color : layerStyle.useTypeColor ? typeMeta[node.type].color : "#3f4652";
    const nodeScale = isExplore && displayLayer === "background" ? 0.44 : layerStyle.scale;
    const button = document.createElement("button");
    button.className = `node ${modeClass} ${layerStyle.className} ${getNodeLayerGlowClass(node.id, displayLayer)}${displayLayer === "background" ? " node-out-of-scope" : ""}${exploreClass}${node.id === selectedNodeId ? " is-selected" : ""}${isNewNodeHighlighted(node.id) ? " is-newly-created" : ""}`;
    button.type = "button";
    button.style.left = `${point.x}px`;
    button.style.top = `${point.y}px`;
    button.style.setProperty("--node-color", nodeColor);
    button.style.setProperty("--size", `${isTextNodeType(node.type) ? 74 : 86}px`);
    button.style.setProperty("--node-scale", String(clamp(universeZoom, 0.45, 2.6) * nodeScale));
    button.setAttribute("aria-label", `${node.title}${labels.open}`);
    button.dataset.nodeId = node.id;
    button.dataset.nodeLayer = displayLayer;
    button.innerHTML = `
      <span class="node-type">${typeMeta[node.type].glyph}</span>
      <span class="node-label">${escapeHtml(node.title)}</span>
    `;
    button.addEventListener("pointerdown", (event) => startNodeDrag(event, node.id, button));
    button.addEventListener("pointermove", moveNodeDrag);
    button.addEventListener("pointerup", (event) => {
      finishNodeDrag(event);
      handleNodeTouchDoubleTap(event, node.id);
    });
    button.addEventListener("pointercancel", cancelNodeDrag);
    button.addEventListener("click", (event) => {
      if (suppressNodeClick) {
        event.preventDefault();
        suppressNodeClick = false;
        return;
      }
      if (!canOpenNodeInUniverse(node, point, displayLayerContext)) return;
      selectedNodeId = node.id;
      updateSelectedNodeClass(node.id);
    });
    button.addEventListener("dblclick", () => {
      if (!canOpenNodeInUniverse(node, point, displayLayerContext)) return;
      openDetail(node.id);
    });
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

function createNodeDisplayLayerContext() {
  const homeIds = new Set();
  const interestIds = new Set();
  const connectedIds = new Set();

  if (!currentUser) {
    nodes.forEach((node) => homeIds.add(node.id));
    return { homeIds, interestIds, connectedIds };
  }

  nodes.forEach((node) => {
    if (node.ownerUserId === currentUser.id) {
      homeIds.add(node.id);
    } else if (followedClusterIds.has(node.clusterId) || node.favoritedByCurrentUser) {
      interestIds.add(node.id);
    }
  });

  const anchorIds = new Set([...homeIds, ...interestIds]);
  getAllKnownLinks().forEach((link) => {
    if (anchorIds.has(link.source) && !anchorIds.has(link.target)) {
      connectedIds.add(link.target);
    }
    if (anchorIds.has(link.target) && !anchorIds.has(link.source)) {
      connectedIds.add(link.source);
    }
  });

  return { homeIds, interestIds, connectedIds };
}

function getNodeDisplayLayer(node, context = createNodeDisplayLayerContext()) {
  if (context.homeIds.has(node.id)) return "home";
  if (context.interestIds.has(node.id)) return "interest";
  if (context.connectedIds.has(node.id)) return "connected";
  return "background";
}

function getNodeLayerGlowClass(id, layer) {
  if (layer === "home") return getNodeGlowClass(id);
  if (layer === "interest") return "node-glow-normal";
  if (layer === "connected") return "node-glow-dim";
  return "node-glow-muted";
}

function canInteractWithNodeLayer(layer) {
  return layer === "home" || layer === "interest";
}

function canMoveOrConnectNode(node, context = createNodeDisplayLayerContext()) {
  if (isExplorationMode()) return false;
  return canInteractWithNodeLayer(getNodeDisplayLayer(node, context));
}

function canOpenNodeInUniverse(node, point = getNodePoint(node), context = createNodeDisplayLayerContext()) {
  const layer = getNodeDisplayLayer(node, context);
  if (isExplorationMode()) {
    return isPointInExplorationArea(point);
  }
  return layer !== "background";
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
  const worldX = (event.clientX - rect.left - universePan.x) / universeZoom;
  const worldY = (event.clientY - rect.top - universePan.y) / universeZoom;
  return {
    x: clamp(worldToCoord(worldX), nodeDragBounds.minX, nodeDragBounds.maxX),
    y: clamp(worldToCoord(worldY), nodeDragBounds.minY, nodeDragBounds.maxY),
  };
}

function isPointInElement(clientX, clientY, element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}

function isPointerInTemporaryNodeBin(event) {
  return isPointInElement(event.clientX, event.clientY, temporaryNodeBin);
}

function isPointerInUniverse(event) {
  return isPointInElement(event.clientX, event.clientY, nodesLayer);
}

function setTemporaryBinDropActive(active) {
  if (!temporaryNodeBin) return;
  temporaryNodeBin.classList.toggle("is-drop-target", Boolean(active));
}

function createTemporaryNodeGhost(node, clientX, clientY) {
  const ghost = document.createElement("div");
  ghost.className = "temporary-node-drag-ghost";
  ghost.style.setProperty("--node-color", typeMeta[node.type].color);
  ghost.innerHTML = `
    <span class="temporary-node-dot" aria-hidden="true">${typeMeta[node.type].glyph}</span>
    <span>${escapeHtml(node.title)}</span>
  `;
  document.body.appendChild(ghost);
  moveTemporaryNodeGhost(ghost, clientX, clientY);
  return ghost;
}

function moveTemporaryNodeGhost(ghost, clientX, clientY) {
  ghost.style.left = `${clientX}px`;
  ghost.style.top = `${clientY}px`;
}

function renderTemporaryNodeBin() {
  if (!temporaryNodeBin || !temporaryNodeList || !temporaryNodeCount) return;
  const items = [...temporaryNodeIds]
    .map((id) => nodes.find((node) => node.id === id))
    .filter(Boolean);
  temporaryNodeIds.clear();
  items.forEach((node) => temporaryNodeIds.add(node.id));
  temporaryNodeCount.textContent = `${items.length}/${TEMPORARY_NODE_LIMIT}`;
  temporaryNodeBin.classList.toggle("has-items", items.length > 0);
  temporaryNodeList.innerHTML = items.length
    ? ""
    : `<p class="temporary-node-empty">${escapeHtml(t("common.empty"))}</p>`;

  items.forEach((node) => {
    const item = document.createElement("div");
    item.className = "temporary-node-item";
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", t("node.restoreFromTemporary", { title: node.title }));
    item.dataset.nodeId = node.id;
    item.style.setProperty("--node-color", typeMeta[node.type].color);
    item.innerHTML = `
      <span class="temporary-node-dot" aria-hidden="true">${typeMeta[node.type].glyph}</span>
      <span class="temporary-node-title">${escapeHtml(node.title)}</span>
      <button class="temporary-node-restore" type="button">${escapeHtml(t("temporary.restore"))}</button>
    `;
    item.addEventListener("click", () => {
      selectedNodeId = node.id;
      updateSelectedNodeClass(node.id);
    });
    item.addEventListener("dblclick", () => openDetail(node.id));
    item.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectedNodeId = node.id;
      updateSelectedNodeClass(node.id);
    });
    item.querySelector(".temporary-node-restore").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      removeNodeFromTemporaryBin(node.id);
    });
    item.addEventListener("pointerdown", (event) => {
      if (event.target.closest(".temporary-node-restore")) return;
      startTemporaryNodeDrag(event, node.id, item);
    });
    item.addEventListener("pointermove", moveTemporaryNodeDrag);
    item.addEventListener("pointerup", finishTemporaryNodeDrag);
    item.addEventListener("pointercancel", cancelTemporaryNodeDrag);
    temporaryNodeList.appendChild(item);
  });
}

function addNodeToTemporaryBin(id) {
  if (!id) return false;
  if (!temporaryNodeIds.has(id) && temporaryNodeIds.size >= TEMPORARY_NODE_LIMIT) {
    window.alert(t("node.tempLimit", { limit: TEMPORARY_NODE_LIMIT }));
    return false;
  }
  temporaryNodeIds.add(id);
  renderTemporaryNodeBin();
  return true;
}

function removeNodeFromTemporaryBin(id) {
  temporaryNodeIds.delete(id);
  renderTemporaryNodeBin();
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
  scheduleUniverseRender({ nodes: false, links: true });
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
  if (activeUniversePinch) return;
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
  if (activeUniversePinch) return;
  if (!activeUniversePan || activeUniversePan.pointerId !== event.pointerId) return;
  event.preventDefault();
  universePan = {
    x: activeUniversePan.startPanX + event.clientX - activeUniversePan.startClientX,
    y: activeUniversePan.startPanY + event.clientY - activeUniversePan.startClientY,
  };
  scheduleUniverseRender();
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

function getLayerPoint(clientX, clientY) {
  const rect = getMapRect();
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function getPinchPointers() {
  return [...activeUniversePointers.values()]
    .filter((pointer) => pointer.pointerType === "touch")
    .sort((first, second) => first.pointerId - second.pointerId)
    .slice(0, 2);
}

function getPinchMetrics(pointers) {
  const [first, second] = pointers;
  const firstPoint = getLayerPoint(first.clientX, first.clientY);
  const secondPoint = getLayerPoint(second.clientX, second.clientY);
  return {
    centerX: (firstPoint.x + secondPoint.x) / 2,
    centerY: (firstPoint.y + secondPoint.y) / 2,
    distance: Math.hypot(secondPoint.x - firstPoint.x, secondPoint.y - firstPoint.y),
  };
}

function cancelActiveNodeDragForPinch() {
  if (!activeNodeDrag) return;
  activeNodeDrag.button.classList.remove("is-dragging");
  if (activeNodeDrag.button.releasePointerCapture) {
    try {
      activeNodeDrag.button.releasePointerCapture(activeNodeDrag.pointerId);
    } catch (error) {
      // The pointer may already have been released by the browser while switching to pinch.
    }
  }
  activeNodeDrag = null;
}

function startUniversePinch() {
  const pointers = getPinchPointers();
  if (pointers.length < 2) return;

  const metrics = getPinchMetrics(pointers);
  if (metrics.distance <= 0) return;

  hideLinkCommentTooltip();
  activeUniversePan = null;
  nodesLayer.classList.remove("is-panning");
  cancelActiveNodeDragForPinch();
  activeUniversePinch = {
    startDistance: metrics.distance,
    startZoom: universeZoom,
    worldCenterX: (metrics.centerX - universePan.x) / universeZoom,
    worldCenterY: (metrics.centerY - universePan.y) / universeZoom,
  };
}

function trackUniversePointer(event) {
  if (event.pointerType !== "touch") return;
  activeUniversePointers.set(event.pointerId, {
    pointerId: event.pointerId,
    pointerType: event.pointerType,
    clientX: event.clientX,
    clientY: event.clientY,
  });

  if (activeUniversePointers.size >= 2) {
    event.preventDefault();
    startUniversePinch();
  }
}

function moveUniversePinch(event) {
  if (event.pointerType !== "touch" || !activeUniversePointers.has(event.pointerId)) return;
  activeUniversePointers.set(event.pointerId, {
    pointerId: event.pointerId,
    pointerType: event.pointerType,
    clientX: event.clientX,
    clientY: event.clientY,
  });

  if (!activeUniversePinch) return;
  const pointers = getPinchPointers();
  if (pointers.length < 2) return;

  event.preventDefault();
  const metrics = getPinchMetrics(pointers);
  const nextZoom = clamp(
    activeUniversePinch.startZoom * (metrics.distance / activeUniversePinch.startDistance),
    MIN_UNIVERSE_ZOOM,
    MAX_UNIVERSE_ZOOM,
  );
  universeZoom = nextZoom;
  universePan = {
    x: metrics.centerX - activeUniversePinch.worldCenterX * universeZoom,
    y: metrics.centerY - activeUniversePinch.worldCenterY * universeZoom,
  };
  scheduleUniverseRender();
}

function finishUniversePointer(event) {
  if (event.pointerType !== "touch") return;
  activeUniversePointers.delete(event.pointerId);
  if (activeUniversePointers.size < 2) {
    activeUniversePinch = null;
  } else {
    startUniversePinch();
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
  scheduleUniverseRender();
}

function startNodeDrag(event, id, button) {
  if (activeUniversePinch || (event.pointerType === "touch" && activeUniversePointers.size >= 2)) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  if (event.button !== 0) return;
  const node = nodes.find((item) => item.id === id);
  if (!node) return;
  if (!canMoveOrConnectNode(node)) return;
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
    originalX: node.x,
    originalY: node.y,
    moved: false,
  };
  button.classList.add("is-dragging");
  if (button.setPointerCapture) {
    button.setPointerCapture(event.pointerId);
  }
}

function moveNodeDrag(event) {
  if (activeUniversePinch) return;
  if (!activeNodeDrag || activeNodeDrag.pointerId !== event.pointerId) return;
  event.preventDefault();
  const distance = Math.hypot(event.clientX - activeNodeDrag.startX, event.clientY - activeNodeDrag.startY);
  if (distance > 3) {
    activeNodeDrag.moved = true;
  }
  const position = getPointerMapPosition(event);
  setNodePosition(activeNodeDrag.id, position.x, position.y, activeNodeDrag.button);
  setTemporaryBinDropActive(isPointerInTemporaryNodeBin(event));
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
  const displayLayerContext = createNodeDisplayLayerContext();
  if (!canMoveOrConnectNode(draggedNode, displayLayerContext)) return null;

  const draggedPoint = getNodePoint(draggedNode);
  let nearest = null;
  let nearestDistance = threshold;
  nodes.forEach((node) => {
    if (node.id === draggedId) return;
    if (!canMoveOrConnectNode(node, displayLayerContext)) return;
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
  connectionType.textContent = t("connection.type");
  connectionTitle.textContent = t("connection.connectTitle");
  connectionSummary.textContent = t("connection.summary", { source: sourceNode.title, target: targetNode.title });
  connectionCommentInput.value = "";
  connectionCommentInput.readOnly = false;
  confirmConnectionButton.textContent = t("connection.connectButton");
  confirmConnectionButton.hidden = false;
  disconnectConnectionButton.hidden = true;
  updateConnectionActionsLayout();
  cancelConnectionButton.textContent = t("common.cancel");
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
    <span class="detail-kind">${escapeHtml(t("connection.kind"))}</span>
    <span class="detail-cluster-meta">${renderOwnerLink(ownerUser)}</span>
    ${createdAtMarkup}
  `;
  bindOwnerDetailLinks(connectionType);
  connectionTitle.textContent = canEdit ? t("connection.editTitle") : t("connection.commentTitle");
  connectionSummary.textContent = t("connection.commentSummary", { source: sourceNode.title, target: targetNode.title });
  connectionCommentInput.value = hitbox.comment;
  connectionCommentInput.readOnly = !canEdit;
  confirmConnectionButton.textContent = t("connection.save");
  confirmConnectionButton.hidden = !canEdit;
  disconnectConnectionButton.hidden = !canDelete;
  updateConnectionActionsLayout();
  cancelConnectionButton.textContent = canEdit ? t("common.cancel") : t("common.close");
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
  connectionType.textContent = t("connection.type");
  connectionCommentInput.readOnly = false;
  confirmConnectionButton.hidden = false;
  disconnectConnectionButton.hidden = true;
  updateConnectionActionsLayout();
  cancelConnectionButton.textContent = t("common.cancel");
  connectionDialog.close();
}

function finishNodeDrag(event) {
  if (!activeNodeDrag || activeNodeDrag.pointerId !== event.pointerId) return;
  event.preventDefault();
  const drag = activeNodeDrag;
  activeNodeDrag = null;
  setTemporaryBinDropActive(false);
  drag.button.classList.remove("is-dragging");
  if (drag.button.releasePointerCapture) {
    drag.button.releasePointerCapture(event.pointerId);
  }
  if (drag.moved) {
    suppressNodeClick = true;
    if (isPointerInTemporaryNodeBin(event)) {
      if (addNodeToTemporaryBin(drag.id)) {
        setNodePosition(drag.id, drag.originalX, drag.originalY, drag.button);
      } else {
        persistNodePosition(drag.id);
      }
      return;
    }
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
  setTemporaryBinDropActive(false);
  activeNodeDrag = null;
}

function startTemporaryNodeDrag(event, id, item) {
  if (event.button !== 0) return;
  const node = nodes.find((candidate) => candidate.id === id);
  if (!node) return;
  if (!canMoveOrConnectNode(node)) return;
  event.preventDefault();
  event.stopPropagation();
  selectedNodeId = id;
  updateSelectedNodeClass(id);
  activeTemporaryNodeDrag = {
    id,
    item,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    moved: false,
    ghost: createTemporaryNodeGhost(node, event.clientX, event.clientY),
  };
  item.classList.add("is-dragging");
  if (item.setPointerCapture) {
    item.setPointerCapture(event.pointerId);
  }
}

function moveTemporaryNodeDrag(event) {
  if (!activeTemporaryNodeDrag || activeTemporaryNodeDrag.pointerId !== event.pointerId) return;
  event.preventDefault();
  const distance = Math.hypot(event.clientX - activeTemporaryNodeDrag.startX, event.clientY - activeTemporaryNodeDrag.startY);
  if (distance > 3) {
    activeTemporaryNodeDrag.moved = true;
  }
  moveTemporaryNodeGhost(activeTemporaryNodeDrag.ghost, event.clientX, event.clientY);
  setTemporaryBinDropActive(isPointerInTemporaryNodeBin(event));
}

function finishTemporaryNodeDrag(event) {
  if (!activeTemporaryNodeDrag || activeTemporaryNodeDrag.pointerId !== event.pointerId) return;
  event.preventDefault();
  const drag = activeTemporaryNodeDrag;
  activeTemporaryNodeDrag = null;
  drag.item.classList.remove("is-dragging");
  drag.ghost.remove();
  setTemporaryBinDropActive(false);
  if (drag.item.releasePointerCapture) {
    drag.item.releasePointerCapture(event.pointerId);
  }
  if (!drag.moved || isPointerInTemporaryNodeBin(event) || !isPointerInUniverse(event)) return;

  const position = getPointerMapPosition(event);
  setNodePosition(drag.id, position.x, position.y);
  removeNodeFromTemporaryBin(drag.id);
  renderNodes();
  persistNodePosition(drag.id);
  const nearbyNode = findNearbyNodeForConnection(drag.id);
  const draggedNode = nodes.find((node) => node.id === drag.id);
  if (nearbyNode && draggedNode) {
    openConnectionDialog(nearbyNode, draggedNode);
  }
}

function cancelTemporaryNodeDrag(event) {
  if (!activeTemporaryNodeDrag || activeTemporaryNodeDrag.pointerId !== event.pointerId) return;
  activeTemporaryNodeDrag.item.classList.remove("is-dragging");
  activeTemporaryNodeDrag.ghost.remove();
  setTemporaryBinDropActive(false);
  activeTemporaryNodeDrag = null;
}

function renderNodeList() {
  const visibleNodes = getNodesByCreatedDesc(getNodeListItems());
  const displayedNodes = visibleNodes.slice(0, nodeListVisibleCount);
  updateNodeListTabs();
  if (visibleNodes.length === 0) {
    const emptyMessage =
      activeNodeListMode === "followed"
        ? t("node.emptyFollowing")
        : activeNodeListMode === "favorites"
          ? t("node.emptyFavorites")
          : t("node.emptyOwn");
    nodeList.innerHTML = `<p class="node-list-empty">${escapeHtml(emptyMessage)}</p>`;
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
        <span class="node-list-preview">${escapeHtml(truncateText(node.body, 42))}</span>
        <span class="node-list-meta">${escapeHtml(getTypeLabel(node.type))} / ${escapeHtml(formatDateTime(node.createdAt) || "-")} / Like ${Number(node.likeCount || 0)} / ${escapeHtml(t("node.connectionCount", { count: getNodeRelationCount(node.id) }))}</span>
      </span>
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
    showMoreButton.title = t("search.showMore");
    showMoreButton.setAttribute("aria-label", t("search.showMore"));
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

function getClusterSearchValue(cluster, sortKey) {
  if (sortKey === "followerCount") return Number(cluster.followerCount || 0);
  return new Date(cluster.createdAt || 0).getTime();
}

function getUserSearchValue(user) {
  return new Date(user.createdAt || 0).getTime();
}

function getSearchSortOptions(type = searchTypeInput.value) {
  if (type === "cluster") {
    return [
      { value: "createdAt", label: t("search.createdAt") },
      { value: "followerCount", label: t("search.followerCount") },
    ];
  }
  if (type === "user" || type === "all") {
    return [{ value: "createdAt", label: t("search.createdAt") }];
  }
  return [
    { value: "createdAt", label: t("search.createdAt") },
    { value: "likeCount", label: t("search.likeCount") },
    { value: "connectionCount", label: t("search.connectionCount") },
  ];
}

function updateSearchSortOptions() {
  const currentValue = searchSortInput.value;
  const options = getSearchSortOptions();
  searchSortInput.innerHTML = options
    .map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`)
    .join("");
  searchSortInput.value = options.some((option) => option.value === currentValue) ? currentValue : "createdAt";
}

function getSearchFilteredItems() {
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

  const results = [];

  if (type === "all" || ["text", "relay", "image", "music", "video"].includes(type)) {
    nodes.forEach((node) => {
      if (type !== "all" && node.type !== type) return;
      const haystack = `${node.title || ""}\n${node.body || ""}`.toLowerCase();
      if (!terms.every((term) => haystack.includes(term))) return;
      results.push({
        kind: "node",
        item: node,
        sortValue: getNodeSearchValue(node, type === "all" ? "createdAt" : sortKey),
        title: node.title || "",
      });
    });
  }

  if (type === "all" || type === "user") {
    publicUsers.forEach((user) => {
      const haystack = `${user.userName || ""}\n${user.userId || ""}\n${user.bio || ""}`.toLowerCase();
      if (!terms.every((term) => haystack.includes(term))) return;
      results.push({
        kind: "user",
        item: user,
        sortValue: getUserSearchValue(user),
        title: getUserName(user),
      });
    });
  }

  if (type === "all" || type === "cluster") {
    clusterDirectory.forEach((cluster) => {
      const haystack = `${cluster.name || ""}\n${cluster.description || ""}\n${getUserName(cluster.ownerUser)}`.toLowerCase();
      if (!terms.every((term) => haystack.includes(term))) return;
      results.push({
        kind: "cluster",
        item: cluster,
        sortValue: getClusterSearchValue(cluster, type === "all" ? "createdAt" : sortKey),
        title: cluster.name || "",
      });
    });
  }

  return results.sort((first, second) => {
    if (first.sortValue !== second.sortValue) return (first.sortValue - second.sortValue) * direction;
    if (first.kind !== second.kind) return first.kind.localeCompare(second.kind);
    return String(first.title || "").localeCompare(String(second.title || ""), "ja");
  });
}

function renderSearchNodeResult(node) {
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
      <span class="search-result-meta">${escapeHtml(getTypeLabel(node.type))} / ${escapeHtml(formatDateTime(node.createdAt) || "-")} / Like ${Number(node.likeCount || 0)} / ${escapeHtml(t("node.connectionCount", { count: getNodeRelationCount(node.id) }))}</span>
    </span>
  `;
  button.addEventListener("click", () => {
    selectedNodeId = node.id;
    updateSelectedNodeClass(node.id);
    centerUniverseOnNode(node.id);
  });
  button.addEventListener("dblclick", () => openDetail(node.id));
  return button;
}

function renderSearchUserResult(user) {
  const button = document.createElement("button");
  button.className = "search-result-item search-result-user";
  button.type = "button";
  button.dataset.userId = user.id;
  button.style.setProperty("--node-color", "#5ee7ff");
  const icon = resolveMediaUrl(user.profileIcon);
  button.innerHTML = `
    <span class="node-list-dot search-result-avatar" aria-hidden="true">${icon ? `<img src="${escapeHtml(icon)}" alt="" />` : escapeHtml(getUserName(user).slice(0, 1).toUpperCase())}</span>
    <span class="search-result-main">
      <span class="search-result-title">${escapeHtml(getUserName(user))}</span>
      <span class="search-result-preview">${escapeHtml(truncateText(user.bio || t("profile.emptyBio"), 42))}</span>
      <span class="search-result-meta">${escapeHtml(t("profile.type"))} / ${escapeHtml(formatDateTime(user.createdAt) || "-")}</span>
    </span>
  `;
  button.addEventListener("click", () => openUserDetail(user.id));
  return button;
}

function renderSearchClusterResult(cluster) {
  const button = document.createElement("button");
  button.className = "search-result-item search-result-cluster";
  button.type = "button";
  button.dataset.clusterId = cluster.id;
  button.style.setProperty("--node-color", "#ffd166");
  button.innerHTML = `
    <span class="node-list-dot" aria-hidden="true">C</span>
    <span class="search-result-main">
      <span class="search-result-title">${escapeHtml(cluster.name)}</span>
      <span class="search-result-preview">${escapeHtml(truncateText(cluster.description || t("cluster.noDescription"), 42))}</span>
      <span class="search-result-meta">${escapeHtml(t("cluster.type"))} / ${escapeHtml(t("cluster.followers", { count: Number(cluster.followerCount || 0) }))} / ${escapeHtml(formatDateTime(cluster.createdAt) || "-")}</span>
    </span>
  `;
  button.addEventListener("click", () => openClusterNodesDialog(cluster.id));
  return button;
}

function renderSearchResults() {
  const hasSearchWord = String(searchWordInput.value || "").trim().length > 0;
  updateSearchSortOptions();
  const results = getSearchFilteredItems();
  const displayedResults = results.slice(0, searchResultVisibleCount);
  searchResultCount.textContent = String(results.length);

  if (!hasSearchWord) {
    searchResults.innerHTML = `<p class="search-empty">${escapeHtml(t("search.wordPlaceholder"))}</p>`;
    return;
  }

  if (results.length === 0) {
    searchResults.innerHTML = `<p class="search-empty">${escapeHtml(t("search.noResults"))}</p>`;
    return;
  }

  searchResults.innerHTML = "";
  displayedResults.forEach((result) => {
    const element =
      result.kind === "user"
        ? renderSearchUserResult(result.item)
        : result.kind === "cluster"
          ? renderSearchClusterResult(result.item)
          : renderSearchNodeResult(result.item);
    searchResults.appendChild(element);
  });

  if (displayedResults.length < results.length) {
    const showMoreButton = document.createElement("button");
    showMoreButton.className = "search-result-more";
    showMoreButton.type = "button";
    showMoreButton.title = t("search.showMore");
    showMoreButton.setAttribute("aria-label", t("search.showMore"));
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
  searchSidebarToggle.title = collapsed ? t("search.show") : t("search.hide");
  searchSidebarToggle.setAttribute("aria-label", collapsed ? t("search.show") : t("search.hide"));
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

function setLeftSidebarCollapsed(collapsed) {
  appShell.classList.toggle("sidebar-collapsed", collapsed);
  leftSidebar.classList.toggle("is-collapsed", collapsed);
  sidebarToggleButton.textContent = collapsed ? t("nav.menu") : t("common.close");
  sidebarToggleButton.title = collapsed ? t("nav.showSidebar") : t("nav.hideSidebar");
  sidebarToggleButton.setAttribute("aria-label", collapsed ? t("nav.showSidebar") : t("nav.hideSidebar"));
  sidebarToggleButton.setAttribute("aria-expanded", String(!collapsed));
  localStorage.setItem("textosphereLeftSidebarCollapsed", collapsed ? "1" : "0");
  requestAnimationFrame(() => {
    resizeCanvas();
    setTimeout(resizeCanvas, 180);
  });
}

function toggleLeftSidebar() {
  setLeftSidebarCollapsed(!leftSidebar.classList.contains("is-collapsed"));
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
  const description = truncateText(cluster.description || t("cluster.noDescription"), activeClusterListMode === "followed" ? 28 : 34);
  const followerText = t("cluster.followers", { count: Number(cluster.followerCount || 0) });
  if (activeClusterListMode !== "followed") return `${description} / ${followerText}`;
  return `${getUserName(cluster.ownerUser)} / ${description} / ${followerText}`;
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
        ? t("cluster.noClusters")
        : t("cluster.noClusters");
    clusterList.innerHTML = `<p class="cluster-list-empty">${escapeHtml(emptyMessage)}</p>`;
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

function canDeleteCluster(cluster) {
  if (!cluster || cluster.id === PUBLIC_CLUSTER_ID || cluster.name === "Public") return false;
  return canManageOwner(cluster.ownerUserId);
}

function getClusterMoveOptionsMarkup(currentClusterId) {
  const moveTargets = clusters.filter((cluster) => cluster.id !== currentClusterId);
  if (moveTargets.length === 0) {
    return `<option value="">${escapeHtml(t("cluster.noMoveTarget"))}</option>`;
  }
  return [
    `<option value="">${escapeHtml(t("cluster.moveTo"))}</option>`,
    ...moveTargets.map((cluster) => `<option value="${escapeHtml(cluster.id)}">${escapeHtml(cluster.name)}</option>`),
  ].join("");
}

function canMoveNodeCluster(node) {
  return Boolean(currentUser && node?.ownerUserId === currentUser.id);
}

function renderClusterNodeList(clusterId) {
  const clusterNodes = getNodesByCreatedDesc(nodes.filter((node) => node.clusterId === clusterId));
  if (clusterNodes.length === 0) {
    clusterNodesContent.innerHTML = `<p class="cluster-nodes-empty">${escapeHtml(t("node.emptyOwn"))}</p>`;
    return clusterNodes.length;
  }

  clusterNodesContent.innerHTML = "";
  clusterNodes.forEach((node) => {
    const row = document.createElement("article");
    const canMove = canMoveNodeCluster(node);
    row.className = `cluster-node-row has-move-status${canMove ? " has-move-control" : " is-move-locked"}`;
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
        <span class="cluster-node-meta">${escapeHtml(getTypeLabel(node.type))} / ${escapeHtml(formatDateTime(node.createdAt) || "-")} / Like ${Number(node.likeCount || 0)} / ${escapeHtml(t("node.connectionCount", { count: getNodeRelationCount(node.id) }))}</span>
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
    row.appendChild(button);

    if (canMove) {
      const hasMoveTargets = clusters.some((cluster) => cluster.id !== node.clusterId);
      const moveField = document.createElement("label");
      moveField.className = "cluster-node-move-field";
      moveField.innerHTML = `
        <span>${escapeHtml(t("cluster.move"))}</span>
        <select class="cluster-node-move-select" data-node-id="${escapeHtml(node.id)}" ${hasMoveTargets ? "" : "disabled"}>
          ${getClusterMoveOptionsMarkup(node.clusterId)}
        </select>
      `;
      const select = moveField.querySelector(".cluster-node-move-select");
      select.addEventListener("click", (event) => event.stopPropagation());
      select.addEventListener("dblclick", (event) => event.stopPropagation());
      select.addEventListener("change", () => {
        if (!select.value) return;
        moveNodeToCluster(node.id, select.value, clusterId);
      });
      row.appendChild(moveField);
    } else {
      const moveNote = document.createElement("div");
      moveNote.className = "cluster-node-move-note";
      moveNote.innerHTML = `<span>${escapeHtml(t("cluster.cannotMove"))}</span><small>${escapeHtml(t("cluster.otherUserNode"))}</small>`;
      row.appendChild(moveNote);
    }

    clusterNodesContent.appendChild(row);
  });
  return clusterNodes.length;
}

function renderClusterFollowControl(cluster) {
  const isOwnCluster = currentUser && cluster.ownerUserId === currentUser.id;
  const isFollowed = isOwnCluster || followedClusterIds.has(cluster.id);
  const locked = isOwnCluster ? "disabled" : "";
  return `
    <label class="detail-cluster-follow cluster-detail-follow" title="${escapeHtml(t("cluster.followTitle"))}">
      <input class="detailClusterFollowInput" type="checkbox" data-cluster-id="${escapeHtml(cluster.id)}" ${isFollowed ? "checked" : ""} ${locked} />
      <span>${escapeHtml(t("cluster.follow"))}</span>
    </label>
  `;
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
    <span class="detail-kind">${escapeHtml(t("cluster.type"))}</span>
    <span class="detail-cluster-meta">${renderOwnerLink(clusterDetail.ownerUser)}</span>
    ${renderClusterFollowControl(clusterDetail)}
    ${createdAtMarkup}
  `;
  bindOwnerDetailLinks(clusterNodesType);
  const followCheckbox = clusterNodesType.querySelector(".detailClusterFollowInput");
  if (followCheckbox) {
    followCheckbox.addEventListener("change", () => {
      setClusterFollow(followCheckbox.dataset.clusterId, followCheckbox.checked, followCheckbox);
    });
  }
  const metaParts = [`${nodeCountInCluster}\u4ef6`];
  if (description) {
    metaParts.push(description);
  }
  clusterNodesMeta.textContent = metaParts.join(" / ");
  clusterNodesActions.innerHTML = canDeleteCluster(clusterDetail)
    ? `<button class="danger-button" id="deleteClusterButton" type="button" data-cluster-id="${escapeHtml(cluster.id)}">${escapeHtml(t("cluster.delete"))}</button>`
    : "";
  clusterNodesActions.querySelector("#deleteClusterButton")?.addEventListener("click", () => {
    deleteCluster(cluster.id);
  });
  if (!clusterNodesDialog.open) {
    clusterNodesDialog.showModal();
  }
}

function closeClusterNodesDialog() {
  if (clusterNodesDialog.open) {
    clusterNodesDialog.close();
  }
  clusterNodesActions.innerHTML = "";
  clusterNodesType.textContent = t("cluster.type");
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
  updateUniverseModeButton();
}

function updateUniverseModeButton() {
  const isExplore = isExplorationMode();
  const label = isExplore ? t("universe.switchToContext") : t("universe.switchToExplore");
  universeModeButton.textContent = isExplore ? t("universe.explore") : t("universe.context");
  universeModeButton.title = label;
  universeModeButton.setAttribute("aria-label", label);
  universeModeButton.classList.toggle("is-explore", isExplore);
}

function setUniverseMode(mode) {
  universeMode = mode === UNIVERSE_MODES.explore ? UNIVERSE_MODES.explore : UNIVERSE_MODES.context;
  localStorage.setItem(UNIVERSE_MODE_STORAGE_KEY, universeMode);
  hiddenLinks = null;
  const selectedNode = nodes.find((node) => node.id === selectedNodeId);
  if (selectedNode && !canOpenNodeInUniverse(selectedNode)) {
    selectedNodeId = null;
  }
  updateUniverseModeButton();
  renderNodes();
  drawLinks();
}

function toggleUniverseMode() {
  setUniverseMode(isExplorationMode() ? UNIVERSE_MODES.context : UNIVERSE_MODES.explore);
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

async function deleteCluster(id) {
  const cluster = getClusterById(id);
  if (!cluster || !canDeleteCluster(cluster)) return;
  const shouldDelete = window.confirm(t("cluster.deleteConfirm"));
  if (!shouldDelete) return;

  try {
    if (apiAvailable) {
      await apiRequest(`/clusters/${id}`, { method: "DELETE" });
    }
    const fallbackClusterId = getPublicClusterId();
    clusters = clusters.filter((item) => item.id !== id);
    clusterDirectory = clusterDirectory.filter((item) => item.id !== id);
    followedClusterIds.delete(id);
    nodes = nodes.map((node) => (node.clusterId === id ? { ...node, clusterId: fallbackClusterId } : node));
    closeClusterNodesDialog();
    renderAll();
  } catch (error) {
    window.alert(t("cluster.deleteError"));
  }
}

async function moveNodeToCluster(id, targetClusterId, currentDialogClusterId = null) {
  const node = nodes.find((item) => item.id === id);
  const targetCluster = clusters.find((cluster) => cluster.id === targetClusterId);
  if (!node || !targetCluster || node.clusterId === targetClusterId || !canMoveNodeCluster(node)) return;

  const previousClusterId = node.clusterId;
  nodes = nodes.map((item) => (item.id === id ? { ...item, clusterId: targetClusterId } : item));
  renderAll();
  if (clusterNodesDialog.open) {
    openClusterNodesDialog(currentDialogClusterId || previousClusterId);
  }

  try {
    if (apiAvailable) {
      const savedNode = normalizeNode(
        await apiRequest(`/nodes/${id}/cluster`, {
          method: "PATCH",
          body: JSON.stringify({ clusterId: targetClusterId }),
        }),
      );
      nodes = nodes.map((item) => (item.id === id ? savedNode : item));
      renderAll();
      if (clusterNodesDialog.open) {
        openClusterNodesDialog(currentDialogClusterId || previousClusterId);
      }
    }
  } catch (error) {
    nodes = nodes.map((item) => (item.id === id ? { ...item, clusterId: previousClusterId } : item));
    renderAll();
    if (clusterNodesDialog.open) {
      openClusterNodesDialog(currentDialogClusterId || previousClusterId);
    }
    window.alert(t("cluster.moveError"));
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
  temporaryNodeIds.delete(id);
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
  renderTemporaryNodeBin();
  updateClearLinksButton();
  drawLinks();
}

function animateNodePositionSnapshot(positionRows) {
  const targetById = new Map((positionRows || []).map((row) => [row.id, row]));
  const movingNodes = nodes
    .map((node) => {
      const target = targetById.get(node.id);
      if (!target) return null;
      const targetX = clamp(Number(target.x), nodeDragBounds.minX, nodeDragBounds.maxX);
      const targetY = clamp(Number(target.y), nodeDragBounds.minY, nodeDragBounds.maxY);
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
    if (error.status !== 401) {
      console.warn("Node position refresh failed", error);
    }
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
  if (isTextNodeType(type)) {
    return { start: 0, end: body.length };
  }
  if (type === "image") {
    return { start: 0, end: 0 };
  }
  return { start: 0, end: duration };
}

function clampNodeCreationPosition(point) {
  return {
    x: clamp(Number(point?.x), nodeDragBounds.minX, nodeDragBounds.maxX),
    y: clamp(Number(point?.y), nodeDragBounds.minY, nodeDragBounds.maxY),
  };
}

function areNodePositionsOverlapping(first, second, distance = NEW_NODE_COLLISION_DISTANCE) {
  if (!first || !second) return false;
  const dx = Number(first.x) - Number(second.x);
  const dy = Number(first.y) - Number(second.y);
  return Number.isFinite(dx) && Number.isFinite(dy) && Math.hypot(dx, dy) < distance;
}

function isNodeCreationPositionOpen(point) {
  return !nodes.some((node) => areNodePositionsOverlapping(point, node));
}

function getOffsetNodeCreationCandidates(base) {
  const step = NEW_NODE_PLACEMENT_STEP;
  return [
    { x: 0, y: 0 },
    { x: 0, y: -step },
    { x: step, y: -step },
    { x: step, y: 0 },
    { x: step, y: step },
    { x: 0, y: step },
    { x: -step, y: step },
    { x: -step, y: 0 },
    { x: -step, y: -step },
  ].map((offset) => clampNodeCreationPosition({ x: base.x + offset.x, y: base.y + offset.y }));
}

function findOpenNodeCreationPosition(base) {
  const candidates = getOffsetNodeCreationCandidates(base);
  return candidates.find(isNodeCreationPositionOpen) || base;
}

function getNewNodePosition(originNode = null) {
  const center = getCurrentUniverseLocation();
  if (Number.isFinite(center.x) && Number.isFinite(center.y)) {
    const centerPosition = clampNodeCreationPosition(center);
    if (!originNode) return centerPosition;
    const originPosition = clampNodeCreationPosition(originNode);
    const basePosition = areNodePositionsOverlapping(centerPosition, originPosition)
      ? clampNodeCreationPosition({
          x: centerPosition.x + NEW_NODE_PLACEMENT_STEP,
          y: centerPosition.y + NEW_NODE_PLACEMENT_STEP,
        })
      : centerPosition;
    return findOpenNodeCreationPosition(basePosition);
  }

  const angle = nodes.length * 0.92;
  const fallback = clampNodeCreationPosition({
    x: 50 + Math.cos(angle) * 25 + Math.random() * 10 - 5,
    y: 50 + Math.sin(angle) * 25 + Math.random() * 10 - 5,
  });
  return originNode ? findOpenNodeCreationPosition(fallback) : fallback;
}

async function createNodeFromValues({
  type,
  title,
  body,
  duration,
  mediaFile = null,
  mediaFiles = null,
  clusterId = getPublicClusterId(),
  originNode = null,
}) {
  const hasDuration = type === "music" || type === "video";
  const safeDuration = hasDuration ? clamp(Number(duration || 180), 10, 900) : null;
  const sourceMediaFiles = Array.isArray(mediaFiles) ? mediaFiles : mediaFile ? [mediaFile] : [];
  const uploadMediaFiles =
    type === "image"
      ? await Promise.all(sourceMediaFiles.slice(0, IMAGE_NODE_MAX_FILES).map((file) => prepareImageFileForUpload(file)))
      : sourceMediaFiles.slice(0, 1);
  const uploadMediaFile = uploadMediaFiles[0] || null;
  const mediaItems = uploadMediaFiles.map((file, index) => ({
    url: URL.createObjectURL(file),
    mime: file.type,
    name: file.name,
    position: index,
  }));
  const position = getNewNodePosition(originNode);
  const safeTitle = title.trim() || `${getTypeLabel(type)} ${nodes.length + 1}`;
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
    mediaUrl: !isTextNodeType(type) && uploadMediaFile ? mediaItems[0]?.url || URL.createObjectURL(uploadMediaFile) : null,
    mediaMime: !isTextNodeType(type) && uploadMediaFile ? uploadMediaFile.type : null,
    mediaName: !isTextNodeType(type) && uploadMediaFile ? uploadMediaFile.name : null,
    mediaItems: type === "image" ? mediaItems : [],
    likeCount: 0,
    likedByCurrentUser: false,
    favoritedByCurrentUser: false,
    fixedFavoriteByCurrentUser: false,
    selection: getDefaultSelection(type, safeBody, safeDuration),
    x: position.x,
    y: position.y,
  });

  try {
    let savedNode = newNode;
    if (apiAvailable) {
      if (!isTextNodeType(type) && uploadMediaFile) {
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
        uploadMediaFiles.forEach((file) => {
          formData.append(type === "image" ? "mediaFiles" : "mediaFile", file);
        });
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
    highlightNewNode(savedNode.id);
    return savedNode;
  } catch (error) {
    apiAvailable = false;
    nodes = [...nodes, newNode];
    highlightNewNode(newNode.id);
    return newNode;
  }
}

async function addNode() {
  if (isNodeSubmissionPending) return;
  if (hasOversizedMediaFile(typeInput.value, mediaFileInput, pastedComposerImage, droppedComposerMedia)) {
    window.alert(getUploadLimitMessage(typeInput.value));
    return;
  }
  const mediaFiles = getMediaFilesForType(typeInput.value, mediaFileInput, pastedComposerImage, droppedComposerMedia);
  if (mediaFiles === null) return;
  setNodeSubmissionPending(true, mediaFiles.length > 0 ? t("processing.uploadSave") : t("processing.saveNode"));
  try {
    await createNodeFromValues({
      type: typeInput.value,
      title: titleInput.value,
      body: bodyInput.value,
      duration: durationInput.value,
      mediaFiles,
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
  } finally {
    setNodeSubmissionPending(false);
  }
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
  const sourceNode = nodes.find((node) => node.id === source);
  const targetNode = nodes.find((node) => node.id === target);
  const displayLayerContext = createNodeDisplayLayerContext();
  if (!sourceNode || !targetNode || !canMoveOrConnectNode(sourceNode, displayLayerContext) || !canMoveOrConnectNode(targetNode, displayLayerContext)) {
    return false;
  }

  const currentLinks = hiddenLinks ?? links;
  const exists = currentLinks.some(
    (link) =>
      (link.source === source && link.target === target) ||
      (link.source === target && link.target === source),
  );

  const safeComment = String(comment || "").trim() || DEFAULT_LINK_COMMENT;
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
        window.alert(t("connection.cannotEdit"));
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
      window.alert(t("connection.cannotCreate"));
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
  const isText = isTextNodeType(type);
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
  mediaFileInput.multiple = type === "image";
  if (isText) {
    mediaFileInput.value = "";
  }
  updateMediaDropZone(type, mediaDropZone, droppedComposerMedia, mediaDropStatus, clearDroppedMediaButton);
  updateImagePastePanel(type, clipboardImagePanel, pastedComposerImage, clipboardImagePreview, clipboardImageStatus, clearClipboardImageButton);
}

function updateDurationFromMediaFile() {
  const files = getSelectedFilesFromInput(mediaFileInput);
  const file = files[0] || null;
  if (typeInput.value === "image" && files.length > IMAGE_NODE_MAX_FILES) {
    window.alert(getImageNodeFileCountMessage());
    mediaFileInput.value = "";
    return;
  }
  if (getUploadLimitExceededFile(files, typeInput.value)) {
    window.alert(getUploadLimitMessage(typeInput.value));
    mediaFileInput.value = "";
    return;
  }
  if (typeInput.value === "image" && !areImageNodeFilesWithinTotalUploadLimit(files)) {
    window.alert(getImageNodeTotalUploadLimitMessage());
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
  const max = isTextNodeType(node.type) ? node.body.length : node.duration;
  const start = clamp(node.selection.start, 0, max);
  const end = clamp(node.selection.end, start, max);
  return { start, end, max };
}

async function updateNodeSelection(id, start, end) {
  const targetNode = nodes.find((node) => node.id === id);
  if (!targetNode) return;

  const max = isTextNodeType(targetNode.type) ? targetNode.body.length : targetNode.duration;
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
  const imageItems =
    node.type === "image"
      ? (Array.isArray(node.mediaItems) && node.mediaItems.length > 0 ? node.mediaItems : node.mediaUrl ? [{ url: node.mediaUrl, name: node.mediaName }] : [])
      : [];
  const stage =
    node.type === "image"
      ? `<div class="image-gallery">${
          imageItems.length > 0
            ? imageItems
                .map(
                  (item, index) => `
                    <figure class="media-stage image">
                      <img class="media-player image-player" src="${escapeHtml(resolveMediaUrl(item.url))}" alt="${escapeHtml(
                        imageItems.length > 1 ? `${node.title} ${index + 1}` : node.title,
                      )}" />
                      ${
                        imageItems.length > 1
                          ? `<figcaption class="image-gallery-count">${index + 1} / ${imageItems.length}</figcaption>`
                          : ""
                      }
                    </figure>
                  `,
                )
                .join("")
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
  return createdAt ? `<span class="detail-created-at">${escapeHtml(t("node.createdAt", { date: createdAt }))}</span>` : "";
}

function renderDetailMeta(node) {
  const cluster = getClusterDetail(node.clusterId);
  const createdAtMarkup = renderCreatedAtMeta(node.createdAt);
  if (!cluster) {
    return `<span class="detail-kind">${escapeHtml(getTypeLabel(node.type))}</span>${createdAtMarkup}`;
  }

  const owner = cluster.ownerUser;
  const isOwnCluster = currentUser && cluster.ownerUserId === currentUser.id;
  const isFollowed = isOwnCluster || followedClusterIds.has(cluster.id);
  const locked = isOwnCluster ? "disabled" : "";
  return `
    <span class="detail-kind">${escapeHtml(getTypeLabel(node.type))}</span>
    <span class="detail-cluster-meta">
      ${renderOwnerLink(owner)}
      <span class="detail-cluster-label">- ${escapeHtml(cluster.name)}</span>
      <label class="detail-cluster-follow" title="${escapeHtml(t("cluster.followTitle"))}">
        <input class="detailClusterFollowInput" type="checkbox" data-cluster-id="${escapeHtml(cluster.id)}" ${isFollowed ? "checked" : ""} ${locked} />
        <span>${escapeHtml(t("cluster.follow"))}</span>
      </label>
    </span>
    ${createdAtMarkup}
  `;
}

function updateClusterFollowerCount(clusterId, delta) {
  const applyCount = (cluster) => {
    if (cluster.id !== clusterId) return cluster;
    return {
      ...cluster,
      followerCount: Math.max(0, Number(cluster.followerCount || 0) + delta),
    };
  };
  clusters = clusters.map(applyCount);
  clusterDirectory = clusterDirectory.map(applyCount);
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

  const wasFollowed = followedClusterIds.has(clusterId);
  const countDelta = shouldFollow === wasFollowed ? 0 : shouldFollow ? 1 : -1;
  if (shouldFollow) {
    followedClusterIds.add(clusterId);
  } else {
    followedClusterIds.delete(clusterId);
  }
  if (countDelta) {
    updateClusterFollowerCount(clusterId, countDelta);
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
    if (countDelta) {
      updateClusterFollowerCount(clusterId, -countDelta);
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
        <small>${escapeHtml(truncateText(cluster.description || t("cluster.noDescription"), 60))}</small>
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
    ? `<div class="user-detail-actions"><button class="danger-button user-detail-delete-user" type="button">${escapeHtml(t("profile.deleteUser"))}</button><button class="secondary-button user-detail-edit-profile" type="button">${escapeHtml(t("profile.editProfile"))}</button><button class="secondary-button user-detail-logout" type="button">${escapeHtml(t("common.logout"))}</button></div>`
    : `<div class="user-detail-actions"><button class="${
        data.blockedByCurrentUser ? "secondary-button" : "danger-button"
      } user-detail-block" type="button" data-user-id="${escapeHtml(user.id)}" data-blocked="${
        data.blockedByCurrentUser ? "1" : "0"
      }">${escapeHtml(data.blockedByCurrentUser ? t("common.unblock") : t("common.block"))}</button></div>`;
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
      <h3>${escapeHtml(t("profile.bioHeading"))}</h3>
      <p class="user-detail-bio">${escapeHtml(user.bio || t("profile.emptyBio"))}</p>
    </section>
    <section class="user-detail-section">
      <div class="user-detail-section-heading"><h3>${escapeHtml(t("profile.userClusters"))}</h3><span>${userClusters.length}</span></div>
      <div class="user-detail-list">
        ${userClusters.length ? userClusters.map(renderUserDetailCluster).join("") : `<p class="user-detail-empty">${escapeHtml(t("cluster.noClusters"))}</p>`}
      </div>
    </section>
    <section class="user-detail-section">
      <div class="user-detail-section-heading"><h3>${escapeHtml(t("profile.userNodes"))}</h3><span>${userNodes.length}</span></div>
      <div class="user-detail-list">
        ${userNodes.length ? userNodes.map(renderUserDetailNode).join("") : `<p class="user-detail-empty">${escapeHtml(t("node.emptyOwn"))}</p>`}
      </div>
    </section>
  `;
}

async function setUserBlock(userId, shouldBlock, button) {
  if (!userId || (currentUser && userId === currentUser.id)) return;
  if (
    shouldBlock &&
    !window.confirm(t("profile.blockConfirm"))
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
    window.alert(shouldBlock ? t("profile.blockError") : t("profile.unblockError"));
  }
}

async function deleteCurrentUser(button) {
  if (!currentUser) return;
  const confirmed = window.confirm(t("profile.deleteConfirm"));
  if (!confirmed) return;

  if (button) button.disabled = true;
  try {
    await apiRequest(`/users/${currentUser.id}`, { method: "DELETE" });
    clearAuth();
  } catch (error) {
    if (button) button.disabled = false;
    window.alert(t("profile.deleteError"));
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

  const deleteUserButton = userDetailContent.querySelector(".user-detail-delete-user");
  if (deleteUserButton) {
    deleteUserButton.addEventListener("click", () => deleteCurrentUser(deleteUserButton));
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
  activeUserDetailId = userId;
  try {
    const data = await apiRequest(`/users/${userId}`);
    data.followedClusterIds.forEach((clusterId) => followedClusterIds.add(clusterId));
    userDetailContent.innerHTML = renderUserDetailPage(data);
    bindUserDetailPage();
    if (!userDetailDialog.open) {
      userDetailDialog.showModal();
    }
  } catch (error) {
    userDetailContent.innerHTML = `<p class="user-detail-empty">${escapeHtml(t("profile.noUserDetail"))}</p>`;
    if (!userDetailDialog.open) {
      userDetailDialog.showModal();
    }
  }
}

function closeUserDetailDialog() {
  activeUserDetailId = null;
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
    return `${formatTime(node.duration || 0)} ${getTypeLabel(node.type)}`;
  }
  return t("node.noBody");
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
        <span class="relation-card-meta">${escapeHtml(getTypeLabel(node.type))}</span>
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
      ${renderRelationColumn(t("node.sourceNodes"), sourceItems, "source")}
      <section class="detail-current-node" aria-label="${escapeHtml(t("node.open"))}">
        ${isTextNodeType(node.type) ? renderTextDetail(node) : renderMediaDetail(node)}
        ${renderRelayNodeAction(node)}
        ${renderNodeLikeAction(node)}
        ${renderNodeFavoriteAction(node)}
        ${renderShareNodeAction(node)}
        ${renderDetailComposer()}
        ${renderDeleteNodeAction()}
      </section>
      ${renderRelationColumn(t("node.targetNodes"), targetItems, "target")}
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
  const disabled = node.fixedFavoriteByCurrentUser ? "disabled" : "";
  const label = node.fixedFavoriteByCurrentUser
    ? t("favorite.pinned")
    : node.favoritedByCurrentUser
      ? t("favorite.remove")
      : t("favorite.add");
  return `
    <section class="node-favorite-panel" aria-label="favorite node">
      <button class="${className}" id="detailFavoriteButton" type="button" aria-pressed="${pressed}" ${disabled}>
        <span class="node-favorite-icon" aria-hidden="true">★</span>
        <span>${escapeHtml(label)}</span>
      </button>
    </section>
  `;
}

function renderShareNodeAction(node) {
  if (!currentUser || node.type === "relay") return "";
  const canManage = node.ownerUserId === currentUser.id;
  const enabled = node.shareEnabled !== false;
  return `
    <section class="node-share-panel" aria-label="share node">
      <div class="node-share-copy">
        <strong>${escapeHtml(t("share.panelTitle"))}</strong>
        <span>${escapeHtml(canManage ? (enabled ? t("share.enabled") : t("share.disabled")) : t("share.publicLinks"))}</span>
      </div>
      <button class="secondary-button" id="openShareDialogButton" type="button">${escapeHtml(canManage ? t("share.settings") : t("share.links"))}</button>
    </section>
  `;
}

function getAbsoluteShareUrl(share) {
  return new URL(share.url || `/share/${share.token}`, window.location.origin).href;
}

function updateNodeShareEnabled(id, shareEnabled) {
  nodes = nodes.map((node) => (node.id === id ? { ...node, shareEnabled } : node));
}

function renderShareDialogContent(node, data = null) {
  if (!node) return;
  if (!data) {
    shareDialogContent.innerHTML = `<p class="share-empty">${escapeHtml(t("share.loading"))}</p>`;
    return;
  }

  const shareEnabled = data.shareEnabled !== false;
  const canManage = Boolean(data.canManage);
  const shares = data.shares || [];
  const shareRows = shares.length
    ? shares
        .map((share) => {
          const disabled = Boolean(share.disabledAt);
          const url = getAbsoluteShareUrl(share);
          return `
            <article class="share-link-item${disabled ? " is-disabled" : ""}">
              <div>
                <strong>${escapeHtml(share.mode === "single" ? t("share.nodeOnly") : t("share.withContext"))}</strong>
                <small>${escapeHtml(disabled ? t("share.disabledStatus") : t("share.enabledStatus"))} / ${escapeHtml(formatDateTime(share.createdAt) || "-")}</small>
              </div>
              <input type="text" readonly value="${escapeHtml(url)}" aria-label="${escapeHtml(t("share.urlLabel"))}" />
              <div class="share-link-actions">
                <button class="ghost-button shareCopyButton" type="button" data-share-url="${escapeHtml(url)}" ${disabled ? "disabled" : ""}>${escapeHtml(t("common.copy"))}</button>
                ${canManage ? `<button class="danger-button shareDisableButton" type="button" data-share-id="${escapeHtml(share.id)}" ${disabled ? "disabled" : ""}>${escapeHtml(t("share.disable"))}</button>` : ""}
              </div>
            </article>
          `;
        })
        .join("")
    : `<p class="share-empty">${escapeHtml(canManage ? t("share.noLinks") : t("share.noPublicLinks"))}</p>`;

  shareDialogContent.innerHTML = `
    ${
      canManage
        ? `<section class="share-settings">
            <label class="share-enabled-toggle">
              <input id="shareEnabledInput" type="checkbox" ${shareEnabled ? "checked" : ""} />
              <span>${escapeHtml(t("share.allow"))}</span>
            </label>
            <p>${escapeHtml(t("share.disableNote"))}</p>
          </section>
          <section class="share-create-panel${shareEnabled ? "" : " is-disabled"}">
            <div class="share-mode-grid" role="radiogroup" aria-label="${escapeHtml(t("share.range"))}">
              <label>
                <input type="radio" name="shareMode" value="context" checked ${shareEnabled ? "" : "disabled"} />
                <span>${escapeHtml(t("share.context"))}</span>
                <small>${escapeHtml(t("share.contextHint"))}</small>
              </label>
              <label>
                <input type="radio" name="shareMode" value="single" ${shareEnabled ? "" : "disabled"} />
                <span>${escapeHtml(t("share.single"))}</span>
                <small>${escapeHtml(t("share.singleHint"))}</small>
              </label>
            </div>
            <button class="primary-button" id="createShareLinkButton" type="button" ${shareEnabled ? "" : "disabled"}>${escapeHtml(t("share.create"))}</button>
          </section>`
        : `<section class="share-settings is-readonly"><p>${escapeHtml(t("share.ownerLinks"))}</p></section>`
    }
    <section class="share-link-list" aria-label="${escapeHtml(t("share.links"))}">
      ${shareRows}
    </section>
  `;
  bindShareDialogContent(node.id);
}

async function refreshShareDialog(nodeId) {
  const node = nodes.find((item) => item.id === nodeId);
  if (!node) return;
  renderShareDialogContent(node, null);
  const data = await apiRequest(`/nodes/${nodeId}/shares`);
  updateNodeShareEnabled(nodeId, data.shareEnabled !== false);
  renderShareDialogContent(nodes.find((item) => item.id === nodeId), data);
  if (activeDetailNodeId === nodeId) {
    detailContent.innerHTML = renderDetailLayout(nodes.find((item) => item.id === nodeId));
    bindDetailActions(nodes.find((item) => item.id === nodeId));
  }
}

function bindShareDialogContent(nodeId) {
  const enabledInput = shareDialogContent.querySelector("#shareEnabledInput");
  enabledInput?.addEventListener("change", async () => {
    enabledInput.disabled = true;
    try {
      const result = await apiRequest(`/nodes/${nodeId}/share-enabled`, {
        method: "PATCH",
        body: JSON.stringify({ shareEnabled: enabledInput.checked }),
      });
      updateNodeShareEnabled(nodeId, result.shareEnabled !== false);
      await refreshShareDialog(nodeId);
    } catch (error) {
      window.alert(t("share.saveError"));
      await refreshShareDialog(nodeId);
    }
  });

  shareDialogContent.querySelector("#createShareLinkButton")?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const mode = shareDialogContent.querySelector('input[name="shareMode"]:checked')?.value || "context";
    button.disabled = true;
    try {
      const share = await apiRequest(`/nodes/${nodeId}/shares`, {
        method: "POST",
        body: JSON.stringify({ mode }),
      });
      await navigator.clipboard?.writeText(getAbsoluteShareUrl(share)).catch(() => {});
      await refreshShareDialog(nodeId);
    } catch (error) {
      window.alert(t("share.createError"));
      button.disabled = false;
    }
  });

  shareDialogContent.querySelectorAll(".shareCopyButton").forEach((button) => {
    button.addEventListener("click", async () => {
      await navigator.clipboard?.writeText(button.dataset.shareUrl || "").catch(() => {});
      button.classList.add("is-copied");
      const originalLabel = button.textContent;
      button.textContent = t("common.copied");
      window.setTimeout(() => {
        button.classList.remove("is-copied");
        button.textContent = originalLabel;
      }, 1400);
    });
  });

  shareDialogContent.querySelectorAll(".shareDisableButton").forEach((button) => {
    button.addEventListener("click", async () => {
      const shouldDisable = window.confirm(t("share.disableConfirm"));
      if (!shouldDisable) return;
      button.disabled = true;
      try {
        await apiRequest(`/node-shares/${button.dataset.shareId}`, { method: "DELETE" });
        await refreshShareDialog(nodeId);
      } catch (error) {
        window.alert(t("share.disableError"));
        button.disabled = false;
      }
    });
  });
}

async function openShareDialog(nodeId) {
  const node = nodes.find((item) => item.id === nodeId);
  if (!node || !currentUser || node.type === "relay") return;
  shareDialogTitle.textContent = node.title;
  if (!shareDialog.open) {
    shareDialog.showModal();
  }
  try {
    await refreshShareDialog(nodeId);
  } catch (error) {
    shareDialogContent.innerHTML = `<p class="share-empty">${escapeHtml(t("share.loadError"))}</p>`;
  }
}

function closeShareDialog() {
  if (shareDialog?.open) {
    shareDialog.close();
  }
}

function userSummaryMarkup(user, className = "relay-user-card") {
  return `
    <article class="${className}">
      ${renderMiniUserIcon(user)}
      <span>${escapeHtml(getUserName(user))}</span>
    </article>
  `;
}

function renderRelayNodeAction(node) {
  if (!currentUser || node.type !== "relay") return "";
  const isOwner = node.ownerUserId === currentUser.id;
  const canOpen = isOwner || node.relayParticipant;
  const isClosed = node.relayStatus === "closed";
  const label = isClosed ? t("relay.viewLog") : t("relay.start");
  const stateLabel = isClosed
    ? t("relay.closed")
    : node.relaySessionId
      ? canOpen
        ? t("relay.active")
        : t("relay.private")
      : isOwner
        ? t("relay.selectable")
        : t("relay.ownerStarts");
  return `
    <section class="node-relay-panel" aria-label="relay communication">
      <div class="node-relay-copy">
        <strong>${escapeHtml(t("type.relay"))}</strong>
        <span>${escapeHtml(stateLabel)}</span>
      </div>
      <button class="primary-button" id="openRelayDialogButton" type="button" ${canOpen ? "" : "disabled"}>${escapeHtml(label)}</button>
    </section>
  `;
}

function updateRelayNodeState(nodeId, data) {
  nodes = nodes.map((node) =>
    node.id === nodeId
      ? {
          ...node,
          relaySessionId: data.session?.id || node.relaySessionId || null,
          relayStatus: data.session?.status || null,
          relayParticipant: Boolean(data.canParticipate),
        }
      : node,
  );
}

function renderRelayRecipientPicker(data) {
  if (!data.canManage || data.session) return "";
  const likedUsers = data.likedUsers || [];
  return `
    <section class="relay-recipient-panel">
      <div class="relay-section-head">
        <strong>${escapeHtml(t("relay.recipients"))}</strong>
        <span>${escapeHtml(t("relay.peopleCount", { count: likedUsers.length }))}</span>
      </div>
      <div class="relay-recipient-list">
        ${
          likedUsers.length
            ? likedUsers
                .map(
                  (user) => `
                    <label class="relay-recipient-item">
                      <input type="checkbox" value="${escapeHtml(user.id)}" />
                      ${renderMiniUserIcon(user)}
                      <span>${escapeHtml(getUserName(user))}</span>
                    </label>
                  `,
                )
                .join("")
            : `<p class="relay-empty">${escapeHtml(t("relay.noLikedUsers"))}</p>`
        }
      </div>
      <button class="primary-button" id="confirmRelayRecipientsButton" type="button" ${likedUsers.length ? "" : "disabled"}>${escapeHtml(t("relay.confirmRecipients"))}</button>
    </section>
  `;
}

function getRelayUserColor(userId) {
  const value = String(userId || "unknown");
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return RELAY_MESSAGE_COLORS[hash % RELAY_MESSAGE_COLORS.length];
}

function renderRelayMessageReactions(message, mine) {
  if (mine) {
    const activeReactions = (message.reactions || []).filter((reaction) => Number(reaction.count || 0) > 0);
    if (activeReactions.length === 0) return "";
    return `
      <div class="relay-reaction-row is-readonly">
        ${activeReactions
          .map(
            (reaction) => `
              <span class="relay-reaction-chip">
                <span>${escapeHtml(reaction.emoji)}</span>
                <strong>${Number(reaction.count || 0)}</strong>
              </span>
            `,
          )
          .join("")}
      </div>
    `;
  }

  const reactionByEmoji = new Map((message.reactions || []).map((reaction) => [reaction.emoji, reaction]));
  return `
    <div class="relay-reaction-row">
      ${RELAY_REACTION_EMOJIS.map((emoji) => {
        const reaction = reactionByEmoji.get(emoji);
        const count = Number(reaction?.count || 0);
        const reacted = Boolean(reaction?.reactedByCurrentUser);
        return `
          <button class="relayReactionButton${reacted ? " is-reacted" : ""}" type="button" data-message-id="${escapeHtml(
            message.id,
          )}" data-emoji="${escapeHtml(emoji)}" aria-pressed="${reacted ? "true" : "false"}">
            <span>${escapeHtml(emoji)}</span>
            ${count > 0 ? `<strong>${count}</strong>` : ""}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderRelayMessage(message) {
  const mine = message.senderUserId === currentUser?.id;
  const imageUrl = resolveMediaUrl(message.imageUrl);
  const color = getRelayUserColor(message.senderUserId);
  const colorStyle = mine
    ? ""
    : ` style="--relay-user-border: ${color.border}; --relay-user-background: ${color.background}"`;
  return `
    <article class="relay-message ${mine ? "is-mine" : "is-other"}"${colorStyle}>
      <div class="relay-message-meta">
        <strong>${escapeHtml(getUserName(message.senderUser))}</strong>
        <span>${escapeHtml(formatDateTime(message.createdAt) || "-")}</span>
      </div>
      ${message.body ? `<p>${escapeHtml(message.body)}</p>` : ""}
      ${imageUrl ? `<img class="relay-message-image" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(message.imageName || t("media.relayImage"))}" />` : ""}
      ${renderRelayMessageReactions(message, mine)}
    </article>
  `;
}

function renderRelayComposer(readOnly) {
  if (readOnly) {
    return `<p class="relay-readonly-note">${escapeHtml(t("relay.readonly"))}</p>`;
  }
  return `
    <form class="relay-compose">
      <textarea class="relayMessageInput" rows="3" maxlength="${INPUT_LIMITS.longText}" placeholder="${escapeHtml(t("relay.messagePlaceholder"))}"></textarea>
      <div class="relay-compose-tools">
        <div class="relayFileControl">
          <label class="relayFilePicker">
            <span>${escapeHtml(t("media.selectFile"))}</span>
            <input class="relayImageInput" type="file" accept="image/png,image/jpeg,image/gif,.png,.jpg,.jpeg,.gif" />
          </label>
          <span class="relayFileStatus">${escapeHtml(t("media.noFile"))}</span>
        </div>
        <div class="clipboard-image-panel relayPastePanel" tabindex="0">
          <div class="clipboard-image-copy">
            <strong>${escapeHtml(t("media.pasteImage"))}</strong>
            <small class="relayPasteStatus">${escapeHtml(t("media.pasteHint"))}</small>
          </div>
          <img class="relayPastePreview" alt="" hidden />
          <button class="ghost-button relayPasteClear" type="button" hidden>${escapeHtml(t("common.clear"))}</button>
        </div>
        <button class="primary-button relaySendButton" type="submit">${escapeHtml(t("relay.send"))}</button>
      </div>
    </form>
  `;
}

function setRelayFileStatus(fileStatus, file = null) {
  if (!fileStatus) return;
  fileStatus.textContent = file ? file.name : t("media.noFile");
}

function getRelayScrollSnapshot(forceScrollBottom = false) {
  if (forceScrollBottom) return { shouldStickToBottom: true };
  const list = relayDialogContent.querySelector(".relay-message-list");
  if (!list) return { shouldStickToBottom: true };
  const distanceFromBottom = list.scrollHeight - list.scrollTop - list.clientHeight;
  return {
    scrollTop: list.scrollTop,
    shouldStickToBottom: distanceFromBottom <= 120,
  };
}

function restoreRelayMessageScroll(snapshot) {
  const list = relayDialogContent.querySelector(".relay-message-list");
  if (!list || !snapshot) return;
  if (snapshot.shouldStickToBottom) {
    const scrollToBottom = () => {
      list.scrollTop = list.scrollHeight;
    };
    requestAnimationFrame(scrollToBottom);
    list.querySelectorAll("img").forEach((image) => {
      image.addEventListener("load", scrollToBottom, { once: true });
    });
    return;
  }
  requestAnimationFrame(() => {
    list.scrollTop = Number(snapshot.scrollTop || 0);
  });
}

function renderRelayDialogContent(data = null, options = {}) {
  const scrollSnapshot = getRelayScrollSnapshot(Boolean(options.forceScrollBottom));
  if (!data) {
    relayDialogContent.innerHTML = `<p class="relay-empty">${escapeHtml(t("relay.loading"))}</p>`;
    return;
  }
  const participants = data.participants || [];
  const me = participants.find((participant) => participant.id === currentUser?.id) || currentUser;
  const others = participants.filter((participant) => participant.id !== currentUser?.id);
  const hasSession = Boolean(data.session);
  const readOnly = Boolean(data.readOnly || !hasSession);
  relayDialogContent.innerHTML = `
    ${renderRelayRecipientPicker(data)}
    <section class="relay-chat-grid ${hasSession ? "" : "is-waiting"}">
      <aside class="relay-side relay-self" aria-label="${escapeHtml(t("relay.self"))}">
        <div class="relay-section-head"><strong>${escapeHtml(t("relay.self"))}</strong></div>
        ${userSummaryMarkup(me)}
      </aside>
      <section class="relay-chat-space" aria-label="${escapeHtml(t("relay.chat"))}">
        <div class="relay-message-list">
          ${
            hasSession
              ? (data.messages || []).map(renderRelayMessage).join("") || `<p class="relay-empty">${escapeHtml(t("relay.noMessages"))}</p>`
              : `<p class="relay-empty">${escapeHtml(t("relay.selectThenStart"))}</p>`
          }
        </div>
        ${hasSession ? renderRelayComposer(readOnly) : ""}
      </section>
      <aside class="relay-side relay-others" aria-label="${escapeHtml(t("relay.others"))}">
        <div class="relay-section-head"><strong>${escapeHtml(t("relay.others"))}</strong><span>${others.length}</span></div>
        <div class="relay-user-list">
          ${others.length ? others.map((user) => userSummaryMarkup(user)).join("") : `<p class="relay-empty">${escapeHtml(t("relay.undecided"))}</p>`}
        </div>
      </aside>
    </section>
    ${
      data.canManage && hasSession && !data.readOnly
        ? `<button class="danger-button relayCloseButton" type="button">${escapeHtml(t("relay.close"))}</button>`
        : ""
    }
  `;
  bindRelayDialogContent(data);
  restoreRelayMessageScroll(scrollSnapshot);
}

async function refreshRelayDialog({ silent = false, forceScrollBottom = false } = {}) {
  if (!activeRelayNodeId || relayRefreshInFlight) return null;
  if (silent && relayDialogContent.querySelector(".relay-compose")?.contains(document.activeElement)) return null;
  relayRefreshInFlight = true;
  try {
    const data = await apiRequest(`/nodes/${activeRelayNodeId}/relay`);
    activeRelayData = data;
    updateRelayNodeState(activeRelayNodeId, data);
    renderRelayDialogContent(data, { forceScrollBottom });
    if (!data.session) {
      stopRelayRefresh();
    }
    return data;
  } catch (error) {
    if (!silent) {
      relayDialogContent.innerHTML = `<p class="relay-empty">${escapeHtml(t("relay.openError"))}</p>`;
    }
    return null;
  } finally {
    relayRefreshInFlight = false;
  }
}

function startRelayRefresh() {
  if (relayRefreshTimer !== null) return;
  relayRefreshTimer = setInterval(() => refreshRelayDialog({ silent: true }), RELAY_REFRESH_MS);
}

function stopRelayRefresh() {
  if (relayRefreshTimer !== null) {
    clearInterval(relayRefreshTimer);
    relayRefreshTimer = null;
  }
  relayRefreshInFlight = false;
}

async function openRelayDialog(nodeId) {
  const node = nodes.find((item) => item.id === nodeId);
  if (!node || node.type !== "relay") return;
  activeRelayNodeId = nodeId;
  relayDialogTitle.textContent = node.title;
  renderRelayDialogContent(null);
  if (!relayDialog.open) {
    relayDialog.showModal();
  }
  const data = await refreshRelayDialog({ forceScrollBottom: true });
  if (data?.session) {
    startRelayRefresh();
  }
}

function closeRelayDialog() {
  stopRelayRefresh();
  activeRelayNodeId = null;
  activeRelayData = null;
  clearPastedImage(pastedRelayImage, relayDialogContent.querySelector(".relayPastePreview"), relayDialogContent.querySelector(".relayPasteStatus"), relayDialogContent.querySelector(".relayPasteClear"), relayDialogContent.querySelector(".relayPastePanel"));
  if (relayDialog?.open) {
    relayDialog.close();
  }
}

function bindRelayDialogContent(data) {
  relayDialogContent.querySelectorAll(".relayReactionButton").forEach((button) => {
    button.addEventListener("click", async () => {
      if (data.readOnly || button.disabled) return;
      button.disabled = true;
      try {
        await apiRequest(`/nodes/${data.nodeId}/relay/messages/${button.dataset.messageId}/reactions`, {
          method: "PUT",
          body: JSON.stringify({ emoji: button.dataset.emoji }),
        });
        await refreshRelayDialog();
      } catch (error) {
        button.disabled = false;
        window.alert(t("relay.reactionError"));
      }
    });
  });

  relayDialogContent.querySelector("#confirmRelayRecipientsButton")?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const userIds = Array.from(relayDialogContent.querySelectorAll(".relay-recipient-item input:checked")).map((input) => input.value);
    if (userIds.length === 0) {
      window.alert(t("relay.selectError"));
      return;
    }
    button.disabled = true;
    try {
      const nextData = await apiRequest(`/nodes/${data.nodeId}/relay/start`, {
        method: "POST",
        body: JSON.stringify({ userIds }),
      });
      activeRelayData = nextData;
      updateRelayNodeState(data.nodeId, nextData);
      renderRelayDialogContent(nextData);
      if (nextData.session) {
        startRelayRefresh();
      }
      if (activeDetailNodeId === data.nodeId) {
        detailContent.innerHTML = renderDetailLayout(nodes.find((node) => node.id === data.nodeId));
        bindDetailActions(nodes.find((node) => node.id === data.nodeId));
      }
      refreshNotifications();
    } catch (error) {
      window.alert(t("relay.startError"));
      button.disabled = false;
    }
  });

  const pastePanel = relayDialogContent.querySelector(".relayPastePanel");
  const pastePreview = relayDialogContent.querySelector(".relayPastePreview");
  const pasteStatus = relayDialogContent.querySelector(".relayPasteStatus");
  const pasteClearButton = relayDialogContent.querySelector(".relayPasteClear");
  const fileInput = relayDialogContent.querySelector(".relayImageInput");
  const fileStatus = relayDialogContent.querySelector(".relayFileStatus");
  pastePanel?.addEventListener("click", () => pastePanel.focus());
  pastePanel?.addEventListener("paste", (event) => {
    if (handleImagePaste(event, pastedRelayImage, pastePreview, pasteStatus, pasteClearButton, pastePanel, fileInput)) {
      setRelayFileStatus(fileStatus);
    }
  });
  pasteClearButton?.addEventListener("click", () => {
    clearPastedImage(pastedRelayImage, pastePreview, pasteStatus, pasteClearButton, pastePanel);
  });
  fileInput?.addEventListener("change", () => {
    const file = fileInput.files ? fileInput.files[0] : null;
    if (file && !isFileWithinUploadLimit(file, "image")) {
      window.alert(getUploadLimitMessage("image"));
      fileInput.value = "";
      setRelayFileStatus(fileStatus);
      return;
    }
    if (file) {
      clearPastedImage(pastedRelayImage, pastePreview, pasteStatus, pasteClearButton, pastePanel);
    }
    setRelayFileStatus(fileStatus, file);
  });

  const relayComposeForm = relayDialogContent.querySelector(".relay-compose");
  relayComposeForm?.querySelector(".relayMessageInput")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.shiftKey || event.altKey || event.isComposing) return;
    event.preventDefault();
    relayComposeForm.requestSubmit();
  });
  relayComposeForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.querySelector(".relayMessageInput");
    const sendButton = form.querySelector(".relaySendButton");
    const file = fileInput?.files?.[0] || pastedRelayImage.file;
    const body = input.value.trim();
    if (!body && !file) return;
    if (file && !isFileWithinUploadLimit(file, "image")) {
      window.alert(getUploadLimitMessage("image"));
      return;
    }
    sendButton.disabled = true;
    const uploadFile = file ? await prepareImageFileForUpload(file) : null;
    if (uploadFile && !isFileWithinUploadLimit(uploadFile, "image")) {
      window.alert(getUploadLimitMessage("image"));
      sendButton.disabled = false;
      return;
    }
    const formData = new FormData();
    formData.append("body", body);
    if (uploadFile) {
      formData.append("imageFile", uploadFile);
    }
    try {
      await apiRequest(`/nodes/${data.nodeId}/relay/messages`, {
        method: "POST",
        body: formData,
      });
      input.value = "";
      if (fileInput) fileInput.value = "";
      setRelayFileStatus(fileStatus);
      clearPastedImage(pastedRelayImage, pastePreview, pasteStatus, pasteClearButton, pastePanel);
      await refreshRelayDialog({ forceScrollBottom: true });
    } catch (error) {
      window.alert(t("relay.messageError"));
      sendButton.disabled = false;
    }
  });

  relayDialogContent.querySelector(".relayCloseButton")?.addEventListener("click", async (event) => {
    const shouldClose = window.confirm(t("relay.closeConfirm"));
    if (!shouldClose) return;
    const button = event.currentTarget;
    button.disabled = true;
    try {
      const nextData = await apiRequest(`/nodes/${data.nodeId}/relay/close`, { method: "POST" });
      activeRelayData = nextData;
      updateRelayNodeState(data.nodeId, nextData);
      renderRelayDialogContent(nextData);
      if (activeDetailNodeId === data.nodeId) {
        detailContent.innerHTML = renderDetailLayout(nodes.find((node) => node.id === data.nodeId));
        bindDetailActions(nodes.find((node) => node.id === data.nodeId));
      }
    } catch (error) {
      window.alert(t("relay.closeError"));
      button.disabled = false;
    }
  });
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

function updateNodeFavoriteState(id, favoritedByCurrentUser, fixedFavoriteByCurrentUser = null) {
  nodes = nodes.map((node) =>
    node.id === id
      ? {
          ...node,
          favoritedByCurrentUser: Boolean(favoritedByCurrentUser),
          fixedFavoriteByCurrentUser:
            fixedFavoriteByCurrentUser === null ? node.fixedFavoriteByCurrentUser : Boolean(fixedFavoriteByCurrentUser),
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
  favoriteButton.disabled = Boolean(node.fixedFavoriteByCurrentUser);
  favoriteButton.querySelector("span:last-child").textContent = node.fixedFavoriteByCurrentUser
    ? t("favorite.pinned")
    : node.favoritedByCurrentUser
      ? t("favorite.remove")
      : t("favorite.add");
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
  if (!node || !currentUser || node.ownerUserId === currentUser.id || node.fixedFavoriteByCurrentUser) return;

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
    updateNodeFavoriteState(id, result.favoritedByCurrentUser, result.fixedFavoriteByCurrentUser);
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
      <div class="panel-heading"><h2>${escapeHtml(t("composer.addFromNode"))}</h2></div>
      <button class="panel-toggle detailComposerToggle" type="button" aria-expanded="false" aria-controls="detailComposerPanel">${escapeHtml(t("composer.addFromNode"))}</button>
      <div class="detail-composer-grid" id="detailComposerPanel" hidden>
        <label class="field">
          <span>${escapeHtml(t("cluster.type"))}</span>
          <select class="detailComposerCluster"></select>
        </label>
        <label class="field">
          <span>${escapeHtml(t("node.type"))}</span>
          <select class="detailComposerType">
            <option value="text">${escapeHtml(t("type.text"))}</option>
            <option value="image">${escapeHtml(t("type.image"))}</option>
            <option value="music">${escapeHtml(t("type.music"))}</option>
            <option value="video">${escapeHtml(t("type.video"))}</option>
            <option value="relay">${escapeHtml(t("type.relay"))}</option>
          </select>
        </label>
        <label class="field">
          <span>${escapeHtml(t("node.title"))}</span>
          <input class="detailComposerTitle" type="text" placeholder="${escapeHtml(t("node.newTitlePlaceholder"))}" maxlength="${INPUT_LIMITS.nodeTitle}" />
        </label>
        <label class="field">
          <span>${escapeHtml(t("node.body"))}</span>
          <textarea class="detailComposerBody" rows="4" placeholder="${escapeHtml(t("node.bodyPlaceholder"))}" maxlength="${INPUT_LIMITS.longText}"></textarea>
        </label>
        <div class="field detailComposerMedia is-hidden">
          <span>${escapeHtml(t("common.file"))}</span>
          <input class="detailComposerFile" type="file" accept="image/png,image/jpeg,image/gif,audio/mpeg,video/mp4,.png,.jpg,.jpeg,.gif,.mp3,.mp4" />
          <div class="media-drop-zone detailComposerDropZone">
            <strong>${escapeHtml(t("media.dropFile"))}</strong>
            <small class="detailComposerDropStatus">${escapeHtml(t("media.dropAny"))}</small>
            <button class="ghost-button detailComposerDropClear" type="button" hidden>${escapeHtml(t("common.clear"))}</button>
          </div>
          <div class="clipboard-image-panel detailComposerPastePanel is-hidden" tabindex="0">
            <div class="clipboard-image-copy">
              <strong>${escapeHtml(t("media.pasteImage"))}</strong>
              <small class="detailComposerPasteStatus">${escapeHtml(t("media.pasteHint"))}</small>
            </div>
            <img class="detailComposerPastePreview" alt="" hidden />
            <button class="ghost-button detailComposerPasteClear" type="button" hidden>${escapeHtml(t("common.clear"))}</button>
          </div>
          <div class="duration-field detailComposerDurationField is-hidden">
            <span>${escapeHtml(t("media.duration"))}</span>
            <div class="duration-grid">
              <input class="detailComposerDuration" type="number" min="10" max="900" value="180" />
              <span>${escapeHtml(t("media.seconds"))}</span>
            </div>
          </div>
        </div>
        <button class="primary-button detailComposerAdd" type="button">${escapeHtml(t("composer.addAndConnect"))}</button>
      </div>
    </section>
  `;
}

function renderDeleteNodeAction() {
  const node = nodes.find((item) => item.id === activeDetailNodeId);
  if (!node || !canManageOwner(node.ownerUserId)) return "";

  return `
    <div class="detail-actions">
      <button class="danger-button" id="deleteNodeButton" type="button">${escapeHtml(t("node.delete"))}</button>
    </div>
  `;
}

function updateComposerMediaFields(type, mediaFieldElement, fileInputElement, durationFieldElement) {
  const isText = isTextNodeType(type);
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
  fileInputElement.multiple = type === "image";
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
  const droppedDetailMedia = { file: null, files: [] };

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
    const files = getSelectedFilesFromInput(fileField);
    if (typeField.value === "image" && files.length > IMAGE_NODE_MAX_FILES) {
      window.alert(getImageNodeFileCountMessage());
      fileField.value = "";
      return;
    }
    if (getUploadLimitExceededFile(files, typeField.value)) {
      window.alert(getUploadLimitMessage(typeField.value));
      fileField.value = "";
      return;
    }
    if (typeField.value === "image" && !areImageNodeFilesWithinTotalUploadLimit(files)) {
      window.alert(getImageNodeTotalUploadLimitMessage());
      fileField.value = "";
      return;
    }
    if (files.length > 0) {
      clearDroppedMedia(droppedDetailMedia, dropStatus, dropClearButton, dropZone, typeField.value);
      clearPastedImage(pastedDetailImage, pastePreview, pasteStatus, pasteClearButton, pastePanel);
    }
    updateDurationFromFile(typeField.value, files[0] || null, durationFieldInput);
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
    if (isNodeSubmissionPending) return;
    if (hasOversizedMediaFile(typeField.value, fileField, pastedDetailImage, droppedDetailMedia)) {
      window.alert(getUploadLimitMessage(typeField.value));
      return;
    }
    const mediaFiles = getMediaFilesForType(typeField.value, fileField, pastedDetailImage, droppedDetailMedia);
    if (mediaFiles === null) return;
    setNodeSubmissionPending(true, mediaFiles.length > 0 ? t("processing.uploadConnect") : t("processing.saveConnect"));
    try {
      const createdNode = await createNodeFromValues({
        type: typeField.value,
        title: titleField.value,
        body: bodyField.value,
        duration: durationFieldInput.value,
        mediaFiles,
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
    } finally {
      setNodeSubmissionPending(false);
    }
  });
  updateNodeSubmissionControls();
}

function bindDeleteNodeAction(node) {
  const deleteButton = detailContent.querySelector("#deleteNodeButton");
  if (!deleteButton) return;

  deleteButton.addEventListener("click", () => {
    const shouldDelete = window.confirm(t("node.deleteConfirm"));
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

function bindShareNodeAction(node) {
  const shareButton = detailContent.querySelector("#openShareDialogButton");
  if (!shareButton) return;

  shareButton.addEventListener("click", () => {
    openShareDialog(node.id);
  });
}

function bindRelayNodeAction(node) {
  const relayButton = detailContent.querySelector("#openRelayDialogButton");
  if (!relayButton) return;

  relayButton.addEventListener("click", () => {
    openRelayDialog(node.id);
  });
}

function bindDetailActions(node) {
  if (!node) return;
  bindDetailMetaActions();
  bindDetailComposer(node);
  bindNodeLikeAction(node);
  bindNodeFavoriteAction(node);
  bindShareNodeAction(node);
  bindRelayNodeAction(node);
  bindDeleteNodeAction(node);
  bindRelationNodeCards();
  loadLinkPreviews(detailContent);
  bindMusicArtwork(node);
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

  if (isTextNodeType(node.type)) {
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
  if (activeSelectionSyncCleanup) {
    activeSelectionSyncCleanup();
    activeSelectionSyncCleanup = null;
  }
  detailType.innerHTML = renderDetailMeta(node);
  detailTitle.textContent = node.title;
  detailContent.innerHTML = renderDetailLayout(node);
  bindDetailActions(node);

  if (!detailDialog.open) {
    detailDialog.showModal();
  }
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
document.querySelectorAll("[data-locale-choice]").forEach((button) => {
  button.addEventListener("click", () => setLocale(button.dataset.localeChoice));
});
loginButton.addEventListener("click", login);
loginPasswordInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.isComposing) return;
  event.preventDefault();
  login();
});
forgotPasswordButton?.addEventListener("click", showPasswordResetView);
backToLoginButton?.addEventListener("click", showLoginSignupView);
resetPasswordButton?.addEventListener("click", resetPassword);
resetEmailInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.isComposing) return;
  event.preventDefault();
  resetPassword();
});
signupButton.addEventListener("click", signup);
[
  signupEmailInput,
  signupUserNameInput,
  signupUserIdInput,
  signupPasswordInput,
  signupBirthDateInput,
  signupProfileIconInput,
  signupBioInput,
].forEach((input) => {
  input?.addEventListener("input", resetSignupVerification);
  input?.addEventListener("change", resetSignupVerification);
});
signupVerificationCodeInput?.addEventListener("input", () => {
  signupVerificationCodeInput.value = signupVerificationCodeInput.value.replace(/\D/g, "").slice(0, 6);
});
signupVerificationCodeInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  signup();
});
userSummaryButton.addEventListener("click", () => {
  if (currentUser) {
    openUserDetail(currentUser.id);
  }
});
brandInfoButtons.forEach((button) => {
  button.addEventListener("click", openBrandInfoDialog);
});
closeBrandInfoDialogButton.addEventListener("click", closeBrandInfoDialog);
brandInfoTabs.forEach((tab) => {
  tab.addEventListener("click", () => setBrandInfoTab(tab.dataset.brandInfoTab));
  tab.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusAdjacentBrandInfoTab(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusAdjacentBrandInfoTab(-1);
    }
  });
});
closeProfileDialogButton.addEventListener("click", closeProfileDialog);
cancelProfileButton.addEventListener("click", closeProfileDialog);
saveProfileButton.addEventListener("click", saveProfile);
closeUserDetailDialogButton.addEventListener("click", closeUserDetailDialog);
closeClusterNodesDialogButton.addEventListener("click", closeClusterNodesDialog);
closeShareDialogButton.addEventListener("click", closeShareDialog);
closeRelayDialogButton?.addEventListener("click", closeRelayDialog);
composerToggle.addEventListener("click", () => togglePanel(composerToggle, composerPanel));
clusterToggle.addEventListener("click", () => togglePanel(clusterToggle, clusterPanel));
nodeListTabs.forEach((tab) => {
  tab.addEventListener("click", () => setNodeListMode(tab.dataset.nodeListMode));
});
clusterListTabs.forEach((tab) => {
  tab.addEventListener("click", () => setClusterListMode(tab.dataset.clusterListMode));
});
universeModeButton.addEventListener("click", toggleUniverseMode);
homeButton.addEventListener("click", moveUniverseToHome);
saveHomeButton.addEventListener("click", saveCurrentHomeLocation);
searchTypeInput.addEventListener("change", resetSearchResults);
searchWordInput.addEventListener("input", resetSearchResults);
searchSortInput.addEventListener("change", resetSearchResults);
searchOrderInput.addEventListener("change", resetSearchResults);
sidebarToggleButton.addEventListener("click", toggleLeftSidebar);
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
nodesLayer.addEventListener("pointerdown", trackUniversePointer, { capture: true });
nodesLayer.addEventListener("pointermove", moveUniversePinch, { capture: true });
nodesLayer.addEventListener("pointerup", finishUniversePointer, { capture: true });
nodesLayer.addEventListener("pointercancel", finishUniversePointer, { capture: true });
nodesLayer.addEventListener("pointerdown", startUniversePan);
nodesLayer.addEventListener("pointermove", moveUniversePan);
nodesLayer.addEventListener("pointerup", finishUniversePan);
nodesLayer.addEventListener("pointercancel", finishUniversePan);
nodesLayer.addEventListener("wheel", handleUniverseWheel, { passive: false });
window.addEventListener("resize", resizeCanvas);
window.addEventListener("focus", refreshStateFromServer);
window.addEventListener("focus", refreshNotifications);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    refreshStateFromServer();
    refreshNotifications();
  }
});
nodeProcessingDialog?.addEventListener("cancel", (event) => {
  event.preventDefault();
});
notificationTriggerButton?.addEventListener("click", openNotificationDialog);
closeNotificationDialogButton?.addEventListener("click", closeNotificationDialog);
markNotificationsReadButton?.addEventListener("click", markAllNotificationsRead);
detailDialog.addEventListener("close", stopDetailPlayback);
relayDialog?.addEventListener("close", () => {
  stopRelayRefresh();
  activeRelayNodeId = null;
  activeRelayData = null;
});

applyLocale();
setSearchSidebarCollapsed(localStorage.getItem("textosphereSearchCollapsed") === "1");
setLeftSidebarCollapsed(localStorage.getItem("textosphereLeftSidebarCollapsed") === "1");
renderNotifications();
updateTypeFields();
if (authToken) {
  loadState();
} else {
  showAuth();
}

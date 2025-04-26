const siteNameInput = document.getElementById("siteNameInput");
const siteUrlInput = document.getElementById("siteUrlInput");
const nameErrorMsg = document.getElementById("nameErrorMsg");
const urlErrorMsg = document.getElementById("urlErrorMsg");
const bookmarksList = document.getElementById("bookmarksList");
const toastContainer = document.getElementById("toastContainer");

// Event Listeners for buttons
document.getElementById("clearAllBtn").addEventListener("click", clearAllBookmarks);
document.getElementById("exportBtn").addEventListener("click", exportBookmarks);

// Show toast
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast align-items-center text-white bg-${type} border-0`;
    toast.role = "alert";
    toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>
  `;
    toastContainer.appendChild(toast);
    new bootstrap.Toast(toast, {
        delay: 3000
    }).show();
}

// Validate form
function validFormData() {
    let isValid = true;
    nameErrorMsg.textContent = siteNameInput.value.trim() === "" ? "Required*" : "";
    urlErrorMsg.textContent = siteUrlInput.value.trim() === "" ? "Required*" : "";

    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(siteUrlInput.value.trim())) {
        urlErrorMsg.textContent = "Enter a valid URL starting with http:// or https://";
        isValid = false;
    }

    return isValid;
}

// Normalize URL
function normalizeUrl(url) {
    if (!/^https?:\/\//i.test(url)) {
        return "https://" + url;
    }
    return url;
}

// Load bookmarks
function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarksList.innerHTML = "";
    bookmarks.forEach(({
        name,
        url
    }) => appendBookmark(name, url));
}

// Append a bookmark
function appendBookmark(name, url) {
    const li = document.createElement("li");
    li.className = "list-group-item";

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.className = "d-flex align-items-center flex-grow-1";

    const favicon = document.createElement("img");
    favicon.className = "favicon";
    favicon.src = `https://www.google.com/s2/favicons?domain=${url}&sz=32`;

    link.appendChild(favicon);
    link.appendChild(document.createTextNode(name));

    const del = document.createElement("i");
    del.className = "fas fa-trash-alt text-danger";
    del.style.cursor = "pointer";
    del.onclick = () => removeBookmark(url);

    li.appendChild(link);
    li.appendChild(del);
    bookmarksList.appendChild(li);
}

// Add bookmark
function addBookmark(name, url) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    if (bookmarks.some(b => b.url === url)) {
        showToast("Bookmark already exists!", "warning");
        return;
    }
    bookmarks.push({
        name,
        url
    });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    appendBookmark(name, url);
    showToast("Bookmark added!");
}

// Remove
function removeBookmark(url) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks = bookmarks.filter(b => b.url !== url);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    loadBookmarks();
    showToast("Deleted!", "danger");
}

// Clear all
function clearAllBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  if (bookmarks.length === 0) {
    showToast("No bookmarks to clear!", "warning");
    return;
  }
  if (confirm("Are you sure you want to delete all bookmarks?")) {
    localStorage.removeItem("bookmarks");
    loadBookmarks();
    showToast("All bookmarks cleared!", "danger");
  }
}

// Export
function exportBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  if (bookmarks.length === 0) {
    showToast("No bookmarks to export!", "warning");
    return;
  }
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bookmarks, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "bookmarks.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Bookmarks exported successfully!", "success");
}

// Search
function searchBookmarks(query) {
    const items = bookmarksList.getElementsByTagName("li");
    Array.from(items).forEach(item => {
        const name = item.textContent.toLowerCase();
        item.style.display = name.includes(query.toLowerCase()) ? "flex" : "none";
    });
}

// Form submit
document.getElementById("bookmarkForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (validFormData()) {
        const name = siteNameInput.value.trim();
        const url = normalizeUrl(siteUrlInput.value.trim());
        addBookmark(name, url);
        siteNameInput.value = "";
        siteUrlInput.value = "";
    }
});

// Init
document.addEventListener("DOMContentLoaded", loadBookmarks);

const searchInputEl = document.getElementById("searchInput");
const searchResultsEl = document.getElementById("searchResults");
const spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
  const { link, title, description } = result;

  const resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");

  const titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");

  const urlEl = document.createElement("a");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.textContent = link;
  urlEl.classList.add("result-url");

  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = description;
  descriptionEl.classList.add("link-description");

  resultItemEl.append(titleEl, document.createElement("br"), urlEl,
    document.createElement("br"), descriptionEl);

  searchResultsEl.appendChild(resultItemEl);
}

function displayResults(results) {
  spinnerEl.classList.add("d-none");
  results.forEach(createAndAppendSearchResult);
}

function searchWikipedia(event) {
  if (event.key === "Enter") {
    const query = searchInputEl.value.trim();
    if (!query) return;

    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";

    fetch(`https://apis.ccbp.in/wiki-search?search=${query}`)
      .then(response => response.json())
      .then(data => {
        const { search_results } = data;
        displayResults(search_results);
      })
      .catch(() => {
        spinnerEl.classList.add("d-none");
        alert("Failed to fetch results. Try again.");
      });
  }
}

searchInputEl.addEventListener("keydown", searchWikipedia);

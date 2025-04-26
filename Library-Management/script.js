let searchInputEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let searchResultsEl = document.getElementById("searchResults");
let clearBtnEl = document.getElementById("clearBtn");
let modalBodyEl = document.getElementById("modalBody");

function displayBook(book) {
    let cardEl = document.createElement("div");
    cardEl.classList.add("card", "p-3", "text-center");

    let imageEl = document.createElement("img");
    imageEl.src = book.imageLink;
    imageEl.classList.add("book-img", "img-fluid");

    let titleEl = document.createElement("p");
    titleEl.textContent = book.author;
    titleEl.classList.add("book-author");

    cardEl.appendChild(imageEl);
    cardEl.appendChild(titleEl);

    cardEl.addEventListener("click", function () {
        openModal(book);
    });

    searchResultsEl.appendChild(cardEl);
}

function openModal(book) {
    document.getElementById("bookModalLabel").textContent = book.title;
    modalBodyEl.innerHTML = `
        <img src="${book.imageLink}" class="img-fluid mb-3" style="border-radius: 10px;">
        <h5>Author: ${book.author}</h5>
        <p><strong>Language:</strong> ${book.language}</p>
        <p><strong>Price:</strong> ₹${book.price}</p>
    `;
    $('#bookModal').modal('show');
}

function getSearchedBookResults(jsonData) {
    let bookSearchResults = jsonData.search_results;
    searchResultsEl.innerHTML = "";

    if (bookSearchResults.length === 0) {
        searchResultsEl.innerHTML = `<div class="no-results">🚫 No Results Found</div>`;
    } else {
        bookSearchResults.forEach(book => displayBook(book));
    }
}

function getBooksData() {
    spinnerEl.classList.remove("d-none");
    searchResultsEl.innerHTML = "";

    let url = "https://apis.ccbp.in/book-store?title=" + searchInputEl.value;
    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            spinnerEl.classList.add("d-none");
            getSearchedBookResults(jsonData);
        });
}

searchInputEl.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getBooksData();
    }
});

// Real-time Search
searchInputEl.addEventListener("input", function () {
    if (searchInputEl.value.trim().length > 2) {
        getBooksData();
    }
});

// Clear Button
clearBtnEl.addEventListener("click", function () {
    searchInputEl.value = "";
    searchResultsEl.innerHTML = "";
});

// First load
searchInputEl.focus();

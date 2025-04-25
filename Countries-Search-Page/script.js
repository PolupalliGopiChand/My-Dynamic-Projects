const searchInputEl = document.getElementById("searchInput");
const spinnerEl = document.getElementById("spinner");
const resultCountriesEl = document.getElementById("resultCountries");

let countriesList = [];
let searchInputVal = "";

function formatPopulation(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createAndAppendCountry(country) {
  const countryEl = document.createElement("div");
  countryEl.className = "country-card col-11 col-md-5 mx-auto";

  countryEl.innerHTML = `
    <img src="${country.flag}" alt="${country.name}" class="country-flag" />
    <div class="country-info">
      <p class="country-name">${country.name}</p>
      <p class="country-population">Population: ${formatPopulation(country.population)}</p>
    </div>
  `;

  resultCountriesEl.appendChild(countryEl);
}

function displaySearchResults() {
  resultCountriesEl.innerHTML = "";
  const filteredCountries = countriesList.filter(country =>
    country.name.toLowerCase().includes(searchInputVal.toLowerCase())
  );

  if (filteredCountries.length === 0) {
    const noResults = document.createElement("div");
    noResults.className = "col-12 no-results";
    noResults.textContent = "No countries found.";
    resultCountriesEl.appendChild(noResults);
    return;
  }

  filteredCountries.forEach(createAndAppendCountry);
}

function getCountries() {
  const url = "https://apis.ccbp.in/countries-data";

  resultCountriesEl.innerHTML = "";
  spinnerEl.classList.remove("d-none");
  resultCountriesEl.classList.add("d-none");

  fetch(url)
    .then(response => response.json())
    .then(data => {
      countriesList = data;
      spinnerEl.classList.add("d-none");
      resultCountriesEl.classList.remove("d-none");
      displaySearchResults();
    })
    .catch(() => {
      spinnerEl.classList.add("d-none");
      resultCountriesEl.classList.remove("d-none");
      resultCountriesEl.innerHTML = `<div class="col-12 no-results">Failed to load data.</div>`;
    });
}

function onChangeSearchInput(event) {
  searchInputVal = event.target.value;
  displaySearchResults();
}

// Initialize
getCountries();
searchInputEl.addEventListener("keyup", onChangeSearchInput);

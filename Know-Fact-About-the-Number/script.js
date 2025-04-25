const userInputEl = document.getElementById("userInput");
const factTextEl = document.getElementById("factText");
const spinnerEl = document.getElementById("spinner");

function displayFact(fact) {
  factTextEl.textContent = fact;
}

function showSpinner() {
  spinnerEl.classList.remove("d-none");
  factTextEl.textContent = "";
}

function hideSpinner() {
  spinnerEl.classList.add("d-none");
}

function fetchFact(number) {
  const url = `https://apis.ccbp.in/numbers-fact?number=${number}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      hideSpinner();
      displayFact(data.fact);
    })
    .catch(error => {
      hideSpinner();
      displayFact("Unable to fetch fact. Please try again.");
      console.error("Error fetching fact:", error);
    });
}

function handleKeyDown(event) {
  if (event.key === "Enter" && userInputEl.value.trim() !== "") {
    showSpinner();
    fetchFact(userInputEl.value.trim());
  }
}

userInputEl.addEventListener("keydown", handleKeyDown);

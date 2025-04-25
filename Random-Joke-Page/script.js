const jokeTextEl = document.getElementById("jokeText");
const jokeBtnEl = document.getElementById("jokeBtn");
const spinnerEl = document.getElementById("spinner");

const fetchJoke = async () => {
    try {
        jokeTextEl.textContent = "";
        spinnerEl.classList.remove("d-none");

        const response = await fetch("https://apis.ccbp.in/jokes/random");
        const data = await response.json();

        jokeTextEl.textContent = data.value;
    } catch (error) {
        jokeTextEl.textContent = "Failed to fetch a joke. Try again!";
    } finally {
        spinnerEl.classList.add("d-none");
    }
};

jokeBtnEl.addEventListener("click", fetchJoke);

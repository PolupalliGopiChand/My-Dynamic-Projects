const timerEl = document.getElementById("timer");
const defuserEl = document.getElementById("defuser");
const defuseAgainButton = document.getElementById("defuse-again");
const timerContainer = document.getElementById("timer-container");

let countdown = 10;
let intervalId;

const updateBackgroundColor = () => {
    if (countdown > 5) {
        timerContainer.style.backgroundColor = "#00bafc"; // Blue
    } else if (countdown > 2) {
        timerContainer.style.backgroundColor = "#ffeb3b"; // Yellow
    } else if (countdown > 0) {
        timerContainer.style.backgroundColor = "#f44336"; // Red
    }
};

const startCountdown = () => {
    intervalId = setInterval(() => {
        countdown--;
        updateBackgroundColor();
        timerEl.textContent = countdown;

        if (countdown === 0) {
            timerEl.textContent = "BOOM";
            clearInterval(intervalId);
            defuseAgainButton.style.display = "inline-block";
        }
    }, 1000);
};

const explodeNow = () => {
    clearInterval(intervalId);
    timerEl.textContent = "BOOM";
    timerContainer.style.backgroundColor = "#f44336";
    defuseAgainButton.style.display = "inline-block";
    
};

const handleKeydown = (event) => {
    if (event.key === "Enter") {
        const input = defuserEl.value.trim().toLowerCase();

        if (countdown > 0 && input === "defuse") {
            timerEl.textContent = "You did it!";
            timerContainer.style.backgroundColor = "#00bafc";
            clearInterval(intervalId);
            defuseAgainButton.style.display = "inline-block";
        } else {
            explodeNow();
        }
    }
};

const resetTimer = () => {
    countdown = 10;
    timerEl.textContent = countdown;
    defuserEl.value = "";
    defuseAgainButton.style.display = "none";
    timerContainer.style.backgroundColor = "#00bafc";
    startCountdown();
};

startCountdown();
defuserEl.addEventListener("keydown", handleKeydown);
defuseAgainButton.addEventListener("click", resetTimer);

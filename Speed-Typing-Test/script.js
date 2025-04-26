// DOM Elements
const speedTypingTestEl = document.getElementById("speedTypingTest");
const loadingEl = document.getElementById("loading");
const timerEl = document.getElementById("timer");
const quoteDisplayEl = document.getElementById("quoteDisplay");
const resultEl = document.getElementById("result");
const quoteInputEl = document.getElementById("quoteInput");
const submitBtnEl = document.getElementById("submitBtn");
const resetBtnEl = document.getElementById("resetBtn");
const startBtnEl = document.getElementById("startBtn");
const countdownEl = document.getElementById("countdown");
const darkModeToggleEl = document.getElementById("darkModeToggle");
const bgContainerEl = document.querySelector(".bg-container");

let sec = 0;
let typingTimer;
let isTimerRunning = false;

// Timer Functions
function startTimer() {
    typingTimer = setInterval(() => {
        sec++;
        timerEl.textContent = sec;
    }, 1000);
}

function stopTimer() {
    clearInterval(typingTimer);
}

// Fetch a new quote
function fetchQuote() {
    loadingEl.classList.remove("d-none");
    speedTypingTestEl.classList.add("d-none");

    fetch("https://apis.ccbp.in/random-quote")
        .then(response => response.json())
        .then(data => {
            loadingEl.classList.add("d-none");
            speedTypingTestEl.classList.remove("d-none");
            quoteDisplayEl.textContent = data.content;
            quoteInputEl.value = "";
            resultEl.textContent = "";
        });
}

// Countdown before typing
function startCountdown() {
    let count = 3;
    countdownEl.textContent = count;
    quoteInputEl.disabled = true;

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownEl.textContent = count;
        } else {
            clearInterval(countdownInterval);
            countdownEl.textContent = "Go!";
            quoteInputEl.disabled = false;
            quoteInputEl.focus();
            setTimeout(() => { countdownEl.textContent = ""; }, 800);
        }
    }, 1000);
}

// Calculate Typing Accuracy
function calculateAccuracy(typed, original) {
    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === original[i]) correct++;
    }
    return ((correct / original.length) * 100).toFixed(2);
}

// Highlight Mistakes Live
quoteInputEl.addEventListener("input", () => {
    if (!isTimerRunning && quoteInputEl.value.length > 0) {
        startTimer();
        isTimerRunning = true;
    }

    const typedText = quoteInputEl.value;
    const originalText = quoteDisplayEl.textContent;
    let highlightedHTML = "";

    for (let i = 0; i < originalText.length; i++) {
        if (i < typedText.length) {
            highlightedHTML += (typedText[i] === originalText[i])
                ? `<span class="correct-char">${originalText[i]}</span>`
                : `<span class="wrong-char">${originalText[i]}</span>`;
        } else {
            highlightedHTML += originalText[i];
        }
    }
    quoteDisplayEl.innerHTML = highlightedHTML;
});

// Submit Button Action
submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    stopTimer();
    let typedQuote = quoteInputEl.value.trim();
    let originalQuote = quoteDisplayEl.textContent.replace(/<\/?[^>]+(>|$)/g, "").trim();

    let wordCount = typedQuote.split(/\s+/).length;
    let minutes = sec / 60;
    let wpm = minutes > 0 ? (wordCount / minutes).toFixed(2) : 0;

    let accuracy = calculateAccuracy(typedQuote, originalQuote);

    if (typedQuote === originalQuote) {
        resultEl.textContent = `✅ Perfect! Time: ${sec} sec | Accuracy: ${accuracy}% | Speed: ${wpm} WPM`;
    } else {
        resultEl.textContent = `⚡ Typing mismatch! Time: ${sec} sec | Accuracy: ${accuracy}% | Speed: ${wpm} WPM`;
    }
});


// Reset Button Action
resetBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    stopTimer();
    sec = 0;
    isTimerRunning = false;
    timerEl.textContent = "0";
    fetchQuote();
});

// Start Button Action
startBtnEl.addEventListener("click", () => {
    sec = 0;
    isTimerRunning = false;
    timerEl.textContent = "0";
    fetchQuote();
    startCountdown();
});

// Dark Mode Toggle
darkModeToggleEl.addEventListener("click", () => {
    bgContainerEl.classList.toggle("dark-mode");
});

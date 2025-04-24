let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

function animateResult(text, color) {
    gameResultElement.textContent = text;
    gameResultElement.style.backgroundColor = color;
    gameResultElement.style.opacity = 0;
    gameResultElement.style.transition = "opacity 0.8s ease-in-out";
    setTimeout(() => {
        gameResultElement.style.opacity = 1;
    }, 50);
}

function bounceNumber(element, newValue) {
    element.classList.add("bounce");
    element.textContent = newValue;
    setTimeout(() => element.classList.remove("bounce"), 500);
}

function getRestart() {
    const first = Math.ceil(Math.random() * 100);
    const second = Math.ceil(Math.random() * 100);
    bounceNumber(firstNumberElement, first);
    bounceNumber(secondNumberElement, second);
    userInputElement.value = "";
    gameResultElement.textContent = "";
    gameResultElement.style.backgroundColor = "transparent";
}

function getCheck() {
    const first = parseInt(firstNumberElement.textContent);
    const second = parseInt(secondNumberElement.textContent);
    const userAnswer = parseInt(userInputElement.value);
    if (first + second === userAnswer) {
        animateResult("🎉 Correct Answer!", "#028a0f");
    } else {
        animateResult("❌ Try Again!", "#1e217c");
    }
}

getRestart();

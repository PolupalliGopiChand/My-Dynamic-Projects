let questionsFormEl = document.getElementById("questionsForm");
let submitBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");

let answers = {
    mcq1: "delhi",
    mcq2: "pacific",
    mcq3: "8",
    mcq4: "einstein",
    mcq5: "mars"
};

let selectedAnswers = {
    mcq1: null,
    mcq2: null,
    mcq3: null,
    mcq4: null,
    mcq5: null
};

let radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(button => {
    button.addEventListener('change', (event) => {
        let questionId = event.target.name;
        selectedAnswers[questionId] = event.target.value;
    });
});

questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    let correctAnswersCount = 0;

    for (let question in selectedAnswers) {
        if (selectedAnswers[question] === answers[question]) {
            correctAnswersCount++;
        }
    }

    if (correctAnswersCount === Object.keys(answers).length) {
        resultMsgEl.textContent = "All Answers are Correct!";
        resultMsgEl.style.color = "green";
    } else {
        resultMsgEl.textContent = `You got ${correctAnswersCount} out of ${Object.keys(answers).length} correct.`;
        resultMsgEl.style.color = "red";
    }
});

const subscribeFormEl = document.getElementById("subscribeForm");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const nameErrMsgEl = document.getElementById("nameErrMsg");
const emailErrMsgEl = document.getElementById("emailErrMsg");

function validateInput(inputEl, errEl, fieldName) {
    if (inputEl.value.trim() === "") {
        errEl.textContent = `${fieldName} is required*`;
        return false;
    } else {
        errEl.textContent = "";
        return true;
    }
}

function isAlreadySubscribed(email) {
    const subscribedList = JSON.parse(localStorage.getItem("subscribers")) || [];
    return subscribedList.includes(email.toLowerCase());
}

function saveSubscription(email) {
    const subscribedList = JSON.parse(localStorage.getItem("subscribers")) || [];
    subscribedList.push(email.toLowerCase());
    localStorage.setItem("subscribers", JSON.stringify(subscribedList));
}

nameEl.addEventListener("blur", () => validateInput(nameEl, nameErrMsgEl, "Name"));
emailEl.addEventListener("blur", () => validateInput(emailEl, emailErrMsgEl, "Email"));

subscribeFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    const isNameValid = validateInput(nameEl, nameErrMsgEl, "Name");
    const isEmailValid = validateInput(emailEl, emailErrMsgEl, "Email");

    if (isNameValid && isEmailValid) {
        const email = emailEl.value.trim();

        if (isAlreadySubscribed(email)) {
            alert("You have already subscribed with this email.");
        } else {
            saveSubscription(email);
            alert("You have successfully subscribed!");
            subscribeFormEl.reset();
        }
    }
});

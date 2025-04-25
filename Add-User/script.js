document.addEventListener('DOMContentLoaded', function () {
    const addUserFormEl = document.getElementById("addUserForm");
    const nameEl = document.getElementById("name");
    const nameErrMsgEl = document.getElementById("nameErrMsg");
    const emailEl = document.getElementById("email");
    const emailErrMsgEl = document.getElementById("emailErrMsg");
    const passwordEl = document.getElementById("password");
    const passwordErrMsgEl = document.getElementById("passwordErrMsg");
    const successMessageEl = document.getElementById("successMessage");

    // Real-time field validation
    nameEl.addEventListener("blur", function() {
        validateName(nameEl, nameErrMsgEl);
    });

    emailEl.addEventListener("blur", function() {
        validateEmail(emailEl, emailErrMsgEl);
    });

    passwordEl.addEventListener("blur", function() {
        validatePassword(passwordEl, passwordErrMsgEl);
    });

    addUserFormEl.addEventListener("submit", function(event) {
        event.preventDefault();
        // Check if the form is valid
        const isFormValid = validateName(nameEl, nameErrMsgEl) &&
                            validateEmail(emailEl, emailErrMsgEl) &&
                            validatePassword(passwordEl, passwordErrMsgEl);

        if (isFormValid) {
            successMessageEl.textContent = "User Added Successfully!";
            addUserFormEl.reset();
        } else {
            successMessageEl.textContent = "";
        }
    });

    // Name validation
    function validateName(inputEl, errorMsgEl) {
        if (inputEl.value.trim() === "") {
            errorMsgEl.textContent = "Name is required.";
            return false;
        } else if (/\d/.test(inputEl.value)) {
            errorMsgEl.textContent = "Name cannot contain numbers.";
            return false;
        }
        errorMsgEl.textContent = "";
        return true;
    }

    // Email validation
    function validateEmail(inputEl, errorMsgEl) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (inputEl.value.trim() === "") {
            errorMsgEl.textContent = "Email is required.";
            return false;
        } else if (!emailPattern.test(inputEl.value)) {
            errorMsgEl.textContent = "Please enter a valid email.";
            return false;
        }
        errorMsgEl.textContent = "";
        return true;
    }

    // Password validation
    function validatePassword(inputEl, errorMsgEl) {
        if (inputEl.value.trim() === "") {
            errorMsgEl.textContent = "Password is required.";
            return false;
        } else if (inputEl.value.length < 6) {
            errorMsgEl.textContent = "Password must be at least 6 characters.";
            return false;
        }
        errorMsgEl.textContent = "";
        return true;
    }
});

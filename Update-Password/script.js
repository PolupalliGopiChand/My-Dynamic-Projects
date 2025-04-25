const formEl = document.getElementById("updatePasswordForm");
const newPasswordEl = document.getElementById("newPassword");
const confirmPasswordEl = document.getElementById("confirmPassword");
const newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
const confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
const toastEl = document.getElementById("successToast");

function validateNewPassword() {
  if (newPasswordEl.value.trim() === "") {
    newPasswordErrMsgEl.textContent = "New password is required*";
    return false;
  }
  newPasswordErrMsgEl.textContent = "";
  return true;
}

function validateConfirmPassword() {
  if (confirmPasswordEl.value.trim() === "") {
    confirmPasswordErrMsgEl.textContent = "Confirmation is required*";
    return false;
  }
  if (confirmPasswordEl.value !== newPasswordEl.value) {
    confirmPasswordErrMsgEl.textContent = "Passwords must match";
    return false;
  }
  confirmPasswordErrMsgEl.textContent = "";
  return true;
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const isNewValid = validateNewPassword();
  const isConfirmValid = validateConfirmPassword();

  if (isNewValid && isConfirmValid) {
    $(toastEl).toast("show");
    formEl.reset();
  }
});

newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);

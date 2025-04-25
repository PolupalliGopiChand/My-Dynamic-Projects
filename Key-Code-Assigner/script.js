const userInputEl = document.getElementById("userInput");
const keyCodeListEl = document.getElementById("keyCodeList");
const resetBtnEl = document.getElementById("resetBtn");

// Function to check if the key is valid (letters, numbers, and special characters)
function isValidKey(key) {
  const regex = /^[a-zA-Z0-9`~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  return regex.test(key);
}

userInputEl.addEventListener("keydown", event => {
  const ignoredKeys = ["Shift", "CapsLock", "Backspace"];

  if (event.key === "Backspace") {
    const lastItem = keyCodeListEl.lastElementChild;
    if (lastItem) {
      keyCodeListEl.removeChild(lastItem);
    }
  } else if (!ignoredKeys.includes(event.key) && isValidKey(event.key)) {
    const keyCodeItem = document.createElement("li");
    keyCodeItem.textContent = `Key: ${event.key} → Code: ${event.keyCode}`;
    keyCodeListEl.appendChild(keyCodeItem);
  }
});

// Reset the key code list when reset button is clicked
resetBtnEl.addEventListener("click", () => {
  keyCodeListEl.innerHTML = '';
});

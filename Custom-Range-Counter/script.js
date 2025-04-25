const fromInput = document.getElementById("fromUserInput");
const toInput = document.getElementById("toUserInput");
const counterDisplay = document.getElementById("counterText");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let intervalId = null;
let current = 0;

function validateInputs(fromVal, toVal) {
  if (fromVal === "" || isNaN(fromVal)) {
    alert("Please enter a valid 'From' value.");
    return false;
  }
  if (toVal === "" || isNaN(toVal)) {
    alert("Please enter a valid 'To' value.");
    return false;
  }
  if (parseInt(fromVal) > parseInt(toVal)) {
    alert("'From' value must be less than or equal to 'To' value.");
    return false;
  }
  return true;
}

startBtn.onclick = () => {
  const fromVal = parseInt(fromInput.value);
  const toVal = parseInt(toInput.value);

  if (!validateInputs(fromVal, toVal)) return;

  current = fromVal;
  counterDisplay.textContent = current;

  clearInterval(intervalId);
  intervalId = setInterval(() => {
    current++;
    if (current <= toVal) {
      counterDisplay.textContent = current;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
};

stopBtn.onclick = () => {
  clearInterval(intervalId);
};

resetBtn.onclick = () => {
  clearInterval(intervalId);
  fromInput.value = "";
  toInput.value = "";
  counterDisplay.textContent = "--";
};

startBtn.onclick = () => {
  const fromVal = parseInt(fromInput.value);
  const toVal = parseInt(toInput.value);

  if (!validateInputs(fromVal, toVal)) return;

  current = fromVal;
  counterDisplay.textContent = current;

  clearInterval(intervalId);
  intervalId = setInterval(() => {
    current++;
    if (current <= toVal) {
      counterDisplay.textContent = current;
    } else {
      clearInterval(intervalId);
      counterDisplay.innerHTML = `<span class="text-success">✅ Counting Completed!</span>`;
    }
  }, 1000);
};

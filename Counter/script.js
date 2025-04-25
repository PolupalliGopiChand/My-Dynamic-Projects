const clearBtnEl = document.getElementById("clearBtn");
const resetBtnEl = document.getElementById("resetBtn");
const counterValueEl = document.getElementById("counterValue");

let counter = 0;
let intervalId = setInterval(updateCounter, 1000);

function updateCounter() {
  counter += 1;
  counterValueEl.textContent = counter;
}

clearBtnEl.onclick = () => {
  clearInterval(intervalId);
};

resetBtnEl.onclick = () => {
  clearInterval(intervalId);
  counter = 0;
  counterValueEl.textContent = counter;
  intervalId = setInterval(updateCounter, 1000);
};

const hoursInputEl = document.getElementById("hoursInput");
const minutesInputEl = document.getElementById("minutesInput");
const convertBtnEl = document.getElementById("convertBtn");
const timeInSecondsEl = document.getElementById("timeInSeconds");
const errorMsgEl = document.getElementById("errorMsg");

function convertToSeconds() {
  const hours = parseInt(hoursInputEl.value);
  const minutes = parseInt(minutesInputEl.value);

  const isHoursValid = !isNaN(hours) && hours >= 0;
  const isMinutesValid = !isNaN(minutes) && minutes >= 0;

  if (!isHoursValid) {
    errorMsgEl.textContent = "⚠️ Please enter a valid number of hours.";
    timeInSecondsEl.textContent = "";
    timeInSecondsEl.style.display = "none"
    return;
  }

  if (!isMinutesValid) {
    errorMsgEl.textContent = "⚠️ Please enter a valid number of minutes.";
    timeInSecondsEl.textContent = "";
    timeInSecondsEl.style.display = "none"
    return;
  }

  const totalSeconds = (hours * 3600) + (minutes * 60);
  timeInSecondsEl.textContent = `🕓 ${totalSeconds} seconds`;
  timeInSecondsEl.style.display = "block"
  errorMsgEl.textContent = "";
}

convertBtnEl.addEventListener("click", convertToSeconds);

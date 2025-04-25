const timerTextEl = document.getElementById("timerText");
let currentInterval;

function momentOfPeace(duration) {
  clearInterval(currentInterval);

  let timeLeft = duration;
  updateTimerText(timeLeft);

  currentInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      updateTimerText(timeLeft);
    } else {
      clearInterval(currentInterval);
      timerTextEl.innerHTML = "<span style='color: green;'>✅ Your Moment of Peace is Completed<span>";
    }
  }, 1000);
}

function updateTimerText(seconds) {
  timerTextEl.textContent = `${seconds} second${seconds !== 1 ? 's' : ''} left`;
}

document.getElementById("twentySecondsBtn").onclick = () => momentOfPeace(20);
document.getElementById("thirtySecondsBtn").onclick = () => momentOfPeace(30);
document.getElementById("fortySecondsBtn").onclick = () => momentOfPeace(40);
document.getElementById("oneMinuteBtn").onclick = () => momentOfPeace(60);

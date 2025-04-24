const bgContainer = document.getElementById("bgContainer");

const bgColors = [
    "#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0",
    "#184b73", "#883e7f", "#ed048b", "#29b6f6", "#66bb6a",
    "#ff7043", "#ba68c8", "#ffd600", "#00bcd4", "#ff5252",
    "#cddc39", "#7c4dff", "#009688", "#f06292", "#6d4c41",
    "#3f51b5", "#ff9800", "#00e5ff", "#a1887f", "#dc004e",
    "#9c27b0", "#80d8ff", "#76ff03", "#fbc02d", "#1e88e5",
    "#a5d6a7", "#ffb74d", "#8e24aa", "#c2185b", "#558b2f",
    "#5e35b1", "#00acc1", "#ffca28", "#c51162", "#4caf50",
    "#e53935", "#f44336", "#ff1744", "#00796b", "#6a1b9a",
    "#1a237e", "#ff6f00", "#00c853", "#aa00ff", "#b71c1c"
];

function changeColor() {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    bgContainer.style.backgroundColor = bgColors[randomIndex];
}

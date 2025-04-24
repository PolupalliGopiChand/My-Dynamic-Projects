const container = document.getElementById("colorPickerContainer");
const colorDisplay = document.getElementById("selectedColorHexCode");

function updateColor(color) {
  container.style.backgroundColor = color;
  colorDisplay.textContent = color;
}

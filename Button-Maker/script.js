function changeButton() {
  const bg = document.getElementById("bgColorInput").value || "#0967d2";
  const color = document.getElementById("fontColorInput").value || "#ffffff";
  const size = document.getElementById("fontSizeInput").value || "18px";
  const weight = document.getElementById("fontWeightInput").value || "500";
  const padding = document.getElementById("paddingInput").value || "12px 30px";
  const radius = document.getElementById("borderRadiusInput").value || "10px";

  const btn = document.getElementById("customButton");
  btn.style.backgroundColor = bg;
  btn.style.color = color;
  btn.style.fontSize = size;
  btn.style.fontWeight = weight;
  btn.style.padding = padding;
  btn.style.borderRadius = radius;
}

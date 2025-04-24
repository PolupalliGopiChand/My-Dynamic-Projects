const buttons = {
  stop: {
    btn: document.getElementById("stopButton"),
    light: document.getElementById("stopLight"),
    color: "#cf1124"
  },
  ready: {
    btn: document.getElementById("readyButton"),
    light: document.getElementById("readyLight"),
    color: "#f7c948"
  },
  go: {
    btn: document.getElementById("goButton"),
    light: document.getElementById("goLight"),
    color: "#199473"
  }
};

function switchLight(active) {
  for (const state in buttons) {
    const { btn, light, color } = buttons[state];
    const isActive = state === active;
    btn.style.backgroundColor = isActive ? color : "#1f1d41";
    light.style.backgroundColor = isActive ? color : "#4b5069";
  }
}

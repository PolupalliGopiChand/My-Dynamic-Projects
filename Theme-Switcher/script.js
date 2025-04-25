let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

themeUserInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let userInputValue = themeUserInputEl.value.trim().toUpperCase();
        themeUserInputEl.value = userInputValue;

        if (userInputValue === "LIGHT") {
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
            headingEl.style.color = "#014d40";
        } else if (userInputValue === "DARK") {
            bgContainerEl.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
            headingEl.style.color = "#ffffff";
        } else {
            alert("Enter a valid theme");
        }
    }
});

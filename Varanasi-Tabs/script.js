// Cache DOM Elements
const aboutButtonElement = document.getElementById("aboutButton");
const timeToVisitButtonElement = document.getElementById("timeToVisitButton");
const attractionsButtonElement = document.getElementById("attractionsButton");

const aboutTabElement = document.getElementById("aboutTab");
const timeToVisitTabElement = document.getElementById("timeToVisitTab");
const attractionsTabElement = document.getElementById("attractionsTab");

// Initially hide all tabs except About
timeToVisitTabElement.classList.add("d-none");
attractionsTabElement.classList.add("d-none");

// Show the specified tab
function showTab(tab) {
    // Hide all tabs
    aboutTabElement.classList.add("d-none");
    timeToVisitTabElement.classList.add("d-none");
    attractionsTabElement.classList.add("d-none");

    // Remove selected button style from all buttons
    aboutButtonElement.classList.remove("selected-button");
    timeToVisitButtonElement.classList.remove("selected-button");
    attractionsButtonElement.classList.remove("selected-button");

    // Show the clicked tab and add the selected style to the button
    if (tab === 'about') {
        aboutTabElement.classList.remove("d-none");
        aboutButtonElement.classList.add("selected-button");
    } else if (tab === 'timeToVisit') {
        timeToVisitTabElement.classList.remove("d-none");
        timeToVisitButtonElement.classList.add("selected-button");
    } else if (tab === 'attractions') {
        attractionsTabElement.classList.remove("d-none");
        attractionsButtonElement.classList.add("selected-button");
    }
}

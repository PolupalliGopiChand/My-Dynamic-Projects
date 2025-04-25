// Map of pet types to their respective image URLs
const petsImageUrls = {
    dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    parrot: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    spider: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    rabbit: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};

// Select DOM elements
const petSelectEl = document.getElementById("petSelect");
const petImgEl = document.getElementById("petImg");

// Update image based on selected pet
petSelectEl.addEventListener("change", function() {
    const selectedPet = petSelectEl.value;
    petImgEl.src = petsImageUrls[selectedPet];
    petImgEl.alt = selectedPet.charAt(0).toUpperCase() + selectedPet.slice(1); // Update alt text
});

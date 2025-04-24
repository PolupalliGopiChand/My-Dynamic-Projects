const puppyImage = document.getElementById("puppyImage");
const likeIcon = document.getElementById("likeIcon");
const likeButton = document.getElementById("likeButton");

let isLiked = false;

function toggleLike() {
  isLiked = !isLiked;

  puppyImage.src = isLiked
    ? "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png"
    : "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";

  likeIcon.style.color = isLiked ? "#0967d2" : "#cbd2d9";
  likeButton.style.color = isLiked ? "#ffffff" : "#9aa5b1";
  likeButton.style.backgroundColor = isLiked ? "#0967d2" : "#cbd2d9";
  likeButton.textContent = isLiked ? "Liked" : "Like";
}

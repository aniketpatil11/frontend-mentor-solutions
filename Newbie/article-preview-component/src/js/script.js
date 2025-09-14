const shareButton = document.querySelector(".blog-author .share-button");
const shareInfo = document.querySelector(".share-info");
const closeButton = document.querySelector(".share-info .share-button");

shareButton.addEventListener("click", showShareInfo);
closeButton.addEventListener("click", closeShareInfo);

function showShareInfo(e) {
  shareInfo.classList.toggle("active");
}

function closeShareInfo(e) {
  shareInfo.classList.remove("active");
}

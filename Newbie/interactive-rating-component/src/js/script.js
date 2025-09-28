const ratingButtons = document.querySelectorAll(".btn");
const form = document.querySelector("form");
const displayRating = document.querySelector(".rating-display");

let ratingValue = "";

const userRatingSubmission = document.querySelector(".submit");

function setValue(userRating) {
  ratingValue = userRating;
}

function storeRating() {
  localStorage.setItem("userRating", ratingValue);
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
} else {
  console.log("Form not found");
}

if (ratingButtons.length) {
  ratingButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      ratingButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      setValue(e.target.innerText);
    });
  });
}

if (userRatingSubmission) {
  userRatingSubmission.addEventListener("click", (e) => {
    e.preventDefault();
    storeRating();
    console.log("hello");
    window.location.href = "./pages/thank-you.html";
  });
}

if (displayRating) {
  const selectedUserRating = localStorage.getItem("userRating");
  displayRating.innerText = `You selected ${selectedUserRating} out of 5`;
}

const form = document.querySelector("#form");
const emailAddress = document.querySelector("#email-address");
const errorMessage = document.querySelector("#form small");

function checkEmail(email) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
}

emailAddress.addEventListener("keydown", () => {
  errorMessage.classList.remove("error");
  emailAddress.classList.remove("invalid-email");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkEmail(emailAddress.value)) {
    window.location.href = "./src/pages/success.html";
  } else {
    errorMessage.classList.add("error");
    emailAddress.classList.add("invalid-email");
  }
});

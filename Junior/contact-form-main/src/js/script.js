const form = document.getElementById("contact-us");
const submitButton = document.querySelector('button[type="submit"]');
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="radio"], input[type="checkbox"], textarea'
);

inputs.forEach((input) => {
  if (
    input.type === "text" ||
    input.tagName === "TEXTAREA" ||
    input.type === "email"
  ) {
    input.addEventListener("input", () => {
      input.nextElementSibling.classList.remove("error");
    });
  } else if (input.type === "radio") {
    input.addEventListener("click", () => {
      const isAnyRadioChecked = document.querySelector(
        `input[name="query_type"]:checked`
      );
      if (isAnyRadioChecked) {
        input
          .closest("fieldset")
          .querySelector(".error-message")
          .classList.remove("error");
      }
    });
  } else if (input.type === "checkbox") {
    input.addEventListener("click", (e) => {
      if (input.checked) {
        input
          .closest("fieldset")
          .querySelector(".error-message")
          .classList.remove("error");
      }
    });
  }
});
// textArea and query-type has to get parents fieldset
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (
      input.type === "text" ||
      input.tagName === "TEXTAREA" ||
      input.type === "email"
    ) {
      if (input.value.trim() === "") {
        input.nextElementSibling.classList.add("error");
      }
    } else if (input.type === "radio") {
      console.log("inside radio");
      const isAnyRadioChecked = document.querySelector(
        `input[name="query_type"]:checked`
      );

      if (!isAnyRadioChecked) {
        input.closest("fieldset").querySelector("small").classList.add("error");
      }
    } else if (input.type === "checkbox") {
      console.log("Checkbox");
      if (!input.checked) {
        console.log("Inside checkbox");
        input
          .closest("fieldset")
          .querySelector(".error-message")
          .classList.add("error");
      }
    }
  });
});

const selectedTip = document.querySelector("#select-tip");
const amount = document.getElementById("amount");
const customTip = document.getElementById("per-cust");
const percentageTips = document.querySelectorAll(".percentage-tip");
const numberOfPeople = document.querySelector("#number-of-people");
const resetButton = document.querySelector(".reset");
// Submit form prevention
const priceForm = document.querySelector("#price-form");
const displayForm = document.querySelector("#display-form");

// Display form properties
let tipPerPerson = document.querySelector(".tip + .price");
let totalPerPerson = document.querySelector(".total + .price");

let billValue = "";
let tipValue = "";
let peopleCount = "";

priceForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

displayForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

amount.addEventListener("keyup", function () {
  billValue = parseFloat(amount.value);
  populateUI(billValue, tipValue, peopleCount);
});

percentageTips.forEach((percentageTip) => {
  percentageTip.addEventListener("click", (e) => {
    percentageTips.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    const activeElement = document.querySelector(".percentage-tip.active");
    tipValue = parseInt(activeElement.innerText);
    populateUI(billValue, tipValue, peopleCount);
  });
});

customTip.addEventListener("click", (e) => {
  percentageTips.forEach((btn) => {
    btn.classList.remove("active");
  });
});

customTip.addEventListener("input", (e) => {
  tipValue = customTip.value;
  populateUI(billValue, tipValue, peopleCount);
});

numberOfPeople.addEventListener("keyup", (e) => {
  peopleCount = parseInt(numberOfPeople.value);
  populateUI(billValue, tipValue, peopleCount);
});

function populateUI(billValue, tipValue, peopleCount) {
  if (billValue && tipValue && peopleCount) {
    const tipAmount = (billValue * (tipValue / 100)) / peopleCount;
    const total = (billValue * (1 + tipValue / 100)) / peopleCount;
    tipPerPerson.innerText = `\$${tipAmount.toFixed(2)}`;
    totalPerPerson.innerText = `\$${total.toFixed(2)}`;
  }
}

resetButton.addEventListener("click", (e) => {
  amount.value = "";
  percentageTips.forEach((btn) => {
    btn.classList.remove("active");
  });
  customTip.value = "";
  numberOfPeople.value = "";
  tipPerPerson.innerText = `$0.00`;
  totalPerPerson.innerText = `$0.00`;
});

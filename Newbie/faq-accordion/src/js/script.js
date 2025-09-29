console.log("Hello world");

const questionAnswers = document.querySelectorAll(".q-and-a");

questionAnswers.forEach((qAndA) => {
  qAndA.addEventListener("click", (e) => {
    console.log(qAndA);
    qAndA.classList.toggle("active");
  });
});

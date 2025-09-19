const articles = document.querySelectorAll("article");
const activeState = document.querySelector("ul");
let timeRecords = "weekly";
activeState.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("hello");
    for (let i = 0; i < activeState.children.length; i++) {
      activeState.children[i].classList.remove("active");
    }
    console.log(e.target.innerText.toLowerCase());
    timeRecords = e.target.innerText.toLowerCase();
    e.target.classList.add("active");
    populateUI(timeRecords);
  }
});

async function populateUI(timeRecords = "weekly") {
  console.log("printing data");
  const data = await getData();
  console.log(data);
  articles.forEach((article) => {
    if (article.querySelector(".card__title h3")) {
      const articleHeading = article.querySelector(".card__title h3");
      const informationHours = article.querySelector(".information__hours");
      const informattionHoursPrevious = article.querySelector(
        ".information__previous"
      );
      data.forEach((item) => {
        // console.log(item.title.toLowerCase());
        if (
          item.title.toLowerCase() === articleHeading.innerText.toLowerCase()
        ) {
          let previousLabel;
          switch (timeRecords) {
            case "daily":
              previousLabel = "Yesterday";
              break;
            case "weekly":
              previousLabel = "Last Week";
              break;
            case "monthly":
              previousLabel = "Last Month";
              break;
            default:
              previousLabel = "Previous";
          }
          const currentTime = item.timeframes[timeRecords].current;
          const previousTime = item.timeframes[timeRecords].previous;
          informationHours.innerText = `${currentTime}hrs`;
          informattionHoursPrevious.innerText = `${previousLabel} - ${previousTime}hrs`;
        }
      });
    }
  });
}

function getData() {
  return fetch("./data.json")
    .then((response) => {
      // If we are unable to fetch the data from given link
      if (!response.ok) {
        throw new Error(`HTTP Error Code: ${response.status}`);
      }
      // response.json() is promise
      return response.json();
    })
    .then((data) => {
      //   console.log("Data is here", data);
      const timePeriod = "weekly";
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}
document.addEventListener("DOMContentLoaded", () => {
  populateUI();
});

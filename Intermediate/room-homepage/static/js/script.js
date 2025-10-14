const discoverPosts = [
  {
    title: `Discover innovative ways to decorate`,
    info: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
    image: "images/desktop-image-hero-1.jpg",
  },
  {
    title: `We are available all across the globe`,
    info: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    image: "images/desktop-image-hero-2.jpg",
  },
  {
    title: `Manufactured with the best materials`,
    info: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
    image: "images/desktop-image-hero-3.jpg",
  },
];

let count = 0;
const buttonRight = document.querySelector(".header__button--right");
const buttonLeft = document.querySelector(".header__button--left");
const discoverItem = document.querySelector(".header__discover--item1");

// Hero Image :
const heroImage = document.querySelector(".header__hero");
console.log(heroImage);

console.log(buttonRight);
buttonRight.addEventListener("click", (e) => {
  if (count < 2) {
    console.log(count);
    count += 1;
  } else {
    count = 2;
  }

  heroImage.style.backgroundImage = `url(${discoverPosts[count].image})`;
  discoverItem.querySelector("h2").innerText = discoverPosts[count].title;
  discoverItem.querySelector("p").innerText = discoverPosts[count].info;
});

buttonLeft.addEventListener("click", (e) => {
  if (count > 0) {
    console.log(count);
    count -= 1;
  } else {
    count = 0;
  }

  heroImage.style.backgroundImage = `url(${discoverPosts[count].image})`;
  discoverItem.querySelector("h2").innerText = discoverPosts[count].title;
  discoverItem.querySelector("p").innerText = discoverPosts[count].info;
});

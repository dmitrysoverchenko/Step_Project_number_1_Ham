"use strict";

//OUR SERVICES TABS

const ourServicesItem = document.querySelector(".our-services-menu");
const ourServicesDescription = document.querySelector(".osd-container");

ourServicesItem.addEventListener("click", function (event) {
  if (event.target.tagName != "LI") {
    return;
  }
  document
    .querySelector(".our-services-menu-item-link.active")
    .classList.remove("active");
  document
    .querySelector(".our-services-description.active")
    .classList.remove("active");
  event.target.classList.add("active");
  ourServicesDescription.children[
    +event.target.getAttribute("data-tab-title")
  ].classList.add("active");
});

//OUR WORK FILTER

const ourWork = document.querySelector(".our-amazing-work-menu");
let ourWorkItems = document.querySelectorAll(".our-amazing-work-grid-item");
// console.log(ourWorkItems);

ourWork.addEventListener("click", function (event) {
  if (event.target.tagName != "LI") {
    return;
  }
  document
    .querySelector(".our-amazing-work-menu-item-link.active")
    .classList.remove("active");
  event.target.classList.add("active");

  ourWorkItems.forEach((element) => {
    if (event.target.dataset.type === "all") {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
      if (event.target.dataset.type === element.dataset.type) {
        element.classList.remove("hidden");
      }
    }
  });
});

//OUR WORK LOAD ITEMS

function loadImage() {
  let sum = [];
  for (let i = 1; i < 13; i++) {
    if (i < 4) {
      let workItem = document.querySelector("#wordpress").cloneNode(true);
      workItem.children[0].src = `./img/our-amazing-work/our-amazing-work-loaded-${i}.jpg`;
      sum.push(workItem);
    }
    if (i >= 4 && i < 7) {
      let workItem = document.querySelector("#landing-pages").cloneNode(true);
      workItem.children[0].src = `./img/our-amazing-work/our-amazing-work-loaded-${i}.jpg`;
      sum.push(workItem);
    }

    if (i >= 7 && i < 10) {
      let workItem = document.querySelector("#graphic-desing").cloneNode(true);
      workItem.children[0].src = `./img/our-amazing-work/our-amazing-work-loaded-${i}.jpg`;
      sum.push(workItem);
    }

    if (i >= 10 && i < 13) {
      let workItem = document.querySelector("#web-design").cloneNode(true);
      workItem.children[0].src = `./img/our-amazing-work/our-amazing-work-loaded-${i}.jpg`;
      sum.push(workItem);
    }
  }
  mixImage(sum);
  return sum;
}

document.querySelector(".load-more").addEventListener("click", () => {
  document.querySelector(".our-amazing-work-grid").append(...loadImage());
  document.querySelector(".load-more").remove();
  ourWorkItems = document.querySelectorAll(".our-amazing-work-grid-item");
});

function mixImage(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//SLIDER

const slideItem = document.querySelector(".other-quotes");
const slideContent = document.querySelector(".slide-content-area");

console.log(slideItem);
console.log(slideContent);

slideItem.addEventListener("click", function (event) {
  if (event.target.tagName != "IMG") {
    return;
  }
  document
    .querySelector(".other-quote-author-photo.active")
    .classList.remove("active");
  document.querySelector(".slide-content.active").classList.remove("active");
  event.target.classList.add("active");
  slideContent.children[
    +event.target.getAttribute("data-position")
  ].classList.add("active");
});

const photoArea = document.querySelector(".photo-area");
console.log(photoArea);

document.querySelector(".button-forward").addEventListener("click", () => {
  if (
    +document
      .querySelector(".other-quote-author-photo.active")
      .getAttribute("data-position") >= 0 &&
    +document
      .querySelector(".other-quote-author-photo.active")
      .getAttribute("data-position") < 3
  ) {
    document.querySelector(".slide-content.active").classList.remove("active");
    let number = +document
      .querySelector(".other-quote-author-photo.active")
      .getAttribute("data-position");
    photoArea.children[number + 1].classList.add("active");
    slideContent.children[
      +photoArea.children[number + 1].getAttribute("data-position")
    ].classList.add("active");
    photoArea.children[number].classList.remove("active");
  }
});

document.querySelector(".button-back").addEventListener("click", () => {
  if (
    +document
      .querySelector(".other-quote-author-photo.active")
      .getAttribute("data-position") > 0 &&
    +document
      .querySelector(".other-quote-author-photo.active")
      .getAttribute("data-position") <= 3
  ) {
    document.querySelector(".slide-content.active").classList.remove("active");
    let number = +document
      .querySelector(".other-quote-author-photo.active")
      .getAttribute("data-position");
    photoArea.children[number - 1].classList.add("active");
    slideContent.children[
      +photoArea.children[number - 1].getAttribute("data-position")
    ].classList.add("active");
    photoArea.children[number].classList.remove("active");
  }
});

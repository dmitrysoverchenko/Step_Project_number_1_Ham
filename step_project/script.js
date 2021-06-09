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
const ourWorkItems = document.querySelectorAll(".our-amazing-work-grid-item");
console.log(ourWorkItems);

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

document.querySelector(".load-more").addEventListener("click", () => {
  const workItem = document
    .querySelector(".our-amazing-work-grid-item")
    .cloneNode(true);
  console.log(workItem);
  document.querySelector(".our-amazing-work-grid").append(workItem);
});

"use strict";

const btns = document.querySelector(".tabs");
const items = document.querySelector(".tabs-content");

btns.addEventListener("click", function (event) {
  if (event.target.tagName != "LI") {
    return;
  }
  document.querySelector(".tabs-title.active").classList.remove("active");
  document.querySelector(".tab-content.active").classList.remove("active");
  event.target.classList.add("active");
  items.children[+event.target.getAttribute("data-tab-title")].classList.add(
    "active"
  );
  console.log(event.target, event.target.tagName);
});

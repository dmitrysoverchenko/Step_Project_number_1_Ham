"use strict";

const btns = document.querySelectorAll(".tabs-title");
const items = document.querySelectorAll(".tab-content");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (event) {
    document.querySelector(".tabs-title.active").classList.remove("active");
    document.querySelector(".tab-content.active").classList.remove("active");
    event.target.classList.add("active");
    items[+event.target.getAttribute("data-tab-title")].classList.add("active");
  });
}

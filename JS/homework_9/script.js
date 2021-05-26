"use strict";

const btns = document.querySelector(".tabs");
const items = document.querySelector(".tabs-content");

console.log(btns, items, btns.children.length);

btns.addEventListener("click", function (event) {
  for (let i = 0; i < btns.children.length; i++) {
    btns.children[i].classList.remove("active");
    items.children[i].classList.remove("active");
    event.target.classList.add("active");
    items.children[+event.target.getAttribute("data-tab-title")].classList.add(
      "active"
    );
  }
  console.log(event.target);
});

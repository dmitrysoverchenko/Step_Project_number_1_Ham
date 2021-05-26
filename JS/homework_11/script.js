"use strict";

document.addEventListener("keydown", pressKey);
function pressKey(event) {
  let btns = document.querySelectorAll(".btn");
  console.log(event.code, event.key);
  btns.forEach(function (button) {
    button.classList.remove("active");
    if (button.textContent.toUpperCase() === event.key.toUpperCase()) {
      button.classList.add("active");
    }
  });
}

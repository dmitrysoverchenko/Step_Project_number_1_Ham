"use strict";

document.addEventListener("keydown", pressKey);
function pressKey(event) {
  let btns = document.querySelectorAll(".btn");
  console.log(btns);

  btns.forEach(function (button) {
    button.classList.remove("active");
  });

  if (event.key === "Enter") {
    enter.classList.add("active");
  }
  if (event.key === "s") {
    s.classList.add("active");
  }
  if (event.key === "e") {
    e.classList.add("active");
  }
  if (event.key === "o") {
    o.classList.add("active");
  }
  if (event.key === "n") {
    n.classList.add("active");
  }
  if (event.key === "l") {
    l.classList.add("active");
  }
  if (event.key === "z") {
    z.classList.add("active");
  }
}

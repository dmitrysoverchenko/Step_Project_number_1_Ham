"use strict";

console.log(localStorage.getItem("themeColor"));

document.querySelector(".change-button").addEventListener("click", () => {
  if (localStorage.getItem("themeColor") === "normal") {
    document.querySelector(".menu").classList.add("menu-2");
    localStorage.setItem("themeColor", "orange");
    console.log(localStorage.getItem("themeColor"));
  } else {
    localStorage.setItem("themeColor", "normal");
    document.querySelector(".menu").classList.remove("menu-2");
    console.log(localStorage.getItem("themeColor"));
  }
});

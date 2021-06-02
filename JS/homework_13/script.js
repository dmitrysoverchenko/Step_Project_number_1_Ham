"use strict";

console.log(localStorage.getItem("themeColor"));

document.querySelector(".change-button").addEventListener("click", () => {
  if (localStorage.getItem("themeColor") === "normal") {
    document.querySelector(".change-button").classList.add("menu-orange");
    document.querySelector(".menu").classList.add("menu-orange");
    document.querySelector(".footer-area").classList.add("footer-area-orange");
    localStorage.setItem("themeColor", "orange");
    console.log(localStorage.getItem("themeColor"));
  } else {
    localStorage.setItem("themeColor", "normal");
    document.querySelector(".change-button").classList.remove("menu-orange");
    document.querySelector(".menu").classList.remove("menu-orange");
    document
      .querySelector(".footer-area")
      .classList.remove("footer-area-orange");
    console.log(localStorage.getItem("themeColor"));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("themeColor") === "normal") {
    document.querySelector(".change-button").classList.remove("menu-orange");
    document.querySelector(".menu").classList.remove("menu-orange");
    document
      .querySelector(".footer-area")
      .classList.remove("footer-area-orange");
  } else {
    document.querySelector(".change-button").classList.add("menu-orange");
    document.querySelector(".menu").classList.add("menu-orange");
    document.querySelector(".footer-area").classList.add("footer-area-orange");
    localStorage.setItem("themeColor", "orange");
  }
});

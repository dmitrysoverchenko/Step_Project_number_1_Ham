"use strict";

document.querySelector(".change-button").addEventListener("click", () => {
  if (localStorage.getItem("themeColor") === "normal") {
    document.querySelector(".menu").style.backgroundColor = "#ffa24b";
    document.querySelector(".footer-area").style.backgroundColor = "#ffa24b";
    document.querySelector(".change-button").style.backgroundColor = "#ffa24b";
    localStorage.setItem("themeColor", "color");
  } else {
    document.querySelector(".menu").style.backgroundColor = "#35444f";
    document.querySelector(".footer-area").style.backgroundColor =
      "rgba(99, 105, 110, 0.48)";
    document.querySelector(".change-button").style.backgroundColor = "#ffffff";
    localStorage.setItem("themeColor", "normal");
  }
});

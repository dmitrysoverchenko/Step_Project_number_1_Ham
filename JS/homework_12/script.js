"use strict";

const images = document.querySelectorAll(".image-to-show");
let position = 1; //0,1,2,3

const stopBtn = document.querySelector(".stop");
const startBtn = document.querySelector(".start");

let slider = setInterval(showImage, 3000);

function showImage() {
  console.log(position); //ok
  images.forEach((element, index) => {
    console.log(element); //ok
    element.classList.remove("show");
    element.classList.add("hidden");
    if (index === position) {
      element.classList.replace("hidden", "show");
    }
  });
  if (position < images.length - 1) {
    position++;
  } else position = 0;
}

stopBtn.addEventListener("click", () => {
  clearInterval(slider);
});

startBtn.addEventListener("click", () => {
  slider = setInterval(showImage, 3000);
});

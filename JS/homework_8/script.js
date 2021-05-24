"use strict";

const inputArea = document.createElement("input");
inputArea.type = "number";

const labelArea = document.createElement("label");
labelArea.innerText = "Price: ";

const spanArea = document.createElement("div");

labelArea.append(inputArea);
document.body.append(labelArea);
document.body.prepend(spanArea);

inputArea.onfocus = function () {
  this.classList.add("green-line");
};

let errorText = document.createElement("p");
errorText.innerText = "";
document.body.append(errorText);

let priceSpan = document.createElement("p");
let closeSpan = document.createElement("span");

closeSpan.innerText = "X";
priceSpan.classList.add("span");
closeSpan.classList.add("close");

inputArea.onblur = function () {
  this.classList.remove("green-line");
  let priceValue = inputArea.value;

  if (+priceValue < 0 || priceValue === "") {
    this.classList.add("red-line");
    errorText.innerText = "Enter the correct value, please";
    priceSpan.remove();
  } else {
    this.classList.remove("red-line");
    priceSpan.innerText = `Current price is ${priceValue}`;
    spanArea.append(priceSpan);
    priceSpan.append(closeSpan);
    errorText.innerText = "";
  }

  closeSpan.addEventListener("click", onclick);
  function onclick() {
    priceSpan.remove();
    inputArea.value = "";
  }
};

"use strict";

const inputArea = document.createElement("input");
inputArea.type = "text";

const labelArea = document.createElement("label");
labelArea.innerText = "Price: ";

const spanArea = document.createElement("div");

labelArea.append(inputArea);
document.body.append(labelArea);
document.body.prepend(spanArea);

inputArea.onfocus = function () {
  this.classList.add("green-line");
};

inputArea.onblur = function () {
  this.classList.remove("green-line");
  let priceValue = inputArea.value;
  let priceSpan = document.createElement("p");
  let closeSpan = document.createElement("span");

  closeSpan.innerText = "X";
  priceSpan.classList.add("span");
  closeSpan.classList.add("close");

  if (+priceValue < 0) {
    this.classList.add("red-line");
    const errorText = document.createElement("p");
    errorText.innerText = "Enter the correct value, please";
    document.body.append(errorText);
  } else {
    this.classList.remove("red-line");
    priceSpan.innerText = `Current price is ${priceValue}`;
    spanArea.append(priceSpan);
    priceSpan.append(closeSpan);
  }

  closeSpan.addEventListener("click", onclick);
  function onclick() {
    priceSpan.remove();
    inputArea.value = "";
  }
};

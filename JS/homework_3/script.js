"use strict";

let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");
let mathOperation = prompt("Enter math operation (+ or - or * or /");

while (
  isNaN(firstNumber) ||
  firstNumber === "" ||
  firstNumber === null ||
  isNaN(secondNumber) ||
  secondNumber === "" ||
  secondNumber === null
) {
  firstNumber = prompt("Enter first number", firstNumber);
  secondNumber = prompt("Enter second number", secondNumber);
}

const calc = function (firstNumber, secondNumber, mathOperation) {
  let result;
  if (mathOperation === "*") {
    result = +firstNumber * +secondNumber;
    console.log(result);
    return result;
  } else if (mathOperation === "/") {
    result = +firstNumber / +secondNumber;
    console.log(result);
    return result;
  } else if (mathOperation === "+") {
    result = +firstNumber + +secondNumber;
    console.log(result);
    return result;
  } else if (mathOperation === "-") {
    result = +firstNumber - +secondNumber;
    console.log(result);
    return result;
  } else {
    console.log(`Sorry, "` + mathOperation + `" is not math operation`);
  }
};

calc(firstNumber, secondNumber, mathOperation);

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

const calc = function (n1, n2, operation) {
  switch (operation) {
    case "*":
      return +n1 * +n2;
      break;
    case "/":
      return +n1 / +n2;
      break;
    case "+":
      return +n1 + +n2;
      break;
    case "-":
      return +n1 - +n2;
    default:
      return console.log(`Sorry, "` + operation + `" is not a math operation`);
  }
};

console.log(calc(firstNumber, secondNumber, mathOperation));

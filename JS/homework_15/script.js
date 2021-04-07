"use strict";

let number = prompt("Enter your number");

while (isNaN(number) || number === "" || number === null) {
  number = prompt("Enter your number", number);
}

const factorial = function (number) {
  if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

alert(`factorial of your number is ` + factorial(number));

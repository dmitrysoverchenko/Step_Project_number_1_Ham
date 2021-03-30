"use strict";

// base task

// let userNumber = prompt("Enter your number");
// let numbersFound = false;

// if (Number.isInteger(+userNumber)) {
// for (let i = 0; i <= userNumber; i++) {
//     if (i % 5 === 0) {
//       numbersFound = true;
//       console.log(i);
//     }
//   }
//   if (!numbersFound) {
//     console.log(`Sorry, no numbers`);
//   }
// } else {
//   console.log(`not int`);
// }

//task1
// let userNumber = prompt("Enter your number");
// let numbersFound = false;

// while (
//   Number.isInteger(+userNumber) === false ||
//   isNaN(+userNumber) ||
//   userNumber === "" ||
//   userNumber === null
// ) {
//   userNumber = prompt("Enter your number");
// }
// for (let i = 1; i <= userNumber; i++) {
//   if (i % 5 === 0) {
//     numbersFound = true;
//     console.log(i);
//   }
// }
// if (!numbersFound) {
//   console.log(`Sorry, no numbers`);
// }

//task2

let mNumber = prompt("Enter m number");
let nNumber = prompt("Enter n number");

while (
  Number.isInteger(+mNumber) === false ||
  isNaN(+mNumber) ||
  mNumber === "" ||
  mNumber === null ||
  Number.isInteger(+nNumber) === false ||
  isNaN(+nNumber) ||
  nNumber === "" ||
  nNumber === null
) {
  alert(`One of your numbers is not an integer`);
  mNumber = prompt("Enter m number");
  nNumber = prompt("Enter n number");
}

mark: for (let i = mNumber; i <= nNumber; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue mark;
  }
  console.log(i);
}

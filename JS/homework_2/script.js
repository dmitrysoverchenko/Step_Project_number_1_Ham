"use strict";

// base task

// let userNumber = prompt("Enter your number");
// let numbersFound = false;

// if (Number.isInteger(+userNumber)) {
//   for (let i = 0; i <= userNumber; i++) {
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

let userNumber = prompt("Enter your number");
let numbersFound = false;

while (
  Number.isInteger(+userNumber) === false ||
  isNaN(+userNumber) ||
  userNumber === "" ||
  userNumber === null
) {
  userNumber = prompt("Enter your number");
}
for (let i = 1; i <= userNumber; i++) {
  if (i % 5 === 0) {
    numbersFound = true;
    console.log(i);
  }
}
if (!numbersFound) {
  console.log(`Sorry, no numbers`);
}

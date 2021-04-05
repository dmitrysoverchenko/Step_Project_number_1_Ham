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

while (
  Number.isInteger(+userNumber) === false ||
  isNaN(userNumber) ||
  userNumber === "" ||
  userNumber === null
) {
  userNumber = prompt("Enter your number");
}

if (userNumber > 4) {
  for (let i = 5; i <= userNumber; i += 5) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
} else {
  console.log(`Sorry, no numbers`);
}

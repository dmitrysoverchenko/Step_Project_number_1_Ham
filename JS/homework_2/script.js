"use strict";

let userNumber = prompt("Enter your number");
let numbersFound = false;

for (let i = 0; i <= userNumber; i++) {
  if (i % 5 == 0) {
    numbersFound = true;
    console.log(i);
  }
}
if (!numbersFound) {
  console.log(`Sorry, no numbers`);
}

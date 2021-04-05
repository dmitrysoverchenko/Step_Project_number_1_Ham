"use strict";

let userName = prompt("Enter your name");
let userAge = prompt("Enter your age");

if (isNaN(+userAge) || userAge == "" || userAge == null || !userName) {
  userName = prompt("Enter your name", userName);
  userAge = prompt("Enter your age", userAge);
  if (isNaN(+userAge) || userAge == "" || userAge == null || !userName) {
    alert("Sorry, your Name/Age is no correct");
  }
}

if (userAge <= 17) {
  alert("You are not allowed to visit this website");
} else if (userAge >= 18 && userAge <= 22) {
  if (confirm("Are you sure you want to continue?")) {
    alert("Welcome, " + userName);
  } else {
    alert("You are not allowed to visit this website");
  }
} else if (userAge >= 23) {
  alert("Welcome, " + userName);
}

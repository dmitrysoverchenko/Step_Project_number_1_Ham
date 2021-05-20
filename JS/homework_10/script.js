"use strict";

document.getElementById("Input").addEventListener("click", clickPass);
function clickPass() {
  let input = document.getElementById("Password");
  if (input.type === "password") {
    document
      .getElementById("Input")
      .classList.replace("fa-eye", "fa-eye-slash");
    input.type = "text";
  } else {
    input.type = "password";
    document
      .getElementById("Input")
      .classList.replace("fa-eye-slash", "fa-eye");
  }
}

document.getElementById("repeatInput").addEventListener("click", repeatPass);
function repeatPass() {
  let input = document.getElementById("repeatPassword");
  if (input.type === "password") {
    document
      .getElementById("repeatInput")
      .classList.replace("fa-eye", "fa-eye-slash");
    input.type = "text";
  } else {
    input.type = "password";
    document
      .getElementById("repeatInput")
      .classList.replace("fa-eye-slash", "fa-eye");
  }
}

document.getElementById("btn").addEventListener("click", checkPass);
function checkPass() {
  if (Password.value === repeatPassword.value) {
    alert("You are welcome");
  } else {
    error.innerText = "Нужно ввести одинаковые значения";
  }
}

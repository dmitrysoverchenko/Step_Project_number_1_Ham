"use strict";

document.getElementById("Input").addEventListener("click", clickPass);
document.getElementById("repeatInput").addEventListener("click", clickPass);

function clickPass(event) {
  console.log(event.target);
  if (event.target.previousElementSibling.type === "password") {
    event.target.classList.replace("fa-eye", "fa-eye-slash");
    event.target.previousElementSibling.type = "text";
  } else {
    event.target.previousElementSibling.type = "password";
    event.target.classList.replace("fa-eye-slash", "fa-eye");
  }
}

document.getElementById("btn").addEventListener("click", checkPass);
function checkPass(event) {
  if (
    Password.value === repeatPassword.value &&
    Password.value !== "" &&
    repeatPassword.value !== ""
  ) {
    alert("You are welcome");
    document.getElementById("error").innerText = "";
  } else {
    document.getElementById("error").innerText =
      "Нужно ввести одинаковые значения";
  }
  event.preventDefault();
}

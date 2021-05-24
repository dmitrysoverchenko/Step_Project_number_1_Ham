"use strict";

document.getElementById("Password").addEventListener("click", clickPass);
document.getElementById("repeatPassword").addEventListener("click", clickPass);

function clickPass(event) {
  if (event.target.type === "password") {
    event.target.nextElementSibling.classList.replace("fa-eye", "fa-eye-slash");
    event.target.type = "text";
  } else {
    event.target.type = "password";
    event.target.nextElementSibling.classList.replace("fa-eye-slash", "fa-eye");
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

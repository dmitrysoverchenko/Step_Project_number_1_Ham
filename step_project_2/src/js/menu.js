document
  .querySelector(".menu__mobile")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".menu__mobile").classList.toggle("active");
    document.querySelector(".menu").classList.toggle("active");
  });

document
  .querySelector(".menu--mobile")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".menu--mobile").classList.toggle("active");
    document.querySelector(".menu").classList.toggle("active");
  });

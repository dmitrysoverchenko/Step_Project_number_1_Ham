document.querySelector(".menu--mobile").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".menu--mobile").classList.toggle("active");
  document.querySelector(".menu").classList.toggle("active");
});

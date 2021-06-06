"use strict";

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    $("#button").addClass("show");
  } else {
    $("#button").removeClass("show");
  }
});

$("#button").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, "3000");
});

$("#toggle").click(function () {
  $("#hidden-section").slideToggle("slow");
});

$(document).ready(function () {
  $(".menu-link").on("click", function () {
    let anchor = $(this);
    $("html, body").animate(
      {
        scrollTop: $(anchor.attr("href")).offset().top,
      },
      1000
    );
    e.preventDefault();
  });
});

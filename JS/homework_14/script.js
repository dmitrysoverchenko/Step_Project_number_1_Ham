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

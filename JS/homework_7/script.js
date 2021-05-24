"use strict";

function showList(list, tag) {
  let parent = document.createElement(tag);
  let outerArray = [];
  outerArray = list.map((listItem) => `<li>${listItem}</li>`).join("");
  if (typeof tag === "undefined") {
    document.body.innerHTML = `<ul>${outerArray}</ul>`;
  } else {
    parent.innerHTML = `<ul>${outerArray}</ul>`;
    document.body.append(parent);
  }
}
// showList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], "div");
showList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]);

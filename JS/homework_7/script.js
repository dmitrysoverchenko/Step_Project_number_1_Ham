"use strict";

function showList(list, tag) {
  let parent = document.createElement(tag);
  let outerArray = [];
  outerArray = list.map((listItem) => `<li>${listItem}</li>`).join("");
  parent.innerHTML = `<ul>${outerArray}</ul>`;
  document.body.append(parent);
}
showList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], "div");

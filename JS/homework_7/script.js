"use strict";

// const parent = document.getElementById("parent");

// function showList(list, parent = document.body) {
//   let outerArray = list.map((listItem) => `<li>${listItem}</li>`).join("");
//   parent.innerHTML = `<ul>${outerArray}</ul>`;
// }

// showList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], parent);

const parent = document.createElement("div");
document.body.append(parent);

function showList(list, parent = document.body) {
  let outerArray = list.map((listItem) => `<li>${listItem}</li>`).join("");
  parent.innerHTML = `<ul>${outerArray}</ul>`;
}

showList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"], parent);

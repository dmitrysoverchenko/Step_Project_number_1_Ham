"use strict";

function showList(list) {
  let innerArray = [];
  let outerArray = [];
  for (let key in list) {
    innerArray.push(list[key]);
    outerArray = innerArray.map((listItem) => `<li>${listItem}</li>`).join("");
  }
  document.body.innerHTML = `<ul>${outerArray}</ul>`;
}
showList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]);

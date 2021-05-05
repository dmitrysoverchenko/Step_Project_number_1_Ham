"use strict";

const arr = ["start", "world", 23, "23", null, true, false, "end", {}];
const type = "boolean";
const filterBy = (arr, type) => arr.filter((item) => typeof item !== type);
console.log(filterBy(arr, type));

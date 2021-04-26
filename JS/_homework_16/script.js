"use strict";

let number = prompt("Enter n-number of Fibonacci sequence");

while (isNaN(number) || number === "" || number === null) {
  number = prompt("Enter n-number of Fibonacci sequence", number);
}

const fibonacci = function (f0, f1, fn) {
  if (fn == f0) {
    return f0;
  } else if (fn == f1) {
    return f1;
  } else {
    return fibonacci(f0, f1, fn - 1) + fibonacci(f0, f1, fn - 2);
  }
};
fibonacci(1, 3, number);

console.log(fibonacci(1, 3, number));

alert(`n-number of Fibonacci sequence is ` + fibonacci(1, 3, number));

"use strict";

let n = prompt("Enter n-number of Fibonacci sequence");

while (isNaN(n) || n === "" || n === null) {
  n = prompt("Enter n-number of Fibonacci sequence", n);
}

const fibonacci = function (f0, f1, n) {
  if (n == f0) {
    return f0;
  } else if (n == f1) {
    return f1;
  } else {
    return fibonacci(f0, f1, n - 1) + fibonacci(f0, f1, n - 2);
  }
};
fibonacci(0, 1, n);

console.log(fibonacci(0, 1, n));

alert(`n-number of Fibonacci sequence is ` + fibonacci(0, 1, n));

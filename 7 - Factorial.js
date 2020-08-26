const factorial = (n) => (n <= 0 ? 1 : n * factorial(n - 1));

console.log(factorial(0) === 1);
console.log(factorial(1) === 1);
console.log(factorial(4) === 24);
console.log(factorial(7) === 5040);
console.log(factorial(17) === 355687428096000);

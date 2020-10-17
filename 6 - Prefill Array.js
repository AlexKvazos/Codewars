/**
 * @see https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript
 */

// solution
function prefill(n, v) {
  if (n === 0 || n === "0") return [];
  if (isNaN(parseInt(n)) || n % 1 !== 0 || n < 0)
    throw new TypeError(`${n} is invalid`);
  return new Array(n).fill(v);
}

// tests
console.log(prefill(3, 1), [1, 1, 1]);
console.log(prefill(2, "abc"), ["abc", "abc"]);
console.log(prefill("1", 1), [1]);
console.log(prefill(3, prefill(2, "2d")), [
  ["2d", "2d"],
  ["2d", "2d"],
  ["2d", "2d"],
]);
var errorThrown = false;
try {
  prefill("xyz", 1);
} catch (e) {
  console.log(e.name, "TypeError");
  console.log(e.message, "xyz is invalid");
  errorThrown = true;
}
console.log(errorThrown, "prefill did not throw an error");

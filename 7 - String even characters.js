const evenChars = (str) =>
  str.length < 2 || str.length > 100
    ? "invalid string"
    : Array.from(str).filter((_, index) => (index + 1) % 2 === 0);

console.log(evenChars("a"), "invalid string");
console.log(evenChars("abcdefghijklm"), ["b", "d", "f", "h", "j", "l"]);

function encryptThis(phrase) {
  return phrase
    .split(" ")
    .map((str) => {
      const result = Array.from(str);
      if (str.length > 1) {
        const last = str[str.length - 1];
        const second = str[1];
        result[1] = last;
        result[str.length - 1] = second;
      }
      result.splice(0, 1, str.charCodeAt(0));

      return result.join("");
    })
    .join(" ");
}

console.log(encryptThis("Hello"), "72olle");
console.log(encryptThis("good"), "103doo");
console.log(encryptThis("hello world"), "104olle 119drlo");

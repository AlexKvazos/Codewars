const crypto = require("crypto");

const passHash = (str) => {
  return crypto.createHash("md5").update(str).digest("hex");
};

console.log(passHash("hello world"));

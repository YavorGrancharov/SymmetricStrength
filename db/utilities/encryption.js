const crypto = require("crypto");

module.exports = {
  generalSalt: () => {
    return crypto.randomBytes(128).toString("base64");
  },
  generateHashPassword: (salt, password) => {
    return crypto.createHmac("sha256", salt).update(password).digest("hex");
  },
};

const path = require("path");
let rootPath = path.normalize(path.join(__dirname, "/../../"));

module.exports = {
  development: {
    rootPath: rootPath,
    db:
      process.env.MONGODB_URI ||
      "mongodb+srv://yavor:$agittarius791202@ascrmi-kzgsb.mongodb.net/test?retryWrites=true&w=majority",
    port: process.env.PORT || 3000,
  },
  staging: {},
  production: {
    port: process.env.PORT,
    db: process.env.MONGODB_URI,
  },
};

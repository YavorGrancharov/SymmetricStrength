const mongoose = require("mongoose");
const User = require("../models/User");

mongoose.Promise = global.Promise;

module.exports = (settings) => {
  mongoose.set("useCreateIndex", true);
  mongoose.connect(settings.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4,
  });
  let db = mongoose.connection;

  db.once("open", (err) => {
    if (err) {
      throw err;
    }

    console.log("MongoDB ready!");

    User.seedAdminUser();
  });

  db.on("error", (err) => console.log(`Database error: ${err}`));
};

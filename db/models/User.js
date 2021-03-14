const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ecnryption = require("../utilities/encryption");

let userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
      type: String,
      match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      minlength: 6,
      maxlength: 16,
    },
    repeatPassword: {
      type: String,
      match: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
      minlength: 6,
      maxlength: 16,
    },
    salt: String,
    hashedPass: String,
    avatar: {
      type: String,
      trim: true,
    },
    roles: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.method({
  authenticate: function (password) {
    return (
      ecnryption.generateHashPassword(this.salt, password) === this.hashedPass
    );
  },
});

let User = mongoose.model("User", userSchema);

module.exports = User;
module.exports.seedAdminUser = () => {
  User.find({}).then((user) => {
    if (user.length > 0) {
      return;
    }

    let salt = ecnryption.generalSalt();
    let hashedPass = ecnryption.generateHashPassword(salt, "12345678");

    User.create({
      name: "noname",
      username: "user",
      email: "user@symmetric.co",
      salt: salt,
      hashedPass: hashedPass,
      roles: ["Admin"],
    });
  });
};

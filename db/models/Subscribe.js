const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let subscribeSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
  },
  {
    timestamps: true,
  }
);

let Subscribe = mongoose.model("Subscribe", subscribeSchema);

module.exports = Subscribe;

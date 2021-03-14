const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let messageSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    message: {
      type: String,
      minlength: 6,
      maxlength: 150,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

let Message = mongoose.model("Message", messageSchema);

module.exports = Message;

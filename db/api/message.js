const Message = require('../models/Message');

async function sendMessage(msg) {
    console.log(msg)
  const message = Message.create(msg);
  return message;
}

module.exports = {
  sendMessage,
};

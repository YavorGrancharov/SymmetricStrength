const User = require("../models/User");

async function getAll() {
  return await User.find({}).lean();
}

module.exports = {
  getAll,
};

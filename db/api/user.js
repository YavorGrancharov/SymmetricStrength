const User = require('mongoose').model('User');

async function getAll() {
  return await User.find({}).lean();
}

async function getCurrentlyLoggedIn(username) {
  return User.findOne({ username: { $eq: username } }).lean();
}

async function getUserByUsername(username) {
  return User.findOne({ username: { $eq: username } }).lean();
}

async function getUserByEmail(email) {
  return User.findOne({ email: email }).lean();
}

module.exports = {
  getAll,
  getCurrentlyLoggedIn,
  getUserByUsername,
  getUserByEmail
};

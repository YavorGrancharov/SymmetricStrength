const encryption = require("../utilities/encryption");
const User = require("mongoose").model("User");
const userApi = require("../api/user");
const path = require("path");
const fs = require("fs");
const ObjectId = require("mongoose").Types.ObjectId;

const _this = (module.exports = {
  all: async (req, res) => {
    const user = await userApi.getAll();
    console.log(user)
    res.json(user);
  },
});

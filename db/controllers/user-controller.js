const encryption = require("../utilities/encryption");
const userApi = require("../api/user");
const path = require("path");
const fs = require("fs");
const ObjectId = require("mongoose").Types.ObjectId;

const _this = (module.exports = {
  all: async (req, res) => {
    const user = await userApi.getAll();
    res.json(user);
  },
});

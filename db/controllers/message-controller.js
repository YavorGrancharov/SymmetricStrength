const messageApi = require('../api/message');

const _this = (module.exports = {
  sendMsg: async (req, res) => {
    const body = req.body;
    await messageApi.sendMessage(body);
    res.sendStatus(204);
  },
});

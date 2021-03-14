const controllers = require('../controllers/consolidator');

module.exports = (app) => {
  app.get('/api/user', controllers.user.all);
  app.post('/api/message', controllers.message.sendMsg);
};

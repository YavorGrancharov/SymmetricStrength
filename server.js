require("dotenv").config();
let env = process.env.NODE_ENV || "development";
var express = require('express');
var app = express();

let settings = require("./db/config/settings")[env];

const router = express.Router();
app.use('/api', router);

require("./db/config/database")(settings);
require("./db/config/express")(app);
require("./db/config/routes")(app);

app.all('/*', function (req, res, next) {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,HEAD,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.sendStatus(200);
  return next();
});

app.listen(process.env.PORT || 8080);

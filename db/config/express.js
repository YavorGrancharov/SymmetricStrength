const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

module.exports = (app) => {
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(
    session({
      secret: '$agittarius791202',
      resave: false,
      rolling: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 2000000,
      },
    })
  );
  app.use(compression());
//   app.use(passport.initialize());
//   app.use(passport.session());

  app.use(express.static(path.join(__dirname)));
  app.use('/styles', express.static(__dirname));
  app.use('/images', express.static(__dirname + '/images'));
  app.use('/scripts', express.static(__dirname + '/scripts'));

  // viewed at based directory http://localhost:8080/
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'views/symmetric_strength.html'));
  });

  // add other routes below
  app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + 'views/index.html'));
  });

  app.use((req, res, next) => {
    if (req.user) {
      res.locals.currentUser = req.user;
      res.locals.isAdmin = req.user.roles.indexOf('Admin') > -1;
    }

    next();
  });

  app.use(express.static('node_modules'));

  console.log('Express ready!');
};

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require("passport");
const compression = require('compression');
const cors = require('cors');

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
  app.use(passport.initialize());
  app.use(passport.session());

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

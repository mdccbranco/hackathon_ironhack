const express = require('express');
const admRouter = express.Router();
const passport = require('passport');
const User = require('../models/user');
// const uploadCloud = require('../middleware/cloudinary');

function checkRoles(role) {
  return function (req, res, next) {
    if (req.isAuthenticated() && req.user.role === role) {
      return next();
    }
    res.redirect('/login');
  };
}

admRouter.get('/admin',checkRoles('adm'), (req, res, next) => {
  res.render('admin')
});


admRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = admRouter;
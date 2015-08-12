var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();

//GET '/login'
function sessionNew  (req, res) {
  res.render('auth/login', {user : req.user});
};

//Post actually logs in
function sessionCreate (req,res) {passport.authenticate,
  'local'}
  {
    failureRedirect: '/login'
  }
  function sessionCreate (req, res, next) {
    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect('/');
    });
  };


//GET '/logout'
function sessionDelete  (req, res) {
  req.logout();
  res.redirect('/');
};

//GET /'secret'
function sessionShow (req, res) {isLoggedIn,
  res.render('secret', {user: req.user});
};

// middleware to make sure a user is logged in
function isLoggedIn (req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the login page
  res.redirect('/login');
}

// router.get('/login', function
//session create
// router.get('/logout', function

module.exports = {
  sessionNew: sessionNew,
  sessionCreate: sessionCreate,
  sessionShow:   sessionShow,
  sessionDelete:  sessionDelete
};

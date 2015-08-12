var express = require('express');
var passport = require('passport');
var User = require('../models/User');
var router = express.Router();


router.get('/login', function (req, res) {
  res.render('auth/login', {user : req.user});
});

router.post('/login', passport.authenticate(
  'local',
  {
    failureRedirect: '/login'
  }),
  function (req, res, next) {
    req.session.save(function (err) {
      if (err) return next(err);
      res.redirect('/');
    });
  }
);

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/secret', isLoggedIn, function (req, res) {
  res.render('secret', {user: req.user});
});

// middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the login page
  res.redirect('/login');
}

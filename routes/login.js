var express = require('express');
var router = express.Router();
var async =require('async');
var CompData=require ('../models/companymodel');
var passport = require('passport');
var flash    = require('connect-flash');

router.get('/',
  passport.authenticate('local'),
  function(req, res) {
    console.log("askcoas");
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/');
  });

  module.exports = router;

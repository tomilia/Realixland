var express = require('express');
var router = express.Router();
var CompData=require ('../models/companymodel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('id',{title:"ppp"});
});

module.exports = router;

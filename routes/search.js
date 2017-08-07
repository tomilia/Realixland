var express = require('express');
var router = express.Router();
var CompData=require ('../models/companymodel');

/* GET search page. */

router.post('/', function(req,res,next){
console.log(req.body.select2);
console.log(req.body.price);
console.log(req.body.example);
});

module.exports = router;

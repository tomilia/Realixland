var express = require('express');
var router = express.Router();
var CompData=require ('../models/companymodel');

/* GET home page. */
router.get('/', function(req,res,next){
CompData.find({}).exec(function(err,data){
  if(err){
    res.send('error has send');
  }
  else{
  res.render("index",{data:data});
}
})});

module.exports = router;

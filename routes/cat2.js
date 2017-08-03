var express = require('express');
var router = express.Router();
var CompData=require ('../models/companymodel');

/* GET home page. */
router.get('/', function(req,res,next){
CompData.find({categories:"a"}).exec(function(err,data){
  if(err){
    res.send('error has send');
  }
  else{
    console.log(data);
  res.render("cat2",{data:data});
}
})});

module.exports = router;

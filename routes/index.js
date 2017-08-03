var express = require('express');
var router = express.Router();
var CompData=require ('../models/companymodel');
/* GET home page. */
router.get('/', function(req,res,next){
CompData.find({}).exec(function(err,data){
CompData.find({categories:"a"}).exec(function(err,data2){
  CompData.find({categories:"b"}).exec(function(err,data3){
  if(err){
    res.send('error has send');
  }
  else{
  res.render("index",{ data : data, data2: data2,data3:data3 });
}
})

})
})


});

module.exports = router;

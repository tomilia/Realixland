var express = require('express');
var router = express.Router();
var CompData=require ('../models/companymodel');

/* GET search page. */

router.post('/', function(req,res,next){
  var company=req.body.company;
CompData.find( {$or:[
        {"company":{"$regex":company}},
        {"address":{"$regex":company}}
    ]}).exec(function(err,data){
  if(err){
    res.send('error has send');
  }
  else{
    console.log(data);
  res.render("search",{data:data});
}
})});

module.exports = router;

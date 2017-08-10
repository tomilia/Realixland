var express = require('express');
var app=express();
var router = express.Router();
var CompData=require ('../models/companymodel');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var xd=req.params.id;
  CompData.find({_id:req.params.id}).exec(function (err, docs) {
      if (err) {
          throw err;
      }
res.render("id",{data:docs});
      // do some stuff with docs & pass or directly pass it
      console.log(docs[0].company);
  });
  console.log('Request Id:', req.params.id);

});


module.exports = router;

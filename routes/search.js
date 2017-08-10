var express = require('express');
var router = express.Router();
var CompData=require ('../models/companymodel');

/* GET search page. */

router.get('/', function(req,res,next){
eval(require('locus'));
  CompData.find({categories:req.body.select2}).exec(function (err, docs) {
      if (err) {
          throw cb(err);
      }
res.render("search",{data:docs});
console.log(docs[0]);
      // do some stuff with docs & pass or directly pass it
  });
});

module.exports = router;

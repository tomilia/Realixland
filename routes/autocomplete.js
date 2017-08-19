var express = require('express');
var router = express.Router();
var CompData=require ('../models/companymodel');

/* GET search page. */

router.get('/', function(req,res,next){

  CompData.find({$or:[
          {"address":{"$regex":req.query.adress}}
      ]}).exec(function (err, docs) {
        if (err) {
            throw cb(err);
        }
  res.render("autocomplete",{data:docs});
});

      // do some stuff with docs & pass or directly pass it
});

module.exports = router;

var express = require('express');
var router = express.Router();
var async =require('async');
var CompData=require ('../models/companymodel');
/* GET home page. */
router.get('/', function(req,res,next){
  var queries=[];
  queries.push(function (cb) {
      CompData.find().exec(function (err, docs) {
          if (err) {
              throw cb(err);
          }

          // do some stuff with docs & pass or directly pass it
          cb(null, docs);
      });
  })
  queries.push(function (cb) {
      CompData.find({categories:"a"}).exec(function (err, docs) {
          if (err) {
              throw cb(err);
          }

          // do some stuff with docs & pass or directly pass it
          cb(null, docs);
      });
  })
  queries.push(function (cb) {
      CompData.find({categories:"b"}).exec(function (err, docs) {
          if (err) {
              throw cb(err);
          }

          // do some stuff with docs & pass or directly pass it
          cb(null, docs);
      });
  })
  async.parallel(queries, function(err, docs) {
      // if any query fails
      if (err) {
          throw err;
      }

      var res1 = docs[0]; // result of queries[0]
      var res2=docs[1];
      var res3=docs[2];
        res.render("index",{ data : res1, data2: res2,data3:res3});

  })


});
router.post('/searchtry', function (req, res) {
    // If it's not showing up, just use req.body to see what is actually being passed.
    console.log(req.body.select2);
    console.log(req.body.example);
});
module.exports = router;

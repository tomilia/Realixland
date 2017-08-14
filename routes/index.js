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
router.get('/search', function(req,res,next){

  var price=req.query.price;
  var newPrice = price.replace(/[^0-9\.]/g, ' ');
  var ress = newPrice.split(" ");
  console.log(ress[1],ress[5]);
  CompData.find({categories:req.query.categories}).exec(function (err, docs) {
        if (err) {
            throw cb(err);
        }
  res.render("search",{data:docs});
});

      // do some stuff with docs & pass or directly pass it
});
module.exports = router;

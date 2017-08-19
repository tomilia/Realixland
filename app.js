var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var cart = require('./routes/cart');
var search = require('./routes/search');
var autocomplete = require('./routes/autocomplete');
var id=require('./routes/id');
var mongoose=require('mongoose');

var ComData = require('./models/companymodel.js');
mongoose.connect('mongodb://localhost:27017/3112zone');
var app = express();
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

CompData = mongoose.model('ComData'); // Declare a new mongoose User
app.get('/autocomplete', function(req, res){
  var regex = new RegExp(req.query["company"], 'i');
  var query = CompData.find({company: regex}).limit(5);
     // Execute query in a callback and return users list
 query.exec(function(err, users) {
     if (!err) {
       var result = buildResultSet(users);
function buildResultSet(docs) {
 var result = [];
 for(var object in docs){
   result.push(docs[object]);
 }
 return result;
}
        // Method to construct the json result set
        res.send(result, {
           'Content-Type': 'application/json'
        }, 200);

        console.log(result);
     } else {
        res.send(JSON.stringify(err), {
           'Content-Type': 'application/json'
        }, 404);console.log("404");
     }
  });

});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/cart', cart);
app.use('/search', search);
app.use('/id', id);
app.use('/autocomplete', autocomplete);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

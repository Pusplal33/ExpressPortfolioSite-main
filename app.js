// installed 3rd party packages
var createError = require('http-errors');
var express = require('./config/express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('./config/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');

var app = express();

// import "mongoose" - required for DB Access
let mongoose = require('mongoose');
// getting the uri for mongoDb
let DB = require('./config/db.js');
// creating the connection
mongoose.connect(process.env.URI || DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});
console.log("Connecting to MongoDB...");
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=> {
  console.log("Connected to MongoDB!!!");
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // express -e

app.use(logger('dev'));

//Routes configuration
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 23, 2022
*/

let express = require('express');

//module for mongoDb
let config = require('./db');

//modules for Authentication
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

module.exports = function () {
    let app = express();

    // if (process.env.NODE_ENV === 'development') {
    //     app.use(morgan('dev'));
    // } else if (process.env.NODE_ENV === 'production') {
    //     compress();
    // }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    // set up express session
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // initialize flash
    app.use(flash());

    // initialize passport
    app.use(passport.initialize());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser(""));
    app.use(passport.session());

    // passport user configuration

    // create a user model instance
    let userModel = require('../models/user.model');
    let User = userModel;

    //implement a user authentication strategy
    passport.use(User.createStrategy());

    // serialize and deserialize the user info
    passport.serializeUser(userModel.serializeUser());
    passport.deserializeUser(userModel.deserializeUser());

    app.use(express.static('./public'));

    return app;
}
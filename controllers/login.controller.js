/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//Create the user model instance
let userModel = require('../models/user.model');
let user = userModel.User; // alias

exports.render = function (req, res) {

    // check if the user is already logged in
    if(!req.user){
        res.render('login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ""
        })
    } else {
        return res.redirect('/contact/list');
    }
}

exports.processLoginPage = function (req, res, next) {
    passport.authenticate('local',(err, user, info) => {
        // user error?
        if (err) {
            return next(err);
        }

        // is there a user login error?
        if (!user) {
            req.flash('loginMessage', 'username and/or password is incorrect');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            // server error?
            if (err) {
                return next(err);
            }
            return res.redirect('/contact/list');
        });
    })(req, res, next);
}

exports.processLogout = (req,res, next) => {
    req.logout();
    res.redirect('/');
}
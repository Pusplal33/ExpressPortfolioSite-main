/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { authenticate } = require('passport');
let passport = require('passport');

//Create the user model instance
let userModel = require('../models/user.model');
let user = userModel.User; // alias

exports.render = function (req, res) {
    // check if user is not already logged in
    if(!req.user) {
        res.render('register', {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ""
        })
    } else {
        return res.redirect('/');
    }
}

exports.processRegisterPage = function (req, res) {
    // instantiate a user object 
    let newUser = new userModel({
        username: req.body.username,
        // password: req.body.password,
        email: req.body.email,
        displayName: req.body.displayName
    });

    userModel.register(newUser, req.body.password, (err) =>{
        if(err) {
            console.log("Error: inserting new user");
            if(err.name == "UserExistsError") {
                req.flash(
                    'registerMessage',
                    'Registration Error:  user already exists!'
                );
                console.log('Registration Error:  user already exists!');
            }
            return res.render('register', {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ""
            });
        } else {

            //since the new user was registered, authenticate them and redirect
            return passport.authenticate('local')(req,res, () =>{
                res.redirect('/contact/list');
            });
        }
    });
}
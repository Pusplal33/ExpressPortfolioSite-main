/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//define the user model
//const user = require('../models/users.model.js');
//const userController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//
//router.post('/', userController.create).get('/', userController.list)
//
//router.get('/login', userController.getLoginPage)
//router.get('/register', userController.getRegisterPage)
//
//router.post('/login', userController.loginUser)
//router.post('/register', userController.registerUser)


module.exports = router;

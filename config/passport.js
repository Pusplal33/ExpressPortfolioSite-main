/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 23, 2022
*/

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('passport-local');
const localStrategy = passportLocal.Strategy;
const flash = require('connect-flash');
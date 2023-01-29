/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

var express = require('express');
var router = express.Router();


const index = require("../controllers/index.controller");
const aboutMe = require("../controllers/aboutme.controller");
const contact = require("../controllers/contact.controller");
const projects = require("../controllers/projects.controller");
const services = require("../controllers/services.controller");
const login = require("../controllers/login.controller");
const register = require("../controllers/registre.controller");


/* GET route home page. */
router.get('/',  index.render);

// GET route for display information about myself
router.get('/aboutme',  aboutMe.render);

// GET route for contac information 
router.get('/contactMe', contact.render);

// GET route for the projects worked on
router.get('/projects',  projects.render);

// GET route for the services offered page
router.get('/services',  services.render);

// GET route for loading the login page
router.get('/login',  login.render);
// POST route for login a user
router.post('/login',  login.processLoginPage);
// GET route for logout
router.get('/logout',  login.processLogout);

// GET route for loading the register page
router.get('/register',  register.render);
// POST route for register a user
router.post('/register',  register.processRegisterPage);


//fucntion that requirer authentication
function requireAuth(req,res,next) {
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}


module.exports = router;

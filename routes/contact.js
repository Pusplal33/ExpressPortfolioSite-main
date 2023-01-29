/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

const contact = require("../controllers/contact.controller");

/* GET route for contacts list. */
router.get('/list', requireAuth,  contact.findAllPage);

// POST route for saving contac information 
router.post('/add', contact.saveContactPage);

// POST route for editing contac information 
router.post('/:id', contact.updateContactPage);

// GET route for deleting a contact
router.get('/delete/:id', requireAuth, contact.deleteContact);

// GET reoute for display detail about a contactw
router.get('/:id', requireAuth, contact.findDetailPage);

//fucntion that requirer authentication
function requireAuth(req,res,next) {
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

module.exports = router;
/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Create the Contact model instance
let contactModel = require('../models/contac.model');
let contact = contactModel.Contact; // alias

//method to render the contactMe page
exports.render = function (req, res) {
    res.render('contactMe', {
        title: 'How to contact me',
        description: 'Here you can find some contact information',
        name: 'Bruna Donatoni',
        phone: '(647) 853-3412',
        email: 'libarde3@hotmail.com',
        linkedin: 'https://github.com/Brunalsdd',
        github: 'https://www.linkedin.com/in/bruna-ducceschi-donatoni-3386406b/'
    })
};

//method to render the insert of a contact
exports.saveContactPage = function (req, res, next) {

    contactModel.create({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        subject: req.body.subject
    }, function (error, newContact){
        if(error) return next(error);
        res.redirect('/');
    });

}

//method to render the insert of a contact
exports.updateContactPage = function (req, res, next) {
    var id = req.params.id;

    contactModel.findByIdAndUpdate(id,{
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        subject: req.body.subject
    }, function (error, contact){
        if(error) return next(error);
        res.redirect('/contact/list');
    });

}

//Method to render a list of contacts
exports.findAllPage = function(req,res,next) {
    // find all contacts in the contacts collection
    contactModel.find({}).sort({name: 1}).exec((err, contacts) => {
        if (err) {
            return console.error(err);
        }
        else {
            res.render('contactList', {
                title: 'Contacts',
                contacts: contacts
            });
        }
    });
}

//Method to render the delete of a contact
exports.deleteContact = function(req,res,next) {
    var id = req.params.id;
    contactModel.remove({_id: id}, function (err) {
        if (err) return next(err);
        res.redirect('/contact/list');
    });
}

//Method to render the details of an contact
exports.findDetailPage = function(req,res,next) {
    var id = req.params.id;
    contactModel.findById(id, function(err, contact) {
        if (err) return next(err);
        res.render('contactDetail', {
            title: "Contact information",
            contact: contact,
            edit: id // This renders the details view with edit book mode. (action attribute of the form)
        });
    } );
}
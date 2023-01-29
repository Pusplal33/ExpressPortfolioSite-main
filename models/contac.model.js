/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 26, 2022
*/

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
let Schema = mongoose.Schema;

let Contact = new Schema({
    name: {
        type: String,
        default: "",
        trim: true,
        required: "Name is required"
    },
    number: {
        type: Number,
        default: 0,
        trim: true,
        required: "Number is required"
    },
    email: {
        type: String,
        default: "",
        trim: true,
        required: "Email is required"
    },
    subject: {
        type: String,
        default: "",
        trim: true,
        required: "Subject is required"
    }
}, {
    collection: "contacts"
});

module.exports = mongoose.model('Contact', Contact);
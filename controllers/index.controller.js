/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

exports.render = function (req, res) {
    res.render('index', {
        title: 'Bruna Donatoni - Portfolio',
        welcome: 'Welcome to my Web page!'
    })
};
/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

exports.render = function (req, res) {
    res.render('services', {
        title: 'Services',
        description: 'Here are some services'
    })
};
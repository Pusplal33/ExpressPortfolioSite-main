/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

exports.render = function (req, res) {
    res.render('projects', {
        title: 'My Projects',
        description: 'Here you can find some projects I\'ve worked on'
    })
};
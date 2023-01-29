/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

exports.render = function (req, res) {
    res.render('aboutme', {
        title: 'About Me',
        name: 'Bruna Donatoni',
        description: 'I am an industrial engineer with 3 years of experience. In my work, I realized that I was not fluent in machine language, so I am studying software Engineering Technician at Centennial College. Please, for more details, see my resume in pdf.  ',
        linkedin: 'https://github.com/Brunalsdd',
        github: 'https://www.linkedin.com/in/bruna-ducceschi-donatoni-3386406b/'
    })
};
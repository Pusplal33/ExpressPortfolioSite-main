/*
Student: Bruna Donatoni
Student ID: 301199383
Date: Oct 05, 2022
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('./config/express');
const app = express();

const HOST = 'localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT);
app.post('/contact', (req, res) => {
    res.redirect('/');
});

console.log(`Server running at http://${HOST}:${PORT}`)
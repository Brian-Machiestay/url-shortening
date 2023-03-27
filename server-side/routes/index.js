const Homepage = require('../controllers/appController');
const shorten = require('../controllers/shortenController');

const express = require('express');
const app = express();


app.use(express.json());

app.get('/', function(req, res) {
    Homepage(req, res);
})

app.post('/shorten', function(req, res) {
    shorten(req, res);
})

module.exports = app;
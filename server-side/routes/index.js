import Homepage from '../controllers/appController';
import shorten from '../controllers/shortenController';

const express = require('express');
const app = express();


app.use(express.json());

app.get('/', function(req, res) {
    Homepage(req, res);
})

app.post('/shorten', function(req, res) {
    shorten(req, res);
})

export default app;
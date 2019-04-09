require('../Backend/db');

const app = require('express')();
const bodyParser = require('body-parser');
const hotelsController = require('./Controllers/hotelsController')

app.use(bodyParser.json())

app.use('/hotels', hotelsController);

module.exports = app
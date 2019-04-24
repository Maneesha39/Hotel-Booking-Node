require('../Backend/db');

const app = require('express')();
const bodyParser = require('body-parser');
const hotelsController = require('./Controllers/hotelsController')
const hotelSearchController = require('./Controllers/hotelSearchController')

app.use(bodyParser.json())

app.use('/hotels', hotelsController);

app.use('/cities', hotelSearchController);

module.exports = app
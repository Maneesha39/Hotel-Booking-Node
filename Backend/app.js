require('../Backend/db');

const app = require('express')();
const bodyParser = require('body-parser');
const hotelsController = require('./Controllers/hotelsController')
const hotelSearchController = require('./Controllers/hotelSearchController')
const authController = require('./controllers/authController')
const usersController = require('./controllers/usersController')

app.use(bodyParser.json())

app.use('/hotels', hotelsController);

app.use('/cities', hotelSearchController);

app.use('/auth/', authController)

app.use('/users', usersController);

module.exports = app
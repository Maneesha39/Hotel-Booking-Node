const router = require('express').Router();
const hotelService = require('../Services/hotelService');

router.get('/', async (req, res) => {


    const citiesList = await hotelService.getCities()
    res.json({ cities: citiesList })
})

module.exports = router
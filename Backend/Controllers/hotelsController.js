const router = require('express').Router();
const hotelService = require('../Services/hotelService');

router.get('/', async (req, res) => {

    const hotelsList = await hotelService.getHotels()
    res.json({ hotels: hotelsList })
})

module.exports = router
const router = require('express').Router();
const hotelService = require('../Services/hotelService');

router.get('/', async (req, res) => {
    const place = req.params.place
    console.log(place)

    const hotelsList = await hotelService.getHotelsBySearch(place)
    res.json({ hotels: hotelsList })
})

module.exports = router
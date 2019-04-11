const router = require('express').Router();
const hotelService = require('../Services/hotelService');

router.get('/', async (req, res) => {

    const hotelsList = await hotelService.getHotels()
    res.json({ hotels: hotelsList })
})

router.get('/', async (req, res) => {
    const place = req.query.place

    const hotelsList = await hotelService.getHotelsByPlace(place)
    res.json({ HotelsList: hotelsList });

})

router.post('/', async (req, res) => {
    try {
        console.log("I'm in hotels")
        await hotelService.insert(req.body)
        res.json({ message: "Inserted hotels Successfully" })
    }
    catch (err) {
        console.log(err);
        res.status(422).json({ message: err })
    }
})

module.exports = router
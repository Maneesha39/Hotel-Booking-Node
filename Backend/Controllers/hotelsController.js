const router = require('express').Router();
const hotelService = require('../Services/hotelService');

// router.get('/', async (req, res) => {
//     const place = req.params.place
//     console.log(place)

//     const hotelsList = await hotelService.getHotelsBySearch(place)
//     res.json({ hotels: hotelsList })
// })



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

router.post('/addroom', async (req, res) => {
    try {
        const name = req.body.name
        const rooms = req.body.rooms

        console.log("I'm in hotels", name, rooms)
        await hotelService.insertRoom(name, rooms)
        res.json({ message: "Room added Successfully" })
    }
    catch (err) {
        console.log(err);
        res.status(422).json({ message: err })
    }
})

module.exports = router
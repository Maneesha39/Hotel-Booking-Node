const router = require('express').Router();
const hotelService = require('../Services/hotelService');


//api for getting hotel names for addrooms component

router.get('/', async (req, res) => {

    const hotelNames = await hotelService.getHotelNames()
    res.json({ names: hotelNames })
})

//to get list of hotels as per city

router.get('/:city', async (req, res) => {
    const city = req.params.city
    console.log(city);
    const hotelsList = await hotelService.getHotelsByPlace(city)
    res.json({ hotels: hotelsList })
    console.log(hotelsList);
})

//to get selected hotel alone in hotel description component

router.get('/hoteldetails/:id', async (req, res) => {
    const id = req.params.id
    console.log(id);
    const hotelsList = await hotelService.getHotelsByID(id)
    res.json({ hotels: hotelsList })
    console.log(hotelsList);
})

//to add new hotels to db

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
//to add rooms to existing hotels

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

//to insert bookings in db

router.post('/bookroom', async (req, res) => {
    try {
        const { room, id } = req.body
        await hotelService.bookRoom(room, id)
        res.json({ message: "Hotel Booked Successfully" })
    }
    catch (err) {
        console.log(err);
        res.status(422).json({ message: err })
    }
})


module.exports = router
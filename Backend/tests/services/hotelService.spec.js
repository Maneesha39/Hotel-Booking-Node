const hotelService = require('../../Services/hotelService');




describe('hotel Service', () => {
    describe('hotel Service for getting hotel names', () => {
        it('should fetch hotel names from db', () => {

            const names = [

                {
                    "name": "Hilton"
                },
                {
                    "name": "ITC Windsor"
                }

            ]
            hotelService.getHotelNames = jest.fn().mockReturnValue(names)
        })

    })

    describe('hotel Service for getting cities', () => {
        it('should fetch cities from db', () => {

            const cities = [

                {
                    "city": "Bangalore"
                },
                {
                    "city": "Delhi"
                },
                {
                    "city": "Chennai"
                }

            ]
            hotelService.getCities = jest.fn().mockReturnValue(cities)
        })

    })

    describe('hotel Service for fetching hotel by id', () => {
        it('should fetch the selected hotel details from db', () => {

            const hotel = [

                {
                    "id": 32,
                    "name": "The Gateway Hotel",
                    "image": "/assets/banglore2.jpg",
                    "place": "Residency Road",
                    "landmark": "No. 66",
                    "pincode": "560025",
                    "mobile": "6889056324",
                    "city": "Bangalore",
                    "rooms": 6,
                    "price": 4999
                }

            ]
            hotelService.getHotelsByID = jest.fn().mockReturnValue(hotel)
        })

    })

})


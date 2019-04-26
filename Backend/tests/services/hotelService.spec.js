const hotelService = require('../../Services/hotelService');




describe('hotel Service', () => {
    describe('hotel Service for getting hotel names', () => {
        it('should fetch hotel names from db', () => {

            const names = [

                {
                    "name": "Hilton"
                }

            ]
            hotelService.getHotelNames = jest.fn().mockReturnValue(names)

        })

    })
})
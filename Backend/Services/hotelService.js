const knex = require('../db');

// exports.getHotels = async () => {
//     const result = await knex.select('*').from('hotel_list');
//     return result;
// }


//To get hotel Names for add room component
exports.getHotelNames = async () => {
    const result = await knex('hotel_list').distinct('name');
    return result;
}

//To get cities for home component 
exports.getCities = async () => {
    const result = await knex('hotel_list').distinct('city');
    return result;
}

//To get selected hotel 
exports.getHotelsByID = async (id) => {
    console.log(id)
    return await knex.select("*").from("hotel_list").where({ id: id });
}
exports.getHotelsByPlace = async (city) => {
    return await knex.select("*").from("hotel_list").where('city', 'ilike', city);
}

exports.insert = async (hotels) => {
    try {
        const hotelsData = JSON.parse(JSON.stringify(hotels))
        await knex.insert(hotelsData).table('hotel_list')
    }
    catch (err) {
        console.log(err)
        throw 'Unable to insert hotels'
    }
}

exports.insertRoom = async (name, room) => {
    try {
        const result = await knex.select('rooms').table('hotel_list').where({ 'hotel_list.name': name })
        console.log(result);
        await knex('hotel_list').where({ 'hotel_list.name': name }).update('rooms', result[0].rooms + room)
        return;
    }
    catch (err) {
        console.log(err)
        throw 'Unable to add room'
    }
}

exports.bookRoom = async (room, id) => {

    const bookingData = JSON.parse(JSON.stringify(room))
    bookingData.hotel_id = id
    console.log(room)
    await knex.insert(bookingData).table('bookings')
    const result = await knex.select('rooms').table('hotel_list').where({ 'id': id })
    await knex('hotel_list').where({ 'id': id }).update('rooms', (result[0].rooms) - 1)
    return;

    throw 'Unable to insert hotels'


}

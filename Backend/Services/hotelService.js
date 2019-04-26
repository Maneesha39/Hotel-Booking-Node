const knex = require('../db');

// exports.getHotels = async () => {
//     const result = await knex.select('*').from('hotel_list');
//     return result;
// }

exports.getHotelNames = async () => {
    const result = await knex('hotel_list').distinct('name');
    return result;
}

exports.getCities = async () => {
    const result = await knex('hotel_list').distinct('city');
    return result;
}

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

        const re = result.map(function (item) {
            console.log(item.rooms);
            return item.rooms;
        });

        await knex('hotel_list').where({ 'hotel_list.name': name }).update('rooms', parseInt(re) + room)
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

    return;


    throw 'Unable to insert hotels'
}

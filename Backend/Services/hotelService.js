const knex = require('../db');

exports.getHotels = async () => {
    const result = await knex.select('*').from("hotel_list")
    console.log(result);
    return result;
}

exports.insert = async (hotel) => {
    try {
        const hotelsData = JSON.parse(JSON.stringify(hotel))
        await knex.insert(hotelsData).table('hotel_list')
    } catch (err) {
        console.log(err)
        throw 'Unable to insert hotels'
    }
}


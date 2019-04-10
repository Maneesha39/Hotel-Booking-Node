const knex = require('../db');

exports.getHotels = async () => {
    // const result = await knex.select('*').from("hotel_list")
    const result = await knex.select('*').from('hotel_list');
    console.log(result);
    return result;
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
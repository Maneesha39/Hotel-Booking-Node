const knex = require('../db');

exports.getHotels = async () => {
    // const result = await knex.select('*').from("hotel_list")
    const result = await knex.select('*').from('hotel_address');
    console.log(result);
    return result;
}
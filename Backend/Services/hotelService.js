const knex = require('../db');

exports.getHotels = async () => {
    const result = await knex.select('*').from("hotel_list")
    console.log(result);
    return result;
}
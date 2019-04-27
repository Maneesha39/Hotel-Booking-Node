const knex = require('../db');

exports.insert = async (user) => {
    try {
        const userData = JSON.parse(JSON.stringify(user));

        await knex.insert(userData).table('admin_users')
    }
    catch (err) {
        console.log(err);
        throw 'Unable to insert user'
    }
}
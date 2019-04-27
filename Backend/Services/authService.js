const knex = require('../db')

exports.login = async (username, password) => {
    try {
        const userDetails = await knex('admin_users').where({ 'username': username, 'password': password })
        if ((username === userDetails[0].username) && (password === userDetails[0].password))
            return;
    }
    catch (err) {
        throw "Invalid Credentials";
    }


}
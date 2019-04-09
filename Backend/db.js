const knex = require('knex')({
    client: 'pg',
    version: '7.9',
    connection: {
        host: 'isilo.db.elephantsql.com',
        user: 'xdhhifqg',
        password: 'rgKMKkKBwdLm2AxhPX6iXl3g8_4hr30u',
        database: 'xdhhifqg'
    }
});

module.exports = knex;
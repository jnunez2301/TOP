const secret = require('./utils/secret')

const config = {
    db: {
        host: 'db4free.net',
        user: secret.username,
        password: secret.password,
        
        database: 'testtodoapp',
        connectTimeout: 60000
    },
    listPerPage: 10,
}

module.exports = config;
const config = require('./utils/config')

let mySQLConfig = {
    host : 'localhost',
    user : 'root',
    password: `${config.MYSQL_PASSWORD}`,
    database: 'todoapp'
}

module.exports = mySQLConfig;
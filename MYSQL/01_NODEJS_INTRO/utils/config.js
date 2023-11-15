require('dotenv').config()

const MYSQL_PASSWORD = `${process.env.MYSQL_PASSWORD}`;

module.exports = {
    MYSQL_PASSWORD
}
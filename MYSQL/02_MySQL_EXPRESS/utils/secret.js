require('dotenv').config();

const username = `${process.env.mUser}`;
const password = `${process.env.mPassword}`;


module.exports = {
    username, password
}
const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = `${process.env.MONGODB_URI}`

function main () {
    try{
        mongoose.connect(mongoDB)
        console.log(`connected to mongoDB`);
    }catch(err){
        console.log(err);
    }
}

module.exports = main
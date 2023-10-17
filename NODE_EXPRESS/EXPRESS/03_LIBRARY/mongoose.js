const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery", false);

const mongoDB = `${process.env.MONGODB_URI}`


async function mongoConnect() {
    try{
        await mongoose.connect(mongoDB);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.error(err);
    }
}

module.exports = mongoConnect
const mongoose = require('mongoose');



const MessagesSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 3,
        required: true
    },
    description: {
        type: String,
        minLength: 8,
        required: true
    },
    date: {
        type: Date,
        minLength: 3,
        default: function(){
            return Date.now()
        }
    }
})

const UserSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        minLength: 3,
        validate: function (username) {
            const spaceRegex = /\s/;
            return !spaceRegex.test(username); // Return true if there are no spaces
        }
    },
    password: String(bcryptjs),
    //PASSPORT JS FOR THIS PLS
    email: {
        type: String,
        required: true,
        validate: function(email) {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email);
        }
    },
    messages: [MessagesSchema],
})

module.exports = mongoose.model('Messages', UserSchema)
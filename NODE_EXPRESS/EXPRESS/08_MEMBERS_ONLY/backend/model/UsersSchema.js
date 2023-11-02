const mongoose = require('mongoose');
const MessagesSchema = require('./MessagesSchema');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        validate: function (username) {
            const spaceRegex = /\s/;
            return !spaceRegex.test(username); // Return true if there are no spaces
        },
        lowercase: true,
        unique: true
    },
    password: String,
    //PASSPORT JS FOR THIS PLS
    email: {
        type: String,
        required: true,
        validate: function(email) {
            const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email);
        },
        unique: true
    },
    profilePic: {
        type: String,
        default: function(){
            return 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png'
        }
    }
})

module.exports = mongoose.model('Users', UserSchema)
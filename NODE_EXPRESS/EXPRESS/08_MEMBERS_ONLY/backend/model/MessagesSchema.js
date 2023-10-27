const mongoose = require('mongoose');



const MessagesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
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
        default: function(){
            return Date.now()
        }
    }
})

module.exports = mongoose.model('Messages', MessagesSchema);
const mongoose = require('mongoose');



const MessagesSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        ref: 'Users', 
        required: true,
        lowercase: true,
    },
    title: {
        type: String,
        minLength: 3,
        required: true
    },
    description: {
        type: String,
        minLength: 3,
        required: true
    },
    date: {
        type: Date,
        default: function(){
            return Date.now()
        }
    },
    messageImg: {
        type: String,
        default: function(){
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATidRXcxeaZJLiKIpl2N-mba7es9r9IWjwQ&usqp=CAU'
        }
    },
})

module.exports = mongoose.model('Messages', MessagesSchema);
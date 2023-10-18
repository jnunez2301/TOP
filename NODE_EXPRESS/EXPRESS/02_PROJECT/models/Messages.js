
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    text: String,
    user: String,
    added: {
        type: Date,
        default: () => {
            Date.now()
        }
    }
})

module.exports = mongoose.model('Message', messageSchema)
const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    model: {
        type: String,
        minLength: 1,
        required: true,
    },
    //iPhone X
    brand: {
        type: String,
        minLength: 1,
        required: true,
    },
    //Apple
    //We must be able to filter by brand
    description: {
        type: String,
        mingLength: 1,
        required: true,
    },
    imgURL: {
        type: String,
        mingLength: 1,
        default: () => {
            return 'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg'
        }
    },
})


module.exports = mongoose.model('Products', productSchema);
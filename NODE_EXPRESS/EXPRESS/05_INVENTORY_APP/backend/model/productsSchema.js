const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brandIMG: {
        type: String,
        default: () => {
            return 'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg'
        }
    },
    description: {
        type: String,
        minLength: 1,
        required: true
    }
})

const productSchema = new mongoose.Schema({
    model: {
        type: String,
        minLength: 1,
        required: true,
    },
    //iPhone X
    brand: BrandSchema,
    //Apple
    //We must be able to filter by brand
    description: {
        type: String,
        mingLength: 1,
        required: true,
    },
    price: {
        type: String,
        minLength: 1,
        default: () => {
            return '000'
        },
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
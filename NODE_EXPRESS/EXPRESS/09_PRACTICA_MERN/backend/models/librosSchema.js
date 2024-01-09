const mongoose = require('mongoose');

const LibrosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        // minLength: 3
    },
    libroImg: {
        type: String,
        default: () => {
            return 'https://www.comunidadbaratz.com/wp-content/uploads/Instrucciones-a-tener-en-cuenta-sobre-como-se-abre-un-libro-nuevo.jpg'
        }
    },
    ISBN: {
        type: Number,
        minLength: 9,
        // validation: () => isbn % 2
    }
})

module.exports = mongoose.model('Libros', LibrosSchema);
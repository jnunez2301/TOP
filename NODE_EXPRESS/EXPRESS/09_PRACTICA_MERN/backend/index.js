const express = require('express');
const app = express();
const mongoConnect = require('./mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
/* app.get('/', (req, res) => {
    res.send('Hello World');
})
Ya no sirve si tienes el controlador */
app.use(express.json());

// Conectamos a MongoDB
mongoConnect();

// app.use('/ruta/personalizada', require('archivoControlador.js')));
app.use('/api/libros', require('./controller/api/libros'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
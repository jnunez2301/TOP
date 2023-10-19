const express = require('express');
const mongoConnect = require('./mongoose');
const app = express();

const PORT = process.env.PORT || 3000;

// NEVER FORGET TO ADD THIS
app.use(express.json());

app.use('/api/products', require('./controller/api/products'));

// start mongoose server
mongoConnect();

app.listen(PORT, () =>{
    console.log(`Server started on ${PORT}`);
})
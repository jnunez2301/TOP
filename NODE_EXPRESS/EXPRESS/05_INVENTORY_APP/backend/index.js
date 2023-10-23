//Dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');

//Local dependencies
const mongoConnect = require('./mongoose');

//Middleware
const requestLogger = require('./middleware/requestLogger')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(requestLogger);

// Process the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

//Apply CORS
app.use(cors())
// NEVER FORGET TO ADD THIS
app.use(express.json());

//Route the routes
app.use('/api/products', require('./controller/api/products'));

//show all React routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

// start mongoose server
mongoConnect();


app.listen(PORT, () =>{
    console.log(`Server started on ${PORT}`);
})
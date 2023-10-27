const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoConnect = require('./mongoose');

const mongoConnect = require('./mongoose')

const requestLogger = require('./middleware/requestLogger');

const app = express();
const PORT = process.env.PORT || 3000;

// Render dist folder
app.use(express.static(path.join(__dirname, 'dist')))

//CORS
app.use(cors())
app.use(express.json());

//Router
app.use('/api/messages', require('./controller/api/messages'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//Connect to MongoDB
mongoConnect();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

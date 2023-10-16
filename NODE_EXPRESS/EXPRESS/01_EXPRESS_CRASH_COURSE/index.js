const express = require('express');
const path = require('path');
const app = express();

const logger = require('./logger')

const PORT = process.env.PORT || 3000


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'))

//Init middleware
app.use(logger)



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})
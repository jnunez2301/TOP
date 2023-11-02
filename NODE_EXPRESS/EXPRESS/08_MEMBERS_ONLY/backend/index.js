const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoConnect = require('./mongoose');
//PassportJS
const session = require('express-session');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;


const requestLogger = require('./middleware/requestLogger');

const app = express();
const PORT = process.env.PORT || 3000;

// Render dist folder
app.use(express.static(path.join(__dirname, 'dist')))

//CORS
app.use(cors({ 
    origin: 'http://localhost:3001',
    credentials: true
 }));
/* app.options('/api/messages/users/login', cors()); */

app.use(express.json({ limit: '1mb' }));

//PassportJS
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

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

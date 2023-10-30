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
app.use(cors())
app.use(express.json());

//PassportJS
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

//Router
app.use('/api/messages', require('./controller/api/messages'));

app.get('/api/auth/status', (req, res) => {
    if (req.isAuthenticated()) {
      // The user is authenticated
      res.status(200).json({ isAuthenticated: true, user: req.user });
    } else {
      // The user is not authenticated
      res.status(200).json({ isAuthenticated: false });
    }
  });
  app.get('/api/auth/logout', (req, res) => {
    req.logout(function (err) {
      if (err) {
        return res.status(500).json({ message: 'Error during logout' });
      }
      res.status(200).json({ message: 'Logged out successfully' });
    });
  });
  
  

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//Connect to MongoDB
mongoConnect();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

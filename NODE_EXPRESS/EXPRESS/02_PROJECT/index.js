const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const main = require('./mongoose');
const Message = require('./models/Messages.js');
const axios = require('axios');

const port = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')

//Show messages on handlebars
app.get('/', async (req, res) => {
    try {
      // Use Mongoose to query your messages
      const messages = await Message.find();
  
      // Transform the data to avoid prototype access
      const sanitizedMessages = messages.map(message => ({
        text: message.text,
        user: message.user,
        added: message.added,
      }));
  
      // Pass the transformed data to Handlebars
      res.render('home', { msgs: sanitizedMessages });
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });

app.get('/new', (req, res) =>{
    res.render('new', {})
})


app.use('/api/messages', require('./routes/api/messages'))

main();

app.listen(port, () => {
    console.log(`server running on ${port}`);
})
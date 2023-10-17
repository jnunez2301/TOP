const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const messages = require('./messages');

const port = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')

app.get('/', (req, res) =>{
    res.render('home', {messages})
})

app.get('/new', (req, res) =>{
    res.render('new', {messages})
})


app.use('/api/messages', require('./routes/api/messages'))

app.listen(port, () => {
    console.log(`server running on ${port}`);
})
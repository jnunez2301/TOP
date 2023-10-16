const express = require('express');
const path = require('path');
const app = express();
const { engine } = require('express-handlebars');
const members = require('./members')


const logger = require('./logger')

const PORT = process.env.PORT || 3000

// Handlebars Middleware
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// express-handlebars render
app.get('/', (req, res) => res.render('index', {
    title: 'Members App',
    members
}))

//homepage express-handlebars


app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));



//Init middleware
app.use(logger)



app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})
const express = require('express');
const app = express();

const port = 3000 || process.env.PORT;

app.get('/', (req, res) =>{
    res.send('hello world');
})

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})


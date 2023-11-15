// Here you can insert using the second
// parameter from connection.query
// which accepts an array as values
// when values are ?
let mysql = require('mysql');
let config = require('./mySQLConfig');
let connection = mysql.createConnection(config);

let stmt = `INSERT INTO todos(title, completed) VALUES(?,?)`;
let todo = ['Insert a new row with placeholders', false];

connection.query(stmt, todo, (err, results, fields) => {
    if(err){
        return console.error('error: '+ err.message);
    }
    console.log('Todo id' + results.insertId);
})

connection.end();
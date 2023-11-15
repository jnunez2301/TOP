let mysql = require('mysql');
let config = require('./mySQLConfig');

let connection = mysql.createConnection(config);

let stmt = `INSERT INTO todos(title, completed) VALUES ?`;

let todos = [
    ['Insert multiple rows at a time', false],
    ['It should work perfectly', true]
];

connection.query(stmt, [todos], (err, result, fields) => {
    if(err){
        return console.log(err);
    }
    console.log('Row inserted: ' + result.affectedRows);
})

connection.end();
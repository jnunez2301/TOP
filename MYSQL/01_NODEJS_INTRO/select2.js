let mysql = require('mysql');
let config = require('./mySQLConfig');
let connection = mysql.createConnection(config);

let sql = `SELECT * FROM todos WHERE completed = ?`

connection.query(sql, [true], (error, results, fields) => {
    if(error){
        return console.log(error)
    }
    console.log(results);
})

connection.end();
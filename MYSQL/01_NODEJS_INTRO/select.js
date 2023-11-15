let mysql = require('mysql');
let config = require('./mySQLConfig.js');

let connection = mysql.createConnection(config);

let sql = `SELECT * FROM todos`;

connection.query(sql, (error, results, fields) => {
    if(error){
        return console.log(error);
    }
    console.log(results);
})

connection.end();
let mysql = require('mysql');
let config = require('./mySQLConfig');
let connection = mysql.createConnection(config);

let id = process.argv[2];
/* 
It is dangererous since it can be SQL inyected
let sql = `SELECT * FROM todos WHERE id = ${id} `; */
//The right code would be
let sql = `SELECT * FROM todos WHERE id = ` + mysql.escape(id);

connection.query(sql, (error, results, fields) => {
    if(error){
        return console.log(error);
    }
    console.log(results);
})

connection.end();
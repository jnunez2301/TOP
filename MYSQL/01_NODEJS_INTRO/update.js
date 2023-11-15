let mysql = require('mysql');
let config = require('./mySQLConfig');
let connection = mysql.createConnection(config);

let sql = `UPDATE todos SET completed = ? WHERE id = ?`

let data = [false, 1];

connection.query(sql, data, (err, results, fields) => {
    if(err){
        return console.log(error);
    }
    console.log('Rows affected: ', results.affectedRows);
})

connection.end();
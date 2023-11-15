const mysql = require('mysql');
const config = require('./mySQLConfig');
const connection = mysql.createConnection(config);

let sql = `DELETE FROM todos WHERE id = ?`;

connection.query(sql, 1, (error, results, fields) => {
    if(error){
        return console.log(error);
    }
    console.log('Deleted rows: ', results.affectedRows);
})

connection.end();
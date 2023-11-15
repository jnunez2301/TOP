let mysql = require('mysql');
let mySQLConfig = require('./mySQLConfig');
let connection = mysql.createConnection(mySQLConfig);

// Query para SQL
let sql = `INSERT INTO todos(title, completed) VALUES('Learn how to insert to a new row', true)`;


// Ejecuta el query Insert en la BDD
connection.query(sql);

// Termina la conexión
connection.end();


const mysql = require('mysql');
const config = require('./config.js');
const connection = mysql.createConnection(config);

let sql = `INSERT INTO todos(title, completed) VALUES('Learn how to insert a new row', true)`;

connection.query(sql);

connection.end();
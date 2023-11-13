const mysql = require('mysql');
const config = require('./utils/config');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: `${config.PASSWORD}`,
    database: 'todoapp', 
});

// connect to the MySQL server
// In case it doesnt work do read the README.MD

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting to the MySQL server:', err.message);
        return;
    }
    
    console.log('Connected to the MySQL server on database');

    let createTodos = `
    create table if not exists todos(
            id int primary key auto_increment,
            title varchar(255) not null,
            completed tinyint(1) not null default 0
        )`;

    connection.query(createTodos, (err, results, fields)=>{
        if(err){
            console.log(err.message);
        }
    })
    connection.end(err =>{
        if(err){
            return console.log(err.message);
        }
    })
});


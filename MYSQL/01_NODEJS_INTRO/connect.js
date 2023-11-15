let mysql = require('mysql');
const config = require('./utils/config')


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: `${config.MYSQL_PASSWORD}`,
    database: 'todoapp'
})


// To limit how many connections are made
// called "Pool"
/* 
    const pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: `${config.MYSQL_PASSWORD}`,
    database: 'todoapp'
})
 */
/* pool.getConnection((err) => {
    if (err) {
        return console.error('error: ' + err.message)
    }
    console.log(`Connected to the MySQL Server.`);
});
 */

 connection.connect((err) => {
    if (err) {
        return console.error('error: ' + err.message)
    }
    console.log(`Connected to the MySQL Server.`);
});



/* 
connection.end(err => {
    if (err) {
        return console.log('error: ' + err.message)
    };
    console.log('Close the database connection');
}) */

/* 
To force end of connection
connection.destroy()
*/
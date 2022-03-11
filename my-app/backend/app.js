const mysql = require('mysql')
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql'
});
database.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
    database.query('USE Example');
});
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database1'
});

database.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
    database.query("SELECT * FROM `job posts`",  (err,result) => {
        if (err) throw err;
        console.log(result);
    });
});

app.post("/search", (req, res) => {
    console.log(req.body);
    res.json({job: 'software engineer'});
});

app.listen(3001);
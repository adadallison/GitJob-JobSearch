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
    database: 'team6dev'
});

database.connect((err) => {
    if(err) throw err;
    console.log('Connected!');
});

app.post("/search", (req, res) => {
    console.log(req.body);
    database.query("SELECT * FROM `job posts`",  (err,result) => {
        if (err) throw err;
        console.log(result);
        res.json({result});
    });
});

app.listen(3001);
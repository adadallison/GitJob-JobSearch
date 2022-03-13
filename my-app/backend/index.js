const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// const mysql = require('mysql');
// const database = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'mysql'
// });

// database.connect((err) => {
//     if(err) throw err;
//     console.log('Connected!');
//     database.query('USE Example');
// });

app.get("/search", (req, res) => {
    res.json("Hello World");
});

// app.post("/", (req, res) => {
//     const post = req.body;
// });

app.listen(5000);
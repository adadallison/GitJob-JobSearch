const express = require('express');
const app = express();

const mysql = require('mysql');
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

router.get("/", (req, res) => {
    res.json("Hello World");
});

router.post("/", (req, res) => {
    const post = req.body;
});

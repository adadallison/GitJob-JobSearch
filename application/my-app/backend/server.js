const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const app = express();

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'team6dev'
});

app.post("/search", (req, res) => {
    console.log(req.body);
    
    pool.getConnection((err, connection) => {
        if (err) throw err;
        
        var query;
    
        if(req.body["title"] == "" && req.body["field"] == ""){
            // when title and field are empty
        
            query = "SELECT * FROM `job posts`";
    
        }else if(req.body["title"] != "" && req.body["field"] != ""){
            // when title and field are both not empty
        
            query = "SELECT * FROM `job posts` WHERE ";
            query += "(`job name` LIKE " + connection.escape('%' + req.body["title"] + '%'); 
            query += "AND `job field` LIKE " + connection.escape('%' + req.body["field"] + '%') + ")";
    
        }else if(req.body["title"] != ""){    
            // when title has a value but not field
        
            query = "SELECT * FROM `job posts` WHERE (`job name` LIKE ";
            query += connection.escape('%' + req.body["title"] + '%') + ")";

        }else{
            // when field has a value but not title
        
            query = "SELECT * FROM `job posts` WHERE (`job field` LIKE ";
            query += connection.escape('%' + req.body["field"] + '%') + ")";
        }
        
        connection.query(query,  (err,result) => {
            if (err) throw err;
            res.json({result});
        });
        
        connection.release();
    });
});

app.post("/register", async (req, res) => {
    var salt = await bcrypt.genSalt(10);
    var password = await bcrypt.hash("hello", salt);
    
    var query = "INSERT INTO accounts (type, email, password) VALUES ('student','test@gmail.com','" + password + "')";

    pool.getConnection((err, connection) => {
        if (err) throw err;
        
        connection.query(query,  (err,result) => {
            if (err) throw err;
        });
        
        connection.release();
    });

    res.status(201).send();
});

app.listen(3001);
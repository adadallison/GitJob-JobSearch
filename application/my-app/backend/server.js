const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
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

app.post("/search", async (req, res) => {
    console.log(req.body);
    var query;
    
    if(req.body["title"] == "" && req.body["field"] == ""){
        // when title and field are empty
        
        query = "SELECT * FROM `job posts`";
    
    }else if(req.body["title"] != "" && req.body["field"] != ""){
        // when title and field are both not empty
        
        query = "SELECT * FROM `job posts` WHERE ";
        query += "(`job name` LIKE '%" + connection.escape(req.body["title"]) + "%' and"; 
        query += "`job field` LIKE '%" + connection.escape(req.body["field"]) + "%')";
    
    }else if(req.body["title"] != ""){    
        // when title has a value but not field
        
        query = "SELECT * FROM `job posts` WHERE (`job name` LIKE ";
        query += "'%" + connection.escape(req.body["title"]) + "%')";

    }else{
        // when field has a value but not title
        
        query = "SELECT * FROM `job posts` WHERE (`job field` LIKE ";
        query += "'%" + connection.escape(req.body["field"]) + "%')";
    }

    database.query(query,  (err,result) => {
        if (err) throw err;
        res.json({result});
    });
});

app.post("/register", async (req, res) => {
    var salt = await bcrypt.genSalt(10);
    var password = await bcrypt.hash("hello", salt);
    
    var query = "INSERT INTO accounts (student_id, company_id, email, password) VALUES ('1', '0','test@gmail.com','" + password + "')";

    database.query(query,  (err,result) => {
        if (err) throw err;
    });

    res.status(201).send();
});

app.listen(3001);
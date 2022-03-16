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
    var query;
    
    if(req.body["title"] == "" && req.body["field"] == ""){
        // when title and field are empty
        
        query = "SELECT * FROM `job posts`";
    
    }else if(req.body["title"] != "" && req.body["field"] != ""){
        // when title and field are both not empty
        
        query = "SELECT * FROM `job posts` WHERE ";
        query += "(`job name` LIKE '%" + req.body["title"] + "%' and"; 
        query += "`job field` LIKE '%" + req.body["field"] + "%')";
    
    }else if(req.body["title"] != ""){    
        // when title has a value but not field
        
        query = "SELECT * FROM `job posts` WHERE (`job name` LIKE ";
        query += "'%" + req.body["title"] + "%')";

    }else{
        // when field has a value but not title
        
        query = "SELECT * FROM `job posts` WHERE (`job field` LIKE ";
        query += "'%" + req.body["field"] + "%')";
    }

    database.query(query,  (err,result) => {
        if (err) throw err;
        console.log(result);
        res.json({result});
    });
});

app.listen(3001);
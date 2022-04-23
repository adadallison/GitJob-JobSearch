require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const buffer = require('buffer');
const app = express();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'team6dev'
});

app.use(cors({origin: "*"}));
app.use(express.json());

app.post("/search", (req, res) => {
    console.log(req.body);
    
    pool.getConnection((err, connection) => {
        if (err) throw err;
        
        var query = "SELECT * FROM `job posts`";
        var param = [];

        const title = req.body["title"];
        const field = req.body["field"];
    
        if(title != ""){
            query += "WHERE `job name` LIKE concat('%', ?, '%')";
            param += title;
        }

        if(field != ""){
            query += "WHERE `job field` LIKE concat('%', ?, '%')";
            param += field;
        }

        validateStatus = true;
        if(title.length > 40){
            validateStatus = false;
        }else if(field.length > 40){
            validateStatus = false;
        }

        if(validateStatus){
            connection.query(query, param, (err,result) => {
                if (err) throw err;
                result.map(e => {
                    e['job photo'] = "data:image;base64," + Buffer.from(e['job photo']).toString('base64');
                    console.log(e);
                    return e;
                });
                res.json({result});
            });
            
            connection.release();
        }
    
    });
});

app.post("/register", async (req, res) => {
    var type = req.body["type"];
    var name = req.body["name"]; 
    var password = req.body["password"];
    var repassword = req.body["repassword"];

    console.log(req.body);

    var resultStatus = true;
    
    // Validate username and password
    if (type.length == 0 || type.length > 7){
        resultStatus = false;
    }else if(name.length == 0 || name.length > 30){
        resultStatus = false;
    }else if(password.length == 0 || password.length > 30){
        resultStatus = false;
    }else if(password.normalize() !== repassword.normalize()){
        resultStatus = false;
    }
    
    if(resultStatus){
        var salt = await bcrypt.genSalt(10);
        
        var encryptPassword = await bcrypt.hash(password, salt);
    
        var query = "INSERT INTO accounts (email, type, name, password) VALUES ( ? , ? , ? , ?)";

        pool.getConnection((err, connection) => {
            if (err) throw err;
        
            connection.query(query, [
                name,
                type,
                name,
                encryptPassword
            ],(err,result) => {
                if (err) throw err;
            });
        
            connection.release();
        });

        res.status(201).send();
    }else{
        res.status(400).send();
    }
});

app.get("/login", (req, res) => {
});

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    // const token = jwt.sign(userForToken, process.env.SECRET);
    console.log(process.env.SECRET);
    res.send("Success");
});

app.post("/jobPost", (req, res) => {
    console.log(req.body);
    const jobDesc = req.body.formData.jobdescription;
    const jobTitle = req.body.formData.jobtitle;
    const jobField = req.body.formData.jobs;

    console.log(jobDesc, " ", jobTitle, " ", jobField);
    
    var query = "INSERT INTO `job posts` (`job desc.`, `job name`, `job field`) VALUES ( ? , ? , ?)";

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(query, [
            jobDesc,
            jobTitle,
            jobField
        ], (err, result) => {
            if (err) throw err;
        });

        connection.release();
    });
});

app.listen(process.env.PORT);
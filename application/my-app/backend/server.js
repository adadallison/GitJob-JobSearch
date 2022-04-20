const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const session = require('express-session');
const app = express();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'team6dev'
});

var sessionStore = new session.MemoryStore();

app.use(cors({ credentials:true }));
app.use(express.json());
app.use(session({
    secret: 'key that will sign cookie',
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}))

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
    console.log(req.sessionID);
    if (req.session.page_views) {
        req.session.page_views++;
        console.log("You visited this page " + req.session.page_views + " times");
    } else {
        req.session.page_views = 1;
        console.log("Welcome to this page for the first time!");
    }
    console.log(req.session);
    res.send(true)
});

app.post("/login", (req, res) => {
    console.log(req.body);
    console.log(req.session.username);
    if(!req.session.username)
        req.session.username = 'fahad';
    sessionStore.get(req.sessionID, function(err, data) {
        res.send({err: err, data:data});
    });
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

app.listen(3001);
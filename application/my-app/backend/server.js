require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const buffer = require('buffer');
const multer = require('multer');

const app = express(); 

const {pool} = require('./models/pool.js');

app.use(cors({origin: "*"}));
app.use(express.json());

app.post("/search", (req, res) => {
    console.log(req.body);
    
    pool.getConnection(async (err, connection) => {
        if (err) throw err;
        
        let query = "SELECT * FROM `job posts`";
        let add = ' WHERE';
        let param = [];

        const title = req.body.title;
        const field = req.body.field;
        const location = req.body.location;
        const skill = req.body.skill;
    
        if(title != ""){
            query += add + " `job name` LIKE concat('%', ?, '%')";
            param.push(title);
            add = ' AND';
        }

        if(field != ""){
            query += add + " `job field` LIKE concat('%', ?, '%')";
            param.push(field);
            add = ' AND';
        }

        if(location != ""){
            query += add + " `job location` LIKE concat('%', ?, '%')";
            param.push(location);
            add = ' AND';
        }

        if(skill != ""){
            query += add + " `job skills` LIKE concat('%', ?, '%')";
            param.push(skill);
            add = ' AND';
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
                    if(e['job photo'] != null)
                        e['job photo'] = "data:image;base64," + Buffer.from(e['job photo']).toString('base64');
                    return e;
                });
                res.json({result});
            });
        }
        connection.release();
    });
});

app.post("/register", async (req, res) => {
    var email = req.body["email"];
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
        var query = "INSERT INTO accounts (email, type, name, password) VALUES ( ? , ? , ? , ?)";
        
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) throw err;

            pool.query(query, [
                email,
                type,
                name,
                hash
            ],(err,result) => {
                if (err) throw err;
            });

        });

        res.status(201).send();
    }else{
        res.status(400).send();
    }
});

// function to get jwt if it exists from client
const getTokenFrom = (request) => {
    const authorization = request.get('authorization');
    if(authorization && authorization.toLowerCase().startsWith('')){
        return authorization.substring(7);
    }
    return null;
};

app.post("/login", async (req, res) => {
    const {email, password} = req.body;

    // check to see if user name and password matches with one in db
    const findUser = (pool, email) => {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM `accounts` WHERE email = ?";
            pool.query(query, [email], (err, result) => {
                if (err) reject(err);
                resolve(result[0]);
            });
        })
    }

    var user = await findUser(pool, email);
    if(user == undefined){
        console.log("Here")
        res.status(400);
        res.send("Cannot find user.");
        return
    }
    
    console.log("Here4 " + JSON.stringify(user));

    console.log(await bcrypt.compare(password, user.password));

    console.log("password " + password);
    console.log("user password " + user.type);

    const passwordResult = await user === undefined 
        ? false 
        : await bcrypt.compare(password, user.password);

    // if username or password doesn't match send error to client
    if(!(user && passwordResult)){
        console.log("bad request");
        return res.status(400).send("Invalid username or password");
    }

    const infoForToken = {
        email: email,
        type: user.type
    };

    // creates jwt token
    const token = jwt.sign(
        infoForToken,
        process.env.SECRET, 
        { expiresIn: 60 * 60 }
    );

    res.send({ token, name: user.name , type: user.type});
});

// post job form
app.post("/jobPost", (req, res) => {
    console.log(req.body);
    const jobDesc = req.body.formData.jobdescription;
    const jobTitle = req.body.formData.jobtitle;
    const jobField = req.body.formData.jobs;
    const jobSalary = req.body.formData.jobSalary;
    const jobSkills = req.body.formData.jobSkills;
    const jobTimeStamp = req.body.formData.jobTimeStamp;

    console.log(jobDesc, " ", jobTimeStamp, " ", jobTitle, " ", jobField, " ", jobSalary, " ", jobSkills);
    
    // mysql query
    var query = "INSERT INTO `job posts` (`job desc.`, `date posted`, `job name`, `job field`, `job salary`, `job skills`) VALUES ( ? , ? , ? , ? , ? , ?)";

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(query, [
            jobDesc,
            jobTimeStamp,
            jobTitle,
            jobField,
            jobSalary,
            jobSkills
        ], (err, result) => {
            if (err) throw err;
        });

        connection.release();
    });
});

app.post("/postResume", multer().none(), (req, res) => {
    console.log("In post resume");
    console.log("req.body: ", req.body);
});

app.listen(process.env.PORT);
import React, {useState} from 'react';
import axios from 'axios';
import "../css/login.css";

function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [type, setType] = useState("");

    const {ip} = require("../config/config.js");

    const handleSubmit = (event) => {
        console.log("In submit");
        event.preventDefault();
        axios.post("http://" + ip + ":3001/register", { name, email, password, repassword, type })
            .then(res => {
                console.log(res.data.result);
                setResData(res.data.result);
            });
    };

    return (
        <div>
            <div id="login" >GitJob</div>
            <form onSubmit={handleSubmit}>
                <div id ="form">
                    <div><label name="name" required>Name  </label></div>
                    <input input className="input" type="text" required name="name" onChange={e => setName(e.target.value)}></input>
                </div>
                <div id ="form">
                    <div><label name="email" required>Email  </label></div>
                    <input input className="input" type="text" required name="email" onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div id ="form">
                    <div><label name="password" required>Password</label></div>
                    <input input className="input" type="password" required name="password" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div id ="form">
                    <div><label name="password" required>Confirm Password</label></div>
                    <input input className="input" type="password" required name="password" onChange={e => setRepassword(e.target.value)}></input>
                </div>
                <div id ="form" required onChange={e => setType(e.target.value)}>
                    <input type="radio" value="Student" name='accountType'></input>Student
                    {/* <input type="radio" value="Recruiter" name='accountType'></input>Recruiter */}
                    <input type="radio" value="Company" name='accountType'></input>Company
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>

        </div>
    );
}


export default Register
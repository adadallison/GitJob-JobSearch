import React, {useState} from 'react';
import axios, { Axios } from 'axios';
import { useEffect } from 'react';
import "../css/login.css";

function Login(){
    axios.defaults.withCredentials = true;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const {baseUrl} = require("../config/config.js");

    const handleSubmit = (event) => {
        axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }, { withCredentials: true })
        .then((response) => {
            
        });
    }

    // useEffect(() => {
    //     axios.get('http://localhost:3001/login').then(({data}) => {
    //       setLoginStatus(data);
    //     })
    //   }, [])

    return (
        
        <div>
            <div>{loginStatus}</div>
            <div id="login" >GitJob</div>
            <form onSubmit={handleSubmit}>
                <div id ="form">
                    <div><label name="email">Email</label> </div>
                    <input className="input" type="text" required name="email" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div>
                    <div><label name="password">Password</label> </div>
                    <input input className="input" type="password" required name="password" onChange={e => setPassword(e.target.value)}></input>
                </div>
    
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}

export default Login

// https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react
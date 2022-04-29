import React, { useState } from 'react';
import axios, { Axios } from 'axios';
import { useEffect } from 'react';
import "../css/login.css";


const login = () => {
    Axios.post("http://localhost:3000/login", {
        email: email,
        password: password,

    }).then((response)=>{
        console.log(response.data);
    });

};


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const { baseUrl } = require("../config/config.js");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post(baseUrl + ":3001/login", {
            email,
            password
        }).then(response => {
            window.localStorage.setItem('accessToken', response.data.token);
            window.localStorage.setItem('name', response.data.name);
            window.localStorage.setItem('type', response.data.type);
        }).catch(error => {

        });
    }

    // useEffect(() => {
    //     axios.get('http://localhost:3001/login').then(({data}) => {
    //       setLoginStatus(data);
    //     })
    //   }, [])

    return (

        <div>
            <div id="login" >GitJob</div>
            <form onSubmit={handleSubmit}>
                <div id="form">
                    <div><label name="email">Email</label> </div>
                    <input className="input" type="text" required name="email" onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <div><label name="password">Password</label> </div>
                    <input input className="input" type="password" required name="password" onChange={e => setPassword(e.target.value)}></input>
                </div>

                <button onClick={login} type="submit">Login</button>

            </form>
        </div>

    );
}

export default Login

// https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react
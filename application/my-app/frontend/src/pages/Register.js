import React, {useState} from 'react';
import "../css/login.css";

function Register(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div>
            <div id="login" >GitJob</div>
            <form>
                <div id ="form">
                    <div><label name="name">Name  </label></div>
                    <input type="text" required name="name" ></input>
                </div>
                <div id ="form">
                    <div><label name="email">Email  </label></div>
                    <input type="text" required name="email" ></input>
                </div>
                <div id ="form">
                    <div><label name="password">Password</label></div>
                    <input type="password" required name="password" ></input>
                </div>
                <div id ="form">
                    <div><label name="password">Confirm Password</label></div>
                    <input type="password" required name="password" ></input>
                </div>
                <div id ="form">
                    <input type="radio" value="Job-Hunter"></input>Job-Hunter
                    <input type="radio" value="Recruiter"></input>Recruiter
                    <input type="radio" value="Company"></input>Company
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>

        </div>



    );
}


export default Register
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
                    <div><label name="name" required>Name  </label></div>
                    <input input className="input" type="text" required name="name" ></input>
                </div>
                <div id ="form">
                    <div><label name="email" required>Email  </label></div>
                    <input input className="input" type="text" required name="email" ></input>
                </div>
                <div id ="form">
                    <div><label name="password" required>Password</label></div>
                    <input input className="input" type="password" required name="password" ></input>
                </div>
                <div id ="form">
                    <div><label name="password" required>Confirm Password</label></div>
                    <input input className="input" type="password" required name="password" ></input>
                </div>
                <div id ="form" required>
                    <input type="radio" value="Job-Hunter" name='accountType'></input>Job-Hunter
                    <input type="radio" value="Recruiter" name='accountType'></input>Recruiter
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
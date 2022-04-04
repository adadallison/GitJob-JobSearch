import React, {useState} from 'react';
import "../css/login.css";
import Search from '../components/Search';

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")


    return (
        <div>
            <div id="login" >GitJob</div>
            <form id ="form">
                
                <label name="username">Username: </label>
                <input type="text" required name="username" ></input>
                <label name="password">Password: </label>
                <input type="password" required name="password" ></input>
                <input type="submit" style={{ gridColumn: "2", width: 100, justifySelf: "right" }} value="Login" />
            </form>

        </div>



    );
}


export default Login
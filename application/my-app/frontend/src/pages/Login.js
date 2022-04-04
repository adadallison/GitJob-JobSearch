import React, {useState} from 'react';
import "../css/login.css";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
      }


    return (
        <div>
            <div id="login" >GitJob</div>
            <form onSubmit={handleSubmit}>
                <div id ="form">
                    <div><label name="email">Email</label> </div>
                    <input className="input" type="text" required name="email" ></input>
                </div>
                <div>
                    <div><label name="password">Password</label> </div>
                    <input input className="input" type="password" required name="password" ></input>
                </div>
    
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}


export default Login


// https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react
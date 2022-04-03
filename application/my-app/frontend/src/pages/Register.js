import React, {useState} from 'react';

function Register(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")




    return (
        <div>
            <div id="login" >GitJob</div>
            <form id ="form">
                <div>
                    <label name="name">Name  </label>
                    <input type="text" required name="name" ></input>
                </div>
                <div>
                    <label name="email">Email  </label>
                    <input type="text" required name="email" ></input>
                </div>
                <div>
                    <label name="password">Password  </label>
                    <input type="password" required name="password" ></input>
                </div>
                <div>
                    <label name="password">Confirm Password  </label>
                    <input type="password" required name="password" ></input>
                </div>
                <div>
                    <input type="radio" value="Job-Hunter   "></input>
                    <input type="radio" value="Recruiter    "></input>
                    <input type="radio" value="Company    "></input>
                </div>
                <div>
                    <input type="submit" style={{ gridColumn: "2", width: 100, justifySelf: "right" }} value="Register"/>
                </div>
            </form>

        </div>



    );
}


export default Register
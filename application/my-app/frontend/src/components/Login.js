import React, {useState} from 'react';


function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")


    const formStyle = {
        margin: 25,
        marginLeft: 0,
        display: "grid",
        gridTemplateColumns: "150px 200px",
        gridGap: "15px"
    }


    return (
        <div>
            <form style={formStyle}>
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
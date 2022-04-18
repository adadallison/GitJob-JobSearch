import React, { useState } from 'react';
import "../css/user.css";
import * as AiIcons from 'react-icons/ai';
function User() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
    }

    return (

        <div>

            <div id="user" >GitJob</div>
            <div>
                <div>
                    <div className="photo">
                        <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                            src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"></img>
                    </div> </div></div>
            <form onSubmit={handleSubmit}>
                <div id="form">
                    <div>
                        <div><label name="name">Name</label> </div>
                        <input className="input" type="text" required name="name" ></input>
                    </div>
                    <div><label name="email">Email</label> </div>
                    <input className="input" type="text" required name="email" ></input>
                </div>
                <div id="password">

                    <div><label name="password">Password</label> </div>
                    <input className="input" type="password" required name="password" ></input>

                    <div></div></div>
                <div id="updatef">
                    <div><label name="image">Upload Photo</label> </div>
                    <input className="image" type="file" required name="image" ></input>

                    <div>
                        <div><label name="resume">Upload Resume</label> </div>
                        <input className="image" type="file" required name="resume" ></input>
                    </div>

                    <button type="submit">Update Profile</button>


                </div> </form></div>

    );
}


export default User


// https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react
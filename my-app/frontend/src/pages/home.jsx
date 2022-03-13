import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Home = () => {
    
    const [title, setTitle] = useState("");
    const [field, setField] = useState("");
    
    const handleSubmit = () => {
        axios.post("/search",{title})
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    };

    return (
        <div>
            <title>
                Gitjob Website
            </title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="css\home.css" />
            <ul>
                <div className="site-logo">
                    <img src="https://via.placeholder.com/80" alt="logo" />
                </div>
                <div>
                    <div className="search-container">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="title" onChange={e => setTitle(e.target.value)}/>
                            <input type="text" placeholder="field" onChange={e => setField(e.target.value)}/>
                            <button type="submit"><i className="search" /></button>
                        </form>
                    </div>
                    <li><a href="home.asp">Home</a></li>
                    <li><a href="forum.asp">Forum</a></li>
                    <li><a href="jobs.asp">Jobs</a></li>
                    <li><a href="careers.asp">Careers</a></li>
                    <li><a href="salaries.asp">Salaries</a></li>
                    <li className="dropdown">
                        <a href="javascript:void(0)" className="dropbtn">More</a>
                        <div className="dropdown-content">
                            <a href="#">1</a></div></li>
                </div>
                <li>
                    <div className="text-center btnDiv">
                        <a href="#about" className="btn btn-primary btn-xl">First Last</a>
                    </div></li>
            </ul>
        </div>
    );
};

export default Home;
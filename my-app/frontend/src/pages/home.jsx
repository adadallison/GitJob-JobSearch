import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Home = () => {

    const [title, setTitle] = useState("");
    const [field, setField] = useState("");
    const [temp, setTemp] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title," ", field);
        axios.post("http://localhost:3001/search", { title })
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
                            <input type="text" placeholder="title" onChange={e => setTitle(e.target.value)} />
                            <br/>
                            <select id="field" name="field" onChange={e => setField(e.target.value)}>
                                <option value=""></option>
                                <option value="Artificial Intelligence and Machine Learning">AI and ML</option>
                                <option value="Robotic Process Automation">Robotic Process Automation</option>
                                <option value="Edge Computing">Edge Computing</option>
                                <option value="Quantum Computing">Quantum Computing</option>
                                <option value="Virtual Reality and Augmented Reality">Virtual Reality and Augmented Reality</option>
                                <option value="Blockchain">Blockchain</option>
                                <option value="Internet of Things">Internet of Things</option>
                                <option value="5G">5G</option>
                                <option value="Cyber Security">Cyber Security</option>
                            </select>
                            <button type="submit">Search<i className="search" /></button>
                        </form>
                    </div>
                    <li><a>Home</a></li>
                    <li><a>Forum</a></li>
                    <li><a>Jobs</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Salaries</a></li>
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
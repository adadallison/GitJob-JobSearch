import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../components/SidebarData';
import Sidebar from '../components/Sidebar'
import "../css/home.css";
import "../css/form.css";
import NavBar from '../components/Navbar';
import * as AiIcons from 'react-icons/ai';

const Home = () => {


    const [title, setTitle] = useState(""); //state variable for job title 
    const [field, setField] = useState(""); //state variable for job field 
    const [resData, setResData] = useState([]);

    const { baseUrl } = require("../config/config.js"); // retrieves site url where POST request is sent

    // event handler "handleSubmit" handles 'submit' button event
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseUrl + ":3001/search", { title, field }) //created POST request to send data to URL
            .then(res => {
                console.log(res.data.result);
                setResData(res.data.result); // sets value

            });
    };

    //generates search results
    useEffect(() => {
    }, []);



    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">
                <Sidebar>
                </Sidebar>
                <div class="center-scroll">
                    <>{"Name: " + window.localStorage.getItem('name')}</>
                    <div>
                        <div className="search-container">
                            <form onSubmit={handleSubmit}>
                                <input className="input-search" type="text" placeholder="Search" onChange={e => setTitle(e.target.value)} />

                                {/* field drown down */}
                                <select id="field" name="field" onChange={e => setField(e.target.value)}>
                                    <option value="">Select Field</option>
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

                                {/* location drown down */}
                                <select id="locations" name="field" onChange={e => setField(e.target.value)}>
                                    <option value="">Select Location</option>
                                    <option value="California">California</option>
                                    <option value="Seattle">Seattle</option>
                                    <option value="Texas">Texas</option>
                                    <option value="New York">New York</option>
                                    <option value="Florida">Texas</option>
                                    <option value="Virginia">Virginia</option>
                                    <option value="Washington State">Washington State</option>
                                </select>

                                {/* skills drown down */}
                                <select id="skills" name="field" onChange={e => setField(e.target.value)}>
                                    <option value="">Select Skill</option>
                                    <option value="C++">C++</option>
                                    <option value="Java">Java</option>
                                    <option value="Excel">Excel</option>
                                    <option value="Python">Python</option>
                                    <option value="JavaScript">Java Script</option>
                                </select>

                                <button type="submit">Search<i className="search" /></button>
                            </form>
                        </div>
                    </div>


                    {/* map function that loads results with the same format */}
                    {resData.map(post => (
                        <div className='search-results-container'>
                            
                            <div className='jobImage'>
                                <AiIcons.AiFillFileImage />
                           
                            </div>

                            <div className='jobInfo'>
                                <div>{post["job name"]}</div> 
                                <div>{post["job field"]}</div>
                                <div>{post["date posted"]}</div>
                                <div>{post["job desc."]}</div>
                                <div>${post["job salary"]}</div>
                            </div>

                            <div className='jobArrow'>
                                <AiIcons.AiOutlineSearch />
                            </div>
                            
                            <div>Job Name: {post["job name"]}</div>
                            <div>Job Field: {post["job field"]}</div>
                            <div>Date Posted: {post["date posted"]}</div>
                            <div>Job Description: {post["job desc."]}</div>
                            <div>Job Salary: {post["job salary"]}</div>
                            <img src={post["job photo"]}/>
                            <br />
                        </div>
                    ))}

                </div>
            </div>
        </div>


    );
};

export default Home;


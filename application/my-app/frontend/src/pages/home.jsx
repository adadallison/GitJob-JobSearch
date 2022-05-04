import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import "../css/home.css";
import "../css/careers.css";
import NavBar from '../components/Navbar';

const Home = () => {

    const [title, setTitle] = useState(""); //state variable for job title 
    const [field, setField] = useState(""); //state variable for job field
    const [location, setLocation] = useState(""); //state variable for job field 
    const [skill, setSkill] = useState(""); //state variable for job field  
    const [resData, setResData] = useState([]);

    const { baseUrl } = require("../config/config.js"); // retrieves site url where POST request is sent

    // event handler "handleSubmit" handles 'submit' button event
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseUrl + ":3001/search", 
        { title, field, location, skill }) //created POST request to send data to URL
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

                <div className="sidenav-careers">
                    <Sidebar>
                    </Sidebar>

                </div>

                <div class="center-scroll">
                    <div>
                        <div className="search-container">
                            <form onSubmit={handleSubmit}>
                                <input className="input-search" type="text" placeholder="Search" onChange={e => setTitle(e.target.value)} />

                                {/* field drown down */}
                                <select id="field" name="field" onChange={e => setField(e.target.value)}>
                                    <option value="">Select Field</option>
                                    <option value="AI and ML">AI and ML</option>
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
                                <select id="locations" name="field" onChange={e => setLocation(e.target.value)}>
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
                                <select id="skills" name="field" onChange={e => setSkill(e.target.value)}>
                                    <option value="">Select Skill</option>
                                    <option value="C++">C++</option>
                                    <option value="Java">Java</option>
                                    <option value="Excel">Excel</option>
                                    <option value="Python">Python</option>
                                    <option value="JavaScript">Java Script</option>
                                </select>

                                <button type="submit">Search<i className="Search" /></button>

                                <a className="question">?
                                    <span className="questionText">
                                        Search for jobs based <br />
                                        on the given filters and <br />
                                        the results will appear <br />
                                        bellow!
                                    </span>
                                </a>

                            </form>

                        </div>
                    </div>


                    {/* map function that loads results with the same format */}
                    {resData.map(post => (
                        <div className='search-results-container'>

                            <div className='jobImage'>
                                <img className='actualImage' src={post["job photo"]} />
                            </div>


                            <div className='jobInfo'>
                                <div className='jobName'>Job Name: {post["job name"]}</div>
                                <div>Job Field: {post["job field"]}</div>
                                <div>Date Posted: {post["date posted"]}</div>
                                <div>Job Location: {post["job location"]}</div>
                                <div>Job Description: {post["job desc."]}</div>
                                <div>Job Salary: {post["job salary"]}</div>
                                <div>Job Skills: {post["job skills"]}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>


    );
};

export default Home;


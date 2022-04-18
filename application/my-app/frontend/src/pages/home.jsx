import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../components/SidebarData';
import "../css/home.css";
import NavBar from '../components/Navbar';

const Home = () => {


    const [title, setTitle] = useState("");
    const [field, setField] = useState("");
    const [resData, setResData] = useState([]);
    const ip = "13.52.76.208";



    const handleSubmit = (event) => {
        //window.location.href="/results";
        event.preventDefault();
        axios.post("http://" + ip + ":3001/search", { title, field })
            .then(res => {
                console.log(res.data.result);
                setResData(res.data.result);
                this.props.history.push({
                    pathname: '/results',
                    state: resData // your data array of objects
                })

            });
    };

    useEffect(() => {
    }, []);



    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-home">
                    <div className='nav-text'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </div>
                </div>

                <div class="center-scroll">
                    <div>
                        <div className="search-container">
                            <form onSubmit={handleSubmit}>
                                <input className="input-search" type="text" placeholder="Search" onChange={e => setTitle(e.target.value)} />
                                <select id="field" name="field" onChange={e => setField(e.target.value)}>
                                    <option value="" disabled selected hidden>Job Field</option>
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

                                <select id="field" name="field" onChange={e => setField(e.target.value)}>
                                    <option value="" diabled selected hidden>Location</option>
                                    <option value="California">California</option>
                                    <option value="Seattle">Seattle</option>
                                    <option value="Texas">Texas</option>
                                    <option value="New York">New York</option>
                                    <option value="Florida">Texas</option>
                                    <option value="Virginia">New York</option>
                                    <option value="Washington State">Washington State</option>
                                </select>

                                <select id="field" name="field" onChange={e => setField(e.target.value)}>
                                    <option value="" disabled selected hidden>Skill</option>
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

                    {resData.map(post => (
                        <div className='search-results-container'>
                            <div>Job Name: {post["job name"]}</div>
                            <div>Job Field: {post["job field"]}</div>
                            <div>Date Posted: {post["date posted"]}</div>
                            <div>Job Description: {post["job desc."]}</div>
                            <div>Job Salary: {post["job salary"]}</div>
                            <br />
                        </div>
                    ))}

                </div>
            </div>
        </div>


    );
};

export default Home;


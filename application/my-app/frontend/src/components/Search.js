import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';


const Search = () => {

    const [title, setTitle] = useState("");
    const [field, setField] = useState("");
    const [resData, setResData] = useState([]);
    const ip = "13.52.76.208";

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://" + ip + ":3001/search", { title, field })
            .then(res => {
                console.log(res.data.result);
                setResData(res.data.result);
            });
    };

    useEffect(() => {
    }, []);

    return (
        <div>
                <div>
                    <div className="search-container">
                        <form onSubmit={handleSubmit}>
                            <input className="input-search" type="text" placeholder="Search" onChange={e => setTitle(e.target.value)} />
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

                    {/* <li className="dropdown">
                        <div className="dropdown-content"> </div>
                    </li> */}
                </div>


            {resData.map(post => (
            <div className='search-results-container'>
                <div>Job Name: {post["job name"]}</div>
                <div>Job Field: {post["job field"]}</div>
                <div>Date Posted: {post["date posted"]}</div>
                <div>Job Description: {post["job desc."]}</div>
                <div>Job Salary: {post["job salary"]}</div>
                <br/>
            </div>
            ))}
        </div>
    );
};

export default Search;
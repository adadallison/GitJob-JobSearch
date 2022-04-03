import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Search from '../components/Search';

const Home = () => {

    // const [title, setTitle] = useState("");
    // const [field, setField] = useState("");
    // const [resData, setResData] = useState([]);
    // const ip = "13.52.76.208";

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post("http://" + ip + ":3001/search", { title, field })
    //         .then(res => {
    //             console.log(res.data.result);
    //             setResData(res.data.result);
    //         });
    // };

    // useEffect(() => {
    // }, []);

    return (
        <div>
            {/* <title>
                Gitjob Website
            </title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="css\home.css" /> */}
            
            <NavBar/>

            {/* {resData.map(post => (
            <div>
                <div>Job Name: {post["job name"]}</div>
                <div>Job Field: {post["job field"]}</div>
                <div>Date Posted: {post["date posted"]}</div>
                <div>Job Description: {post["job desc."]}</div>
                <div>Job Salary: {post["job salary"]}</div>
                <br/>
            </div>
            ))} */}
        </div>
    );
};

export default Home;
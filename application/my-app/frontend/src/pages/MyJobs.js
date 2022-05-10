import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import "../css/myjobs.css";
import NavBar from '../components/Navbar';
import axios from 'axios';

const MyJobs = () => {

    const [resData, setResData] = useState();

    const { baseUrl } = require("../config/config.js");

    //generates search results
    useEffect(() => {
        // get all post from a company
        const getBookmark = async () => {
            const getJWT = async () => {
                return window.localStorage.getItem("accessToken");
            }

            const JWT = await getJWT();
            await axios.get(baseUrl + ":3001/getBookmark", {
                headers: { "Authorization": `Bearer ${JWT}` }
            })
                .then(res => {
                    console.log(res.data.result);
                    setResData(res.data.result); // sets value
                    console.log(resData);
                });
        }

        getBookmark();
    }, []);

    const deleteBookmark = async (postId) => {
        const getJWT = async () => {
            return window.localStorage.getItem("accessToken");
        }
        const JWT = await getJWT();
        await axios.delete(baseUrl + ":3001/deleteBookmark",
            {
                headers: { "Authorization": `Bearer ${JWT}` },
                data: {
                    postId: postId
                }
            })
            .then(res => {
                if (res.data == "success") {
                    setResData(resData.filter(e => e['id'] != postId))
                }
            })
    }

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="jobsContainer">

                <Sidebar>
                </Sidebar>
                <div className="center-scroll">
                    {resData && resData.map(post => (
                        <div className='search-results-container'>

                            <div className='jobImage'>
                                <img className='actualImage' src={post["job photo"]} />
                            </div>


                            <div key={post["id"]} className='jobInfo'>
                                <div className='jobName'>Job Name: {post["job name"]}</div>
                                <div>Job Field: {post["job field"]}</div>
                                <div>Date Posted: {post["date posted"]}</div>
                                <div>Job Location: {post["job location"]}</div>
                                <div>Job Description: {post["job desc."]}</div>
                                <div>Job Salary: {post["job salary"]}</div>
                                <div>Job Skills: {post["job skills"]}</div>
                            </div>

                            <div>
                                <button onClick={() => deleteBookmark(post["id"])}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default MyJobs;


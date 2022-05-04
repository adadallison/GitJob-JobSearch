import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import "../css/myjobs.css";
import NavBar from '../components/Navbar';

const MyJobs = () => {


    //generates search results
    useEffect(() => {
    }, []);



    
    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="jobsContainer">
                
                <Sidebar>
                </Sidebar>
                <div className='jobs'>
                    

                </div>
            </div>
        </div>


    );
};

export default MyJobs;


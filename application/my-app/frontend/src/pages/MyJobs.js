import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import "../css/profile.css";
import NavBar from '../components/Navbar';

const MyJobs = () => {


    //generates search results
    useEffect(() => {
    }, []);



    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="profileContainer">
                
                <Sidebar>
                </Sidebar>
                <div className='profile'>
                    

                </div>
            </div>
        </div>


    );
};

export default MyJobs;


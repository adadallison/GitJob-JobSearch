import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import "../css/profile.css";
import NavBar from '../components/Navbar';

const Profile = () => {


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
                <div>
                    <>{"Name: " + window.localStorage.getItem('name')}</>
                    <>{"Type: " + window.localStorage.getItem('type')}</>

                </div>
            </div>
        </div>


    );
};

export default Profile;


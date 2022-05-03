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

            <div className="profileContainer">
                
                <Sidebar>
                </Sidebar>
                <div className='profile'>
                    <div className='profileText'>Name: {window.localStorage.getItem('name')}</div>
                    <br></br>
                    <div className='profileText'>Account: {window.localStorage.getItem('type')}</div>
                    <br></br>
                    <div className='profileText'>Email: {window.localStorage.getItem('email')}</div>
                    <br></br>
                    <div className='profileText'>Skills: {window.localStorage.getItem('skills')}</div>

                </div>
            </div>
        </div>


    );
};

export default Profile;


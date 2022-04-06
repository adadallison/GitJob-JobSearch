import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidebarData } from '../components/SidebarData';
import "../css/forum.css";
import NavBar from '../components/Navbar';
import ForumPost from './ForumPost';
const Forum = () => {

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-forum">
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

                <div class="forum-container" >
                    <a href="./ForumPost" class="fields">Finding Jobs</a>
                    <a href="./ForumPost" class="fields">Interview Prep</a>
                    <a href="./ForumPost" class="fields">Exploring Careers</a>
                    <a href="./ForumPost" class="fields">Resume Advice</a>
                    <a href="./ForumPost" class="fields">Networking</a>
                    <a href="./ForumPost" class="fields">Testimonies</a>
                    <a href="./ForumPost" class="fields">Resources</a>
                    <a href="./ForumPost" class="fields">Education</a>
                    <a href="./ForumPost" class="fields">Open Forum</a>


                </div>

            </div>


        </div>
    );
};

export default Forum;


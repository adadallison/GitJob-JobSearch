import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidebarData } from '../components/SidebarData';
import "../css/careers.css";
import "../css/jobposting.css";
import NavBar from '../components/Navbar';
import Register from './Register';

const JobPosting = () => {

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-jobs">
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

                <div class="center-info" >
                    <h1>Job Position @ Company</h1>
                    <button class="apply-button"><a href="./Register">Apply</a></button>
                    <button class="bookmark-button"><a href="./Register">Bookmark</a></button>
                    <div class="about">
                        This is the job description. It will be decently long and contain all the ins and outs of
                        the position to be applied for. It will also explain the qualifications to the applicant.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>

            </div>


        </div>
    );
};

export default JobPosting;


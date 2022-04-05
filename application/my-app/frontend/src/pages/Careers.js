import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import { Link } from 'react-router-dom';
import {IconContext} from 'react-icons';
import {SidebarData} from '../components/SidebarData';
import "../css/careers.css";
import "../css/Navbar.css";

const Careers = () => {

    return (
        <div>
            <NavBar>

            </NavBar>

            <div class="container">

                <div class="sidenav">
                    <div className='nav-text'>
                        {SidebarData.map((item, index)=> {
                        return (
                            <li key = {index} className = {item.cName}>
                            <Link to = {item.path}>
                                {item.icon}   
                                <span>{item.title}</span>
                            </Link>
                            </li>
                        );
                        })}
                    </div>  
                </div>

                <div class="career-fields-container" >
                    <div class="fields">AI and ML</div>
                    <div class="fields">Robotics Process Automation</div>
                    <div class="fields">Internet of Things</div>
                    <div class="fields">5G</div>
                    <div class="fields">Virtual and Augmented Reality</div>
                    <div class="fields">Blockchain</div>
                    <div class="fields">Quantum Computing</div>
                    <div class="fields">Edge Computing</div>
                    <div class="fields">Cyber Security</div>
                    

                </div>

            </div>
          
           
        </div>
    );
};

export default Careers;


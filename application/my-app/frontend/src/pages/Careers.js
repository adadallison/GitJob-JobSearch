import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {IconContext} from 'react-icons';
import {SidebarData} from '../components/SidebarData';
import "../css/careers.css";
import NavBar from '../components/Navbar';

const Careers = () => {

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-careers">
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
                    <a href="" class="fields">AI and ML </a>
                    <a href="" class="fields">Robotics Process Automation</a>
                    <a href="" class="fields">Internet of Things</a>
                    <a href="" class="fields">5G</a>
                    <a href="" class="fields">Virtual and Augmented Reality</a>
                    <a href="" class="fields">Blockchain</a>
                    <a href="" class="fields">Quantum Computing</a>
                    <a href="" class="fields">Edge Computing</a>
                    <a href="" class="fields">Cyber Security</a>
                    

                </div>

            </div>
          
           
        </div>
    );
};

export default Careers;


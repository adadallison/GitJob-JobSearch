import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../components/SidebarData';
import "../css/careers.css";
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Jobs = () => {

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-careers">
                    {/* <div className='nav-text'>
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
                    </div> */}
                    <Sidebar>
                    </Sidebar>

                </div>

                <div class="career-fields-container" >
                    <a href="./JobPosting" class="fields">Artificial Intelligence and Machine Learning</a>
                    <a href="./JobPosting" class="fields">Robotics Process Automation</a>
                    <a href="./JobPosting" class="fields">Internet of Things</a>
                    <a href="./JobPosting" class="fields">5G</a>
                    <a href="./JobPosting" class="fields">Virtual and Augmented Reality</a>
                    <a href="./JobPosting" class="fields">Blockchain</a>
                    <a href="./JobPosting" class="fields">Quantum Computing</a>
                    <a href="./JobPosting" class="fields">Edge Computing</a>
                    <a href="./JobPosting" class="fields">Cyber Security</a>


                </div>

            </div>


        </div>
    );
};

export default Jobs;


import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../components/SidebarData';
import * as BsIcons from 'react-icons/bs';
import "../../css/career-fields.css";
import NavBar from '../../components/Navbar';
import salary from "../../images/salary.png";
import Sidebar from '../../components/Sidebar'; 



const Va = () => {

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-home">
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

                <div class="center-info">
                    <h1>Virtual and Augmented Reality</h1>

                    <div className="about">
                    Augmented reality (AR) and Virtual Reality (VR) bridge the digital and physical worlds. They allow you to take in information and content visually, in the same way you take in the world. AR dramatically expands the ways our devices can help with everyday activities like searching for information, shopping, and expressing yourself. VR lets you experience what it's like to go anywhere — from the front row of a concert to distant planets in outer space.
                    </div>

                    <div className='salaryNjob'>
                        <div className='salary'>
                            <h3>Average Salary  <img src={salary} align="center" width="30" height="30" alt="salary" ></img>
                            </h3>
                            <h2>$80,000-$120,000</h2>
                        </div>

                        <div className='salary'>
                            <h3>Jobs  <BsIcons.BsFillBriefcaseFill />
                            </h3>
                            <h2>$80,000-$120,000</h2>
                        </div>
                    </div>






                

                    </div>

                    </div>
        </div>
    );
};

export default Va


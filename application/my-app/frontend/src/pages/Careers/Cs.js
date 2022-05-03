import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../components/SidebarData';
import * as BsIcons from 'react-icons/bs';
import "../../css/career-fields.css";
import NavBar from '../../components/Navbar';
import salary from "../../images/salary.png";
import Sidebar from '../../components/Sidebar'; 



const Cs = () => {

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
                    <h1>Cyber Security</h1>

                    <div className="about">
                    Computer security, cybersecurity, or information technology security is the protection of computer systems and networks from information disclosure, theft of or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.
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

export default Cs


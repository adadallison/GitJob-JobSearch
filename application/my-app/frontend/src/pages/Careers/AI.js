import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../components/SidebarData';
import * as BsIcons from 'react-icons/bs';
import "../../css/career-fields.css";
import NavBar from '../../components/Navbar';
import salary from "../../images/salary.png";
import Sidebar from '../../components/Sidebar'; 



const AI = () => {

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
                    <h1>Artificial Intelligence and Machine Learning Overview</h1>

                    <div className="about">
                        Machine learning engineers are the designers of self-running software that brings machines the ability to automate models that are predictive. They work with data scientists to take information and feed curated data into the models that they've uncovered or discovered. They use theoretical models within the data science sphere and build them out to scale as functioning and productive units or models that handle terabytes of real-time data.
                        Machine learning engineers also function as a bridge or intersection for software engineering and data science. They use the available big data tools to improve programming frameworks and to gather raw data from pipelines. They redefine raw data into data science models that are ready to scale. Some machine learning engineers design the software programs that control technological tools, including computers or robots. They can develop algorithms that allow machines to identify trends or patterns in their programming data and as a self-contained unit, and a machine can then teach itself to understand commands, or even to think for itself. Machine learning engineers need a minimum of a bachelor’s degree in computer science or related fields.
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

                <div class="more-fields">
                    <div><a href="./FiveG" >5G</a></div>
                </div>

            </div>


        </div>
    );
};

export default AI


import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import "../css/careers.css";
import NavBar from '../components/Navbar';


const Careers = () => {

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">


                <div className="sidenav-careers">
                    <Sidebar>
                    </Sidebar>
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
                </div>

                <div class="career-fields-container" >
                    <a href="./AI" class="fields">Artificial Intelligence and Machine Learning</a>
                    <a href="./Rp" class="fields">Robotics Process Automation</a>
                    <a href="./It" class="fields">Internet of Things</a>
                    <a href="./G" class="fields">5G</a>
                    <a href="./Va" class="fields">Virtual and Augmented Reality</a>
                    <a href="./Bc" class="fields">Blockchain</a>
                    <a href="./Qc" class="fields">Quantum Computing</a>
                    <a href="./Ec" class="fields">Edge Computing</a>
                    <a href="./Cs" class="fields">Cyber Security</a>


                </div>

            </div>


        </div>
    );
};

export default Careers;


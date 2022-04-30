import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../components/SidebarData';
import "../css/jobposting.css";
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


const Results = () => {



    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-jobs">
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

                <div class="center-info" >
                    Results go here
                </div>

            </div>


        </div>
    );
};

export default Results;


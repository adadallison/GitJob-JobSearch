import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../components/SidebarData';
import "../../css/career-fields.css";
import NavBar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar'; 


const FiveGs = () => {

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

                <div class="center-scroll">
                    <h1>5G Overview</h1>

                    <div id="center-items">AI Post 1</div>
                    <div id="center-items">Example Post 2</div>
                    <div id="center-items">Example Post 1</div>


                </div>

                <div class="item-3">
                    <h2>Other</h2>
                </div>

            </div>


        </div>
    );
};

export default FiveGs


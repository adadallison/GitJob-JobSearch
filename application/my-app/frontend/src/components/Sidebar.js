import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import "../css/Navbar.css";


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);
    //const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            {/* side navbar */}

            <div className="sidenav-home">
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
        </>
    );
}


export default Sidebar
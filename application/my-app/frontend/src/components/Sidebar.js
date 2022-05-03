import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotLoggedIn } from './SidebarData';
import { adminSidebar } from './SidebarData';
import { companySidebar } from './SidebarData';
import { studentSidebar } from './SidebarData';
import "../css/Navbar.css";


const Sidebar = () => {
    const [sidebar, setSidebar] = useState([]);
    const [loginStatus, setLoginStatus] = useState(true)
    //const showSidebar = () => setSidebar(!sidebar);



    useEffect(() => {

        // if (window.localStorage.getItem('type') === 'null') {
        //     setSidebar();
        // }

        if (window.localStorage.getItem('type') === 'Company') {
            setSidebar(companySidebar);

        } else if (window.localStorage.getItem('type') === 'Admin') {
            setSidebar(adminSidebar);

        } else if (window.localStorage.getItem('type') === 'Student') {
            setSidebar(studentSidebar);

        } else {
            setSidebar(NotLoggedIn);
            setLoginStatus(false);
        }
    }, [])


    return (
        <>
            <div className="sidenav-careers">
                <div className='nav-text'>

                    {sidebar.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}

                    {loginStatus && 
                    <button onClick={() => {
                        window.localStorage.clear(); 
                        window.location.replace("/")}
                    }> Logout</button>}
                </div>

    

            </div>
        </>
    );
}


export default Sidebar;
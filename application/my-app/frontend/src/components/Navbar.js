import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import "../css/Navbar.css";


function NavBar() {
    const [navbar, setNavbar] = useState(true);
    //const showSidebar = () => setSidebar(!sidebar);

    const gitjob = () => {
        window.location.replace("/");
    }

    return (
        <>
            <div onClick={gitjob} className='navbar'>
                GitJob
                <div onClick={gitjob} className='titleName'>
                    SFSU Software Engineering Project CSC 648-848, Spring 2022. For Demonstration Only
                </div>
            </div>


        </>
    );
}


export default NavBar
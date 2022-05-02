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
            <IconContext.Provider value={{ color: 'fff' }}>

                <div onClick={gitjob} className='navbar'>Gitjob </div>


            </IconContext.Provider>
        </>

    );
}


export default NavBar
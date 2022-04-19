import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import "../css/Navbar.css";


function NavBar() {
    const [sidebar, setSidebar] = useState(true);
    //const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: 'fff' }}>

                <div className='navbar'>Gitjob </div>



            </IconContext.Provider>
        </>

    );
}


export default NavBar
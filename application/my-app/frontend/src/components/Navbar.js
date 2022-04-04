import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData'
import {IconContext} from 'react-icons';
import "../css/Navbar.css";
import Search from '../components/Search';


function NavBar(){
    const [sidebar, setSidebar] = useState(true);
    //const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
    <IconContext.Provider value ={{color:'fff'}}> 

        <div className='navbar'>Gitjob<Search/> </div>


            {/* <nav className="nav-menu">
                <div className='nav-menu-items' >

                    {SidebarData.map((item, index)=> {
                    return (
                        <li key = {index} className = {item.cName}>
                        <Link to = {item.path}>
                            {item.icon}   
                            <span>{item.title}</span>
                        </Link>
                        </li>
                    );
                    })}
                </div>  
            </nav> */}


            

        </IconContext.Provider>
        </>

    );
}


export default NavBar
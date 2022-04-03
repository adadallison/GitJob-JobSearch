import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [

{
    title : 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
},
{
    title : 'Forums',
    path: '/forums',
    icon: <AiIcons.AiFillContainer/>,
    cName: 'nav-text'
},
{
    title : 'Jobs',
    path: '/jobs',
    icon: <AiIcons.AiFillDatabase/>,
    cName: 'nav-text'
},
{
    title : 'Careers',
    path: '/careers',
    icon: <BsIcons.BsFillBriefcaseFill/>,
    cName: 'nav-text'
},
{
    title : 'Login',
    path: '/login',
    icon: <AiIcons.AiOutlineUser/>,
    cName: 'nav-text'
},
{
    title : 'Signup',
    path: '/register',
    icon: <AiIcons.AiOutlineUsergroupAdd/>,
    cName: 'nav-text'
},



]
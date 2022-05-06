import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [

    ]
    
export const NotLoggedIn = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    
    {
        title: 'Careers',
        path: '/careers',
        icon: <BsIcons.BsFillBriefcaseFill />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: 'Signup',
        path: '/register',
        icon: <AiIcons.AiOutlineUsergroupAdd />,
        cName: 'nav-text'
    }

]


//Student sidebar
export const studentSidebar = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    
    {
        title: 'Careers',
        path: '/careers',
        icon: <BsIcons.BsFillBriefcaseFill />,
        cName: 'nav-text'
    }, {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    },
    {
        title: 'My Jobs',
        path: '/jobs',
        icon: <AiIcons.AiFillDatabase />,
        cName: 'nav-text'
    }, 
    {
        title: 'Post a Resume',
        path: '/JobPosting3',
        icon: <AiIcons.AiFillDatabase />,
        cName: 'nav-text'
    }, 

]

//Company sidebar
export const companySidebar = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Post a Job',
        path: '/JobPosting2',
        icon: <AiIcons.AiFillDatabase />,
        cName: 'nav-text'
    },
    {
        title: 'Resume',
        path: '/Resume',
        icon: <AiIcons.AiFillDatabase />,
        cName: 'nav-text'
    },{
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    }

]

export const adminSidebar = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Delete Post',
        path: '/AdminDelete',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

]

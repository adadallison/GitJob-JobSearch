import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import Login from '../pages/Login';


export const NotLoggedIn = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Jobs',
        path: '/jobs',
        icon: <AiIcons.AiFillDatabase />,
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
        title: 'Jobs',
        path: '/jobs',
        icon: <AiIcons.AiFillDatabase />,
        cName: 'nav-text'
    },
    {
        title: 'Careers',
        path: '/careers',
        icon: <BsIcons.BsFillBriefcaseFill />,
        cName: 'nav-text'
    }, {
        title: 'Profile',
        path: '/user',
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <AiIcons.AiFillLock />,
        cName: 'nav-text'
    }

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
        title: 'Jobs',
        path: '/jobs',
        icon: <AiIcons.AiFillDatabase />,
        cName: 'nav-text'
    },
    {
        title: 'Post a Job',
        path: '/JobPosting2',
        icon: <AiIcons.AiFillDatabase />,
        cName: 'nav-text'
    }, 
    {
        title: 'Logout',
        path: '/',
        icon: <AiIcons.AiFillLock />,
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
        title: 'Jobs',
        path: '/jobs',
        icon: <AiIcons.AiFillDatabase />,
        cName: 'nav-text'
    }, 
    {
        title: 'Logout',
        path: '/user',
        icon: <AiIcons.AiFillLock />,
        cName: 'nav-text'
    }

]
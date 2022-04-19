import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Post a Job',
        path: '/JobPosting2',
        icon: <AiIcons.AiFillContainer />,
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
    }, {
        title: 'Profile',
        path: '/user',
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    },

]

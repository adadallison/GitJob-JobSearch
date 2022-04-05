import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { SidebarData } from '../components/SidebarData';
import "../css/forum.css";
import NavBar from '../components/Navbar';
import ForumPost from './ForumPost';
const Forum = () => {

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-forum">
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

                <div class="forum-container" >
                    <a href="./ForumPost" class="fields">Post 1: </a>
                    <a href="./ForumPost" class="fields">Post 2:</a>
                    <a href="./ForumPost" class="fields">Post 3:</a>
                    <a href="./ForumPost" class="fields">Post 4:</a>
                    <a href="./ForumPost" class="fields">Post 5:</a>
                    <a href="./ForumPost" class="fields">Post 6:</a>
                    <a href="./ForumPost" class="fields">Post 7:</a>
                    <a href="./ForumPost" class="fields">Post 8:</a>
                    <a href="./ForumPost" class="fields">Post 9:</a>


                </div>

            </div>


        </div>
    );
};

export default Forum;


import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {IconContext} from 'react-icons';
import {SidebarData} from '../components/SidebarData';
import "../css/home.css";
import NavBar from '../components/Navbar';

const Home = () => {



    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-home">
                    <div className='nav-text'>
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
                </div>

                <div class="center-scroll">
                    <div id="center-items">Example Post 1</div>
                    <div id="center-items">Example Post 2</div>
                    <div id="center-items">Example Post 1</div>
                    <div id="center-items">Example Post 2</div>
                    <div id="center-items">Example Post 1</div>
                    <div id="center-items">Example Post 2</div>
                    <div id="center-items">Example Post 1</div>
                    <div id="center-items">Example Post 2</div>
                    <div id="center-items">Example Post 1</div>
                    <div id="center-items">Example Post 2</div>
                    <div id="center-items">Example Post 1</div>
                    <div id="center-items">Example Post 2</div>
                    <div id="center-items">Example Post 1</div>
                    <div id="center-items">Example Post 2</div>

                    
                </div>

                <div class="item-3">THREE
                </div>

            </div>
          
           
        </div>
    );
};

export default Home;


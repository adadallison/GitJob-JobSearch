import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import { Link } from 'react-router-dom';
import {IconContext} from 'react-icons';
import {SidebarData} from '../components/SidebarData';
import "../css/home.css";
import "../css/Navbar.css";

const Home = () => {

    return (
        <div>
            <NavBar>

            </NavBar>

            <div class="container">

                <div class="sidenav">
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


                <div class="item-center" >TWO
                    <div class="item-center1">1</div>
                    <div class="item-center1">2</div>
                    <div class="item-center1">3</div>
                    <div class="item-center1">1</div>
                    <div class="item-center1">2</div>
                    <div class="item-center1">3</div>
                    <div class="item-center1">1</div>
                    <div class="item-center1">2</div>
                    <div class="item-center1">3</div>
                    <div class="item-center1">1</div>
                    <div class="item-center1">2</div>
                    <div class="item-center1">3</div>
                    <div class="item-center1">1</div>
                    <div class="item-center1">3</div>
                    <div class="item-center1">1</div>
                    <div class="item-center1">2</div>
                    <div class="item-center1">3</div>
                    <div class="item-center1">1</div>
                    <div class="item-center1">2</div>
                    <div class="item-center1">3</div>
                    <div class="item-center1">1</div>
                    <div class="item-center1">3</div>
                    <div class="item-center1">1</div>
                    <div class="item-center1">2</div>
                    <div class="item-center1">3</div>
                    <div class="item-center1">1</div>
                    <div class="item-center1">2</div>
                    <div class="item-center1">3</div>
                    <div class="item-center1">1</div>
                    

                </div>

                <div class="item-3">THREE
                </div>

            </div>
          
           
        </div>
    );
};

export default Home;


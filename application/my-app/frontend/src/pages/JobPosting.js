import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from '../components/SidebarData';
import "../css/jobposting.css";
import NavBar from '../components/Navbar';

const JobPosting = () => {

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-jobs">
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

                <div class="center-info" >
                    <h1>Job Position @ Company</h1>
                    <div class="buttons">
                        <button class="apply-button"><a href="./Register">Apply</a></button>
                        <button class="bookmark-button"><a href="./Register">Bookmark</a></button>
                    </div>
                    <div class="about">
                        This is the job description. It will be decently long and contain all the ins and outs of
                        the position to be applied for. It will also explain the qualifications to the applicant.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.8094989878573!2d-122.48212918378363!3d37.72414917976872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7db005c0e281%3A0xa57a7c9f946a45d3!2sSan%20Francisco%20State%20University!5e0!3m2!1sen!2sus!4v1649197029614!5m2!1sen!2sus" width="600" height="450" class="map"></iframe>
            </div>


        </div>
    );
};

export default JobPosting;


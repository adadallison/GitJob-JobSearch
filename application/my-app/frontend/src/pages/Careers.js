import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import "../css/careers.css";
import NavBar from '../components/Navbar';


const Careers = () => {

    return (
        <div>
            <NavBar>
            </NavBar>

            <div class="flex-container" >

                <div className="sidenav-careers">
                    <Sidebar>
                    </Sidebar>
                </div>
                
                <a className="question2">?
                    <span className="questionText2">
                        Brief background <br/>
                        on the different <br/>
                        career fields for <br/> 
                        jobs posted.

                    </span>
                </a>


                <div class=" faqflex">

                    <div class="faqcontainer" >

                        <p class="ques">
                            Artificial Intelligence and Machine Learning
                        </p>

                        <div class="overlay">
                            <p class="faqtext">
                                A hackathon is where you come to learn and bring your creative ideas to life.
                                Hundreds of hackers from across the world will gather
                                and build something they're passionate about.
                            </p>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            Robotics and Process Automation
                        </p>

                        <div class="overlay">
                            <p class="faqtext">
                                We care about diversity, accessibility, and believe our differences
                                make us better as a whole. Whether you’re a STEM major or not we want you to be here!
                                Be prepared to learn, brainstorm, and build amazing software/hardware.
                            </p>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            Edge Computing
                        </p>

                        <div class="overlay">
                            <p class="faqtext">
                                SF Hacks is free for all admitted participants. We’ll have WiFi, food,
                                workshops, and awesome swag during the entire 24 hours you’ll be with us.
                            </p>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            Quantum Computing
                        </p>

                        <div class="overlay">
                            <p class="faqtext">
                                Hackathons are all about teamwork! If you don’t have a teammate,
                                we’ll hold a team-formation workshop where you can meet your new best friend.
                                Four people per team is the limit.
                            </p>
                        </div>
                    </div>


                    <div class="faqcontainer">
                        <p class="ques">
                            Virtual and Augmented Reality
                        </p>

                        <div class="overlay">
                            <p class="faqtext">
                                Major League Hacking (MLH) is the official student hackathon
                                league. SF Hacks is an official MLH Member Event, so that means we
                                follow the MLH Code Of Conduct.
                            </p>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            Blockchain
                        </p>

                        <div class="overlay">
                            <p class="faqtext">
                                Unfortunately we will not be offering any travel reimbursement for SF Hacks 2020.
                            </p>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            Internet of Things
                        </p>

                        <div class="overlay">
                            <p class="faqtext">
                                Unfortunately we will not be offering any travel reimbursement for SF Hacks 2020.
                            </p>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            5G
                        </p>

                        <div class="overlay">
                            <p class="faqtext">
                                Unfortunately we will not be offering any travel reimbursement for SF Hacks 2020.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Careers;


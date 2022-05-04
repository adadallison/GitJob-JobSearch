import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import "../css/careers.css";
import "../css/career2.css";
import NavBar from '../components/Navbar';


const Careers = () => {

    return (
        // <div>
        //     <NavBar>
        //     </NavBar>

        //     <div className="container">


        //         <div className="sidenav-careers">
        //         <Sidebar>
        //             </Sidebar>


        //         </div>

        //         <div class="career-fields-container" >
        //             <a href="./AI" class="fields">Artificial Intelligence and Machine Learning</a>
        //             <a href="./Rp" class="fields">Robotics Process Automation</a>
        //             <a href="./It" class="fields">Internet of Things</a>
        //             <a href="./G" class="fields">5G</a>
        //             <a href="./Va" class="fields">Virtual and Augmented Reality</a>
        //             <a href="./Bc" class="fields">Blockchain</a>
        //             <a href="./Qc" class="fields">Quantum Computing</a>
        //             <a href="./Ec" class="fields">Edge Computing</a>
        //             <a href="./Cs" class="fields">Cyber Security</a>


        //         </div>

        //     </div>


        // </div>

        <div>
            <NavBar>
            </NavBar>

            <div class="flex-container" >

            <div className="sidenav-careers">
                    <Sidebar>
                    </Sidebar>

                </div>

                <div class=" faqflex">

                    <div class="faqcontainer">

                        <p class="ques">
                            Artificial Intelligence and Machine Learning
                        </p>

                        <div class="overlay">
                            <div class="faqtext">
                                A hackathon is where you come to learn and bring your creative ideas to life.
                                Hundreds of hackers from across the world will gather
                                and build something they're passionate about.
                            </div>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            Robotics and Process Automation
                        </p>

                        <div class="overlay">
                            <div class="faqtext">
                                We care about diversity, accessibility, and believe our differences
                                make us better as a whole. Whether you’re a STEM major or not we want you to be here!
                                Be prepared to learn, brainstorm, and build amazing software/hardware.
                            </div>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            Edge Computing
                        </p>

                        <div class="overlay">
                            <div class="faqtext">
                                SF Hacks is free for all admitted participants. We’ll have WiFi, food,
                                workshops, and awesome swag during the entire 24 hours you’ll be with us.
                            </div>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                        Quantum Computing
                        </p>
                       
                        <div class="overlay">
                            <div class="faqtext">
                                Hackathons are all about teamwork! If you don’t have a teammate,
                                we’ll hold a team-formation workshop where you can meet your new best friend.
                                Four people per team is the limit.
                            </div>
                        </div>
                    </div>


                    <div class="faqcontainer">
                        <p class="ques">
                            Virtual and Augmented Reality
                        </p>

                        <div class="overlay">
                            <div class="faqtext">
                                Major League Hacking (MLH) is the official student hackathon
                                league. SF Hacks is an official MLH Member Event, so that means we
                                follow the MLH Code Of Conduct.
                            </div>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            Blockchain
                        </p>

                        <div class="overlay">
                            <div class="faqtext">
                                Unfortunately we will not be offering any travel reimbursement for SF Hacks 2020.
                            </div>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            Internet of Things
                        </p>

                        <div class="overlay">
                            <div class="faqtext">
                                Unfortunately we will not be offering any travel reimbursement for SF Hacks 2020.
                            </div>
                        </div>
                    </div>

                    <div class="faqcontainer">
                        <p class="ques">
                            5G
                        </p>

                        <div class="overlay">
                            <div class="faqtext">
                                Unfortunately we will not be offering any travel reimbursement for SF Hacks 2020.
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>

    );
};

export default Careers;


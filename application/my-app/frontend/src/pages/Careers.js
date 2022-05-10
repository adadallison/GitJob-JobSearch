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

            <div className="flex-container" >

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


                <div className=" faqflex">

                    <div className="faqcontainer" >

                        <p className="ques">
                            Artificial Intelligence and Machine Learning
                        </p>

                        <div className="overlay">
                            <p className="faqtext">
                            Machine learning engineers are the designers of self-running software that brings machines the ability to automate models that are predictive. They work with data scientists to take information and feed curated data into the models that they've uncovered or discovered. They use theoretical models within the data science sphere and build them out to scale as functioning and productive units or models that handle terabytes of real-time data.
                            Machine learning engineers also function as a bridge or intersection for software engineering and data science. They use the available big data tools to improve programming frameworks and to gather raw data from pipelines. They redefine raw data into data science models that are ready to scale. Some machine learning engineers design the software programs that control technological tools, including computers or robots. They can develop algorithms that allow machines to identify trends or patterns in their programming data and as a self-contained unit, and a machine can then teach itself to understand commands, or even to think for itself. Machine learning engineers need a minimum of a bachelor’s degree in computer science or related fields.
                            </p>
                        </div>
                    </div>

                    <div className="faqcontainer">
                        <p className="ques">
                            Robotics and Process Automation
                        </p>

                        <div className="overlay">
                            <p className="faqtext">
                            Robotic process automation is a form of business process automation technology based on metaphorical software robots or on artificial intelligence /digital workers. It is sometimes referred to as software robotics.
                            </p>
                        </div>
                    </div>

                    <div className="faqcontainer">
                        <p className="ques">
                            Edge Computing
                        </p>

                        <div className="overlay">
                            <p className="faqtext">
                            Edge computing is a distributed computing paradigm that brings computation and data storage closer to the sources of data. This is expected to improve response times and save bandwidth. "A common misconception is that edge and IoT are synonymous.In simpler terms, edge computing means running fewer processes in the cloud and moving those processes to local places, such as on a user's computer, an IoT device, or an edge server.
                            </p>
                        </div>
                    </div>

                    <div className="faqcontainer">
                        <p className="ques">
                            Quantum Computing
                        </p>

                        <div className="overlay">
                            <p className="faqtext">
                                Quantum computing is a type of computation that harnesses the collective properties of quantum states, such as superposition, interference, and entanglement, to perform calculations. The devices that perform quantum computations are known as quantum computers.
                            </p>
                        </div>
                    </div>


                    <div className="faqcontainer">
                        <p className="ques">
                            Virtual and Augmented Reality
                        </p>

                        <div className="overlay">
                            <p className="faqtext">
                            Augmented reality (AR) and Virtual Reality (VR) bridge the digital and physical worlds. They allow you to take in information and content visually, in the same way you take in the world. AR dramatically expands the ways our devices can help with everyday activities like searching for information, shopping, and expressing yourself. VR lets you experience what it's like to go anywhere — from the front row of a concert to distant planets in outer space.
                            </p>
                        </div>
                    </div>

                    <div className="faqcontainer">
                        <p className="ques">
                            Blockchain
                        </p>

                        <div className="overlay">
                            <p className="faqtext">
                            A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.

                            </p>
                        </div>
                    </div>

                    <div className="faqcontainer">
                        <p className="ques">
                            Internet of Things
                        </p>

                        <div className="overlay">
                            <p className="faqtext">
                            The Internet of things describes physical objects with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks.
                            </p>
                        </div>
                    </div>

                    <div className="faqcontainer">
                        <p className="ques">
                            5G
                        </p>

                        <div className="overlay">
                            <p className="faqtext">
                            In telecommunications, 5G is the fifth-generation technology standard for broadband cellular networks, which cellular phone companies began deploying worldwide in 2019, and is the planned successor to the 4G networks which provide connectivity to most current cellphones.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Careers;


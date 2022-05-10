import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import Map from '../components/Map';
import "../css/home.css";
import "../css/careers.css";
import NavBar from '../components/Navbar';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as BsIcons from 'react-icons/bs';
import { useNotification } from "./Notifications/NotificationProvider";
import Popup from '../components/PopUp';

const Home = () => {



    var arrayJobs = [];
    var arraySavedJobs = [];
    const [savedJob, setsavedJob] = useState("");


    const [buttonPopup, setButtonPopup] = useState(false);

    const [company, setCompany] = useState(""); //state variable for job title 
    const [title, setTitle] = useState(""); //state variable for job title 
    const [field, setField] = useState(""); //state variable for job field
    const [location, setLocation] = useState(""); //state variable for job field 
    const [skill, setSkill] = useState(""); //state variable for job field  
    const [resData, setResData] = useState([]);
    const [tempPost, setTempPost] = useState({});
    const type = window.localStorage.getItem('type');

    const { baseUrl } = require("../config/config.js"); // retrieves site url where POST request is sent

    //generates search results
    useEffect(() => {
    }, []);

    // event handler "handleSubmit" handles 'submit' button event
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseUrl + ":3001/search",
            { company, title, field, location, skill }) //created POST request to send data to URL
            .then(res => {
                console.log(res.data.result);
                console.log(res.data)
                setResData(res.data.result); // sets value

                // console.log(typeof (res.data.result))
                // console.log(typeof (res.data))
                // console.log(res.data)

                // console.log(res.data.result); //displays object 'results' that has array of 31 objects
                // console.log(res.data.result[0]); //displays first item in array of objects w full description

                // console.log(Object.keys(res.data.result).length);

                //window.localStorage.getItem('id');

            });
    };

    const handleBookmark = async (postId) => {

        const getJWT = async () => {
            return window.localStorage.getItem("accessToken");
        }

        const JWT = await getJWT();

        axios.post(baseUrl + ":3001/bookmarkPost",
            { postId: postId },
            {
                headers: { "Authorization": `Bearer ${JWT}` },
            })
    }

    const handlePopup = (post) => {
        setButtonPopup(true);
        setTempPost(post);
    }

    // id and name in 'job posts' databse table were changed from 'job id and job name'
    const save = (e) => {

        // console.log("RESDATA:", resData);

        // // had to do this whole loop on resData bc i couldnt access arrayjobs updated value from handlesubmit due to closures
        // //res.data.result => resData bc we setResData in handleSubmit
        // for (let i = 0; i < Object.keys(resData).length; i++) {
        //     //if arrayJobs is the length of resData so it doesnt keep pushing everytime and doubling
        //     if (arrayJobs.length <= Object.keys(resData).length) {
        //         console.log("RES.DATA.RESULT[I]", resData[i]) //i know res.data.result is an ARRAY OF OBJECTS so im looping thru them
        //         console.log(typeof (resData[i]))
        //         console.log(resData[i].id)
        //         console.log(resData[i].name)

        //         arrayJobs.push(resData[i]) //pushing each object in arrayJobs so later i can COMPARE jobs w the jobs in the array to save them
        //         console.log("ARRAYJOBS:", arrayJobs)
        //         console.log("ARRAYJOBS ID:", arrayJobs[i].id)
        //         //window.localStorage.setItem('array', arrayJobs)

        //     }


        // };

        // //console.log(resData.post['name'])
        // let job = e.currentTarget.getAttribute('data-id')
        // console.log(job)
        // console.log(arrayJobs.length)

        // arraySavedJobs.push(job)
        // //i need savedJob to be an array in local storage not just a single variable
        // window.localStorage.setItem('savedJob', JSON.stringify(arraySavedJobs)); //maybe we need to make savedJob exist in server.js just like in /login

        // //everytime i press search to see all the jobs, it erases the local storage i saved, maybe we should just make the jobs always be visible


        // //not rlly necessary after all since i can push the job as it is to an array w out verifying its in resData
        // //if it matches the jobs in resData then push to array 
        // for (let i = 0; i < arrayJobs.length; i++) {
        //     // console.log("LOOP:",arrayJobs[i])
        //     arrayJobs[i]
        //     if (job === arrayJobs[i].name) {
        //         //now set job as local storage to later be accessed by bookmarks page?
        //         console.log("ENTERED LOOP 2")
        //         console.log(arrayJobs[i].name)
        //         console.log("MATCH")
        //         //arraySavedJobs.push(arrayJobs[i].name)

        //     }
        // }

        // console.log("ARRAYSAVEDJOB:", arraySavedJobs)

        // //match button on job w button on job in arrayJobs
        // //if button of Job saved === job in arrayJobs then do somn to that specific job

    };

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-careers">
                    <Sidebar>
                    </Sidebar>

                </div>

                <div className="center-scroll">
                    <div>
                        <div className="search-container">
                            <form onSubmit={handleSubmit}>
                                <input className="input-search" type="text" placeholder="Search" onChange={e => setTitle(e.target.value)} />

                                {/* field drown down */}
                                <select id="field" name="field" onChange={e => setField(e.target.value)}>
                                    <option value="">Select field</option>
                                    <option value="AI and ML">Artificial Intelligence and Machine Learning</option>
                                    <option value="Robotic Process Automation">Robotic Process Automation</option>
                                    <option value="Edge Computing">Edge Computing</option>
                                    <option value="Quantum Computing">Quantum Computing</option>
                                    <option value="Virtual Reality and Augmented Reality">Virtual Reality and Augmented Reality</option>
                                    <option value="Blockchain">Blockchain</option>
                                    <option value="Internet of Things">Internet of Things</option>
                                    <option value="5G">5G</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                </select>

                                {/* location drown down */}
                                <select id="locations" name="field" onChange={e => setLocation(e.target.value)}>
                                    <option value="">Select location</option>
                                    <option value="San Francisco, CA">San Francisco, CA</option>
                                    <option value="Palo Alto, CA">Palo Alto, CA</option>
                                    <option value="San Diego, CA">San Diego, CA</option>
                                    <option value="Phoenix, AZ">Phoenix, AZ</option>
                                    <option value="Las Vegas, NV">Las Vegas, NV</option>
                                    <option value="Chicago, IL">Chicago, IL</option>
                                    <option value="Los Angeles, CA">Los Angeles, CA</option>
                                    <option value="Seattle, WA">Seattle, WA</option>
                                    <option value="Austin, TX">Austin, TX</option>
                                    <option value="New York, NY">New York, NY</option>
                                    <option value="Atlanta, GA">Atlanta, GA</option>
                                    <option value="Orlando, FL">Orlando, FL</option>
                                    <option value="Tampa, FL">Tampa, Florida</option>
                                    <option value="Alexandria, VA">Alexandria, VA</option>
                                    <option value="Washington, D.C.">Washington, D.C.</option>
                                    <option value="Portland, OR">Portland, OR</option>
                                    <option value="Houston, TX">Houston, TX</option>
                                    <option value="Boston, MA">Boston, Massachusetts</option>
                                    <option value="Denver, CO">Denver, CO</option>
                                    <option value="Boise, ID">Boise, ID</option>

                                </select>

                                {/* skills drown down */}
                                <select id="skills" name="field" onChange={e => setSkill(e.target.value)}>
                                    <option value="">Select skill</option>
                                    <option value="C++">C++</option>
                                    <option value="Java">Java</option>
                                    <option value="Excel">Excel</option>
                                    <option value="Python">Python</option>
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="Go">Go</option>
                                    <option value="C#">C#</option>
                                    <option value="React.js">React.js</option>
                                    <option value="Ruby">Ruby</option>
                                    <option value="Swift">Swift</option>
                                </select>

                                <button type="submit">Search<i className="Search" /></button>

                                <a className="question">?
                                    <span className="questionText">
                                        Search for jobs based <br />
                                        on the given filters and <br />
                                        the results will appear <br />
                                        bellow!
                                    </span>
                                </a>

                            </form>

                        </div>
                    </div>


                    {/* map function that loads results with the same format */}
                    {resData.map(post => (
                        <div className='search-results-container' >

                            <div className='jobImage'>
                                <img className='actualImage' src={post["job photo"]} />
                            </div>



                            <div key={post.toString()} className='jobInfo'>
                                {/* <div>Job ID: {post["id"]}</div> */}

                                <div className='jobName'>{post["job name"]}</div>
                                <div className='jobLocation'>{post["company"] + " • " + post["job location"]}</div>
                                <br></br>
                                <div className='jobDate' >{post["date posted"]}</div>
                                
                                <br></br>
                                <div>Job Field: {post["job field"]}</div>
                                <div>Job Skills: {post["job skills"]}</div>
                                <div>Salary: ${post["job salary"]}</div>
                              
                               <br></br>
                                <div className="plusButton" onClick={() => handlePopup(post)} >
                                    <CgIcons.CgMoreO size={28} />
                                </div>

                            </div>


                            {type === null && <div>
                                {/*  data-id={post.name} is name of job onClick={save} data-id={post}*/}
                                <button onClick={() => window.location.replace("/login")}>
                                    <BsIcons.BsBookmark />
                                </button>

                                <button onClick={() => window.location.replace("/login")}>
                                    <AiIcons.AiOutlineAudit />
                                </button>
                            </div>}

                            {type === "Student" && <div>
                                {/*  data-id={post.name} is name of job onClick={save} data-id={post}*/}
                                <button onClick={() => handleBookmark(post["id"])}>
                                    <BsIcons.BsBookmark />
                                </button>

                                <button>
                                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdQ2LHw5wSgrGGh6pZzV53IAFZ4eSg4fwCvEGk6SfCVPmBfrg/viewform?usp=sf_link'>
                                        <AiIcons.AiOutlineAudit />
                                    </a>

                                </button>
                            </div>}


                        </div>




                    ))}

                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <div>
                            <h4>Description</h4>
                            <div>{tempPost["job location"]}</div> <br></br>

                            <p className='descriptionScroll'>
                                {tempPost["job desc."]}
                            </p>

                        </div>
                        <Map address={tempPost["job location"]}>
                        </Map>
                    </Popup>

                </div>

            </div>


        </div>



    );
};

export default Home;


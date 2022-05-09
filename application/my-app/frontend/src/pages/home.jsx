import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import "../css/home.css";
import "../css/careers.css";
import NavBar from '../components/Navbar';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { useNotification } from "./Notifications/NotificationProvider";
<<<<<<< HEAD
import Popup from '../components/PopUp';
=======
import { StudentButtons } from '../components/JobButtons';
>>>>>>> 87bb6682fcd7cf65b275675df1acd5ceb6ff1c1c


const Home = () => {

<<<<<<< HEAD
=======
    //NOTIFICATION
    const [inputVal, setInputVal] = useState("");
    const dispatch = useNotification();

    const handleNewNotification = () => {
        dispatch({
            type: "SUCCESS",
            message: inputVal,
            title: "Successful Request"
        })
    }
>>>>>>> 87bb6682fcd7cf65b275675df1acd5ceb6ff1c1c


    var arrayJobs = [];
    var arraySavedJobs = [];
    const [savedJob, setsavedJob] = useState("");


    const [buttonPopup, setButtonPopup] = useState(false);

    const [title, setTitle] = useState(""); //state variable for job title 
    const [field, setField] = useState(""); //state variable for job field
    const [location, setLocation] = useState(""); //state variable for job field 
    const [skill, setSkill] = useState(""); //state variable for job field  
    const [resData, setResData] = useState([]);

    const { baseUrl } = require("../config/config.js"); // retrieves site url where POST request is sent

    // event handler "handleSubmit" handles 'submit' button event
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseUrl + ":3001/search",
            { title, field, location, skill }) //created POST request to send data to URL
            .then(res => {
                console.log(res.data.result);
                console.log(res.data)
                setResData(res.data.result); // sets value

                console.log(typeof (res.data.result))
                console.log(typeof (res.data))
                console.log(res.data)

                console.log(res.data.result); //displays object 'results' that has array of 31 objects
                console.log(res.data.result[0]); //displays first item in array of objects w full description

                console.log(Object.keys(res.data.result).length);



                //window.localStorage.getItem('id');

            });
    };
<<<<<<< HEAD


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

=======

    const popUp = (e) => {
        let description = e.currentTarget.getAttribute('data-id')
        console.log(description)
        alert(description)
    };

    const save = () => {
        // if save button is clicked then it will check each post and if it sees that a post has been clicked, that post will be moved to an array of bookmarks
        const bookmarks = [];
        // console.log(resData)
        for (key in resData) {
            if (title === X) {
                bookmarks.concat(title);
                console.log(bookmarks);
            }
        }
>>>>>>> 87bb6682fcd7cf65b275675df1acd5ceb6ff1c1c
    };


    //generates search results
    useEffect(() => {
    }, []);

    return (
        <div>
            <NavBar>
            </NavBar>

            <div className="container">

                <div className="sidenav-careers">
                    <Sidebar>
                    </Sidebar>

                </div>

                <div class="center-scroll">
                    <div>
                        <div className="search-container">
                            <form onSubmit={handleSubmit}>
                                <input className="input-search" type="text" placeholder="Search" onChange={e => setTitle(e.target.value)} />

                                {/* field drown down */}
                                <select id="field" name="field" onChange={e => setField(e.target.value)}>
                                    <option value="">Select Field</option>
                                    <option value="AI and ML">AI and ML</option>
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
                                    <option value="">Select Location</option>
                                    <option value="California">California</option>
                                    <option value="Seattle">Seattle</option>
                                    <option value="Texas">Texas</option>
                                    <option value="New York">New York</option>
                                    <option value="Florida">Texas</option>
                                    <option value="Virginia">Virginia</option>
                                    <option value="Washington State">Washington State</option>
                                </select>

                                {/* skills drown down */}
                                <select id="skills" name="field" onChange={e => setSkill(e.target.value)}>
                                    <option value="">Select Skill</option>
                                    <option value="C++">C++</option>
                                    <option value="Java">Java</option>
                                    <option value="Excel">Excel</option>
                                    <option value="Python">Python</option>
                                    <option value="JavaScript">Java Script</option>
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
<<<<<<< HEAD
                        <div className='search-results-container' >
=======
                        <div className='search-results-container' onClick={popUp} data-id={post["job desc."]}>
>>>>>>> 87bb6682fcd7cf65b275675df1acd5ceb6ff1c1c

                            <div className='jobImage'>
                                <img className='actualImage' src={post["job photo"]} />
                            </div>

                            <div key={post.toString()} className='jobInfo'>
<<<<<<< HEAD
                                <div>Job ID: {post["id"]}</div>
                                <div className='jobName'>Job Name: {post["name"]}</div>
=======


                                <div>Job ID: {post["id"]}</div>
                                <div className='jobName'>Job Name: {post["name"]}</div>
                                <div>Job Field: {post["job field"]}</div>
                                <div>Date Posted: {post["date posted"]}</div>
                                <div>Job Location: {post["job location"]}</div>
                                <div>Job Salary: {post["job salary"]}</div>
                                <div>Job Skills: {post["job skills"]}</div>
                                <div class="faqcontainer">
                                    Learn More +
                                    <div class="overlay">
                                        <p class="faqtext">
                                            {post["job desc."]}
                                        </p>
                                    </div>
                                </div>

                            </div>



                            {/* <div key={post.toString()} className='jobInfo'>
                                <div className='jobName'>Job Name: {post["job name"]}</div>
>>>>>>> 87bb6682fcd7cf65b275675df1acd5ceb6ff1c1c
                                <div>Job Field: {post["job field"]}</div>
                                <div>Date Posted: {post["date posted"]}</div>
                                <div>Job Location: {post["job location"]}</div>
                                <div>Job Salary: {post["job salary"]}</div>
                                <div>Job Des: {post["job desc."]}</div>
                                <div>Job Skills: {post["job skills"]}</div>
<<<<<<< HEAD



                                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                    <div>Job Des: {post["job desc."]}</div>
                                </Popup>

                                <div onClick={() => setButtonPopup(true)} >
                                    <AiIcons.AiOutlinePlusCircle />
                                </div>




                                {/* <div className='faqcontainer1'>
                                <div onClick={popUp} >
                                <AiIcons.AiOutlinePlusCircle />
                                </div>
                                 
                                    <div class='overlay1'>
                                        <div className='faqtext1'>
                                            {post["job desc."]}
                                        </div>
                                    </div>
                                </div> */}

                            </div>
=======
                            </div> */}
>>>>>>> 87bb6682fcd7cf65b275675df1acd5ceb6ff1c1c





                            <div>
<<<<<<< HEAD
                                {/*  data-id={post.name} is name of job*/}
                                <button onClick={save} data-id={post} >
=======
                                <button onClick={save} value="savebutton">
>>>>>>> 87bb6682fcd7cf65b275675df1acd5ceb6ff1c1c
                                    <BsIcons.BsBookmark />
                                </button>

                                <button href="">
                                    <AiIcons.AiOutlineAudit />
                                </button>
<<<<<<< HEAD
=======

>>>>>>> 87bb6682fcd7cf65b275675df1acd5ceb6ff1c1c
                            </div>





                        </div>



                    ))}
                </div>
            </div>

        </div>


    );
};

export default Home;


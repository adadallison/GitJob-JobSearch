import React, { useReducer, useState } from 'react';
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import "../css/form.css";
import axios from 'axios';

//Extra feature that we did not complete
const formReducer = (state, event) => {
    if (event.reset) {
        return {


            firstname: '',
            lastname: '',
            jobtitle: '',
            resume: '',


        }
    }
    return {
        ...state,
        [event.name]: event.value

    }
}

function Form4resume() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const [file, setFile] = useState(null);

    const { baseUrl } = require("../config/config.js");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);

        let tempFormData = new FormData();
        console.log(file);
        tempFormData.append('file', file);

        axios.post(baseUrl + ":3001/postResume", tempFormData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data.result);
                setResData(res.data.result);
                this.props.history.push({
                    pathname: '/results',
                    state: resData // your data array of objects
                })

            });

        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            })
        }, 3000)

    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    const handleUpload = event => {
        setFile(event.target.files[0]);
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

    return (
        <div>
            <NavBar>
            </NavBar>


            <div className="container">
                <Sidebar>

                </Sidebar>


                <div className="JobPosting3">
                    {submitting &&
                        <div>You are submitting the following:
                            <ul>
                                {Object.entries(formData).map(([name, value]) => (
                                    <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                                ))}
                            </ul></div>
                    }

                    <form onSubmit={handleSubmit}>

                        <fieldset>
                            <label>
                                <p>First Name</p>
                                <input name="firstname" onChange={handleChange} value={formData.firstname || ''} />
                            </label>
                            <label>
                                <p>Last Name</p>
                                <input name="lastname" onChange={handleChange} value={formData.lastname || ''} />
                            </label>
                            <label>
                                <p>Job Title/Skill</p>
                                <input name="jobtitle" onChange={handleChange} value={formData.jobtitle || ''} />
                            </label>

                            <label>
                                <div>
                                    <p>Resume</p>
                                    <input name="resume" type="file" onChange={handleUpload} value={formData.resume || ''} />
                                </div> </label>
                            <label>
                                <button type="submit">Submit</button></label><a className="question">?
                                <span className="questionText">
                                    Post a resume.<br />

                                </span>
                            </a>

                        </fieldset>



                    </form>
                </div>

            </div>
        </div>
    )
}

export default Form4resume;
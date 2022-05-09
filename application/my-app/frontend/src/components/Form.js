import React, { useReducer, useState } from 'react';
import axios from 'axios';
import "../css/home.css";
import Sidebar from './Sidebar';
import NavBar from '../components/Navbar';

const { baseUrl } = require("../config/config.js");

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      jobtitle: '',
      pay: '',
      jobdescription: '',
      company: '',
      skills: '',
      location: '',
    }
  }
  return {
    ...state,
    [event.name]: event.value

  }
}

function Form() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    axios.post(baseUrl + ":3001/jobPost", { formData })
      .then(res => {
        console.log(res.data.result);
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

  const gitjob = () => {
    window.location.replace("/");
  }

  return (

    <div>
      <NavBar/>

  
    <div className='container'> 
      <Sidebar/>


      <div className="JobPosting2">
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
              <p>Company</p>
              <input name="company" onChange={handleChange} value={formData.company || ''} />
            </label>
            <label>
              <p>Job Title</p>
              <input name="jobtitle" onChange={handleChange} value={formData.jobtitle || ''} />
            </label>
            <label>
              <p>Pay</p>
              <input name="pay" onChange={handleChange} value={formData.pay || ''} />
            </label>
            <label>
              <p>Job Description </p>
              <textarea name="jobdescription" onChange={handleChange} value={formData.jobdescription || ''} />
            </label>
            <label>
              <p>Logo</p>
              <input name="logo" type="file" onChange={handleChange} value={formData.logo || ''} />
            </label>
            <label>
              <p>Jobs</p>
              <select name="jobs" onChange={handleChange} value={formData.jobs || ''}>
                <option value=" ">--Please choose a job--</option>
                <option value="AI and ML">Artificial Intelligence and Machine Learning</option>
                <option value="Robotic Process Automation">Robotic Process Automation</option>
                <option value="IoT">Internet Of Things</option>
                <option value="5G">5G</option>
                <option value="Virtual Augmented Reality">Virtual Augmented Reality</option>
                <option value="Blockchain">Blockchain</option>
                <option value="Quantum Computing">Quantum Computing</option>
                <option value="Edge Computing">Edge Computing</option>
                <option value="Cyber Security">Cyber Security</option>
              </select>
            </label>


            <label>
              <p>Location</p>
              <select name="location" onChange={handleChange} value={formData.location || ''}>
                <option value="">--Please choose a location--</option>
                <option value="California">California</option>
                <option value="Seattle">Seattle</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
                <option value="Florida">Florida</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington State">Washington State</option>
              </select>
            </label>


            <label>
              <p>Skills</p>
              <select name="skill" onChange={handleChange} value={formData.skill || ''} >
                <option value="">--Please choose a skill--</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="Excel">Excel</option>
                <option value="Python">Python</option>
                <option value="JavaScript">Java Script</option>
              </select>
            </label>

            <label>
              <button type="submit">Submit</button><a className="question">?
                                    <span className="questionText">
                                        Post a job to find new recruits.<br />
                                       
                                    </span>
                                </a>
            </label>

          </fieldset>


        </form>
      </div>

      </div>
      </div>
  )
}

export default Form;
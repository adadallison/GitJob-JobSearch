import React, { useReducer, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons';
import "../css/form.css";
import Search from '../components/Search';
import axios from 'axios';

const {baseUrl} = require("../config/config.js");

const formReducer = (state, event) => {
  if (event.reset) {
    return {


      firstname: '',
      lastname: '',
      jobtitle: '',
      passion: '',
      pay: '',
      jobdescription: '',
      company: '',
      skills: '',
      location: '',
      phonenumber: '',

    }
  }
  return {
    ...state,
    [event.name]: event.value

  }
}

function Form() {
<<<<<<< HEAD


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
  
=======
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);


  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)

  }
>>>>>>> 2df60d10d455732c81229627fe623228f8b30359
  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }



  return (
    <>

      <div>
        <div id="login">GitJob</div>
      </div>

      <div className="JobPosting2">
        <h1>Post a Job</h1>
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
              <p>Job Title</p>
              <input name="jobtitle" onChange={handleChange} value={formData.jobtitle || ''} />
            </label>
            <label>
              <p>Passion</p>
              <input name="passion" onChange={handleChange} value={formData.passion || ''} />
            </label>
            <label>
              <p>Pay</p>
              <input name="pay" onChange={handleChange} value={formData.pay || ''} />
            </label>
            <label>
              <p>                Job Description
              </p>
              <input name="jobdescription" onChange={handleChange} value={formData.jobdescription || ''} />
            </label>
            <label>
              <p>Company</p>
              <input name="company" onChange={handleChange} value={formData.company || ''} />
            </label>
            <label>
              <p>Phone Number</p>
              <input name="phonenumber" onChange={handleChange} value={formData.phonenumber || ''} />
            </label>
            <label>

              <p>Jobs</p>
              <select name="jobs" onChange={handleChange} value={formData.jobs || ''}>
                <option value="">--Please choose a job--</option>
                <option value="Aii">Artificial Intelligence and Machine Learning</option>
                <option value="Rpa">Robotics Process Automation</option>
                <option value="IoT">Internet of things</option>
                <option value="5g">5g</option>
                <option value="Var">Virtual Augmented Reality</option>
                <option value="Chain">Blockchain</option>
                <option value="Qc">Quantum Computing</option>
                <option value="Ec">Edge Computing</option>
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
              </select>
            </label>

            <label>
              <p>Skills</p>
              <select name="skill" onChange={handleChange} value={formData.skill || ''}>
                <option value="">--Please choose a skill--</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="Excel">Excel</option>
                <option value="Python">Python</option>
                <option value="JavaScript">Java Script</option>
                <option value="Washington State">Washington State</option>
              </select>
            </label>
            <label>
              <button type="submit">Submit</button></label>
          </fieldset>



        </form>
      </div></>
  )
}

export default Form;
import React, { useReducer, useState } from 'react';
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
              <p>Pay</p>
              <input name="pay" onChange={handleChange} value={formData.pay || ''} />
            </label>
            <label>
              <p>Job Description </p>
              <input name="jobdescription" onChange={handleChange} value={formData.jobdescription || ''} />
            </label>
            <label>
              <p>Company</p>
              <input name="company" onChange={handleChange} value={formData.company || ''} />
            </label>
            <label>

              <p>Jobs</p>
              <select name="jobs" onChange={handleChange} value={formData.jobs || ''}>
                <option value=" ">--Please choose a job--</option>
                <option value="Ai">Artificial Intelligence and Machine Learning</option>
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
                <option value="Washington State">Washington State</option>
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
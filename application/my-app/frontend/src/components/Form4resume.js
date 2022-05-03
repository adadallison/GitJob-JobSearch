import React, { useReducer, useState } from 'react';
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import "../css/form.css";


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
  const handleChange = event => {
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
                <input name="resume" type="file" onChange={handleChange} value={formData.resume || ''} />
              </div> </label>
            <label>
              <button type="submit">Submit</button></label>

          </fieldset>



        </form>
      </div>

</div>
    </div>
  )
}

export default Form4resume;
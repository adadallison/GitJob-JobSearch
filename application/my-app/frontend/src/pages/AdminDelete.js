import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import "../css/home.css";
import "../css/form.css";
import axios from 'axios';
import {useNotification} from "./Notifications/NotificationProvider";
function AdminDelete() {

  //NOTIFICATION
  const [inputVal, setInputVal] = useState("");
  const dispatch = useNotification();
   
  const handleNewNotification = () => {
    dispatch({
      type: "SUCCESS",
      message: inputVal,
      title: "Successful Request"})
    }


  const [resData, setResData] = useState();

  const { baseUrl } = require("../config/config.js");

  useEffect(() => {
    const getAllPost = async () => {

      await axios.post(baseUrl + ":3001/search",
        { title: "", field: "" }, {
        timeout: 3000
      }) //created POST request to send data to URL
        .then(res => {
          console.log(res.data.result);
          setResData(res.data.result); // sets value
          console.log(resData);
        });
    }

    getAllPost();
  }, [])

  if (resData == undefined) {
    return null;
  }

  const deletePost = async (postId) => {
    const getJWT = async () => {
      return window.localStorage.getItem("accessToken");
    }
    const JWT = await getJWT();
    await axios.delete(baseUrl + ":3001/deletePost",
      {
        headers: { "Authorization": `Bearer ${JWT}` },
        data: {
          postId: postId
        }
      })
      .then(res => {
        if (res.data == "success") {
          setResData(resData.filter(e => e['id'] != postId))
          console.log(resData);
        }
      })
  }

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
                    <div><div className="App">
      <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
      <button onClick={handleNewNotification}>Add Notification</button>
    </div>

        <div className="center-scroll">
          {resData && resData.map(post => (
            <div className='search-results-container'>

              <div className='jobImage'>
                <img className='actualImage' src={post["job photo"]} />
              </div>


              <div key={post["id"]} className='jobInfo'>
                <div className='jobName'>Job Name: {post["job name"]}</div>
                <div>Job Field: {post["job field"]}</div>
                <div>Date Posted: {post["date posted"]}</div>
                <div>Job Location: {post["job location"]}</div>
                <div>Job Description: {post["job desc."]}</div>
                <div>Job Salary: {post["job salary"]}</div>
                <div>Job Skills: {post["job skills"]}</div>
              </div>

              <div>
                <button onClick={() => deletePost(post["id"])}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div></div></div>
    </div>
  )
}

export default AdminDelete;
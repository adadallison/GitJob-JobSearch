import React, { useReducer, useState } from 'react';
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import "../css/form.css";
import axios from 'axios';

function AdminDelete() {
    return (
        <div>
          <NavBar>
          </NavBar>
     
          <div className="container">
            <Sidebar>    
            </Sidebar>

          </div>
        </div>
      )
}
  
export default AdminDelete;
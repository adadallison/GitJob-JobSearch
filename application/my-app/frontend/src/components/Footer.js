import React from "react";
import "../css/footer.css";
import * as AiIcons from 'react-icons/ai';
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h3><AiIcons.AiFillCaretRight />Gitjob Inc</h3>
            <h5 className="list-unstyled">
              <h3>
            
        342-420-6969</h3>
              <h3>Moscow, Russia</h3>
              <h3>123 Streeet South North</h3>
           <h3>&copy; Gitjob |All rights reserved|
            Terms Of Service|Privacy</h3>
          
          
          
              
            </h5>
          </div>
        </div>
        
        {/* Column2 */}
       
      </div>
    </div>
  );
}

export default Footer;
import React from "react";
import './Reviews.css'
const reveiw = () => {
  return (
    <React.Fragment>
      <div className="Review-tab">
   <h3>Add a review</h3>
   <h4>Your Review</h4>
  
   <textarea/>
   <br/>
   
   <label for="name">Name<br/><input type="name" id="name"/></label><br/>
   <label for="email">E-mail<br/><input type="email" id="email" required/></label>
   </div>
    
    </React.Fragment>
  );
};
export default reveiw;

import React from 'react'
import user from '../../../assets/images/user-icon.png'
import   './Navbar.css'
import customerCare from '../../../assets/images/customer-care-icon.png'
const Navbar=()=>{
    
     return(
    <div className="Navbar">
         <div className="Leftitems">
           <a href="#default"><img src={customerCare} alt="care-icon"/>Phone:1-888-123-456-89</a>

            </div>

          
        <div className="Rightitems">
        <span className="dropdown1">
            <a href="/default"> <img src={user} alt="User" className="user"/>Login<i className="fas fa-angle-down"></i></a>
            <div className="dropdown-content">

                <a href="/default">Login</a>
                <a href="/default">Register</a>
            </div>
           
            </span>
            
            <a href="#default"><i className="far fa-heart"></i>Wishlist</a>
            <a href="#default"><i className="far fa-bell"></i></a>
            <div className="icons">
            <a href="#default">Checkout</a>
            </div>
           
        </div>
        </div>
       
     )
}
export default Navbar;
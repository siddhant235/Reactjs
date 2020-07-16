import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Login from '../../Authentication/Login/Login'
import user from '../../../assets/images/user-icon.png'
import   './Navbar.css'
import customerCare from '../../../assets/images/customer-care-icon.png'
class Navbar extends Component{
    state={
        showLogin:false,
        showSignUp:false
    }
    login=()=>{
        this.setState({
            showLogin:true
        })
    }
    render(){
   
     return(
    <div className="Navbar">
         <div className="Leftitems">
           <a href="#default"><img src={customerCare} alt="care-icon"/>Phone:1-888-123-456-89</a>

            </div>

          
        <div className="Rightitems">
        <span className="dropdown1">
            <Link id="/login"> <img src={user} alt="User" className="user"/>Login<i className="fas fa-angle-down"></i></Link>
            <div className="dropdown-content">

                <p onClick={this.login}>Login</p>
               
                <Link to="/Signup">Register</Link>
            </div>
           
            </span>
           
            <a href="#default"><i className="far fa-heart"></i>Wishlist</a>
            <a href="#default"><i className="far fa-bell"></i></a>
            <div className="icons">
            <a href="#default">Checkout</a>
            </div>
           
        </div>
        {this.state.showLogin&& <Login/>}
        </div>
       
     )
}
}
export default Navbar;
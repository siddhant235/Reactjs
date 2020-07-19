import React,{Component} from 'react'
import Login from '../../Authentication/Login/Login'
import SignUp from '../../Authentication/SignUp/Signup'
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
            showLogin:!this.state.showLogin,
          
        })
    }
    signup=()=>{
        this.setState({
          
            showSignUp:!this.state.showSignUp
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
             <img src={user} alt="User" className="user" /><span style={{color:"white"}}>Login</span><i className="fas fa-angle-down"></i>
            <div className="dropdown-content">

                <p onClick={this.login} show="true" >Login</p>
                <p onClick={this.signup} show="true" >Register</p>
               
              
            </div>
           
            </span>
           
            <a href="#default"><i className="far fa-heart"></i>Wishlist</a>
            <a href="#default"><i className="far fa-bell"></i></a>
            <div className="icons">
            <a href="/checkout">Checkout</a>
            </div>
           
        </div>
        {this.state.showLogin&& <Login show="true"/>}
        {this.state.showSignUp&& <SignUp show="true"/>}
        </div>
       
     )
}
}
export default Navbar;
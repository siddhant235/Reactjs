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
    slogin=()=>{
        this.setState({
            showLogin:true
          
        })
    }
    clogin=()=>{
        this.setState({
            showLogin:false
        })
    }
    showsignup=()=>{
        this.setState({
          
            showSignUp:true
        })
    }
    closeSignup=()=>{
        this.setState({
            showSignUp:false
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

                <p onClick={this.slogin} show="true" >Login</p>
                <p onClick={this.showsignup} show="true" >Register</p>
               
              
            </div>
           
            </span>
           
            <a href="#default"><i className="far fa-heart"></i>Wishlist</a>
            <a href="#default"><i className="far fa-bell"></i></a>
            <div className="icons">
            <a href="/checkout">Checkout</a>
            </div>
           
        </div>
        {this.state.showLogin&& <Login show={this.state.showLogin} close={this.clogin}/>}
        {this.state.showSignUp&& <SignUp show={this.state.showSignUp} close={this.closeSignup}/>}
        </div>
       
     )
}
}
export default Navbar;
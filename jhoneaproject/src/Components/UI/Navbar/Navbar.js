import React,{Component} from 'react'
import Login from '../../Authentication/Login/Login'
import * as authaction from '../../../store/actions/authentication'
import {connect} from 'react-redux';
import SignUp from '../../Authentication/SignUp/Signup'
import user from '../../../assets/images/user-icon.png'
import   './Navbar.css'
import customerCare from '../../../assets/images/customer-care-icon.png'
import { Redirect } from 'react-router-dom';
class Navbar extends Component{
    state={
        showLogin:false,
        showSignUp:false,
        loggedout:false
    }
    slogin=()=>{
        this.setState({
            showLogin:true,
            showSignUp:false,
            loggedout:false
          
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
    logout=()=>{
        this.props.onLogout();
        this.setState({
            loggedout:true
        })
    }
    render(){
   const loginres=localStorage.getItem('otpRes')
   let userData=''
   let Username=''
   if(loginres)
   {
   userData=JSON.parse(localStorage.getItem('userData'))
    Username=userData.userFullName
   }
   if(this.state.loggedout)
   {
       return <Redirect to="/"/>
   }
   
     return(
    <div className="Navbar">
         <div className="Leftitems">
           <a href="#default"><img src={customerCare} alt="care-icon"/>Phone:1-888-123-456-89</a>

            </div>

          
        <div className="Rightitems">
        <span className="dropdown1">
     <img src={user} alt="User" className="user" /><span style={{color:"white"}}>{loginres?Username:"Login"}</span><i className="fas fa-angle-down"></i>
            <div className="dropdown-content">
              {loginres?<div>
             
                <p onClick={this.logout} >Logout</p></div>
              
              
              :<div>
                   <p onClick={this.slogin} show="true" >Login</p>
                <p onClick={this.showsignup} show="true" >Register</p></div>
              }
              
            </div>
           
            </span>
           
            <a href="#default"><i className="far fa-heart"></i>Wishlist</a>
            <a href="#default"><i className="far fa-bell"></i></a>
            <div className="icons">
            <a href="/checkout">Checkout</a>
            </div>
           
        </div>
        {this.state.showLogin&& <Login show={this.state.showLogin} close={this.clogin}/>}
        {this.state.showSignUp&& <SignUp show={this.state.showSignUp} close={this.closeSignup} showlogin={this.slogin}/>}
        </div>
       
     )
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onLogout:()=>dispatch(authaction.logout())
    }
}
export default connect(null,mapDispatchToProps)(Navbar);
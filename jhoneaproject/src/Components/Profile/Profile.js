import React, { Component } from "react";
import MegaMenu from "../UI/MegaMenu/MegaMenu";
import {connect} from 'react-redux';
import Footer from "../UI/Footer/Footer";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
import "./Profile.css";
class profile extends Component {
  constructor(props) {
    super(props);
this.state={
profileView:true,
settingsView:false,
addressView:false,

loginuserID: "2",
	userFullName: "Gidho Patel",
	userAlternateContact: "741852963245",
	userDeviceType: "Android",
	userDeviceID: "devicetoken_vcxvxcvxcvxcvxc",
	userType: "Retailer",
	addressTitle: "Home",
	addressContactDesgination: "Fusion Informatics",
	addressAddressLine1: "501,Newyourk plaza, bodakdev",
	addressGST: "09AAAUP8175A1ZG",
	addressPAN: "AAAUP8175A",
	countryName: "India",
	stateName: "Gujarat",
	cityName: "Ahmedabad",
	addressPincode: "380045",
	apiType: "Android",
	apiVersion: "1.0"
} 
this.HandleSubmit=this.HandleSubmit.bind(this);
this.HandleInput=this.HandleInput.bind(this); 
  }
  HandleSubmit=(event)=>{
      event.preventDefault();
  }
  HandleInput=(event)=>{
      this.setState({
          [event.target.name]:event.target.value
      })
  }
  
  render()
  {
      return(
          <React.Fragment>
              <div className="mgmenu">
              <MegaMenu/>
              </div>
              <div className="Profile-Container">
                  <span className="profile-bread">
              <BreadCrumb addrs="My Profile"/>
              <hr style={{position:'relative',top:'5rem',width:'80%',right:'8rem'}}/>
              </span>
              <div className="My-Profile">
              <section className="">
                        <div className="profileMenu">
                                <p>My Profile</p>
                                <p>My Address</p>
                                <p>Settings</p>
                                <hr style={{position:'absolute',top:'3rem',width:'80%',right:'12rem'}}/>
                            </div>
                  </section>
                  <form onSubmit={this.HandleSubmit}>
                  <div className="initialDetails">
                      <p>
                       <label htmlFor="FullName" id="FullName">Full Name</label><br/>
                       <input type="text" name="userFullName" id="FullName" value={this.state.userFullName} onChange={this.HandleInput}/>
                       </p>
                       <p>
                       <label htmlFor="MobileNumber">Mobile Number</label><br/>
                       <input type="text" pattern="[0-9]{10}" name="MobileNumber" id="MobileNumber" value={this.state.userFullName} />
                       </p>
                       <p>
                        <label htmlFor="AlternateNumber">Alternate Number</label> <br/>
                        <input type="text" pattern="[0-9]{10}" name="userAlternateContact" value={this.state.userAlternateContact} onChange={this.HandleInput}/>
                      </p>
                      <p>

                       <label htmlFor="Email">E-mail ID</label><br/>
                       <input type="email" name="email" value={this.state.userFullName}/>
                      </p>
                      </div>
                      </form>
              </div>
              </div>
             <Footer/>
              </React.Fragment>
      )
  }
}
export default profile;

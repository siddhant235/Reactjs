import React, { Component } from "react";
import MegaMenu from "../UI/MegaMenu/MegaMenu";
import * as actions from "../../store/actions/HomePage";
import * as profileactions from "../../store/actions/Profile";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../UI/Footer/Footer";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
import "./Profile.css";
class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check1:false,
      check2:false,
      profileView: true,
      settingsView: false,
      addressView: false,
      mobile: "",
      email: "",
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
      apiVersion: "1.0",



    };
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.HandleInput = this.HandleInput.bind(this);
    this.profileHandler = this.profileHandler.bind(this);
    this.settingHandler = this.settingHandler.bind(this);
    this.addressHandler = this.addressHandler.bind(this);
    this.ontoggle=this.ontoggle.bind(this);
  }
  ontoggle=(e)=>
  {
     this.setState({
        [e.target.name]:e.target.checked
     })
    
  }
  profileHandler = () => {
    this.setState({
      settingsView: false,
      addressView: false,
      profileView:true,
    });
  };
  addressHandler = () => {
    this.setState({
      addressView: true,
      profileView: false,
      settingsView: false,
    });
  };
  settingHandler = () => {
    this.setState({
      addressView: false,
      profileView: false,
      settingsView: true,
    });
  };
  HandleSubmit = (event) => {
    event.preventDefault();
    const userprofile = [
      {
        loginuserID: this.state.loginuserID,
        userFullName: this.state.userFullName,
        userAlternateContact: this.state.userAlternateContact,
        userDeviceType: "Android",
        userDeviceID: "devicetoken_vcxvxcvxcvxcvxc",
        userType: "Retailer",
        addressTitle: "Home",
        addressContactDesgination: this.state.addressContactDesgination,
        addressAddressLine1: this.state.addressAddressLine1,
        addressGST: this.state.addressGST,
        addressPAN: this.state.addressPAN,
        countryName: this.state.countryName,
        stateName: "Gujarat",
        cityName: "Ahmedabad",
        addressPincode: this.state.addressPincode,
        apiType: "Android",
        apiVersion: "1.0",
      },
    ];

    this.props.onUpdateProfile(userprofile);
    console.log(userprofile);
  };
  HandleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  componentDidMount() {
    this.props.onGetCountryDetails();
    const data = JSON.parse(localStorage.getItem("userData"));
    this.setState({
      email: data.userEmail,
      mobile: data.userMobile,
      loginuserID: data.userID,
      userFullName: data.userFullName,
      userAlternateContact: data.userAlternateContact,
      userDeviceType: "Android",
      userDeviceID: "devicetoken_vcxvxcvxcvxcvxc",
      userType: "Retailer",
      addressTitle: "Home",
      addressContactDesgination: data.addressContactDesgination,
      addressAddressLine1: data.addressAddressLine1,
      addressGST: data.addressGST,
      addressPAN: data.addressPAN,
      countryName: data.countryName,
      stateName: "Gujarat",
      cityName: "Ahmedabad",
      addressPincode: data.addressPincode,
      apiType: "Android",
      apiVersion: "1.0",
    });
    console.log(data);
  }
  render() {
    // ----------------------settingsupdate----------------------------
 let settingsupdate=null;
    console.log(this.state.check1,this.state.check2)
 if(this.state.check1 && this.state.check2)
 {
 settingsupdate= [{
    loginuserID:this.state.loginuserID ,
    userEmailNotification: "Yes",
    userPushNotification: "Yes",
    apiType: "Android",
    apiVersion: "1.0"
  }]
this.props.onUpdateSettings(settingsupdate)
 }
 else if(!this.state.check1 && this.state.check2)
 {
  settingsupdate= [{
    loginuserID:this.state.loginuserID ,
    userEmailNotification: "Yes",
    userPushNotification: "No",
    apiType: "Android",
    apiVersion: "1.0"
  }]
  this.props.onUpdateSettings(settingsupdate)
 }
 else if(this.state.check1 && !this.state.check2)
 {
  settingsupdate= [{
    loginuserID:this.state.loginuserID ,
    userEmailNotification: "No",
    userPushNotification: "Yes",
    apiType: "Android",
    apiVersion: "1.0"
  }]
  this.props.onUpdateSettings(settingsupdate)
 }
 else if(!this.state.check1 && !this.state.check2)
 {
  settingsupdate= [{
    loginuserID:this.state.loginuserID ,
    userEmailNotification: "No",
    userPushNotification: "No",
    apiType: "Android",
    apiVersion: "1.0"
  }]
  this.props.onUpdateSettings(settingsupdate)
 }
 
   // ----------------------settingsupdate----------------------------

    if (this.props.updatestatus) {
      return <Redirect to="/" />;
    }
    let addrs=JSON.parse(localStorage.getItem('userData'))
    addrs=addrs.addressAddressLine1;
    let countries = this.props.countries.map((country) => {
      return (
        <option name="countryName" value={country.countryName}>
          {country.countryName}
        </option>
      );
    });
    return (
      <React.Fragment>
        <div className="mgmenu">
          <MegaMenu />
        </div>
        <div className="Profile-Container">
          <span className="profile-bread">
            <BreadCrumb addrs="My Profile" />
            <hr
              style={{
                position: "relative",
                top: "5rem",
                width: "80%",
                right: "8rem",
              }}
            />
          </span>
          <div className="My-Profile">
            <section className="">
              <div className="profileMenu">
                <p active onClick={this.profileHandler} >
                  My Profile
                </p>
                <p  onClick={this.addressHandler} >My Address</p>
                <p  onClick={this.settingHandler}>Settings</p>
                <hr
                  style={{
                    position: "absolute",
                    top: "3rem",
                    width: "80%",
                    right: "12rem",
                  }}
                />
              </div>
            </section>
            {this.state.profileView && (
              <form onSubmit={this.HandleSubmit}>
                <div className="initialDetails">
                  <p>
                    <label htmlFor="FullName" id="FullName">
                      Full Name
                    </label>
                    <br />
                    <input
                      type="text"
                      name="userFullName"
                      id="FullName"
                      value={this.state.userFullName}
                      onChange={this.HandleInput}
                      required
                    />
                  </p>
                  <p>
                    <label htmlFor="MobileNumber">Mobile Number</label>
                    <br />
                    <input
                      type="text"
                      pattern="[0-9]{10}"
                      name="MobileNumber"
                      id="MobileNumber"
                      required
                      value={this.state.mobile}
                    />
                  </p>
                  <p>
                    <label htmlFor="AlternateNumber">Alternate Number</label>{" "}
                    <br />
                    <input
                      required
                      type="text"
                      pattern="[0-9]{10}"
                      name="userAlternateContact"
                      value={this.state.userAlternateContact}
                      onChange={this.HandleInput}
                    />
                  </p>
                  <p>
                    <label htmlFor="Email">E-mail ID</label>
                    <br />
                    <input
                      required
                      type="email"
                      name="email"
                      value={this.state.email}
                    />
                  </p>
                </div>
                {/* -------------------BILLING DETAILS-------------------------- */}
                <h4
                  style={{
                    display: "block",
                    marginTop: "8rem",
                    marginLeft: "3rem",
                  }}
                >
                  Billing Deatails
                </h4>
                <div className="initialDetails">
                  <p>
                    <label htmlFor="addressContactDesgination">
                      CompanyName
                    </label>
                    <br />
                    <input
                      required
                      type="text"
                      name="addressContactDesgination"
                      id="addressContactDesgination"
                      value={this.state.addressContactDesgination}
                      onChange={this.HandleInput}
                    />
                  </p>
                  <p>
                    <label htmlFor="addressGST">GST Number</label>
                    <br />
                    <input
                      required
                      type="text"
                      name="addressGST"
                      id=" addressGST"
                      value={this.state.addressGST}
                      onChange={this.HandleInput}
                    />
                  </p>
                  <p>
                    <label htmlFor="AlternateNumber">PAN Number</label> <br />
                    <input
                      required
                      type="text"
                      name="addressPAN"
                      value={this.state.addressPAN}
                      onChange={this.HandleInput}
                    />
                  </p>
                  <p>
                    <label htmlFor=" addressTitle">Title of Address</label>
                    <br />
                    <input
                      required
                      type="text"
                      name="  addressTitle"
                      value={this.state.addressTitle}
                      onChange={this.HandleInput}
                    />
                  </p>
                  <p>
                    <label htmlFor="countryName">Country</label> <br />
                    <select
                      id="countryName"
                      onChange={this.handlechange}
                      name="countryName"
                      value={this.state.countryName}
                    >
                      {countries}
                    </select>
                  </p>
                  <p>
                    <label htmlFor="addressAddressLine1">Full Address</label>{" "}
                    <br />
                    <input
                      required
                      type="text"
                      name="addressAddressLine1"
                      value={this.state.addressAddressLine1}
                      onChange={this.HandleInput}
                    />
                  </p>
                  <p>
                    <label htmlFor="cityName">City</label> <br />
                    <input
                      required
                      type="text"
                      name="cityName"
                      value={this.state.cityName}
                      onChange={this.HandleInput}
                    />
                  </p>
                  <p>
                    <label htmlFor="stateName">State</label> <br />
                    <input
                      required
                      type="text"
                      name="stateName"
                      value={this.state.stateName}
                      onChange={this.HandleInput}
                    />
                  </p>
                  <p>
                    <label htmlFor="AlternateNumber">Pincode</label> <br />
                    <input
                      required
                      type="text"
                      pattern="[0-9]+"
                      name="addressPincode"
                      value={this.state.addressPincode}
                      onChange={this.HandleInput}
                    />
                  </p>
                </div>
                <button type="submit" className="profile-submit">
                  Submit
                </button>
              </form>
            
            )}
            {/* ---------------------------------ADDRESS------------------------------------------ */}
              {this.state.addressView &&(
               
            <section className="Your-Address">
            <h4>DELIVERY LOCATION</h4>
            <hr />
            <div className="addrs-card">
              <div className="addrs-content">
                <label className="container">
                  <input type="radio" name="radio" />
                  Home
                  <span className="checkmark"></span>
                  <p style={{color:"#666"}}>
                    B-4, Shivalik Business Center, Opp. Kensville Golf Academy,
                    B/H. Rajpath Club Off. s.G.Highway, Ahmedabad, Gujrat 380054
                   {addrs}
                  </p>
                </label>
                <p className="fas fa-edit">Edit</p>
                <p className="fas fa-trash">Delete</p>
              </div>
            </div>
          </section>
                
                  
              )}
              {/* -------------------------------Settings--------------------------------------- */}
              {this.state.settingsView &&(
                <div className="Settings-Update"> 
                 <p >PUSH NOTIFICATIONS</p>
                    <label class="switch">
                  <input type="checkbox" onChange={this.ontoggle} defaultChecked={false} name="check1"/>
              <span className="slider round"></span>
                      </label>
                      {/* <hr style={{position:'absolute',top:'20rem'}}/> */}
                      <p>EMAIL NOTIFICATIONS</p>
                      <label class="switch">
                  <input type="checkbox" onChange={this.ontoggle}  defaultChecked={false} name="check2"/>
                  <span class="slider round"></span>
                      </label>
                  </div>
                  
              ) }
              
           
          </div>
        </div>
       
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    countries: state.home.countryDetails,
    updatestatus: state.profile.updatestatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetCountryDetails: () => dispatch(actions.getcountrydetails()),
    onUpdateProfile: (userprofile) =>dispatch(profileactions.profielupdate(userprofile)),
    onUpdateSettings:(settingsdata)=>dispatch(profileactions.settingsUpdate(settingsdata))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(profile);

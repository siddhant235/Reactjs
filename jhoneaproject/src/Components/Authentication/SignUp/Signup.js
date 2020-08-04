import React, { Component } from "react";
import * as actions from "../../../store/actions/HomePage";
import * as authactions from "../../../store/actions/authentication";
import "./Signup.css";
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import Modal from "../../UI/Modal/Modal";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closed: true,

      // userFullName: "",
      // userEmail: "",
      // country: "India",
      // stateName: "GUJARAT",
      // city: "aaa",
      // userID: "",

      // userMobile: "9979517447",
      // userCountryCode: "+91",
      // countryID: "1",
      // userDeviceType: "Android",
      // userDeviceID: "devicetoken_vcxvxcvxcvxcvxc",
      // userType: "Retailer",
      // apiType: "Android",
      userFullName: "Ankit Patel",
      userEmail: "patelankit1516@gmail.com",
      userMobile: "9979517447",
      userCountryCode: "91",
      countryID: "1",
      userDeviceType: "Android",
      userDeviceID: "devicetoken_vcxvxcvxcvxcvxc",
      userType: "Retailer",
      apiType: "Android",
      apiVersion: "1.0",
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // let id=null
    // this.props.countries.filter(item=>item.countryDialCode===this.state.countryDialCode).map(items=>{
    //  id=items.countryID
    //  this.setState({
    //    countryID:id
    //  })
    // })
  
    const data = [
      {
        // userID: uuid(),
        userFullName: this.state.userFullName,
        userEmail: this.state.userEmail,
        userMobile: this.state.userMobile,
        userCountryCode: this.state.userCountryCode,
        countryID:this.state.countryID,
        userDeviceType: "Android",
        userDeviceID: "devicetoken_vcxvxcvxcvxcvxc",
        userType: "Retailer",
        apiType: "Android",
        apiVersion: "1.0",
      },
    ];
    this.props.OnSignup(data);
    console.log(data);
  }
  componentDidMount() {
    this.props.onGetCountryDetails();
    this.props.onGetStateDetails();
    this.props.onGetCityDetails();
  }
  handlechange = (e) => {
  
    this.setState({
      [e.target.name]: e.target.value,
      
    });
  };
  render() {
    if(this.props.status)
    { 
      
     return <Redirect to="/"/>
    }
    let countries = this.props.countries.map((country) => {

      return (
        <option name="userCountryCode" value={country.countryDialCode}>
          {country.countryDialCode}
        </option>
      );
    });
    // let states = this.props.stateDetails.map((state) => {
    //   return (
    //     <option name="stateName" value={state.stateName}>
    //       {state.stateName}
    //     </option>
    //   );
    // });

    // let cities = this.props.city.map((citi) => {
    //   return (
    //     <option name="city" value={citi.cityName}>
    //       {citi.cityName}
    //     </option>
    //   );
    // });
    console.log(this.props.message);
    return (
      
      <React.Fragment>
        <div className="Signup">
          {this.props.show && (
            <Modal show="true" size="480px">
              {!this.props.Signupstatus ?<div className="signup">
                <header>
                  Signup
                  <hr />
                  <i
                    className="fas fa-times"
                    onClick={this.props.close}
                    style={{
                      fontSize:"20px",
                      position: "absolute",
                      left: "25rem",
                      bottom: "27.5rem",
                    }}
                  ></i>
                </header>
                <form id="form" onSubmit={this.handleSubmit}>
                  <label htmlFor="text">Enter Full Name</label>
                  <input
                    id="text"
                    type="text"
                    required
                    placeholder="Enter Full Name"
                    name="userFullName"
                    onChange={this.handlechange}
                  />
                  <br />
                  <label htmlFor="text">E-mail:</label>
                  <input
                    id="text"
                    type="email"
                    required
                    placeholder="Enter E-mail"
                    name="userEmail"
                    onChange={this.handlechange}
                  />
                  <br />
                
                 
                  <label htmlFor="Mobile">MOBILE NUMBER</label>
                  <br />
                  <div >
                  <select style={{width:"15%"}}
                    id="country"
                    onChange={this.handlechange}
                    name="userCountryCode"
                    value={this.state.userCountryCode}
                  >
                    {countries}
                  </select>
                  <input style={{position:"relative",width:"70%",bottom:"2.25rem",right:"6rem"}}type="text" pattern="[0-9]{10}" name="userMobile" onChange={this.handlechange}/>
                  </div>
                  {/* <select
                    id="country"
                    onChange={this.handlechange}
                    name="country"
                    value={this.state.country}
                  >
                    {countries}
                  </select>
                  <br />

                  <label htmlFor="country">State</label>
                  <br />
                  <select
                    id="country"
                    onChange={this.handlechange}
                    name="stateName"
                    value={this.state.stateName}
                  >
                    {states}
                  </select>

                  <br />

                  <label htmlFor="country">City</label>
                  <br />
                  <select
                    id="country"
                    onChange={this.handlechange}
                    name="city"
                    value={this.state.city}
                  >
                    {cities}
                  </select> */}
                  <br />
                  <button type="submit" className="Buttonsubmit1">
                    Submit
                  </button>
                </form>
                </div>:
                <div className="Signed-up">
                
                  {this.props.message}
                
                  <p onClick={this.props.showlogin}>Go to Login</p>
                  </div>
                
                }
              
            </Modal>
          )}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    countries: state.home.countryDetails,
    stateDetails: state.home.stateDetails,
    city: state.home.cityDetails,
    message:state.auth.Signupmessage,
    Signupstatus:state.auth.Signupstatus,
    user:state.auth.userData
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetCountryDetails: () => dispatch(actions.getcountrydetails()),
    onGetStateDetails: () => dispatch(actions.getstatedetails()),
    onGetCityDetails: () => dispatch(actions.getcitydetails()),
    OnSignup: (UserDetails) => dispatch(authactions.signup(UserDetails)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);

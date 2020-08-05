import React, { Component } from "react";
import "./Login.css";
import * as authAction from "../../../store/actions/authentication";
import { connect } from "react-redux";
import Modal from "../../UI/Modal/Modal";
import { Redirect } from "react-router-dom";
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageID: "2",
      userCountryCode: "91",
      countryID: "1",
      userMobile: " ",
      userType: "Retailer",
      apiType: "Android",
      apiVersion: "1.0",
      otp: "",
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    
    this.resendotp=this.resendotp.bind(this);
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  handleSubmit(e) {
    e.preventDefault();
    if(!this.props.loginstatus)
    {
    const data = [
      {
        languageID: this.state.languageID,
        userCountryCode: this.state.userCountryCode,
        countryID: this.state.countryID,
        userMobile: this.state.userMobile,
        userType: this.state.userType,
        apiType: this.state.apiType,
        apiVersion: this.state.apiVersion,
      },
    ];
    this.props.onLogin(data);
  }
   
   else{
     const otpData=[{
      loginuserID: localStorage.getItem('userID'),
      userOTP: this.state.otp,
      userDeviceID: "token",
      apiType: "Android",
      apiVersion: "1.0"
    }];
     this.props.onVerify(otpData)
   };
  }
  resendotp=()=>{
    const id=localStorage.getItem('userID');
    const userdata=JSON.parse(localStorage.getItem('userData'))
    const mobileNumber=userdata.userMobile
   const resendData=[{
    loginuserID: id,
    userMobile: mobileNumber,
    apiType: "Android",
    apiVersion: "1.0"
  }]
  this.props.onResendotp(resendData);
  }
  render() {
  
  
    const Res=localStorage.getItem('otpRes')

    if (Res) 
    {return <Redirect to="/" />}
    return (
      <React.Fragment>
        {this.props.show && (
          <Modal show>
            {!this.props.loginstatus ? (
              <div className="login">
                <form id="form" onSubmit={this.handleSubmit}>
                  <i
                    class="fas fa-times"
                    onClick={this.props.close}
                    style={{
                      position: "absolute",
                      left: "22rem",
                    }}
                  ></i>
                  <label for="number">Mobile Number</label>
                  <input
                    id="number"
                    type="text"
                    pattern="[0-9]+"
                    name="userMobile"
                    required
                    onChange={this.handleInput}
                  />
                  <br />

                  <button type="submit" className="Buttonsubmit">
                    Send OTP
                  </button>
                </form>
              </div>
            ) : (
              <form onSubmit={this.handleSubmit}>
                <div>
            <p>{this.props.loginmessage}</p>
                  <label for="otp">OTP:</label>{" "}
                  <input
                    id="otp"
                    type="text"
                    pattern="[0-9]+"
                    name="otp"
                    onChange={this.handleInput}
                  />{" "}
                  <br />:
                  <button
                    type="submit"
                    className="Buttonsubmit"
                    // onClick={this.props.close}
                  >
                    SignIn
                  </button>
                  <h6 onClick={this.resendotp} className="resend-otp">RESEND OTP</h6>
                </div>
               </form>
            )}
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginmessage: state.auth.Loginmessage,
    loginstatus: state.auth.Loginstatus,
   
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (userData) => dispatch(authAction.login(userData)),
    onVerify:(otpData)=>dispatch(authAction.otp(otpData)),
    onResendotp:(resendData)=>dispatch(authAction.otpResend(resendData))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(login);

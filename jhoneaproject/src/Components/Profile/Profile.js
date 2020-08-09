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
      check3: false,
      check1: false,
      check2: false,
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
    this.ontoggle = this.ontoggle.bind(this);
    this.removeAddress = this.removeAddress.bind(this);
  }
  ontoggle = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };
  removeAddress = (addressID) => {
    let removeAddressData = [
      {
        loginuserID: localStorage.getItem("userID"),
        addressID: addressID,
        apiType: "Android",
        apiVersion: "1.0",
      },
    ];
    this.props.onRemoveAddress(removeAddressData);
    window.location.reload();
  };
  profileHandler = () => {
    this.setState({
      settingsView: false,
      addressView: false,
      profileView: true,
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
    console.log(this.state.addressView);
    if (this.state.addressView) {
      const addressdata = [
        {
          loginuserID: localStorage.getItem("userID"),
          addressTitle: this.state.addressTitle,
          addressAddressLine1: this.state.addressAddressLine1,
          countryName: "India",
          stateName: "Gujarat",
          cityName: "Ahmedabad",
          addressPincode: this.state.addressPincode,
          addressIsDefault: "Yes",
          apiType: "Android",
          apiVersion: "1.0",
        },
      ];
      this.props.onAddaddress(addressdata);
      window.location.reload();
    } else {
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
    }
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
    let settingsupdate = null;

    if (this.state.check1 && this.state.check2) {
      settingsupdate = [
        {
          loginuserID: this.state.loginuserID,
          userEmailNotification: "Yes",
          userPushNotification: "Yes",
          apiType: "Android",
          apiVersion: "1.0",
        },
      ];
      this.props.onUpdateSettings(settingsupdate);
    } else if (!this.state.check1 && this.state.check2) {
      settingsupdate = [
        {
          loginuserID: this.state.loginuserID,
          userEmailNotification: "Yes",
          userPushNotification: "No",
          apiType: "Android",
          apiVersion: "1.0",
        },
      ];
      this.props.onUpdateSettings(settingsupdate);
    } else if (this.state.check1 && !this.state.check2) {
      settingsupdate = [
        {
          loginuserID: this.state.loginuserID,
          userEmailNotification: "No",
          userPushNotification: "Yes",
          apiType: "Android",
          apiVersion: "1.0",
        },
      ];
      this.props.onUpdateSettings(settingsupdate);
    } else if (!this.state.check1 && !this.state.check2) {
      settingsupdate = [
        {
          loginuserID: this.state.loginuserID,
          userEmailNotification: "No",
          userPushNotification: "No",
          apiType: "Android",
          apiVersion: "1.0",
        },
      ];
      this.props.onUpdateSettings(settingsupdate);
    }

    // ----------------------Addresssupdate----------------------------

    if (this.props.updatestatus) {
      return <Redirect to="/" />;
    }
    let addrs = JSON.parse(localStorage.getItem("userData"));
    console.log(addrs.userdeliveryaddress);
    addrs = addrs.userdeliveryaddress.map((item) => (
      <div className="addrs-card">
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <div className="addrs-content">
          {item.addressTitle}
          <p style={{ color: "#666" }}>
            {/* B-4, Shivalik Business Center, Opp. Kensville Golf Academy,
          B/H. Rajpath Club Off. s.G.Highway, Ahmedabad, Gujrat 380054 */}
            {item.addressAddressLine1}
          </p>

          {/* <p className="fas fa-edit">Edit</p> */}
          <p
            className="fas fa-trash"
            onClick={() => this.removeAddress(item.addressID)}
          >
            Delete
          </p>
        </div>
      </div>
    ));

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
            <div className="profileMenu">
              {this.state.profileView ? (
                <p onClick={this.profileHandler} className="active1">
                  My Profile
                </p>
              ) : (
                <p onClick={this.profileHandler}>My Profile</p>
              )}

              {this.state.addressView ? (
                <p onClick={this.addressHandler} className="active1">
                  My Address
                </p>
              ) : (
                <p onClick={this.addressHandler}>My Address</p>
              )}
              {this.state.settingsView ? (
                <p onClick={this.settingHandler} className="active1">
                  Settings
                </p>
              ) : (
                <p onClick={this.settingHandler}>Settings</p>
              )}

              <hr
                style={{
                  position: "absolute",
                  top: "22.3rem",
                  height: "5px",
                  width: "78%",
                  right: "12rem",
                }}
              />
            </div>

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
                  <span>
                    <button type="submit" className="profile-submit">
                      Submit
                    </button>
                  </span>
                </div>
              </form>
            )}

            {/* ---------------------------------ADDRESS------------------------------------------ */}
            {this.state.addressView && (
              <section className="Your-Address">
                <h4>DELIVERY LOCATION</h4>
                <hr />
                <div className="addressCards">{addrs}</div>

                <label htmlFor="Addaddress">
                  <h4 style={{ marginTop: "5rem" }}>Add New Address</h4>
                </label>
                {/* <input
              style={{fontSize:'20px',height:'100px'}}
                type="checkbox"
                id="Addaddress"
                name="check3"
                onChange={this.ontoggle}
              /> */}
                <label
                  className="container"
                  style={{
                    position: "relative",
                    bottom: "3.5rem",
                    right: "4.5rem",
                  }}
                >
                  <input
                    type="checkbox"
                    id="Addaddress"
                    name="check3"
                    onChange={this.ontoggle}
                  />
                  <span className="checkmark"></span>
                </label>
                {this.state.check3 && (
                  <form onSubmit={this.HandleSubmit}>
                    <div className="NewaddressContainer">
                      <div className="addressDetails">
                        <p>
                          <label htmlFor="userFullName">FuLL Name</label>
                          <br />
                          <input
                            required
                            type="text"
                            name="userFullName"
                            id="userFullName"
                            value={this.state.userFullName}
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
                          <label htmlFor="addressAddressLine1">
                            Street Address
                          </label>
                          <br />
                          <input
                            required
                            type="text"
                            name="addressAddressLine1"
                            id="addressAddressLine1"
                            value={this.state.addressAddressLine1}
                            onChange={this.HandleInput}
                          />
                        </p>

                        <p>
                          <label htmlFor=" addressTitle">
                            Title of Address
                          </label>
                          <br />
                          <input
                            required
                            type="text"
                            name="addressTitle"
                            value={this.state.addressTitle}
                            onChange={this.HandleInput}
                          />
                        </p>

                        <p>
                          <label htmlFor="cityName">Town/City</label> <br />
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
                          <label htmlFor="AlternateNumber">Pincode</label>{" "}
                          <br />
                          <input
                            required
                            type="text"
                            pattern="[0-9]+"
                            name="addressPincode"
                            value={this.state.addressPincode}
                            onChange={this.HandleInput}
                          />
                        </p>
                        <span>
                          <button type="submit" className="profile-submit">
                            Submit
                          </button>
                        </span>
                      </div>
                    </div>
                  </form>
                )}
              </section>
            )}
            {/* -------------------------------Settings--------------------------------------- */}
            {this.state.settingsView && (
              <div className="Settings-Update">
                <p>PUSH NOTIFICATIONS</p>
                <label class="switch">
                  <input
                    type="checkbox"
                    onChange={this.ontoggle}
                    defaultvalue={this.state.check1}
                    defaultChecked={this.state.check1}
                    name="check1"
                  />
                  <span className="slider round"></span>
                </label>
                {/* <hr style={{position:'absolute',top:'20rem'}}/> */}
                <p>EMAIL NOTIFICATIONS</p>
                <label class="switch">
                  <input
                    type="checkbox"
                    onChange={this.ontoggle}
                    defaultvalue={this.state.check2}
                    defaultChecked={this.state.check2}
                    name="check2"
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            )}
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
    onUpdateProfile: (userprofile) =>
      dispatch(profileactions.profielupdate(userprofile)),
    onUpdateSettings: (settingsdata) =>
      dispatch(profileactions.settingsUpdate(settingsdata)),
    onAddaddress: (addressdata) =>
      dispatch(profileactions.addAddress(addressdata)),
    onRemoveAddress: (removeaddressdata) =>
      dispatch(profileactions.removeAddress(removeaddressdata)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(profile);

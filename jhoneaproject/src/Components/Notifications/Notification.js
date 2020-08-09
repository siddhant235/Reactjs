import React, { Component } from "react";
import MegaMenu from "../UI/MegaMenu/MegaMenu";
import * as actions from "../../store/actions/Notifications";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../UI/Footer/Footer";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
import "./Notification.css";
class Notification extends Component{
    componentDidMount()
    {
        const notificationdata=[{
            loginuserID:localStorage.getItem('userID'),
            languageID: "1",
            page: "0",
            pagesize: "20",
            apiType: "Android",
            apiVersion: "1.0"
          }]
        this.props.onGetNotifications(notificationdata)
    }
    render()
    {
        return(
            <React.Fragment>
                  <div className="mgmenu">
          <MegaMenu />
        </div>
        <div className="wishlist-container">
          <span>
            <BreadCrumb addrs="Notifications" />
          </span>
          <div className="AllItems"></div>
        </div>
        <Footer/>
                </React.Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        notify:state.notify.notificationdata
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onGetNotifications:(notificationdata)=>dispatch(actions.getNotifcations(notificationdata))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Notification)
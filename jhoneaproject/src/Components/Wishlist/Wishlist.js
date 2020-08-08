import React, { Component } from "react";
import MegaMenu from "../UI/MegaMenu/MegaMenu";
import * as actions from "../../store/actions/Wishlist";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../UI/Footer/Footer";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
import "./Wishlist.css";
class Wishlist extends Component{
    componentDidMount(){
        let data=[{
    loginuserID: localStorage.getItem('userID'),
	languageID: "1",
	"page": "0",
	"pagesize": "20",
	"apiType": "Android",
	"apiVersion": "1.0"
        }]
        this.props.onGetfavourite(data)
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
                      <BreadCrumb addrs="Wishlist"/>
                      </span>
                    </div>
                    <Footer/>
                </React.Fragment>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
    onAddfavourite:(favouritedata)=>dispatch(actions.addfavourite(favouritedata)),
    onRemovefavourite:(removefavouritedata)=>dispatch(actions.removefavourite(removefavouritedata)),
    onGetfavourite:(getfavouritedata)=>dispatch(actions.favouritelist(getfavouritedata))
    }
}

export default connect(null,mapDispatchToProps)(Wishlist);
import React, { Component } from "react";
import MegaMenu from "../UI/MegaMenu/MegaMenu";
import * as actions from "../../store/actions/Wishlist";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../UI/Footer/Footer";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
import "./Wishlist.css";
class Wishlist extends Component {
    constructor(props)
    {
        super(props)
        this.removefavouriteData=this.removefavouriteData.bind(this)
    }
    removefavouriteData=(id)=>{
      const removefavouritedata=[{
        loginuserID:localStorage.getItem('userID'),
        "productID":id,
     "languageID": "1",
     "apiType": "Android",
     "apiVersion": "1.0"
      }]
      this.props.onRemovefavourite(removefavouritedata)
      window.location.reload();
    }
  componentDidMount() {
    let data = [
      {
        loginuserID: localStorage.getItem("userID"),
        languageID: "1",
        page: "0",
        pagesize: "20",
        apiType: "Android",
        apiVersion: "1.0",
      },
    ];
    this.props.onGetfavourite(data);
  }

  render() {
    let products=null
      
      if(this.props.data)
      {
          let data=[{id:'hello'}]
          data=this.props.data
        products =( data.map((item) => {
            return (
              <div key={item.productID} className="favouriteItems">
                <img
                  src={`http://13.235.251.42/grocery/backend/web/uploads/products/${item.productImage}`}
                  alt="product"
                  style={{
                    width: "150px",
                    height: "150px",
      
                    padding: "10px 15px",
                  }}
                />
                <p
                  style={{
                    marginLeft: "85px",
                    fontWeight: "600",
                  }}
                >
                  {item.productName}
                </p>
                <p
                  style={{
                    fontWeight: "600",
                    marginLeft: "65px",
                  }}
                >
                  <i className="fas fa-rupee" />
                  {item.productPrice}
                </p>
      
                <p>
                  <i
                    className="fas fa-trash"
                    style={{ marginLeft: "85px", cursor: "pointer" }}
                    onClick={()=>this.removefavouriteData(item.productID)}
                  />
                </p>
                {/* <p>
                <Link to={`/product-detail/${item.productID}`} className="buttons">
                  Buy Now
                </Link></p> */}
              </div>
        );
          }));
      }
      else{
         products=(<h1>NOTHING ADDED!</h1>)
      }
    
    console.log(this.props.data);
    return (
      <React.Fragment>
        <div className="mgmenu">
          <MegaMenu />
        </div>
        <div className="wishlist-container">
          <span>
            <BreadCrumb addrs="Wishlist" />
          </span>
          <div className="AllItems">{products}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.fav.data,
    favstatus:state.fav.favstatus
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddfavourite: (favouritedata) =>
      dispatch(actions.addfavourite(favouritedata)),
    onRemovefavourite: (removefavouritedata) =>
      dispatch(actions.removefavourite(removefavouritedata)),
    onGetfavourite: (getfavouritedata) =>
      dispatch(actions.favouritelist(getfavouritedata)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);

import React, { Component } from "react";
import "./MyCart.css";
import { connect } from "react-redux";
import MegaMenu from "../UI/MegaMenu/MegaMenu";
import * as actions from "../../store/actions/Cart";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
import img from "../../assets/images/product1.jpg";
import Footer from "../UI/Footer/Footer";
class myCart extends Component {
  render() {
    let products = this.props.cartDetails.map((item) => {
      return (
        <div key={item.productID} className="Cartitems">
          <img
            src={`http://13.235.251.42/grocery/backend/web/uploads/products/${item.image}`}
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
            {item.name}
          </p>
          <p
            style={{
              fontWeight: "600",
              marginLeft: "65px",
            }}
          >
            {item.price}
          </p>

          <input
            type="number"
            style={{ height: "40px", marginLeft: "35px" }}
            min="0"
            value={item.quantity}
          />
          <p>
            <i
              className="fas fa-trash"
              style={{ marginLeft: "85px" ,cursor:"pointer" }}
              onClick={()=>this.props.onRemoveItems(item.productID)}
            />
          </p>
        </div>
      );
    });
    console.log(this.props.cartDetails);
    return (
      <React.Fragment>
        <div className="wraping">
          <MegaMenu />
        </div>

        <div className="mycart-data">
          <BreadCrumb addrs="My Cart" />

          <div className="data-headers ">
            <h6>Image</h6>
            <h6>Product</h6>
            <h6>Price</h6>
            <h6>Quantity</h6>
            <h6>Delete</h6>
          </div>
          <div className="products-position">{products}</div>
          <button className="checkout">Checkout</button>
    <p>{this.props.carttotal}</p>
        </div>

        <Footer />
        <p>{this.props.carttotal}</p>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartDetails: state.cart.allproducts,
    carttotal:state.cart.total
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItems: (itemID) => dispatch(actions.removeitems(itemID)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(myCart);

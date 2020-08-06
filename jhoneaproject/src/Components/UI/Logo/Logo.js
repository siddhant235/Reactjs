import React from "react";
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom'
import Logo from "../../../assets/images/logo.png";
import Search from "../Search/Search";
import "./Logo.css";
import img1 from "../../../assets/images/product5.jpg";

const logo = () => {
  return (
    <React.Fragment>
      <div className="Logo">
        <a href="#default" id="logo">
          <img src={Logo} alt="Jhonea-logo" />
        </a>
        <span>
          <Search />
        </span>

        <div className="Cart">
          <div className="cartss">
            <a href="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-text">
                <p>
                  Shopping Cart
                  <br />
                  {/* 1 item - <i className="fas fa-rupee-sign"></i> 79.00 */}
                </p>
              </span>
            </a>
            {/* <div className="dropdown">
              <div className="image-text">
                <a href="/img">
                  <img src={img1} alt="productimage" />
                </a>
                <p>
                  Nostrum exercitationem itae 1 × <br />
                  <i className="fas fa-rupee-sign"></i> 79.00
                </p>
                <h6>Sub Total</h6>
                <span className="cart-total">
                  <p>
                    <i className="fas fa-rupee-sign"></i> 79.00
                  </p>
                </span>
              </div>

              <NavLink to="/mycart" className="buttoned">
                View Cart
              </NavLink>
              <NavLink to="/checkout" className="buttoned">
                Checkout
              </NavLink>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    globalSearch: state.product.searched,
  };
};
export default connect(mapStateToProps)(logo);

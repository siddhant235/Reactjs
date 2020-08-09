import React, { Component } from "react";
import "./MyCart.css";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import MegaMenu from "../UI/MegaMenu/MegaMenu";
import * as actions from "../../store/actions/Cart";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
import Footer from "../UI/Footer/Footer";
class myCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [{
        productID:'',
        quantity:0,
        price:0
        
      }],
      added:false
    };
    this.handleInput = this.handleInput.bind(this);

  }
  handleInput=(event,prodID,price)=>{
   this.setState({
      product:[{
           productID:prodID,
           [event.target.name]:event.target.value,
           price:price
      }],
      added:true
    })
   
    

  }
 
  render() {
    console.log(this.state.product)
    while(this.state.added)
    {
      console.log(this.state.product)
      this.props.onAddingItems(this.state.product)
    this.state.added=false
    
  }
    let cartproducts = this.props.cartDetails.map((item) => {
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
            defaultValue={item.quantity}
            name="quantity"
            onChange={(event)=>this.handleInput(event,item.productID,item.price)}
          />
          <p>
            <i
              className="fas fa-trash"
              style={{ marginLeft: "85px", cursor: "pointer" }}
              onClick={() => this.props.onRemoveItems(item.productID)}
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

          {/* <div className="data-headers ">
            <h6>Image</h6>
            <h6>Product</h6>
            <h6>Price</h6>
            <h6>Quantity</h6>
            <h6>Delete</h6>
          </div> */}
          <div className="products-position">{cartproducts}</div>
    
          <Link to="/checkout" className="checkout">Checkout</Link>
    
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
    carttotal: state.cart.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItems: (itemID) => dispatch(actions.removeitems(itemID)),
    onAddingItems:(products,itemID)=>dispatch(actions.additems(products,itemID))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(myCart);

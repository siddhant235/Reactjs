import React, { Component } from "react";
import "./Checkout.css";
import MegaMenu from "../UI/MegaMenu/MegaMenu";
import {connect} from 'react-redux'
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";

import Footer from "../UI/Footer/Footer";

class checkout extends Component {
  
  render() {
  let total=0;
    for(let i=0;i<this.props.products.length;i++)
    {
       total+=(+this.props.products[i].price)*(+this.props.products[i].quantity)
    }
    let products=(
     this.props.products.map(item=>{
       return(
         <div className="checkout-items">
           <p>{item.name}</p>
       <p>{item.quantity}</p>
       <p>{+item.quantity * +item.price}</p>
           </div>
       )
     })
    )
    return (
      <React.Fragment>
          <div className="wraping">
        <MegaMenu />
        </div>
        <div className="Your-Wrapper">
          <span className="Your-Bread">
            <BreadCrumb addrs="Checkout" />
          </span>
          <hr />
          <section className="Your-Address">
            <h4>DELIVERY LOCATION</h4>
            <hr />
            <div className="addrs-card">
              <div className="addrs-content">
                <label class="container">
                  <input type="radio" name="radio" />
                  Home
                  <span class="checkmark"></span>
                  <p style={{color:"#666"}}>
                    B-4, Shivalik Business Center, Opp. Kensville Golf Academy,
                    B/H. Rajpath Club Off. s.G.Highway, Ahmedabad, Gujrat 380054
                  </p>
                </label>
                <p className="fas fa-edit">Edit</p>
                <p className="fas fa-trash">Delete</p>
              </div>
            </div>
          </section>
           <div className="YourOrder-content">
         
          <section className="Your-Orders">
          <hr style={{
            position:"relative",
            left:"0rem",
            width:"100%"
          }}/>
            <h3>Your Order  </h3>
            
           <div className="order-detail">
         
               <h5>Product</h5>
               <h5>Quantity</h5>
               <h5>Total</h5>
              
              <span style={{position:"relative",bottom:"4rem",width:"55rem",right:"6rem"}}> <hr/></span>
             
             </div>
             {products}
             <hr style={{
               position:"relative",
               top:"0rem",
               left:"0rem",
               width:"100%"
             }}/>
             <div>
               <h5>TOTAL:</h5>
               <hr style={{
               position:"relative",
               top:"0rem",
               left:"0rem",
               width:"100%"
             }}/>
              
              <span style={{
                position:"relative",
                left:"28.5rem",
                bottom:"3.5rem",
                fontSize:"25px",
                fontWeight:"600",
                color:"#bb732e"
              }} className="fas fa-rupee">{total}</span> 
              
         
          </div>
          </section>
        
          </div>

        </div>
       
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    products:state.cart.allproducts
  }
}
export default connect(mapStateToProps)(checkout);

import React, { Component } from "react";
import "./CategoryList.css";
import Menu from "../../Components/UI/MegaMenu/MegaMenu";
import Footer from "../../Components/UI/Footer/Footer";
import img1 from "../../assets/images/shop-banner.jpg";
import Crumb from "../../Components/UI/BreadCrumb/BreadCrumb";
class categoryList extends Component {
  state = {
    subcategory: [],
    on1: false,
    on2: false,
  };
  toggle1 = () => {
    this.setState({
      on1: !this.state.on1,
    });
  };
  toggle2 = () => {
    this.setState({
      on2: !this.state.on2,
    });
  };

  componentDidMount() {
    var URL =
      "http://13.235.251.42/grocery/backend/web/index.php/v1/subcategory/get-subcategory-list";
    fetch(URL, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body:
        "json=" +
        JSON.stringify([
          {
            loginuserID: "5",
            categoryID: "1",
            apiType: "Android",
            apiVersion: "1.0",
          },
        ]),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
        this.setState({ subcategory: res[0].data });
      });
  }

  render() {
    let iconclass = [];
    let iconclass1 = [];
    if (!this.state.on1) {
      iconclass.push("fas fa-angle-down");
    } else {
      iconclass.shift();
      iconclass.push("fas fa-angle-up");
    }
    if (!this.state.on2) {
      iconclass1.push("fas fa-angle-down");
    } else {
      iconclass1.shift();
      iconclass1.push("fas fa-angle-up");
    }

    let list = (this.state.subcategory.map((name) => {
      return (
        <div key={name.subcatID} className="sub-input">
          <input
            type="checkbox"
            id="category-name"
            value={name.subcatName}
          ></input>

          <label htmlFor="category-name"> {name.subcatName} </label>
        </div>
      );
    }));
    return (
      <React.Fragment>
        <div className="categoty-container">
        
          <Menu />
        </div>
        <div className="back-Container">
          <div className="sub-crumb">
            <Crumb />
          </div>

          <div className="banner-image">
            <img src={img1} alt="banner" />
          </div>
          <span className="grid-list">
         <i className="fas fa-th-large" style={{   borderRadius: "10px 0px 0px 10px"}}></i>
          <i className="fas fa-list" style={{   borderRadius: "0px 10px 10px 0px"}}></i>

          </span>
          <div className="Product-Subcategory">
            <header className="subheader">Product Subcategories</header>
            <hr />
            {list}
          </div>
          <div className="filter-category">
            <header className="subheader">Filter</header>
            <hr />
            <header className="subheader">Material</header>
            <span className="icon1">
              <i className={iconclass.join("")} onClick={this.toggle1}></i>
            </span>
            {this.state.on1 && list}
            <hr />
            <header className="subheader">Color</header>
            <span className="icon2">
              <i className={iconclass1.join("")} onClick={this.toggle2}></i>
            </span>
            {this.state.on2 && list}
            <hr />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default categoryList;

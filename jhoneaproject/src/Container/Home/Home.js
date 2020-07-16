import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Menu from "../../Components/UI/MegaMenu/MegaMenu";
import Footer from "../../Components/UI/Footer/Footer";
import Carousel from "../../Components/UI/Carousel/Carousel";
import MultiCarousel from "../../Components/UI/MultiCarousel/MultiCarousel";
import Card from "../../Components/UI/Cards/Cards";
import * as actionCreators from "../../store/actions/HomePage";

import "./Home.css";

class Home extends Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    this.props.onGetHomeDetails();

  }
  render() {
    console.log(this.props.homeDetails);
    let categories = <div>Loading....</div>;

    if (!this.props.homeloading) {
      categories = this.props.homeDetails.category.map((cat) => {
        return (
          <span className="individual" key={cat.categoryID}>
            <NavLink to="/category-list">
              <img
                src={`http://13.235.251.42/grocery/backend/web/uploads/category/${cat.categoryImage}`}
                alt="images"
              />
              <br />
              <p>{cat.categoryName}</p>
            </NavLink>
          </span>
        );
      });
    
    }
    return (
      <React.Fragment>
        <div className="Home container-fluid">
          <Menu />
          <Carousel banners={this.props.homeDetails.banner} loading={this.props.homeloading}/>
          <div className="Multi">
            <MultiCarousel
              happening={categories}
              name="Categories"
              offset={600}
              itemWidth={400}
              slidesPerPage={1}
              slidesPerScroll={1.2}
            />
          </div>
          <Card
            details={this.props.homeDetails}
            loading={this.props.homeloading}
          />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    homeDetails: state.home.homeDetails,
    homeloading: state.home.homeloading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetHomeDetails: () => dispatch(actionCreators.gethomedetails()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

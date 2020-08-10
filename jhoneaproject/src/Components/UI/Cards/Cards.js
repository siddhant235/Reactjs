import React, { Component } from "react";
import Card from "./Card/Card";
import "./Cards.css";

class Cards extends Component {
  state = {
    products: [],
    productloading: null,
  };

  render() {
    let prod = <div>Loading</div>;
    if (!this.props.loading) {
      prod = this.props.details.product.map((product) => {
        return (
          <div key={product.productID}>
            <Card
              image={`/web/uploads/products/${product.productImage}`}
              title={product.productStock}
              text={product.productName}
              link={product.link}
              id={product.productID}
              price={product.productPrice}
              description={product.productDescription}
              review={product.productReviewCount}
            />
          </div>
        );
      });
    }

    return (
      <div className="wrapper">
        <span className="Crd">
          <a href="/index.html" style={{ borderBottom: "3px solid #bb732e" }}>
            NEW ARRIVALS
          </a>
          <a href="/index.html" style={{ marginLeft: "60rem" }}>
            View all
          </a>
        </span>

        <div className="Cardss">{prod}</div>
      </div>
    );
  }
}

export default Cards;

import React from "react";
import "./Card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import spinner from "../../../../assets/images/loading.gif";
import { Link } from "react-router-dom";

const card = (props) => {
  return (
    <div className="Cards">
      <div className="card" style={{ width: "20rem", height: "31.5rem" }}>
        <LazyLoadImage
          className="card-img-top"
          alt="Card Cap"
          src={props.image}
          placeholderSrc={spinner}
          effect="blur"
          delayMethod="debounce"
          delayTime={5000}
        />

        <div className="card-body">
          <span className="icons1">
            <a href="/cart">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <a href="/wishlist">
              <i className="fas fa-heart"></i>
            </a>
          </span>
          <p className="card-title">{props.title}</p>
          <p className="card-text">{props.text}</p>
          <p className="card-text1">
            <i className="fas fa-rupee-sign"></i>
            {props.price}
          </p>
          <span className="buttonwrap">
            <Link
              to={`/product-detail/${props.id}`}
              exact="true"
              className="buttons"
            >
              Buy Now
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default card;

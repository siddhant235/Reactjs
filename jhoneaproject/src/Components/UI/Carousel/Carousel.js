import React, { useState } from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";

import Button from "../Button/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  let banner = <div>Loading....</div>;

  if (!props.loading) {
    banner = props.banners.map((ban) => {
      return (
        <Carousel.Item bsPrefix="carousel-item" key={ban.bannerID}>
          <LazyLoadImage
           width="1500px"
           height="411px"
            alt="Card Cap"
            src={`/web/uploads/banners/${ban.bannerImage}`}
            effect="blur"
            delayMethod="debounce"
            threshold={100}
            delayTime={10000}
          />

          <Carousel.Caption>
            <div className="owl1">
              {/* <h1></h1>
              <h2>get 50%</h2> */}
              <Button style={{ borderRadius: "30px 30px" ,fontSize:"20px"}}>Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
  }
  return (
    <div className="owl">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators="true"
        bsPrefix="carousel"
        slide="true"
        interval="3000"
      >
        {banner}
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;

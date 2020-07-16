import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import  './MultiCarouselsimilar.css'
import '@brainhubeu/react-carousel/lib/style.css';


export default class MyCarousel extends Component {
  
     
  render() {
   
    return (
        
        <div className="Multi-Carousel1">
        <div className="Categories">
             <div className="Upper1">
                 <h3>{this.props.name}</h3>
             <a href ="/all">View All</a>
           </div>
      <Carousel className="MultiCarouselsimilar"
      slidesPerPage={this.props.slidesPerPage}
      slidesPerScroll={this.props.slidesPerScroll}
   
      
      offset={this.props.offset}
      itemWidth={this.props.itemWidth}
      clickToChange
    
      arrowLeft={<i className="fas fa-chevron-left arrowl1" name="arrow-left"></i>}
      arrowRight={<i className="fas fa-chevron-right arrowr1" name="arrow-left"></i>}
      addArrowClickHandler
      infinite>
        {this.props.happening}
      

      </Carousel>
      </div>
      </div>
    );
  }
}
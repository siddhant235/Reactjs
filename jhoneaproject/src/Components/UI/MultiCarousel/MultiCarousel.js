import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import  './MultiCarousel.css'
import '@brainhubeu/react-carousel/lib/style.css';


export default class MyCarousel extends Component {
  
     
  render() {
   
    return (
        
        <div className="Multi-Carousel">
        <div className="Categories">
             <div className="Upper">
                 <h3>{this.props.name}</h3>
             <a href ="/all">View All</a>
           </div>
      <Carousel className="MultiCarousel"
      slidesPerPage={this.props.slidesPerPage}
      slidesPerScroll={this.props.slidesPerScroll}
   
      
      offset={this.props.offset}
      itemWidth={this.props.itemWidth}
      clickToChange
    
      arrowLeft={<i className="fas fa-chevron-left arrowl" name="arrow-left"></i>}
      arrowRight={<i className="fas fa-chevron-right arrowr" name="arrow-left"></i>}
      addArrowClickHandler
      infinite>
        {this.props.happening}
      

      </Carousel>
      </div>
      </div>
    );
  }
}
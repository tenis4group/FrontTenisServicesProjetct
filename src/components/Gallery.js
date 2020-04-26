import React from "react";
import Carousel from 'react-bootstrap/Carousel';

 function Gallery () {
   return(
    <div className="Gallery">
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hotelwieniawa.com/wp-content/uploads/2018/08/korty-tenisowe-reda-puck-wejherowo-large-e1421681171678.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Pierwszy slajd</h3>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hotelwieniawa.com/wp-content/uploads/2018/08/korty-tenisowe-reda-puck-wejherowo-large-e1421681171678.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Drugi slajd</h3>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://hotelwieniawa.com/wp-content/uploads/2018/08/korty-tenisowe-reda-puck-wejherowo-large-e1421681171678.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Trzeci slajd</h3>
    </Carousel.Caption>
   </Carousel.Item>
    </Carousel>
   </div>
   )
  };

export default Gallery;

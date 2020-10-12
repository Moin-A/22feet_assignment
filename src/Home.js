import React from "react";
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel,Col} from "react-bootstrap"
export default function Header() {
  return (
   <div>
    <Carousel>
  <Carousel.Item>

    <img
      className="d-block w-100"
      src="1-unsplash.jpg"
      alt="First slide"
      fluid
    />

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="2-unsplash.jpg"
      alt="Third slide"
      fluid
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="3-unsplash.jpg"
      alt="Third slide"
      fluid
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </div>
  );
}

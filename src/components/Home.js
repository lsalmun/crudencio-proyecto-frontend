import {Link} from "react-router-dom";
import React from 'react';
import { Formik } from 'formik';
import Flyer from '../assets/img/flyer.jpeg';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import Pizza from '../assets/img/pizza.jpg';
import Puerro from '../assets/img/puerro.jpg';
import Tomate from '../assets/img/tomate.jpg';
import Image from 'react-bootstrap/Image'

function Home () {

    return (
<>




<div>
<Carousel fade>
  <Carousel.Item>
    <div >
    <img
      
      src={Pizza}
      alt="First slide"
      padding-left= "200px" width= "1314px" height= "400px" 
    />
    </div>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      
      src={Puerro}
      alt="Second slide" 
      padding-left= "200px" width= "1314px" height= "400px" 
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      ClassName={Image.roundedCircle}
      src={Tomate}
      alt="Third slide"
      width= "1314px" height= "400px"
    

    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


<div>
<img src={Flyer} alt="no funca"  class = "accordion-button"/>
</div>


</>



    )}


export default Home

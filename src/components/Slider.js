
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";

const Slider = ({ start }) => {
    return (
        
            <Carousel fade>
                {
                    start.map((index) =>
                        <Carousel.Item>
                            <img className="d-block w-100" src={index} alt="First Slide" />
                        </Carousel.Item>
                  )
                }
            </Carousel>
            
    )
}


export default Slider;
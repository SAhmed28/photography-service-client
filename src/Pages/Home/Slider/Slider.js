import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

const Slider = () => {
    return (
        <Carousel className='carousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.hasselblad.com/f/77891/3840x2160/0665baa83c/x-system-x2d.jpg"
                    alt="First slide"

                />
                <Carousel.Caption>
                    <h3>Premium Photography for Your Happiest Moments</h3>
                    <p>We are photographer and that’s why we know how to build awesome
                        portfolio site for every photographers.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.ceoworld.biz/wp-content/uploads/2021/03/wealthy-photographer.jpg"
                    alt="Second slide"

                />
                <Carousel.Caption>
                    <h3>Premium Photography for Your Happiest Moments</h3>
                    <p>We are photographer and that’s why we know how to build awesome
                        portfolio site for every photographers.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1528191289-sunset-3434911-1280.jpg"
                    alt="Third slide"
                />


                <Carousel.Caption>
                    <h3>Premium Photography for Your Happiest Moments</h3>
                    <p>We are photographer and that’s why we know how to build awesome
                        portfolio site for every photographers.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
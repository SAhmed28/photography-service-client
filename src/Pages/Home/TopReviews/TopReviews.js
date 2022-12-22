import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './TopReviews.css'

const TopReviews = () => {
    return (
        <div>
            <h2 className='pb-2 heading'>What Our Clients Say about Us</h2>
            <Carousel className='reviews'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlJTIwY29sb3J8ZW58MHx8MHx8&w=1000&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>"Fantastic customer support. I really could not have produced such a professional website for my client if it was not for the customer support your team provides. Makes a huge difference. Thank you so much."</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlJTIwY29sb3J8ZW58MHx8MHx8&w=1000&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>"You cannot beat the customer support for this theme. I am not technical, and there is always someone there to guide you in making updates and changes. I'm very happy with this theme and the support!						"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2xlJTIwY29sb3J8ZW58MHx8MHx8&w=1000&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p>
                            "
							You cannot beat the customer support for this theme. I am not technical, and there is always someone there to guide you in making updates and changes. I'm very happy with this theme and the support!						"
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopReviews;
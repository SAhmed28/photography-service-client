import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './TopReviews.css'

const TopReviews = () => {
    return (
        <div>
            <h2 className='pb-2'>What Our Clients Say about Us</h2>
            <Carousel className='reviews'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://asset.fujifilm.com/www/gr/files/styles/1120x400/public/2019-08/e529ca538b291d59b4fd21776be3a222/pic_digitalcameras_01.jpg?itok=_jPWWYp-"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>"Fantastic customer support. I really could not have produced such a professional website for my client if it was not for the customer support your team provides. Makes a huge difference. Thank you so much."</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://asset.fujifilm.com/www/gr/files/styles/1120x400/public/2019-08/e529ca538b291d59b4fd21776be3a222/pic_digitalcameras_01.jpg?itok=_jPWWYp-"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p>"You cannot beat the customer support for this theme. I am not technical, and there is always someone there to guide you in making updates and changes. I'm very happy with this theme and the support!						"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://asset.fujifilm.com/www/gr/files/styles/1120x400/public/2019-08/e529ca538b291d59b4fd21776be3a222/pic_digitalcameras_01.jpg?itok=_jPWWYp-"
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
import React, { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaStar } from 'react-icons/fa'
import Reviews from '../../Home/Services/Reviews/Reviews';

const SingleService = () => {
    const [reviews, setReviews] = useState([]);
    const service = useLoaderData();
    const { _id, name, image, rating, price, description } = service;

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data);
            console.log(reviews)
        })

    },[_id])

    const filteredReviews = reviews.filter(review => review.serviceId === _id) 
    // console.log(filteredReviews)

    return (
        <div>
            <Row xs={1} md={1} lg={1} className="g-4 mt-4">
                <Col>
                    <Card className='single-service'>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                                <p className='mt-4'><Link to='/' className='btn btn-primary'> Go Back</Link></p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 d-flex align-items-center'><FaStar className='text-warning me-2' /> <b>{rating}</b></p>
                            <p className='mb-0'>Price: <b>{price}</b></p>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            <div className='mt-5 ps-5'>
                <h2>Reviews on {name}</h2>
                <Reviews key={_id} id={_id} filteredReviews={filteredReviews}></Reviews>
            </div>
        </div>
    );
};

export default SingleService;
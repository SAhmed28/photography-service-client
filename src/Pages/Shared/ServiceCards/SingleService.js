import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {FaStar} from 'react-icons/fa'

const SingleService = () => {
    const service = useLoaderData();
    const { name, image, rating, price, description } = service;
    return (
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
    );
};

export default SingleService;
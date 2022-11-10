import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'
import './ServiceCards.css'


const ServiceCards = ({ service }) => {
    const { _id, name, image, rating, price, description } = service;
    return (
        <Col>
            <Card className='card'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            description.length > 200 ?
                                <>{description.slice(0, 100) + '...'} <Link to={`/services/${_id}`} className=''>Read More</Link></>
                                :
                                description
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0 d-flex align-items-center'><FaStar className='text-warning me-2'/> <b>{rating}</b></p>
                    <p className='mb-0'>Price: <b>{price}</b></p>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ServiceCards;
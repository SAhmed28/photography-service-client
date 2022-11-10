import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'


const ServiceCards = ({ service }) => {
    const { _id, name, image, rating, price, description } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            description.length > 200 ?
                                <>{description.slice(0, 100) + '...'} <Link to={`/services/${_id}`}>Read More</Link></>
                                :
                                description
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCards;
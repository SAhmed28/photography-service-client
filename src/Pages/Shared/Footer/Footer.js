import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Row xs={1} md={3} className='mt-5 p-5 text-light footer'>
            <Col>
                <h2><Link to='/'>Happy Click!</Link></h2>
                <p className='first-para'>We are Edmonton based Photographer. Our vision and mission is to see our clients happy! </p>
            </Col>
            <Col>
                <h4>Recent Posts</h4>
                <ul>
                    <li className='d-flex flex-column mb-3'><Link to="/">Full-width post with Gallery</Link> <small>June 26, 2016</small></li>
                    <li className='d-flex flex-column mb-3'><Link to="/">Customizable Typography</Link> <small>January 2, 2014</small></li>
                    <li className='d-flex flex-column mb-3'><Link to="/">Sidebar post with Gallery</Link> <small>August 20, 2013</small></li>
                </ul>
            </Col>
            <Col>
                <h4>Contact Us</h4>
                <p>Tel: +66 7883456 <br /> Email: info@happyclick.com <br /> Address: 823 Hinsdale Street, Davenport, Tennessee, 1294</p>
            </Col>
        </Row>
    );
};

export default Footer;
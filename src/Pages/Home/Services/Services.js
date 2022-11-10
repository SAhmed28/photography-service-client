import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import ServiceCards from '../../Shared/ServiceCards/ServiceCards';
import Reviews from './Reviews/Reviews';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                {
                    services.map(service => <ServiceCards key={service._id} service={service}></ServiceCards>)
                }
            </Row>
        </div>
    );
};

export default Services;
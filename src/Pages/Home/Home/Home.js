import React from 'react';
import Slider from '../Slider/Slider';
import { useEffect, useState } from 'react';
import ServiceCards from '../../Shared/ServiceCards/ServiceCards';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const size = 3;
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${size}`)
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })

    }, [size])
    return (
        <div>
            <Slider></Slider>

            <Row xs={1} md={2} lg={3} className="g-4 mt-4">
                {
                    services.map(service => <ServiceCards key={service._id} service={service}></ServiceCards>)
                }
                
            </Row>
            
        </div>
    );
};

export default Home;
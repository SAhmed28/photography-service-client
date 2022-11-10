import React from 'react';
import { FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom'

const Team = () => {
    return (
        <div>
            <h2 className='text-center'>Meet the Team</h2>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk=" />
                    <Card.Body className='text-center'>
                        <Card.Title>Gonzales Graves</Card.Title>
                        <Card.Text>
                            <li class="team-icons"><Link className='mx-2' to="/"><FiLinkedin /></Link><Link className='mx-2' to="/"><FiTwitter /></Link><Link className='mx-2' to="/"><FiFacebook /></Link></li>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.naturettl.com/wp-content/uploads/2016/05/22014644/shutterstock_227393866-900x600.jpg" />
                    <Card.Body className='text-center'>
                        <Card.Title>Carey Burke</Card.Title>
                        <Card.Text>
                            <li class="team-icons"><Link className='mx-2' to="/"><FiLinkedin /></Link><Link className='mx-2' to="/"><FiTwitter /></Link><Link className='mx-2' to="/"><FiFacebook /></Link></li>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/98/98/23/360_F_298982386_LmgohMHGjA2oLWWQ4ysk0kOCRA1Lfjnq.jpg" />
                    <Card.Body className='text-center'>
                        <Card.Title>Uttam</Card.Title>
                        <Card.Text>
                            <li class="team-icons"><Link className='mx-2' to="/"><FiLinkedin /></Link><Link className='mx-2' to="/"><FiTwitter /></Link><Link className='mx-2' to="/"><FiFacebook /></Link></li>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Team;
import React, { useContext, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => setError(error));
    }
    return (
        <Row>
            <Col>
                <div className='w-50 mx-auto'>
                    <Form onSubmit={handleSubmit} className='mt-4'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter your name" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>

                        <div className='text-center'>
                            <Button className='px-5 mb-3' variant="primary" type="submit">
                                Sign Up
                            </Button>
                            <p>Already have an account? <Link to='/login'>Login</Link></p>
                        </div>

                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default Register;
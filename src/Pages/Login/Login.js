import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css'

const Login = () => {
    const { providerLogin, login, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider;

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }
    return (
        <Row>
            <Col>
                <div className='w-50 mx-auto'>
                    <Form onSubmit={handleSubmit} className='mt-4'>
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
                                Login
                            </Button>
                            <p>New to our site? Please <Link to='/register'>Register</Link></p>
                        </div>

                    </Form>

                    <div className='text-center'>
                        <p className='or-text'><span>OR</span></p>
                        <Button onClick={handleGoogleSignIn} className='mx-auto' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Login;
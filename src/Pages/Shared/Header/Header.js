import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const handleLogout = () => {
        logout()
        .then(() => {})
        .catch(err => console.error(err))
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link className='text-light' to='/'>Happy Click!</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/blogs">Blogs</Link>
                    </Nav>
                    <Nav>
                        {
                            user?.email ?
                                <div className='d-flex align items-center'>
                                    <li className='mx-2'><Link to='/my-reviews'>My Reviews</Link></li>
                                    <li className='mx-2'><Link to='/add-service'>Add Service</Link></li>
                                    <li className=''><Link className='' onClick={handleLogout}>Log out</Link></li>
                                </div>
                                :
                                <>
                                    <li className='mx-2'><Link to='/login'>Login</Link></li>
                                    <li className=''><Link to='/register'>Register</Link></li>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
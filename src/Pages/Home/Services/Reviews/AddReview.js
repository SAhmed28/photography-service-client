import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import {Link} from 'react-router-dom';

const AddReview = ({id}) => {
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const linkToShow = document.getElementById('login-link');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.url.value;
        const review = form.review.value;
        console.log(email, review);


        if (!user) {
            alert('Please Login to add a review');
            linkToShow.classList.remove('d-none');
            linkToShow.classList.add('d-block');
        }

        const userReview = {
            serviceId: id,
            name:name, 
            email, 
            review,
            image
        };


        fetch('http://localhost:5000/review', {
            method : 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Review posted Successfully!');
                form.reset();
            }
        })
        .catch(err => console.error(err))

        
    }
    return (
        <div className='add-review'>
            <h2>Add Your Reviews</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" defaultValue={user?.email} readOnly/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="url" placeholder="Enter your photo url" required/>
                </Form.Group>

                <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Your Review">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a review here"
                        style={{ height: '150px' }}
                        name="review"
                        required
                    />
                </FloatingLabel>
                <div className='text-center'>
                    <Button className='px-5 py-2' variant="primary" type="submit">
                        Add to Reviews
                    </Button>

                    <p id="login-link" className='d-none'>Please <Link to='/login'>Login</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default AddReview;
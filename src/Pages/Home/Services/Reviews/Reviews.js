import React from 'react';
import AddReview from './AddReview';
import './Reviews.css'

const Reviews = ({ id, filteredReviews }) => {
    // const {email, personalRating, review, time, username} = filteredReviews;
    return (
        <div className="row">
            <div className="col-md-12">
                <div>
                    {
                        filteredReviews.map(review =>
                            <div className=' review-block d-flex'>
                                <div className='w-25'>
                                    <img src={review.image} alt="user-image" />
                                </div>
                                <div className=''>
                                    <h4>Name: {review.username}</h4>
                                    <p>Email: {review.email}</p>
                                    <p><b>Review:</b> {review.review}</p>
                                    {/* <p><b>Personal Rating:</b> {review.personalRating}</p> */}
                                </div>
                            </div>)
                    }
                </div>

                <div>
                    <AddReview id={id}></AddReview>
                </div>
            </div>

        </div>
    );
};

export default Reviews;
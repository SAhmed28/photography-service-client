import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    const { user, logout } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.length === 0) {
                    setErrorMessage("No reviews were added!");
                }
                else {
                    setReviews(data);
                }
            })
    }, [user?.email, logout])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to cancel this order?");
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);

                        if (remaining.length === 0) {
                            setErrorMessage("No reviews were added!");
                        }
                    }
                })
        }
    }



    // if (reviews.length === 0) {
    //     const errortext = "No reviews were added!";
    //     setErrorMessage(errortext);
    //     return;
    // }

    console.log(errorMessage);



    return (
        <div>
            <div className="overflow-x-auto w-full">
                {
                    errorMessage === "No reviews were added!" ? <h2 className='text-center my-4'>{errorMessage}</h2>
                        :

                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>
                                    </th>
                                    <th>Name</th>
                                    <th>Service ID</th>
                                    <th>Review</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map(singleReview => <MyReviewsRow
                                        key={singleReview._id}
                                        singleReview={singleReview}
                                        handleDelete={handleDelete}
                                    ></MyReviewsRow>)
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div>
    );
};

export default MyReviews;
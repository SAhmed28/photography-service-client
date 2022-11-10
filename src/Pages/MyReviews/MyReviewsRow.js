import React, { useState } from 'react';

const MyReviewsRow = ({singleReview, handleDelete}) => {
    const {_id, name,image, email,review} = singleReview;
    
    console.log(singleReview);

    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {/* {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />} */}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {_id}
            </td>
            <td>{review}</td>
            <th>
            </th>
        </tr>
    );
};

export default MyReviewsRow;
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddService = () => {
    // const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const email = user?.email || 'unregistered';

        const service = {
            name,
            price,
            image,
            email,
            rating,
            description
        }


        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Order placed Successfully!');
                    form.reset();
                }
            })
            .catch(err => console.error(err))


    }
    return (
        <div>
            <form onSubmit={handlePlaceService}>
                <h2 className="text-4xl">You are about to order: </h2>
                <h4 className="text-3xl">Price: </h4>
                <div className=''>
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="" readOnly />
                    <input name="name" type="text" placeholder="Service Name" className="" />
                    <input name="image" type="text" placeholder="Image url" className="" />
                    <input name="price" type="text" placeholder="Price" className="" required />
                    <input name="rating" type="text" placeholder="Put a Rating of the service"  className=""  />
                </div>
                <textarea name="description" className="" placeholder="Describe the service" required></textarea>

                <button className='btn btn-primary' type="submit">Place Your Order</button>
            </form>
        </div>
    );
};

export default AddService;
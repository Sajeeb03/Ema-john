import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewProducts from '../ReviewProducts/ReviewProducts';

const Orders = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    // console.log(previousCart)
    // console.log(cart)
    const handleRemove = (id) => {
        const remainingItems = cart.filter(product => product._id !== id);
        setCart(remainingItems);
        removeFromDb(id);
    }

    return (
        <div className='container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewProducts
                        key={product._id}
                        handleRemove={handleRemove}
                        product={product} />)
                }

            </div>
            <div className='order-container'>
                <Cart cart={cart}><Link to='/shipping'><button>Proceed Shipping</button></Link></Cart>
            </div>
        </div>
    );
};

export default Orders;
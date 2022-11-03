import React from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = ({ cart, children }) => {
    // console.log(cart)
    const quantity = cart.reduce((prev, curr) => prev + curr.quantity, 0)
    const totalPrice = cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
    const totalShipping = cart.reduce((prev, curr) => prev + curr.shipping, 0);
    const tax = (totalPrice * 0.1).toFixed(2);
    const grandTotal = totalPrice + totalShipping + parseFloat(tax);

    // console.log(cart);
    return (
        <div className='cart-styles'>
            <h2>Orders Summary</h2>
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total shipping charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            {children}
        </div>
    );
};

export default Cart;
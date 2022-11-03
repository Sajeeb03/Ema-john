import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewProducts.css'

const ReviewProducts = ({ product, handleRemove }) => {
    const { _id, name, price, quantity, img, shipping } = product;
    return (
        <div className='details-container'>
            <div className="review-image">
                <img src={img} alt="" />
            </div>
            <div className="review-details">
                <div>
                    <h4>{name}</h4>
                    <p><small>Price: $ {price}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p><small>Shipping: $ {shipping}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemove(_id)} className="delete-btn"><FontAwesomeIcon className='trash-icon' icon={faTrashAlt} /></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewProducts;
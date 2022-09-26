import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = ({ product, addToCart }) => {
    // console.log(props.product);
    const { name, img, ratings, seller, price } = product;
    // console.log(props.addToCart)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='details'>
                <p className='product-title'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={() => addToCart(product)} className='btn-add-to-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product; <h1>Single Product</h1>
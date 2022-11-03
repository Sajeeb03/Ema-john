import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const getSavedData = getShoppingCart();
        const savedCart = [];
        for (const id in getSavedData) {
            const savedProduct = products.find(product => product.id === id)
            if (savedProduct) {

                const quantity = getSavedData[id];
                savedProduct.quantity = quantity;
                savedCart.push(savedProduct);
            }
        }
        setCart(savedCart)
    }, [products])

    const addToCart = (selectedProduct) => {
        let newCart = []
        const existed = cart.find(product => selectedProduct.id === product.id);
        if (!existed) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            existed.quantity = existed.quantity + 1;
            newCart = [...rest, selectedProduct]
        }

        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className='container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Product>)
                }

            </div>
            <div className="order-container">
                <Cart cart={cart}><Link to="/orders">
                    <button>Review Orders</button>
                </Link></Cart>
            </div>
        </div>
    );
};

export default Shop;
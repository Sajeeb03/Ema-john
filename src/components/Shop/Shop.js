import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
//total ==count
//per page ===10
//page = count/per page
//page 
const Shop = () => {
    // const { count, products } = useLoaderData();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0)
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    const pages = Math.ceil(count / size);
    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setProducts(data.products)
            })
    }, [page, size])

    useEffect(() => {
        const getSavedData = getShoppingCart();
        const savedCart = [];
        const ids = Object.keys(getSavedData);
        // console.log(ids)
        fetch(`http://localhost:5000/productsByIds`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                for (const id in getSavedData) {
                    const savedProduct = data.find(product => product._id === id)
                    if (savedProduct) {
                        const quantity = getSavedData[id];
                        savedProduct.quantity = quantity;
                        savedCart.push(savedProduct);
                    }
                }
                setCart(savedCart)
            })

    }, [])

    const addToCart = (selectedProduct) => {
        let newCart = []
        const existed = cart.find(product => selectedProduct._id === product._id);
        if (!existed) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            existed.quantity = existed.quantity + 1;
            newCart = [...rest, selectedProduct]
        }

        setCart(newCart);
        addToDb(selectedProduct._id)
    }
    return (
        <div className='container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product._id}
                        addToCart={addToCart}
                    ></Product>)
                }

            </div>
            <div className="order-container">
                <Cart cart={cart}><Link to="/orders">
                    <button>Review Orders</button>
                </Link></Cart>
            </div>
            <div className="pagination">
                <p>Selected Page number  {page} and size : {size}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={page === number ? 'selected' : undefined}
                        onClick={() => setPage(number)}
                    >{number}</button>)
                }

                <select onChange={(e) => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option selected value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;
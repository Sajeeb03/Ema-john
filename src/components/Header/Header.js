import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const showItems = () => {
        const items = document.getElementById('items');
        items.style.display = "block"
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div id='nav-items' className='nav-items'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>

            <i onClick={showItems} className="fa-solid fa-bars bar"></i>
            <ul id='items' className='items'>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/order">Order</a></li>
                <li><a href="/inventory">Inventory</a></li>
                <li><a href="/about">About</a></li>
            </ul>


        </nav >
    );
};

export default Header;
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    const showItems = () => {
        const items = document.getElementById('items');
        items.style.display = "block"
    }
    return (
        <nav className='header'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div id='nav-items' className='nav-items'>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
                {user?.uid ? <button onClick={logOut} className='btn-logout'>Sign Out</button> : <><NavLink to="/signup">SignUp</NavLink>
                    <NavLink to="/login">Login</NavLink></>
                }
            </div>

            <i onClick={showItems} className="fa-solid fa-bars bar"></i>
            <ul id='items' className='items'>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>
            </ul>


        </nav >
    );
};

export default Header;
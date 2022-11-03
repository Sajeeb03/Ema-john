import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Login.css';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <form onSubmit={handleLogIn} className='form-container'>
            <h2 className='form-title'>Log In</h2>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
            </div>
            <input className='btn-submit' type="submit" value="Login" />
            <p className='new-text'>New to Ema John? <Link to='/signup'>Create New Account.</Link></p>
        </form>
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './Signup.css';

const Signup = () => {
    const [error, setError] = useState(null)
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

        if (password.length < 6) {
            setError('Password must have at least 6 characters.');
            return;
        }
        if (password !== confirm) {
            setError("Password didn't match")
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                form.reset()
                navigate('/login')
            })
            .catch(error => console.error(error))

    }
    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
            </div>
            <div className='form-control'>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" id="confirm" required />
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
            <p className='new-text'>Already hav an account? <Link to='/login'>Login</Link></p>
            {
                error && <p className='error-msg'>{error}</p>
            }
        </form>
    );
};

export default Signup;
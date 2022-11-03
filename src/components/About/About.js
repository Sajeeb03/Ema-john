import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const About = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>How do you know about us?</h1>
            {user?.email && <p>Welcome {user.email}</p>}
        </div>
    );
};

export default About;
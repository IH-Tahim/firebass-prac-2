import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { googleSignUp } = useAuth();
    return (
        <div>
            <h2>Plaease Login</h2>
            <input type="email" placeholder="Enter Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <Link to="/register">Register Now</Link>
            <br />
            <button type="submit">Login</button>
            <br />
            <br />
            <button onClick={googleSignUp}>Google</button>
        </div>
    );
};

export default Login;
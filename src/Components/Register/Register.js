import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <input type="text" placeholder="Enter Name" />
            <br />
            <input type="email" placeholder="Enter Email" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <Link to="/login">Already Regitered</Link>
            <br />
            <button type="submit">Register</button>
        </div>
    );
};

export default Register;
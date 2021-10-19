import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Home.css';

const Home = () => {
    const { user } = useAuth();
    console.log(user.photoURL);
    return (
        <div>
            <h2>This is Home</h2>
            <h5>Hello {user.displayName} !!!</h5>
            <img src={user.photoURL} alt="" style={{ borderRadius: "50%" }} />
        </div>
    );
};

export default Home;
import React from 'react';
import useAuth from '../../Hooks/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>This Is Place order</h2>
            <h4>Place your Order {user.displayName}</h4>
        </div>
    );
};

export default PlaceOrder;
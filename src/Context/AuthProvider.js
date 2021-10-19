import React, { createContext } from 'react';
import useFirebase from '../Hooks/UseFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase()
    return (
        <AuthContext.Provider value={allContext}>
            <div>
                {children}
            </div>
        </AuthContext.Provider>

    );
};

export default AuthProvider;
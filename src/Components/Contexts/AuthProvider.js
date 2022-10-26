import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const user = { name: 'kaiser' }

    const authValue = { user };
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
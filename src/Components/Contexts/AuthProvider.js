import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
// creating auth 
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // creating user 
    const crateEmailUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    // Sign In with email and password 
    const emailLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // AuthValues 
    const authValue = { crateEmailUser, emailLogIn };
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
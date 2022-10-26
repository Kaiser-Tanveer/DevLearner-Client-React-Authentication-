import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
// creating auth 
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // google auth provider 
    const GAuthProvider = new GoogleAuthProvider();
    // github Auth provider 
    const gitProvider = new GithubAuthProvider();

    // creating user 
    const crateEmailUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    // Sign In with email and password 
    const emailLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with Google 
    const googleLogIn = () => {
        return signInWithPopup(auth, GAuthProvider);
    }
    // Sign in with Github 
    const gitLogIn = () => {
        return signInWithPopup(auth, gitProvider);
    }

    // AuthValues 
    const authValue = { crateEmailUser, emailLogIn, googleLogIn, gitLogIn };
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
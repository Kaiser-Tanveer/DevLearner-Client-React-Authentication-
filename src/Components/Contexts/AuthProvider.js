import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
// creating auth 
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // google auth provider 
    const GAuthProvider = new GoogleAuthProvider();
    // github Auth provider 
    const gitProvider = new GithubAuthProvider();

    // useState for Auth State Change 
    const [user, setUser] = useState(null);

    // Loader state 
    const [loading, setLoading] = useState(true);

    // creating user 
    const crateEmailUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    // Sign In with email and password 
    const emailLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with Google 
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GAuthProvider);
    }
    // Sign in with Github 
    const gitLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }

    // Side effect for Auth state Change 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    // Sign Out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // profile updating method 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }




    // AuthValues 
    const authValue = { crateEmailUser, emailLogIn, googleLogIn, gitLogIn, user, logOut, updateUserProfile, loading, setLoading };
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
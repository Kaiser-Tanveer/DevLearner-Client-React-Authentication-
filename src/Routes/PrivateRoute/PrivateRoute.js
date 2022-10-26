import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Components/Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const user = useContext(AuthContext);
    console.log(user);
    if (user && user.uid) {
        return children;
    }
    return (
        <Navigate to='/logIn'></Navigate>
    );
};

export default PrivateRoute;
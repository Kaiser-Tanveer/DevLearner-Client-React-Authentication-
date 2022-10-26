import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Components/Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    // Getting Context 
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    const location = useLocation();

    if (loading) {
        return <>
            <div className='text-center pt-5 mt-5'>
                <Spinner className='mt-5' animation='border' variant='secondary' />
            </div>
        </>;
    }
    if (!user) {
        return <Navigate to="/logIn" state={{ from: location }} replace />
    }
    else {
        return children;
    }
};

export default PrivateRoute;
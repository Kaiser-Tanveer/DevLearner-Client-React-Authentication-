import React from 'react';
import { useContext } from 'react';
import { FaGift, FaGifts } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';

const Premium = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='pb-5 mb-5'>
            <h1 className='text-center py-5'>Congratulations!! Mr. <span className='text-primary'>{user?.displayName}</span></h1>
            <div className='mb-5 pb-5 text-center'>
                <h3>We are glad that you selected our <span className='text-warning'>Premium version!!!</span></h3>
                <FaGift className='fs-1 text-warning' />
                <FaGifts className='fs-1 text-warning' />
                <hr className='w-25 mx-auto' />
                <img className='rounded-circle border border-4 border-warning' src={user?.photoURL} alt="" height="250px" width="250px" />
                <div>
                </div>
            </div>
        </div>
    );
};

export default Premium;
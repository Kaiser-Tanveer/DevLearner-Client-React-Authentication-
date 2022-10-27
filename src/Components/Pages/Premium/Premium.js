import React from 'react';
import { FaGift, FaGifts } from 'react-icons/fa';

const Premium = () => {
    return (
        <div className='pb-5 mb-5'>
            <h1 className='text-primary text-center py-5'>This is Premium section</h1>
            <div className='mb-5 pb-5'>
                <FaGift className='fs-1 text-warning' />
                <FaGifts className='fs-1 text-warning' />
            </div>
        </div>
    );
};

export default Premium;
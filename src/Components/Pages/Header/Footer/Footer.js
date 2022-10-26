import React from 'react';
import './Footer.css';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark pb-2'>
            <Button href='https://web.facebook.com/Kaiser2581' target='_blank' className='text-secondary fs-3 mx-2 border-0 bg-dark'><FaFacebook className='social' /></Button>
            <Button href='https://web.facebook.com/Kaiser2581' target='_blank' className='text-secondary fs-3 mx-2 border-0 bg-dark'><FaTwitter className='social' /></Button>
            <Button href='https://web.facebook.com/Kaiser2581' target='_blank' className='text-secondary fs-3 mx-2 border-0 bg-dark'><FaLinkedin className='social' /></Button>
            <Button href='https://web.facebook.com/Kaiser2581' target='_blank' className='text-secondary fs-3 mx-2 border-0 bg-dark'><FaGithub className='social' /></Button>
            <p className='text-secondary py-2'>&copy; by Kaiser Tanveer, 2022</p>
        </div>
    );
};

export default Footer;
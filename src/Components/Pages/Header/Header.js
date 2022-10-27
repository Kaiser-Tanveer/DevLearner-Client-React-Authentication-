import React from 'react';
import './Header.css';
import { useContext } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaMoon } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    // dark mode state 
    const [checked, setChecked] = useState();

    // Log Out 
    const signOutHandler = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    // Dark mode Handler 
    const setDarkHandler = (e) => {
        const checked = e.target.checked;
        setChecked(checked);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg={checked ? 'dark' : 'light'} variant={checked ? 'dark' : 'light'}>
                <Container>
                    <Navbar.Brand className='fw-bold'><img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" alt="" height="40px" width="50px" />LEARN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto align-items-center'>
                            <NavLink to='/courses' className={({ isActive }) => isActive ? 'isActive me-4 mt-4 mt-lg-0 text-center text-decoration-none' : 'me-4 mt-4 mt-lg-0 text-center text-decoration-none'}><span className={checked ? 'text-light' : 'text-dark'}>Courses</span></NavLink>
                            <NavLink to='faq' className={({ isActive }) => isActive ? 'isActive me-4 mt-4 mt-lg-0 text-center text-decoration-none text-light' : 'me-4 mt-4 mt-lg-0 text-center text-decoration-none text-light'}><span className={checked ? 'text-light' : 'text-dark'}><span className={({ isActive }) => isActive ? 'isActive' : undefined}>FAQ</span></span></NavLink>
                            <NavLink to='/blog' className={({ isActive }) => isActive ? 'isActive me-4 mt-4 mt-lg-0 text-center text-decoration-none text-light' : 'me-4 mt-4 mt-lg-0 text-center text-decoration-none text-light'}><span className={checked ? 'text-light' : 'text-dark'}><span className={({ isActive }) => isActive ? 'isActive' : undefined}>Blog</span></span></NavLink>
                            <NavLink className='me-4 mt-4 mt-lg-0 text-center text-decoration-none text-light'>
                                {
                                    user && user?.uid ?
                                        <div className='d-flex justify-content-center flex-column flex-lg-row'>
                                            <NavLink to='/profile' className={({ isActive }) => isActive ? 'isActive me-4 mt-4 mt-lg-0 text-start text-decoration-none text-light' : 'mt-4 mt-lg-0 text-start text-decoration-none text-light'}><img variant='center' data-toggle="tooltip" data-placement="bottom" title={user?.displayName} className='rounded-circle me-4 ms-4' src={user?.photoURL} alt="" height="35px" width="35px" /></NavLink>
                                            <Button className='mt-4 mt-lg-0' onClick={signOutHandler} variant='outline-primary' size='sm'>Log Out</Button>
                                        </div>
                                        :
                                        <>
                                            <NavLink to='/logIn'><Button className='fw-bold' variant='light' size='sm'>Log In</Button></NavLink>
                                        </>
                                }
                            </NavLink>
                            <div className='d-flex justify-content-start py-4 py-lg-0 mt-4 mt-lg-0 form-check form-switch'>
                                <div>
                                    <input onClick={setDarkHandler} value='dark' type="checkbox" className='dark-mode form-check-input' id="checkbox" />
                                    <label className='form-check-label' htmlFor="checkbox"></label>
                                </div>
                                <div>
                                    <FaMoon className={checked ? 'text-secondary fs-4' : 'text-dark fs-4'} />
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
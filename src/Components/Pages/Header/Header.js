import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

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
                    <Navbar.Brand className='fw-bold'> <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" alt="" height="40px" width="50px" />LEARN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto'>
                            <Link className='me-4 text-decoration-none text-light' to='/courses'><span className={checked ? 'text-light' : 'text-dark'}>Courses</span></Link>
                            <Link className='me-4 text-decoration-none text-light' to='faq'><span className={checked ? 'text-light' : 'text-dark'}>FAQ</span></Link>
                            <Link className='me-4 text-decoration-none text-light' to='/blog'><span className={checked ? 'text-light' : 'text-dark'}>Blog</span></Link>
                            <div className='me-4 text-decoration-none text-light'>
                                {
                                    user && user?.uid ?
                                        <div className='d-flex justify-content-between'>
                                            <Link to='/profile'><img data-toggle="tooltip" data-placement="bottom" title={user?.displayName} className='rounded-circle me-4' src={user?.photoURL} alt="" height="35px" width="35px" /></Link>
                                            <Button onClick={signOutHandler} variant='outline-primary' size='sm'>Log Out</Button>
                                        </div>
                                        :
                                        <>
                                            <Link to='/logIn'><Button className='fw-bold' variant='light' size='sm'>Log In</Button></Link>
                                        </>
                                }
                            </div>
                            <div className='form-check form-switch'>
                                <input onClick={setDarkHandler} value='dark' type="checkbox" className='form-check-input' id="checkbox" />
                                <label className='form-check-label' htmlFor="checkbox"></label>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
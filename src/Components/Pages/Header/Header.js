import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSun, FaMoon, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    // const [dark, setDark] = useState(false);

    // Log Out 
    const signOutHandler = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='fw-bold'> <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" alt="" height="40px" width="50px" />LEARN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto'>
                            <Link className='me-4 text-decoration-none text-light' to='/courses'>Courses</Link>
                            <Link className='me-4 text-decoration-none text-light'>FAQ</Link>
                            <Link className='me-4 text-decoration-none text-light'>Blog</Link>
                            <div className='me-4 text-decoration-none text-light'>
                                {
                                    user && user?.uid ?
                                        <>
                                            <Link to='/profile'><img data-toggle="tooltip" data-placement="bottom" title={user?.displayName} className='rounded-circle me-4' src={user?.photoURL} alt="" height="35px" width="35px" /></Link>
                                            <Button onClick={signOutHandler} variant='outline-primary' size='sm'>Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/logIn'><Button className='fw-bold' variant='light' size='sm'>Log In</Button></Link>
                                        </>
                                }
                            </div>
                            <Link className='me-4 text-decoration-none text-light'>
                                <Button variant="outline-secondary">
                                    {/* {
                                        dark ? <span>Dark</span> :
                                            <span>Light</span>
                                    } */}
                                </Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
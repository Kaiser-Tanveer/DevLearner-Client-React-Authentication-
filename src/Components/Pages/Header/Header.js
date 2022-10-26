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
    const { user } = useContext(AuthContext);
    // const [dark, setDark] = useState(false);
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
                            <Link className='me-4 text-decoration-none text-light'><FaUser data-toggle="tooltip" data-placement="bottom" title={user?.name} /></Link>
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
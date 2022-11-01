import React, { useContext } from 'react';
import './Register.css';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaUser } from 'react-icons/fa';

const LogIn = () => {
    // Getting Context 
    const { emailLogIn } = useContext(AuthContext);
    // Error State 
    const [error, setError] = useState();

    // Redirecting 
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();


    // Submit Handler 
    const submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        // Email sign in method 
        emailLogIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                console.error(error)
            })


    }
    return (
        <div className='form-bg py-5'>
            <Container>
                <Form onSubmit={submitHandler} className='form-container form mx-auto p-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <div class="form-icon"><FaUser /></div>
                        <h1 className='form-title mx-auto mt-4 text-center p-2 rounded-top text-light'>Please, Login!!!</h1>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                        <Form.Text className="text-danger">
                            {error}
                        </Form.Text>
                    </Form.Group>
                    <Form.Text>
                        New in this website? Please <Link to='/register'>register</Link>
                    </Form.Text>
                    <br />
                    <br />
                    <Button className='submit-btn d-flex mx-auto' variant="outline-primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default LogIn;
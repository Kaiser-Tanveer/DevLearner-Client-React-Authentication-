import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [error, setError] = useState();
    // Submit Handler 
    const submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <Container>
            <Form onSubmit={submitHandler} className='w-50 mx-auto py-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                    <Form.Text className="text-danger">
                        Eroor
                    </Form.Text>
                </Form.Group>
                <Form.Text>
                    New in this website? Please <Link to='/register'>register</Link>
                </Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default LogIn;
import React, { useContext } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const LogIn = () => {
    // Getting Context 
    const { emailLogIn } = useContext(AuthContext);
    // Error State 
    const [error, setError] = useState();
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
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })


    }
    return (
        <Container>
            <Form onSubmit={submitHandler} className='w-75 mx-auto py-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h1 className='mx-auto mt-4 bg-secondary text-center p-2 rounded-top text-light'>Please, Log in Here..</h1>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default LogIn;
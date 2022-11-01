import React, { useContext, useState } from 'react';
import './Register.css';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaGoogle, FaGithub, FaUser } from 'react-icons/fa';


const Register = () => {
    const navigate = useNavigate()
    // Getting Context 
    const { crateEmailUser, googleLogIn, gitLogIn, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState();
    // Submit Handler 
    const submitHandler = e => {
        e.preventDefault();
        const form = e.target;
        const name = form?.name?.value;
        const photoURL = form?.photoURL?.value;
        const email = form?.email?.value;
        const password = form?.password?.value;
        console.log(name, photoURL, email, password);
        // user creating method
        crateEmailUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                profileUpdateHandler(name, photoURL);
                form.reset();
                navigate('/');
            })
            .catch(error => {
                setError(error.message)
                console.error(error);
            })

    }
    // Google sign in handler 
    const GLogInHandler = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    // github sign in handler 
    const gitLogInHandler = () => {
        gitLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
                console.error(error);
            })
    }

    // Update Profile Handler 
    const profileUpdateHandler = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div class="form-bg py-5">
            <Container>
                <Form onSubmit={submitHandler} className='form-container p-3 form mx-auto'>
                    <div class="form-icon"><FaUser /></div>
                    <h1 className='form-title mx-auto mt-4 text-center p-2 rounded-top text-light'>Please, Register!!!</h1>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
                        <Form.Label>Enter PhotoURL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Enter photoURL" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                    <Form.Text>
                        Already have an account? Please <Link to='/logIn'>log in</Link>
                    </Form.Text>
                    <br />
                    <br />
                    <Button className='submit-btn d-flex mx-auto' variant="outline-primary" type="submit">
                        Register
                    </Button>
                    <br />
                    <div className='mx-auto mt-2 d-flex justify-content-between pb-5 px-5 align-items-center'>
                        <hr className='w-25 d-none d-md-block' />
                        <Button onClick={GLogInHandler} variant='outline-dark' className='logIn-btn fw-bold fs-4'><FaGoogle /></Button>
                        <hr className='w-25 d-md-none' />
                        <Button onClick={gitLogInHandler} variant='outline-dark' className='logIn-btn fw-bold fs-4'><FaGithub /></Button>
                        <hr className='w-25 d-none d-md-block' />
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Register;
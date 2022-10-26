import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaHandPointRight } from 'react-icons/fa';

const Blog = () => {
    return (
        <>
            <Card.Header className='fs-1 fw-bold pt-4 pb-3'><span className='text-warning'>Blog</span> Section</Card.Header>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title className='bg-primary p-2 text-light rounded-top'><FaHandPointRight /> What is CORS ?</Card.Title>
                        <hr />
                        <Card.Text className='text-start'>
                            Full form of CORS is "Continuously Operating Reference Stations". CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. To use it, you have to install it first with the command "npm install cors"
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className='bg-primary p-2 text-light rounded-top'><FaHandPointRight /> Why am I using Firebase? What other options I could use to implement Authentication ?</Card.Title>
                        <hr />
                        <Card.Text className='text-start'>
                            I use Firebase because it provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.
                            <br />
                            <div>
                                <strong>Some site gives us Authentication solution like Firebase:</strong>
                                <ul>
                                    <li>Okta</li>
                                    <li>Auth0</li>
                                    <li>OneLogin etc.</li>
                                </ul>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className='bg-primary p-2 text-light rounded-top'><FaHandPointRight /> How does Private Route works ?</Card.Title>
                        <hr />
                        <Card.Text className='text-start'>
                            Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title className='bg-primary p-2 text-light rounded-top'><FaHandPointRight /> What is Node ? How does Node work ?</Card.Title>
                        <hr />
                        <Card.Text className='text-start'>
                            <strong>Node:</strong>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.
                            <br />
                            <strong>Working of Node.js:</strong> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                            <br />
                            <strong>Node.js basically works on two concept:</strong>
                            <li>Asynchronous</li>
                            <li>Non-blocking I/O</li>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Blog;
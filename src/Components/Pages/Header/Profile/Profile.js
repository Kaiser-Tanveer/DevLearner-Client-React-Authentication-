import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <Card className='w-50 mx-auto my-5'>
            <Card.Img variant="top" src={user?.photoURL} />
            <Card.Body>
                <Card.Title>Name: {user?.displayName}</Card.Title>
                <Card.Header>Email: {user?.email}</Card.Header>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>uid: {user?.uid}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
};

export default Profile;
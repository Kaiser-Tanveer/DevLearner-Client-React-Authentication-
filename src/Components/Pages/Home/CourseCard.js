import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const CourseCard = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
            {
                cards.map(card => <CardGroup
                    className='m-4'
                    key={card.id}>
                    <Card>
                        <Card.Img className='img-fluid p-2' variant="top" src={card?.img} />
                        <Card.Body>
                            <Card.Title>{card?.name}</Card.Title>
                            <Card.Text>
                                {card?.title}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Link to={`/category/${card.id}`} className='text-start text-light'><Button variant='primary' className='w-100'>Details</Button></Link>
                        </Card.Footer>
                    </Card>
                </CardGroup>)
            }
        </div>
    );
};

export default CourseCard;
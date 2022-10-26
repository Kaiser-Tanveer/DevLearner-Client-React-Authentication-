import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cards = ({ card }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
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
        </div>
    );
};

export default Cards;
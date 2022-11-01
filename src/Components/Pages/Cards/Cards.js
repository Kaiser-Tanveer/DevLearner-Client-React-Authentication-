import React from 'react';
import './Card.css';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cards = ({ card }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4 g-4">
            <Card className='card p-3 bg-light'>
                <Card.Img className='card-img img-fluid p-2' variant="top" src={card?.img} />
                <Card.Body>
                    <Card.Title>{card?.name}</Card.Title>
                    <Card.Text>
                        {card?.title}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='card-ft'>
                    <Link to={`/category/${card.id}`} className='text-start text-light'><Button variant='outline-primary' className='details-btn w-100'>Details</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Cards;
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Cards from '../Cards/Cards';

const CourseCard = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className='py-5'>
            {
                cards.map(card => <Cards
                    key={card.id}
                    card={card}
                />)
            }
        </div>
    );
};

export default CourseCard;
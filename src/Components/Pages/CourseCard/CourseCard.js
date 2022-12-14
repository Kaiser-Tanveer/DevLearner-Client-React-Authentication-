import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Cards from '../Cards/Cards';

const CourseCard = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://devlearner-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className='row py-5'>
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
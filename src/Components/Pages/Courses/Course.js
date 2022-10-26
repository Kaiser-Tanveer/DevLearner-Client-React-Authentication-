import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    return (
        /* Course Category */
        <div>
            <Link to={`/category/${course.id}`} className='text-start text-light'>{course.name}<hr /></Link>
        </div>
    );
};

export default Course;
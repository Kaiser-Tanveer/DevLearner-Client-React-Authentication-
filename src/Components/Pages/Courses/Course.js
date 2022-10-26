import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    return (
        /* Course Category */
        <div className='course-card bg-secondary pt-2 rounded'>
            <Link to={`/category/${course.id}`} className='text-light text-decoration-none ms-md-2 ms-lg-5 fs-5'>{course.name}<hr /></Link>
        </div>
    );
};

export default Course;
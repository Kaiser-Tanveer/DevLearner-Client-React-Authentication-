import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course from '../Courses/Course';
import CourseCard from '../CourseCard/CourseCard';

const Home = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <Container>
            <div className='row'>
                <div className='col-12 col-md-2 text-center text-md-start bg-primary py-5'>
                    <h3>Total Courses: {courses.length}</h3>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        />)
                    }
                </div>
                <div className='col-12 col-md-10 bg-light'>
                    <h2 className='text-center fw-bold pt-4'>Choice Your <span className='text-warning'>Best Course</span></h2>
                    <CourseCard />
                </div>
            </div>
        </Container>
    );
};

export default Home;
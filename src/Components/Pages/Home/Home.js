import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course from './Course';
import CourseSamary from './CourseSamary';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import CourseCard from './CourseCard';
import { Button } from 'bootstrap';

const Home = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <Container>
            <Row>
                <Col className='bg-primary py-5'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        />)
                    }
                </Col>
                <Col className='py-5 w-full' xs={10}>
                    <div className='row-cols-3'>
                        <CourseCard />
                        <button className='btn btn-warning w-75 fw-bold'>Get Premium Option</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
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
            <Row>
                <Col className='bg-primary py-5'>
                    <h3>Total Courses: {courses.length}</h3>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        />)
                    }
                </Col>
                <Col xs={10}>
                    <CourseCard />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
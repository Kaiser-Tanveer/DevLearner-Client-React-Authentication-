import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Course from './Course';
import CourseSamary from './CourseSamary';

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
                <Col className='py-5' xs={10}>
                    <CourseSamary />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
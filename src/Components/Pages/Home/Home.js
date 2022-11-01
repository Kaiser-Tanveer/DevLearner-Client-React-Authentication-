import React from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Course from '../Courses/Course';
import CourseCard from '../CourseCard/CourseCard';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className='home'>
            <Container>
                <div className='row'>
                    <div className='col-12 col-md-2 text-center text-md-start py-5 position-static position-md-relative position-lg-relative px-2'>
                        <h3 className='py-4 text-center'>Courses: {courses.length}</h3>
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}
                            />)
                        }
                    </div>
                    <div className='col-12 col-md-10'>
                        <h1 className='text-center fw-bold pt-4'>Choice Your <span className='text-warning'>Best Course</span>
                            <span className='text-secondary'>
                                <Typewriter
                                    loop
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={50}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                    words={[' for you Future', ' for your Happiness', ' to make your Life Easier']}
                                />
                            </span>
                        </h1>
                        <CourseCard />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;
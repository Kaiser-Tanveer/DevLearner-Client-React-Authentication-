import { Link, useLoaderData } from 'react-router-dom';
import './CourseSummary.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Image } from 'react-bootstrap';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaDownload } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Typewriter } from 'react-simple-typewriter';

const CourseSamary = () => {
    const { user } = useContext(AuthContext);

    // React to Pdf 
    const componentRef = useRef();
    const printHandler = useReactToPrint({
        content: () => componentRef.current,
    });


    const courseSamary = useLoaderData();
    // console.log(courseSamary);
    return (
        <div className='course-detail'>
            <Container className='py-5'>
                {
                    user && user?.uid && <h1 className='py-2 text-center text-light'>Welcome!! Mr. <span className='text-warning'>
                        <Typewriter
                            loop
                            cursor
                            cursorStyle='_'
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={2000}
                            words={[`${user?.displayName}`]}
                        />
                    </span></h1>
                }
                <Card className='detail-card bg-transparent border border-2 border-light'>
                    <Card.Header className='d-flex justify-content-between border-bottom border-light text-black fw-bold' as="h3">
                        <div>{courseSamary.name}</div><Button onClick={printHandler}><FaDownload /> Download pdf</Button></Card.Header>
                    <Card.Body className='text-light' ref={componentRef} style={{ width: '100%', height: 'window.innerHeight', padding: '20px' }}>
                        <Card.Title className='text-center fs-1 pt-5 pb-3'>{courseSamary.title}</Card.Title>
                        <div className='w-100 d-flex mx-auto justify-content-center'>
                            <Image className='detail-card-img img-fluid w-25' src={courseSamary.img} />
                        </div>
                        <Card.Text className='py-3'>
                            {courseSamary.details}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant='warning' className='w-100 fw-bold text-uppercase fs-2 my-4'><Link className='text-decoration-none' to='/premium'>Get Premium Access</Link></Button>
            </Container>
        </div>
    );
};

export default CourseSamary;
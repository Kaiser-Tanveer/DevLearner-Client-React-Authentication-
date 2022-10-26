import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Image } from 'react-bootstrap';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FaDownload } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

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
        <Container className='py-5'>
            {
                user && user?.uid && <h1 className='py-2'>Welcome!! Mr. <span className='text-warning'>{user?.displayName}</span></h1>
            }
            <Card>
                <Card.Header className='d-flex justify-content-between' as="h3">
                    <div>{courseSamary.name}</div><Button onClick={printHandler}><FaDownload /> Download pdf</Button></Card.Header>
                <Card.Body ref={componentRef} style={{ width: '100%', height: 'window.innerHeight', padding: '20px' }}>
                    <Card.Title className='text-center fs-1 pt-5 pb-3'>{courseSamary.title}</Card.Title>
                    <div className='w-100 d-flex mx-auto justify-content-center'>
                        <Image className='img-fluid w-25' src={courseSamary.img} />
                    </div>
                    <Card.Text className='py-3'>
                        {courseSamary.details}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button variant='warning' className='w-100 fw-bold text-uppercase fs-2 my-4'><Link className='text-decoration-none' to='/premium'>Get Premium Access</Link></Button>
        </Container>
    );
};

export default CourseSamary;
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Image } from 'react-bootstrap';

const CourseSamary = () => {
    const courseSamary = useLoaderData();
    // console.log(courseSamary);
    return (
        <Container className='py-5'>
            <Card>
                <Card.Header className='d-flex justify-content-between' as="h3">
                    <div>{courseSamary.name}</div><Button>Download pdf</Button></Card.Header>
                <Card.Body>
                    <Card.Title>{courseSamary.title}</Card.Title>
                    <Image className='img-fluid w-25' src={courseSamary.img} />
                    <Card.Text>
                        {courseSamary.details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseSamary;
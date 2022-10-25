import { useLoaderData } from 'react-router-dom';

const CourseSamary = () => {
    const courseSamary = useLoaderData();
    console.log(courseSamary);
    return (
        <div>
            <h1>{courseSamary.name}</h1>
        </div>
    );
};

export default CourseSamary;
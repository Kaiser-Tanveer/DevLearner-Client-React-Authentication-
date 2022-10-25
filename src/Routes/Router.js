import { createBrowserRouter } from 'react-router-dom';
import CourseSamary from '../Components/Pages/Home/CourseSamary';
import Home from '../Components/Pages/Home/Home';
import Main from './layout.js/Main';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/category'),
                element: <Home />,
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <CourseSamary />
            }
        ]
    }
])
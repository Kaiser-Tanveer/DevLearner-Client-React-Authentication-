import { createBrowserRouter } from 'react-router-dom';
import CourseSamary from '../Components/Pages/CourseSummary/CourseSamary';
import Home from '../Components/Pages/Home/Home';
import NotFound from '../Components/Pages/NotFound/NotFound';
import Premium from '../Components/Pages/Premium/Premium';
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
                path: '/courses',
                loader: () => fetch('http://localhost:5000/category'),
                element: <Home />,
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <CourseSamary />
            },
            {
                path: '/premium',
                element: <Premium />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])
import { createBrowserRouter } from 'react-router-dom';
import CourseSamary from '../Components/Pages/CourseSummary/CourseSamary';
import Home from '../Components/Pages/Home/Home';
import NotFound from '../Components/Pages/NotFound/NotFound';
import Premium from '../Components/Pages/Premium/Premium';
import LogIn from '../Components/Pages/Register/LogIn';
import Register from '../Components/Pages/Register/Register';
import Main from './layout.js/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
                element: <PrivateRoute><CourseSamary /></PrivateRoute>
            },
            {
                path: '/premium',
                element: <Premium />
            },
            {
                path: '/logIn',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])
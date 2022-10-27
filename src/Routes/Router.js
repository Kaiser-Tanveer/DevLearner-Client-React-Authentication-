import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Components/Pages/Blog/Blog';
import CourseSamary from '../Components/Pages/CourseSummary/CourseSamary';
import FAQ from '../Components/Pages/FAQ/FAQ';
import Profile from '../Components/Pages/Header/Profile/Profile';
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
                loader: () => fetch('https://devlearner-server.vercel.app/category'),
                element: <Home />,
            },
            {
                path: '/courses',
                loader: () => fetch('https://devlearner-server.vercel.app/category'),
                element: <Home />,
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://devlearner-server.vercel.app/category/${params.id}`),
                element: <PrivateRoute><CourseSamary /></PrivateRoute>
            },
            {
                path: '/premium',
                element: <Premium />
            },
            {
                path: '/profile',
                element: <Profile />
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
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])
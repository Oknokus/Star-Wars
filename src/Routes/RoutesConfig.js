import PeoplePage from '@Containers/PeoplePage/PeoplePage';
import HomePage from '@Containers/HomePage/HomePage';
import NotFoundPage from '@Containers/NotFoudnPage/NotFoundPage';


const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
    {
        path: '/notfoundpage',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
];

export default routesConfig;
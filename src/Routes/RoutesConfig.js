import PeoplePage from '@Containers/PeoplePage/PeoplePage';
import HomePage from '@Containers/HomePage/HomePage';
import NotFoundPage from '@Containers/NotFoudnPage/NotFoundPage';
import PersonPage from '@Containers/PersonPage/PersonPage'


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
        path: '/people/:id',
        element: <PersonPage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
];

export default routesConfig;
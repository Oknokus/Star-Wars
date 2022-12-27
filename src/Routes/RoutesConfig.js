import PeoplePage from '@Containers/PeoplePage/PeoplePage';
import HomePage from '@Containers/HomePage/HomePage';


const   routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/people',
        element: <PeoplePage />
    },
];

export default routesConfig;
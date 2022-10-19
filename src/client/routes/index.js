import { Home, History } from '../pages';

const routes = [
   {
      path: '/',
      component: Home,
      exact: true,
   },
   {
      path: '/history',
      component: History,
      exact: true,
   },
];

export default routes;

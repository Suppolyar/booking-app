import { Route } from '~/types/Route';

const routes:Array<Route> = [
  {
    path: '/',
    component: () => import('@/MainPage.vue'),
    name: 'main',
  },
];

export default routes;

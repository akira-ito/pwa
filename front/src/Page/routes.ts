import { RouteComponentProps, RouteProps } from 'react-router';
import loadable from '@loadable/component';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

// const UserDetail = lazy(() => import('./User/UserDetail'));
// const UserPage = lazy(() => import('./User/UserPage'));
const UserDetail = loadable(() => import('./User/UserDetail'));
const UserPage = loadable(() => import('./User/UserPage'));

export interface RouterType {
  path: string;
  exact?: boolean;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const routes: RouterType[] = [
  {
    path: '/',
    component: UserPage,
    exact: true,
  },
  {
    path: '/users',
    component: UserPage,
    exact: true,
  },
  {
    path: '/users/:id',
    component: UserDetail,
    exact: true,
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];

export default routes;

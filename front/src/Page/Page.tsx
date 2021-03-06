import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Container } from '../components/Layout';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import UserDetail from './User/UserDetail';
import UserPage from './User/UserPage';

const Page: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/' exact>
          <UserPage />
        </Route>
        <Route path='/users' exact>
          <UserPage />
        </Route>
        <Route path='/users/:id' exact>
          <UserDetail />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
};

export default Page;

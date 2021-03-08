import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from './routes';

const Page: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={route.path.concat(`${index}`)}
            path={route.path}
            exact={route.exact}
            component={route.component}
          ></Route>
        ))}
      </Switch>
    </Suspense>
  );
};

export default Page;

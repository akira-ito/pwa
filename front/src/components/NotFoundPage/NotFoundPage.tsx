import React from 'react';
import { useLocation } from 'react-router';

const NotFoundPage: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <h3>
        Page not found (<code>{location.pathname}</code>)
      </h3>
    </div>
  );
};

export default NotFoundPage;

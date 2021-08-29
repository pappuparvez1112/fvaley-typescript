import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));

// eslint-disable-next-line react/prop-types
const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />

          <Route exact path="/help" component={Help} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AppRouter;

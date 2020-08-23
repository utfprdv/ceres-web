import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, List, Producer, Product } from 'pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/lista" component={List} />
    <Route path="/produtor/:produtor" component={Producer} />
    <Route path="/produto/:produto" component={Product} />
  </Switch>
);

export default Routes;

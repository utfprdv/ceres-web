import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, List, Producer, Product } from 'pages';
import Layout from 'pages/Layout';

const Routes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/lista" component={List} />
      <Route path="/produtor/:produtor" component={Producer} />
      <Route path="/produto/:produto" component={Product} />
    </Switch>
  </Layout>
);

export default Routes;

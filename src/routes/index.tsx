import React from 'react';
import { Switch } from 'react-router-dom';
import {
  Home,
  List,
  Producer,
  Product,
  Login,
  MarketRegistration,
  Profile,
  Cart,
  PhoneConfirmation,
} from 'pages';
import Layout from 'pages/Layout';
import { connect } from 'react-redux';
import { LOAD_MARKET } from 'store/contants';
import Route from './Route';

const Routes: React.FC = ({ loadMakerts }: any) => {
  React.useEffect(() => {
    loadMakerts();
  }, [loadMakerts]);

  return (
    <Layout>
      <Switch>
        <Route
          path="/registro/feira"
          exact
          component={MarketRegistration}
          isPrivate
        />
        <Route path="/perfil" exact component={Profile} isPrivate />
        <Route
          path="/confirmacao-telefone"
          exact
          component={PhoneConfirmation}
          isPrivate
        />

        <Route path="/carrinho" exact component={Cart} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/lista" component={List} />
        <Route path="/produtor/:producerID" component={Producer} />
        <Route path="/produto/:productID" component={Product} />
      </Switch>
    </Layout>
  );
};

export default connect(null, dispatch => ({
  loadMakerts: () => dispatch({ type: LOAD_MARKET, payload: 1 }),
}))(Routes);

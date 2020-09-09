import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {shop} from './store/reducer';
import {CartState} from './store/types'

import Routes from './routes';

const store = createStore<CartState>(
  shop, {
    products:[],
    total: 0
  }
);

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'store/reducers';
import sagas from 'store/sagas';
import createSagaMiddleware from 'redux-saga';
import Routes from './routes';
import AppProvider from './hooks';

const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) ||
  compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore<any, any, any, any>(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;

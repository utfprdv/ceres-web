import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducers from 'store/reducers'
import sagas from 'store/sagas'
import Routes from './routes'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(sagas)

const App = (): React.ReactElement => (
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>
)

export default App

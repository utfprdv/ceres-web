import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Layout from '../pages/Layout'
import RoutePrivate from './RoutePrivate'
import ProductDetails from '../components/ProductDetails'
import { Store } from '../types'
import style from './style.module.scss'

const Home = React.lazy(() => import('pages/Home'))
const Login = React.lazy(() => import('pages/Login'))
const Cart = React.lazy(() => import('pages/Cart'))

const Routes = (): React.ReactElement => {
  const product = useSelector((state: Store) => state.app.selectedProduct)

  return (
    <Suspense fallback={<div className={style.empty} />}>
      <Switch>
        <Route component={Login} path="/login" />
        <Layout>
          <RoutePrivate component={Cart} path="/carrinho" />
          <Route component={Home} path="/" exact />
        </Layout>
      </Switch>
      {product ? <ProductDetails /> : null}
    </Suspense>
  )
}

export default Routes

import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from '../pages/Layout'
import { LOAD_MARKET } from '../store/contants'
import Route from './Route'

const Home = React.lazy(() => import('pages/Home'))
const List = React.lazy(() => import('pages/List'))
const Producer = React.lazy(() => import('pages/Producer'))
const Product = React.lazy(() => import('pages/Product'))
const Login = React.lazy(() => import('pages/Login'))
const MarketRegistration = React.lazy(() => import('pages/MarketRegistration'))
const Profile = React.lazy(() => import('pages/Profile'))
const Cart = React.lazy(() => import('pages/Cart'))
const Card = React.lazy(() => import('pages/Card'))
const PhoneConfirmation = React.lazy(() => import('pages/PhoneConfirmation'))
const Delivery = React.lazy(() => import('pages/Delivery'))

type Props = {
  loadMarkets: () => void
}

const Routes = ({ loadMarkets }: Props) => {
  React.useEffect(() => {
    loadMarkets()
  }, [loadMarkets])

  return (
    <Layout>
      <Suspense fallback={<span>Loading...</span>}>
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
            // isPrivate
          />

          <Route path="/entrega" exact component={Delivery} />
          <Route path="/carrinho" exact component={Cart} />
          <Route path="/cartao" exact component={Card} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/lista" component={List} />
          <Route path="/produtor/:producerID" component={Producer} />
          <Route path="/produto/:productID" component={Product} />
        </Switch>
      </Suspense>
    </Layout>
  )
}

export default connect(null, dispatch => ({
  loadMarkets: () => {
    dispatch({ type: LOAD_MARKET, payload: 1 })
  },
}))(Routes)

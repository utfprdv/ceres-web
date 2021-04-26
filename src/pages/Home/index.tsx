import React from 'react'
import { useSelector } from 'react-redux'

import { PrivateLink } from 'components'
import { CtaArrow } from 'images'
import { Store } from 'types'
import classy from 'utils/classy'
import animations from 'styles/animations.module.scss'
import ProductList from './ProductList'

import style from './Home.module.scss'

const Home = (): React.ReactElement => {
  const cartCount = useSelector(
    (state: Store) => Object.keys(state.cart).length,
  )

  return (
    <div className={style.root}>
      {/* <MarketSummary /> */}
      <section
        className={classy(style.productGrid, animations.fadeinModal)}
        data-label="Produtos"
      >
        <ProductList />
      </section>
      {cartCount ? (
        <PrivateLink
          className={classy(style.checkout, animations.fadein)}
          to="/carrinho"
        >
          <span>Fechar pedido</span>
          <span>
            {cartCount} {cartCount > 1 ? 'Itens' : 'Item'}
          </span>
          <CtaArrow />
        </PrivateLink>
      ) : null}
    </div>
  )
}

export default Home

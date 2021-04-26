import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Logo, Cart, Search } from 'images'
import { PrivateLink, Badge, Menu } from 'components'
import classy from 'utils/classy'

import { FILTER } from 'store/contants'
import header from './Header.module.scss'

const Header = (): React.ReactElement => {
  const dispatch = useDispatch()
  const isHome = useRouteMatch({ path: '/', exact: true })

  return (
    <header className={classy(header.root, { [header.noSearch]: !isHome })}>
      <nav aria-label="Navegação" className={header.nav}>
        <div className={header.left}>
          <Menu />
        </div>

        <div className={header.middle}>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className={header.right}>
          <PrivateLink className={header.cart} to="/carrinho">
            <Badge className={header.badge} icon={<Cart />} />
          </PrivateLink>
        </div>
      </nav>
      <div className={header.search} hidden={!isHome}>
        <input
          className={header.searchField}
          enterKeyHint="search"
          placeholder="buscar produtos de Dois Vizinhos"
          type="search"
          onChange={ev => dispatch({ type: FILTER, payload: ev.target.value })}
        />
        <div className={header.searchIcon}>
          <Search />
        </div>
      </div>
    </header>
  )
}

export default Header

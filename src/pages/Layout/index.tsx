import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import classy from 'utils/classy'
import Header from './Header'

import style from './Main.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): React.ReactElement => {
  const isHome = useRouteMatch({ path: '/', exact: true })

  return (
    <>
      <Header />
      <main className={classy(style.root, { [style.noSearch]: !isHome })}>
        {children}
      </main>
    </>
  )
}

export default Layout

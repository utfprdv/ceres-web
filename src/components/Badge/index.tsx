import React from 'react'
import { useSelector } from 'react-redux'
import { Store } from 'types'

type Props = {
  icon: React.ReactElement
  className: string
}

const Badge = ({ icon, className }: Props): React.ReactElement => {
  const cart = useSelector((state: Store) => state.cart)
  const number = Object.values(cart).length

  return (
    <div className={className}>
      <span className="accessibility-only">{number} itens no carrinho</span>
      {number ? <span>{number > 9 ? '+9' : number}</span> : null}
      {icon}
    </div>
  )
}

export default Badge

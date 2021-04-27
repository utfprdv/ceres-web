import React from 'react'
import { Check, CardCorner, Add } from 'images'
import classy from 'utils/classy'

import style from './ProductCard.module.scss'

type PriceTagProps = {
  int: string
  cents: string
  unit: string
}

const PriceTag = ({
  int,
  cents,
  unit = 'kilo',
}: PriceTagProps): React.ReactElement => {
  return (
    <div className={style.priceTag}>
      <div aria-hidden="true">
        <span className={style.moneySign}>R$ </span>
        {int},<sup>{cents}</sup>
        <span aria-hidden="true" className={style.unit}>
          {' '}
          /{unit}
        </span>
      </div>
      <span className="accessibility-only">
        {int} reais por {unit}
      </span>
    </div>
  )
}

type Props = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  selected?: boolean
  title: string
  price: string
  unit: string
  image: string
}

const ProductCard = ({
  onClick,
  selected = false,
  title,
  price,
  unit,
  image,
}: Props): React.ReactElement => {
  const [int, cents] = price.split('.')

  return (
    <button className={style.item} type="button" onClick={onClick}>
      <div className={classy(style.inner, { [style.selected]: selected })}>
        <img alt={title} loading="lazy" src={image} />
        <div className={style.meta}>
          <h3 className={style.title}>{title}</h3>
          <PriceTag cents={cents} int={int} unit={unit} />
        </div>
      </div>
      <div className={style.add}>
        <span className={style.cardCorner}>
          <CardCorner />
        </span>
        {selected ? <Check /> : <Add />}
      </div>
    </button>
  )
}

ProductCard.defaultProps = {
  selected: false,
}

export default ProductCard

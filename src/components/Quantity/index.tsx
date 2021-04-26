import React, { useEffect, useState } from 'react'

import { Add, Remove } from 'images'

import style from './Quantity.module.scss'

type Props = {
  defaultValue: number
  onChange: (e: number) => void
  max?: number
  step?: number
  unit: string
}

const Quantity = ({
  onChange,
  defaultValue,
  max = Infinity,
  step = 1,
  unit,
}: Props): React.ReactElement => {
  const [quantity, setQuantity] = useState(defaultValue)

  useEffect(() => {
    onChange(quantity)
  }, [quantity, onChange])

  return (
    <div className={style.root}>
      <button
        className={style.minus}
        type="button"
        onClick={() => setQuantity(val => (val > 0 ? val - step : val))}
      >
        <Remove />
      </button>
      <input
        inputMode="numeric"
        type="number"
        value={quantity}
        onChange={ev => {
          setQuantity(Number(ev.target.value))
        }}
      />
      <span className={style.unit}>{unit}</span>
      <button
        type="button"
        onClick={() => setQuantity(val => (val < max ? val + step : val))}
      >
        <Add />
      </button>
    </div>
  )
}

Quantity.defaultProps = {
  max: Infinity,
  step: 1,
}

export default Quantity

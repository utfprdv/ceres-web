import React, { useCallback, useEffect, useState } from 'react'

import { Add, Remove } from 'images'

import { MySwal } from 'components/MyAlert'
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

  const handleRemoveClick = useCallback(() => {
    if (quantity > 1) {
      setQuantity(val => (val > 0 ? val - step : val))
    } else {
      MySwal.fire({
        title: (
          <h3
            style={{
              color: '#0d4136',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Deseja retirar o produto do seu carrinho?
          </h3>
        ),
        confirmButtonText: 'Não',
        confirmButtonColor: '#0d4136',
        denyButtonText: 'Sim',
        showDenyButton: true,
      }).then(res => {
        if (res.isDenied) {
          setQuantity(val => (val > 0 ? val - step : val))
        }
      })
    }
  }, [quantity, step])

  useEffect(() => {
    onChange(quantity)
  }, [quantity, onChange])

  return (
    <div className={style.root}>
      <button className={style.minus} type="button" onClick={handleRemoveClick}>
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

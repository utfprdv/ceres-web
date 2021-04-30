import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { CartItem, Product } from 'types'
import * as C from 'store/contants'

import style from './ProductCounter.module.scss'
import Quantity from '../Quantity'

type Props = {
  product: Product
  cartItem: CartItem
}

const ProductCounter = ({ product, cartItem }: Props): React.ReactElement => {
  const imagePath =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/media'
      : '/media'

  const dispatch = useDispatch()
  const onChange = useCallback(
    (qnt: number) => {
      dispatch({
        type: C.CART_UPDATE,
        payload: {
          id: cartItem.id,
          quantity: qnt,
        },
      })
    },
    [dispatch, cartItem.id],
  )
  const [priceInt, priceCent] = (Number(product.preco) * cartItem.quantity)
    .toFixed(2)
    .split('.')

  return (
    <div className={style.root}>
      <div className={style.product}>
        <img
          alt=""
          className={style.image}
          src={`${imagePath}${product.imagem_principal}`}
        />
        <div>
          <h4 className={style.title}>{product.nome}</h4>
          <div className={style.price}>
            <span className={style.sign}>R$</span>
            <span className={style.integer}>{priceInt},</span>
            <span className={style.cents}>{priceCent}</span>
          </div>
        </div>
        <div className={style.remove}>
          <button
            className={style.removeBtn}
            type="button"
            onClick={() => {
              dispatch({ type: C.CART_REMOVE, payload: product.id })
            }}
          >
            remover
          </button>
        </div>
      </div>
      <div className={style.quantity}>
        <Quantity
          defaultValue={cartItem.quantity}
          step={product.unidade}
          unit={C.UNIDADE[product.unidade_medida]}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default ProductCounter

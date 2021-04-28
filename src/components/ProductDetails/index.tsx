/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Close, AddCart } from 'images'
import { Product, Store } from 'types'
import { UNIDADE, CART_ADD, CART_REMOVE, CLEAR_PRODUCT } from 'store/contants'
import classy from 'utils/classy'

import animations from 'styles/animations.module.scss'

import Quantity from '../Quantity'

import style from './ProductDetails.module.scss'

const ProductDetails = (): React.ReactElement | null => {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const [value, setValue] = useState(0.0)
  const [quantity, setQuantity] = useState(0)
  const [adding, setAdding] = useState(false)

  const dispatch = useDispatch()

  const products = useSelector((state: Store) => state.app.products)
  const productId = useSelector((state: Store) => state.app.selectedProduct)
  const cart = useSelector((state: Store) => state.cart)

  const product = products[productId]
  const productInCart = cart[productId]

  const closeModal = useCallback(() => {
    dispatch({ type: CLEAR_PRODUCT })
  }, [dispatch])

  useEffect(() => {
    if (product) {
      setQuantity(product.unidade)
      setValue(parseFloat(product.preco))
    }
  }, [product, setQuantity, product.unidade])

  const handleKey = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]) => {
      const [kEvent] = args
      if (kEvent.keyCode === 27) {
        closeModal()
      }
    },
    [closeModal],
  )

  useEffect(() => {
    modalRef?.current?.focus()
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  const [priceInt = 0, priceCents = 0] = product.preco?.split('.')
  const [pricing, cents = 0] = value.toFixed(2).split('.')
  const unidade = product.unidade_medida
  const imagePath =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:8000/media'
      : '/media'

  return (
    <div className={style.root} onClick={closeModal}>
      <div
        key="esc"
        ref={modalRef}
        className={classy(style.modal, animations.fadeinModal)}
        role="button"
        tabIndex={0}
        onClick={evt => evt.stopPropagation()}
        // eslint-disable-next-line no-console
        onKeyPress={(...args) => console.log(...args)}
      >
        <div className={style.modalTop}>
          <button
            ref={closeButtonRef}
            className={style.close}
            type="button"
            onClick={closeModal}
          >
            fechar <Close />
          </button>
          <img
            alt=""
            className={style.image}
            src={`${imagePath}${product.imagem_principal}`}
          />
          <div className={style.meta}>
            <h2>{(products[productId] as Product).nome}</h2>
            <div className={style.price}>
              <div className={style.priceNumbers} aria-hidden>
                <span className={style.sign}>R$ </span>
                <span className={style.integer}>{priceInt},</span>
                <span className={style.cents}>{priceCents}</span>
                <span className={style.unit}>
                  / {product.unidade} {UNIDADE[unidade]}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.content}>
          <div hidden={Boolean(productInCart)}>
            <p className={style.title}>
              Total por {quantity} {UNIDADE[unidade]} de{' '}
              <strong>{(products[productId] as Product).nome}</strong>
              <span className="accessibility-only">
                {priceInt} reais{' '}
                {Number(priceCents) ? `e ${priceCents} centavos` : ''}
              </span>
            </p>
            <div className={style.priceNumbers} aria-hidden>
              <span className={style.sign}>R$ </span>
              <span className={style.integer}>{pricing},</span>
              <span className={style.cents}>{cents}</span>
            </div>
          </div>
          <div>
            <div className={style.quantity} hidden={Boolean(productInCart)}>
              <Quantity
                defaultValue={product.unidade}
                step={product.unidade}
                unit={UNIDADE[unidade]}
                onChange={qnt => {
                  setQuantity(qnt)
                  setValue(
                    (qnt / products[productId].unidade) *
                      parseFloat(products[productId].preco),
                  )
                }}
              />
            </div>
            {!productInCart ? (
              <button
                className={style.addCart}
                disabled={!quantity || adding}
                type="button"
                onClick={() => {
                  setAdding(true)
                  setTimeout(() => {
                    dispatch({
                      type: CART_ADD,
                      payload: {
                        id: products[productId]?.id,
                        quantity: Number(
                          (value / parseFloat(product.preco)).toFixed(2),
                        ),
                      },
                    })
                    closeModal()
                  }, 1000)
                }}
              >
                <span>
                  {adding ? 'Adicionando...' : 'Adicionar ao Carrinho'}
                </span>{' '}
                <AddCart />
              </button>
            ) : (
              <button
                className={classy(style.addCart, style.removeCart)}
                disabled={!quantity}
                type="button"
                onClick={() => {
                  dispatch({
                    type: CART_REMOVE,
                    payload: products[productId]?.id,
                  })
                  closeModal()
                }}
              >
                <span>Remover do Carrinho</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

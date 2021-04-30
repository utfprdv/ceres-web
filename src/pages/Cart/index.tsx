/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { Package, Card, DeliveryMan } from 'images'
import { ProductCounter } from 'components'
import modalStyle from 'components/ProductDetails/ProductDetails.module.scss'
import classy from 'utils/classy'

import * as C from 'store/contants'
import { Store } from 'types'

import style from './Cart.module.scss'

type Errors = {
  endereco_logradouro?: string | undefined
  endereco_bairro?: string | undefined
  telefone?: string | undefined
  endereco_numero?: string | undefined
}

const Cart = (): React.ReactElement => {
  const [isOpen, setOpen] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector((state: Store) => state.cart)
  const delivery = useSelector((state: Store) => state.delivery)

  const products = useSelector((state: Store) => state.app.products)
  const DELIVERY_FEE = 5
  const cartValues = Object.values(cart)
  const productsLoaded = Object.keys(products).length
  const user = useSelector((state: Store) => state.user)
  const userHasAddress = Boolean(user.addresses.length)
  const cities = useSelector((state: Store) => state.app.cities)

  const openModal = !userHasAddress ? true : isOpen

  const subtotal = productsLoaded
    ? cartValues.reduce((acc, curr) => {
        return acc + curr.quantity * Number(products[curr.id].preco)
      }, 0)
    : 0

  const total = subtotal > 0 ? (subtotal + DELIVERY_FEE).toFixed(2) : 0

  return (
    <>
      <div className={classy(style.root, 'appear')}>
        <h1 className={style.pageTitle}>Carrinho</h1>
        <br />
        <div className={style.banner}>
          <Package />
          <p>Entrega programada para Segundas, Quartas e Sextas</p>
        </div>

        <div className={style.address}>
          <DeliveryMan />
          <div>
            <h3 className={style.bold}>Endereço de entrega</h3>
            {delivery ? (
              <address>{`${delivery.endereco_logradouro}, ${delivery.endereco_numero}, ${delivery.endereco_bairro} - ${user.telefone}`}</address>
            ) : null}
            <button
              className={style.addressChange}
              type="button"
              onClick={() => setOpen(true)}
            >
              {delivery ? 'Mudar' : 'Selecionar'} endereço de entrega
            </button>
          </div>
        </div>
        <br />
        <div className={style.total}>
          <div>
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>
          <div hidden={subtotal === 0}>
            <p>Taxa de entrega</p>
            <p>R$ {DELIVERY_FEE.toFixed(2)}</p>
          </div>
          <hr className={style.hr} />
          <div className={style.bold}>
            <p>Total</p>
            <p>R$ {total}</p>
          </div>
        </div>
        <div>
          <h2 className={style.bold}>Resumo</h2>
          <br />
          <div>
            {productsLoaded ? (
              cartValues.map(entry => {
                return (
                  <ProductCounter
                    key={entry.id}
                    cartItem={entry}
                    product={products[entry.id]}
                  />
                )
              })
            ) : (
              <p>Carregando...</p>
            )}
            {!cartValues.length && (
              <div className={style.noProduct}>
                <p>Você ainda não possui produtos no carrinho</p>
                <Link className={style.empty} to="/">
                  Ir para loja
                </Link>
              </div>
            )}
          </div>
        </div>
        <button
          className={style.checkout}
          disabled={!subtotal || !delivery}
          hidden={!subtotal}
          type="button"
          onClick={() => {
            dispatch({ type: C.PAYMENT_CREATE })
          }}
        >
          <span>Pagar com cartão {subtotal ? `(R$ ${total})` : ''}</span>{' '}
          <Card />
        </button>
      </div>
      <div className={modalStyle.root} hidden={!openModal}>
        <div className={modalStyle.modal}>
          <div className={style.inner}>
            <h3 className={style.greetings}>
              <span>Olá,</span>
              <br />
              {user.name}
            </h3>
            {user.addresses.length ? (
              <>
                <h4>Selecione endereço:</h4>
                <br />
                <ul>
                  {user.addresses.map(addr => {
                    return (
                      <li key={`${addr.id}`}>
                        <button
                          className={style.addressButton}
                          type="button"
                          onClick={() => {
                            setOpen(false)
                            dispatch({ type: C.DELIVERY, payload: addr })
                          }}
                        >
                          <p>
                            {`${addr.endereco_logradouro}, ${addr.endereco_numero}`}
                          </p>
                          <p>{addr.endereco_bairro}</p>
                          <p>{user.telefone}</p>
                        </button>
                      </li>
                    )
                  })}
                </ul>
                <hr className={style.divider} />
              </>
            ) : (
              <div className={style.noAddress}>
                Você ainda não possui um endereço para entrega
              </div>
            )}
            <h6>Novo Endereço</h6>
            <p className={style.addressCopy}>
              Adicione endreço para entrega e telefone para contato
            </p>
            <div className={style.addressForm}>
              <Formik
                initialValues={{
                  endereco_logradouro: '',
                  endereco_bairro: '',
                  telefone: user.telefone || '',
                  endereco_numero: '',
                }}
                validate={values => {
                  const errors: Errors = {}

                  if (values.endereco_logradouro.length < 3) {
                    errors.endereco_logradouro = 'Adicione uma rua'
                  }
                  if (values.endereco_bairro.length < 3) {
                    errors.endereco_bairro = 'Adicione um bairro'
                  }
                  if (values.telefone.length < 9) {
                    errors.telefone = 'Adicione um telefone'
                  }
                  if (!values.endereco_numero.length) {
                    errors.endereco_numero = 'Adicione um número'
                  }
                  return errors
                }}
                onSubmit={(address, { resetForm }) => {
                  return new Promise((res, rej) => {
                    // TODO remove
                    const dv = Object.values(cities).find(
                      c => c.nome === 'Dois Vizinhos',
                    )

                    dispatch({
                      type: C.ADD_ADDRESS,
                      payload: {
                        ...address,
                        cidade: dv?.id,
                        cliente: user.client,
                        res: (data: any) => {
                          resetForm()
                          res(data)
                          dispatch({ type: C.DELIVERY, payload: data })
                          dispatch({
                            type: C.USER_UPDATE,
                            payload: {
                              ...user,
                              telefone: address.telefone,
                            },
                          })
                          setOpen(false)
                        },
                        rej,
                      },
                    })
                  })
                }}
              >
                {({ isSubmitting, dirty, errors, submitForm }) => {
                  return (
                    <Form className={style.addressForm}>
                      <Field
                        name="endereco_logradouro"
                        placeholder="Rua"
                        readOnly={isSubmitting}
                        type="text"
                      />
                      <ErrorMessage
                        className={style.error}
                        component="div"
                        name="endereco_logradouro"
                      />
                      <div>
                        <div>
                          <Field
                            name="endereco_numero"
                            placeholder="Número"
                            readOnly={isSubmitting}
                            type="text"
                          />
                          <ErrorMessage
                            className={style.error}
                            component="div"
                            name="endereco_numero"
                          />
                        </div>
                        <div>
                          <Field
                            name="telefone"
                            placeholder="Telefone"
                            readOnly={isSubmitting}
                            type="tel"
                          />
                          <ErrorMessage
                            className={style.error}
                            component="div"
                            name="telefone"
                          />
                        </div>
                      </div>
                      <Field
                        name="endereco_bairro"
                        placeholder="Bairro"
                        readOnly={isSubmitting}
                        type="text"
                      />
                      <ErrorMessage
                        className={style.error}
                        component="div"
                        name="endereco_bairro"
                      />
                      <br />
                      <button
                        className={style.newAddress}
                        disabled={
                          isSubmitting ||
                          !(!Object.keys(errors).length && dirty)
                        }
                        type="button"
                        onClick={submitForm}
                      >
                        Salvar e usar endereço
                      </button>
                    </Form>
                  )
                }}
              </Formik>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart

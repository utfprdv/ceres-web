import React from 'react'
import { connect } from 'react-redux'
import ListGrid from '../../components/ListGrid'
import { H3, OnNotFound } from './List.style'
import { ADD_PRODUCT } from '../../store/contants'
import NotList from '../../images/list.png'
import { Producer, Product, Store } from '../../types'

type Props = {
  selectedProducts: number[]
  producers: Array<Producer>
  toggleProduct: (prod: number) => void
}

const List = ({ selectedProducts, producers, toggleProduct }: Props) => {
  const productsRaw = React.useMemo(
    () =>
      producers.reduce(
        (products: Array<Product>, producer: Producer) =>
          products.concat(...producer.lista_produtos),
        [],
      ),
    [producers],
  )

  const products = productsRaw.filter(
    // eslint-disable-next-line no-bitwise
    (p: Product) => ~selectedProducts.indexOf(p.id),
  )
  return (
    <>
      <H3>Lista</H3>
      {products.length > 0 ? (
        <ListGrid products={products} onRemove={toggleProduct} />
      ) : (
        <OnNotFound>
          <img src={NotList} alt="" width="250" height="300" />
        </OnNotFound>
      )}
    </>
  )
}

export default connect(
  (state: Store) => ({
    selectedProducts: state.shop.products,
    producers: state.app.producers,
  }),
  dispatch => ({
    toggleProduct: (payload: number) =>
      dispatch({ type: ADD_PRODUCT, payload }),
  }),
)(List)

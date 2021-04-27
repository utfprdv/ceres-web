import React, { useMemo } from 'react'
import { ProductCard } from 'components'
import { Product, Store } from 'types'
import { UNIDADE } from 'store/contants'
import { useDispatch, useSelector } from 'react-redux'

const ProductList = (): React.ReactElement => {
  const products = useSelector((state: Store) => state.app.products)
  const dispatch = useDispatch()
  const cart = useSelector((state: Store) => state.cart)
  const filter = useSelector((state: Store) => state.app.filter)

  const productList = useMemo(
    () =>
      Object.values(products)
        .filter((p: Product) => p.nome.match(new RegExp(filter, 'i')))
        .map((product: Product) => (
          <ProductCard
            key={product.id}
            image={`/media/${product.imagem_principal}`}
            price={product.preco}
            selected={!!cart[product.id]}
            title={product.nome}
            unit={`${product.unidade} ${UNIDADE[product.unidade_medida]}`}
            onClick={() => {
              dispatch({ type: 'SELECT_PRODUCT', payload: product.id })
            }}
          />
        )),
    [products, cart, dispatch, filter],
  )

  return <div>{productList}</div>
}

export default ProductList

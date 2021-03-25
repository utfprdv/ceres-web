import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { Producers } from '../../components'
import { ProductFigure, ProductTitle } from './Product.style'
import { Producer, Product as ProductType, App } from '../../types'

type Props = {
  producers: Array<Producer>
}

type ReducedProducts = {
  [key: string]: ProductType
}

const Product = ({ producers }: Props) => {
  const { productID } = useParams<{ productID: string }>()

  const products: ReducedProducts = React.useMemo(
    () =>
      producers.reduce(
        (acc, curr) => ({
          ...acc,
          ...curr.lista_produtos.reduce(
            (reducedProducts: ReducedProducts, product: ProductType) => ({
              ...reducedProducts,
              [product.id]: {
                ...product,
              },
            }),
            {},
          ),
        }),
        {},
      ),
    [producers],
  )

  const product = products[productID]

  if (!product) return null

  return (
    <>
      <ProductFigure>
        <img
          src={`https://ceres.app.br/media/${product.imagem_principal}`}
          alt={product.nome}
        />
      </ProductFigure>
      <ProductTitle>{product.nome}</ProductTitle>
      <Producers
        data={producers.filter(p =>
          p.lista_produtos.find(
            (productItem: ProductType) => productItem.id === +productID,
          ),
        )}
      />
    </>
  )
}

type RootState = {
  app: App
}

export default connect((state: RootState) => ({
  producers: state.app.producers,
}))(Product)

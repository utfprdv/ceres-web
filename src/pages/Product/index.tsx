import React from 'react'
import { useParams } from 'react-router-dom'
import { Producers } from 'components'
import { ProductFigure, ProductTitle } from './Product.style'
import { connect } from 'react-redux'

type Props = {
  producers: any[],
}

const Product: React.FC<Props> = ({ producers }: Props) => {
  const { productID } = useParams<any>()
  const products = React.useMemo(() => producers.reduce((acc, curr) => {
    return {
      ...acc,
      ...curr.lista_produtos.reduce((acc: any, curr: any) => {
        return {
          ...acc,
          [curr.id]: {
            ...curr,
          },
        }
      }, {}),
    }
  }, {}), [producers])

  const product = products[productID]
  if (!product) return null

  return (
    <>
      <ProductFigure>
        <img src={`https://ceres.app.br/media/${product.imagem_principal}`} alt={product.nome} />
      </ProductFigure>
      <ProductTitle>{product.title}</ProductTitle>
      <Producers data={producers.filter(p => {
        return p.lista_produtos.find((pr: any) => pr.id === +productID)
      })} />
    </>
  )
}

type RootState = {
  app: any,
}

export default connect((state: RootState) => ({
  producers: state.app.producers,
}))(Product)

import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import InputCheckbox from 'components/InputCheckbox'
import {
  Grid,
  Product,
  ProductDetails,
} from './ProductGrid.style'
import { ADD_PRODUCT } from 'store/contants'

type Props = {
  picker?: boolean
  toggleProduct: (product: number) => void
  selectedProducts: number[]
  products: {
    nome: string
    imagem_principal: string
    id: number
  }[]
}

const ProductLink = ({ children, product }: { children: React.ReactChild, product: any }) => {
  return (
    <Link
      key={product.id}
      style={{ color: 'inherit', textDecoration: 'inherit' }}
      to={`/produto/${product.id}`}
    >
      {children}
    </Link>
  )
}

const ProductGrid: React.FC<Props> = ({ products, picker, toggleProduct, selectedProducts }: Props) => {
  return (
    <Grid>
      {products.map(product => {
        const isChecked = !!selectedProducts.find(sp => sp === product.id)
        const prod = <Product key={product.id}>
          <picture>
            <img src={`https://ceres.app.br/media/${product.imagem_principal}`} alt={product.nome} />
          </picture>
          <ProductDetails>
            <h3>{product.nome}</h3>
            {picker && <span
              style={{
                marginTop: 8,
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={(e) => {
                toggleProduct(product.id)
                e.stopPropagation()
              }}
            >
              <InputCheckbox checked={isChecked} />
              <span
                style={{
                  fontSize: 12,
                  display: 'inline-block',
                  marginLeft: 8,
                }}
              >
                Adicionar à lista
                </span>
            </span>}
          </ProductDetails>
        </Product>
        return picker ? prod : <ProductLink product={product} key={product.id}>{prod}</ProductLink>
      })}
    </Grid>
  )
}

export default connect((state: { shop: any }) => ({
  selectedProducts: state.shop.products,
}), (dispatch) => ({
  toggleProduct: (payload: number) => dispatch({ type: ADD_PRODUCT, payload })
}))(ProductGrid)

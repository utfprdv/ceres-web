import React from 'react'
import ListGrid from 'components/ListGrid'
import { H3, OnNotFound } from './List.style'
import { connect } from 'react-redux'
import { ADD_PRODUCT } from 'store/contants'
import NotList from 'images/list.png';


type Props = {
  selectedProducts: number[]
  producers: any[]
  toggleProduct: (prod: number) => void
}

const List: React.FC<Props> = ({ selectedProducts, producers, toggleProduct }: Props) => {
  const productsRaw = React.useMemo(() => producers.reduce((acc, curr) => {
    return acc.concat(...curr.lista_produtos)
  }, []), [producers])

  const products = productsRaw.filter((p: any) => ~selectedProducts.indexOf(p.id))
  return (
    <>
      <H3>Lista</H3>
      {products.length > 0
        ?<ListGrid products={products} onRemove={toggleProduct} />
       :<OnNotFound>
      <img src={NotList} alt="" width="250" height="300"/>
      </OnNotFound>
  }
    </>
  )
}

export default connect((state: { shop: any, app: any }) => ({
  selectedProducts: state.shop.products,
  producers: state.app.producers,
}), (dispatch) => ({
  toggleProduct: (payload: number) => dispatch({ type: ADD_PRODUCT, payload })
}))(List)

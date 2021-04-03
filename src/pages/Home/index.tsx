/* eslint-disable camelcase */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  InputSearch,
  MarketSummary,
  ProductGrid,
  LoadingGrid,
} from '../../components'
import { H2, OnNotFound } from './Home.styles'
import { SELECT_MARKET } from '../../store/contants'
import Utils from '../../services/utils'
import NotSearch from '../../images/search.png'
import { Store, App, Producer, Product } from '../../types'

type Props = App & {
  changeMarket: (payload: number) => void
}

const Home = ({
  producers,
  markets,
  selectedMarket,
  changeMarket,
}: Props): React.ReactElement => {
  const [filterValue, setFilterValue] = useState('')

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value)
  }

  const products = React.useMemo(
    () =>
      producers.reduce((productsArr: Array<Product>, producer: Producer) => {
        if (producer.lista_produtos) {
          return productsArr.concat(...producer.lista_produtos)
        }
        return productsArr
      }, []),
    [producers],
  )

  const info = React.useMemo(() => {
    const market = markets.find(m => m.id === selectedMarket)
    return {
      amount: products.length,
      date: market?.data_fim,
      address: `${market?.endereco_logradouro}`,
      id: market?.id,
      markets,
    }
  }, [products.length, markets, selectedMarket])

  const filteredProducts = products.filter((p: Product) =>
    Utils.filter(p.nome, filterValue),
  )

  return (
    <>
      <H2>feira online</H2>
      <p>
        Selecione seus produtos orgânicos e retire nas feiras de quarta e sexta
      </p>
      <br />
      <InputSearch
        placeholder="Buscar por produtos"
        onChange={onFilterChange}
      />
      <MarketSummary info={info} onChange={changeMarket} />
      {!products.length && (
        <LoadingGrid
          products={Array(4)
            .fill([1, 2, 3, 4])
            .map((i, index) => ({ id: index, slug: `prod-${index}` }))}
        />
      )}
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <OnNotFound>
          <img src={NotSearch} alt="" width="250" height="300" />
        </OnNotFound>
      )}
    </>
  )
}

export default connect(
  (state: Store) => ({
    producers: state.app.producers,
    markets: state.app.markets,
    selectedMarket: state.app.selectedMarket,
  }),
  dispatch => ({
    changeMarket: (payload: number) =>
      dispatch({ type: SELECT_MARKET, payload }),
  }),
)(Home)

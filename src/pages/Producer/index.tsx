import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ProductGrid } from '../../components'
import { H2 } from './Producer.style'
import { Producer as ProducerType, App } from '../../types'

type Props = {
  producers: Array<ProducerType>
}

const Producer = ({ producers }: Props) => {
  const { producerID } = useParams<{ producerID: string }>()
  const producer = producers.find(p => p.id === +producerID)

  if (!producer) return null

  return (
    <>
      <H2>{producer.username}</H2>
      <p>
        Produtos disponíveis para retirada dia
        <strong> 14 de setembro </strong>
        na feira de
        <strong> Dois Vizinhos</strong>
      </p>
      <br />
      <ProductGrid products={producer.lista_produtos} picker />
    </>
  )
}

type RootState = {
  app: App
}

export default connect((state: RootState) => ({
  producers: state.app.producers,
}))(Producer)

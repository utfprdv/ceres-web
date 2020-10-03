import React from 'react'
import { ProductGrid } from 'components'
import { H2 } from './Producer.style'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

type Props = {
  producers: any[],
}

const Producer: React.FC<Props> = ({ producers }: Props) => {
  const { producerID } = useParams<any>()
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
      <ProductGrid products={producer.lista_produtos} picker={true} />
    </>
  )
}

type RootState = {
  app: any,
}

export default connect((state: RootState) => ({
  producers: state.app.producers,
}))(Producer)

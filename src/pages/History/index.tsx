/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React from 'react'
import { useSelector } from 'react-redux'
import { HistoryItemList, Store } from 'types'
import style from './History.module.scss'

const Cart = (): React.ReactElement => {
  const history = {
    1: {
      id: 1,
      endereco_bairro: 'a',
      endereco_logradouro: 'a',
      endereco_numero: 1,
      endereco_complemento: 'a',
      endereco_cep: '85660-000',
      cidade_id: 1,
      client_id: 1,
      created_at: '2021-06-16',
      updated_at: '2021-06-16',
      status_delivery: 1,
      status_payment: 1,
      phone: '45991034202',
      item_list: [
        {
          id: 1,
          order_id: 1,
          produto_id: 1,
          quantidade: 1.0,
          preco: 2.0,
          produto: [
            {
              id: 1,
              nome: 'a',
              descricao: 'a',
              imagem_principal: '',
              unidade: 3,
            },
          ],
        },
      ],
    },
    2: {
      id: 3,
      endereco_bairro: 'a',
      endereco_logradouro: 'a',
      endereco_numero: 1,
      endereco_complemento: 'a',
      endereco_cep: '85660-000',
      cidade_id: 1,
      client_id: 1,
      created_at: '2021-06-16',
      updated_at: '2021-06-16',
      status_delivery: 0,
      status_payment: 0,
      phone: '45991034202',
      item_list: [],
    },
  }
  // for testing only
  // const history = useSelector((state: Store) => state.app.history)
  const historyKeys = Object.keys(history)

  return (
    <>
      <header className={style.header}>Últimas compras</header>
      {historyKeys.map(order => {
        const currentOrder = history[Number(order) as 1 | 2]
        return (
          <section className={style.orderSection}>
            <section className={style.orderInfo}>
              <h3>Código do pedido {currentOrder.id}#</h3>
              <div>
                <h4>Endereço</h4>
                <h5>Bairro {currentOrder.endereco_bairro}</h5>
                <h5>Logradouro {currentOrder.endereco_logradouro}</h5>
                <h5>Numero {currentOrder.endereco_logradouro}</h5>
                <h5>Complemento {currentOrder.endereco_complemento}</h5>
                <h5>Cep {currentOrder.endereco_cep}</h5>
              </div>
              <div>
                <h4>Endereço</h4>
                <h5>Pedido realizado em {currentOrder.created_at}</h5>
                <h5>Última atualização {currentOrder.updated_at}</h5>
              </div>
              <div>
                <h4>Estado do pedido</h4>
                <h5>Estado da entrega {currentOrder.status_delivery}</h5>
                <h5>Estado do pagamento {currentOrder.status_payment}</h5>
              </div>
              <div>
                <h4>Contato</h4>
                <h5>Telefone {currentOrder.phone}</h5>
              </div>
            </section>
            <section className={style.currentOrderInfo}>
              <h3>Itens do pedido</h3>
              <ul className={style.itemList}>
                {currentOrder.item_list.map((item: HistoryItemList) => (
                  <li>
                    <h4>Item {item.id}</h4>
                    <section>
                      <h5>Preço unitário {item.preco}</h5>
                      <h5>Quantidade {item.quantidade}</h5>
                    </section>
                    {item.produto.map(product => (
                      <section>
                        <h4>Produto {product.id}</h4>
                        <div>
                          <img
                            alt="imagem principal"
                            src={product.imagem_principal}
                          />
                          <h5>Nome {product.nome}</h5>
                          <h5>Quantidade {product.descricao}</h5>
                        </div>
                      </section>
                    ))}
                  </li>
                ))}
              </ul>
            </section>
          </section>
        )
      })}
    </>
  )
}

export default Cart

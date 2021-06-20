/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React from 'react'
import style from './History.module.scss'

const Cart = (): React.ReactElement => {
  const data = [
    {
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
    {
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
  ]

  return (
    <>
      <header className={style.header}>Últimas compras</header>
      {data.map(order => (
        <section className={style.orderSection}>
          <section className={style.orderInfo}>
            <h3>Código do pedido {order.id}#</h3>
            <div>
              <h4>Endereço</h4>
              <h5>Bairro {order.endereco_bairro}</h5>
              <h5>Logradouro {order.endereco_logradouro}</h5>
              <h5>Numero {order.endereco_logradouro}</h5>
              <h5>Complemento {order.endereco_complemento}</h5>
              <h5>Cep {order.endereco_cep}</h5>
            </div>
            <div>
              <h4>Endereço</h4>
              <h5>Pedido realizado em {order.created_at}</h5>
              <h5>Última atualização {order.updated_at}</h5>
            </div>
            <div>
              <h4>Estado do pedido</h4>
              <h5>Estado da entrega {order.status_delivery}</h5>
              <h5>Estado do pagamento {order.status_payment}</h5>
            </div>
            <div>
              <h4>Contato</h4>
              <h5>Telefone {order.phone}</h5>
            </div>
          </section>
          <section className={style.orderInfo}>
            <h3>Itens do pedido</h3>
            <ul className={style.itemList}>
              {order.item_list.map(item => (
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
      ))}
    </>
  )
}

export default Cart

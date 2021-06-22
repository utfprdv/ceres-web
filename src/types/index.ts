/* eslint-disable camelcase */
import { compose } from 'redux'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export type Cidade = {
  id: number
  nome: string
  uuid: string
}
export interface HistoryItemList {
  id: number
  order_id: number
  produto_id: number
  quantidade: number
  preco: number
  produto: HistoryProduto[]
}

export interface HistoryProduto {
  id: number
  nome: string
  descricao: string
  imagem_principal: string
  unidade: number
}

export interface History {
  id: number
  endereco_bairro: string
  endereco_logradouro: string
  endereco_numero: number
  endereco_complemento: string
  endereco_cep: string
  cidade_id: number
  client_id: number
  created_at: string
  updated_at: string
  status_delivery: number
  status_payment: number
  phone: string
  item_list: HistoryItemList[]
}

export type Address = {
  cidade_id: number
  cidade: number
  client: number
  cliente: number
  id: number
  endereco_bairro: string
  endereco_cep: string
  endereco_complemento: string
  endereco_logradouro: string
  endereco_numero: number
}

export type Contact = {
  email: string
  whatsapp: string
}

export type Market = Address &
  Contact & {
    id: number
    data_inicio: string
    data_fim: string
    nome: string
    telefone: string
    cidade: string
    products?: {
      [k: string]: Product
    }
  }

export type Product = {
  id: number
  nome: string
  descricao: string
  imagem_principal: string
  quantidade: string // Estoque
  thumbnail: string
  preco: string
  unidade_medida: number // Integer map para kilo/g/litro/unidade
  unidade: number // Unidade de venda para fazer calculo do preco unidade/preço, 10 unidade/10 reais
}

type LoadedData<T> = {
  [k: string]: T
}

export type User = {
  token: string
  name: string
  id: string
  provider: 'facebook' | 'google'
  addresses: Array<Address>
  client: number
  telefone: string
}

export type CartItem = Pick<Product, 'id'> & { quantity: number }
type Cart = { [k: number]: CartItem } // cart hold the IDs of selected products

export type Store = {
  delivery: null | Address
  user: User
  app: {
    filter: string
    cities: LoadedData<Cidade>
    history: LoadedData<History>
    markets: LoadedData<Market>
    producers: LoadedData<Producer>
    products: { [k: number]: Product }
    selectedMarket: number
    selectedProduct: number
  }
  cart: Cart
}

export type Action<T, U = string> = {
  type: keyof T
  payload: U
}

export type ProductList = Array<Product> &
  Array<{
    quantidade: number
    preco: number
    produto: 1
    produtor: number
    feira: number
  }>

export type Producer = Contact &
  Address & {
    id: number
    username: string
    nome: string
    cidade: number
    telefone: string
    lista_produtos: ProductList
  }

export type CieloResponse = {
  merchantId: string
  orderNumber: string
  softDescriptor: string
  cart: {
    discount: {
      type: string
      value: 0
    }
    items: [
      {
        name: string
        description: string
        unitPrice: number
        quantity: number
        type: 'Asset' | 'Service'
        sku: string
        weight: number
      },
    ]
  }
  shipping: {
    sourceZipCode: number
    targetZipCode: number
    type: string
    services: [
      {
        name: string
        price: number
        deadline: number
      },
      {
        name: string
        price: number
        deadline: number
      },
    ]
    address: {
      street: string
      number: string
      complement: string
      district: string
      city: string
      state: string
    }
  }
  payment: {
    boletoDiscount: number
    debitDiscount: number
    numberOfPayments: number
    createdDate: string
  }
  customer: {
    identity: number
    fullName: string
    email: string
    phone: number
  }
  options: {
    antifraudEnabled: boolean
    returnUrl: string
  }
  settings: {
    checkoutUrl: 'https://cieloecommerce.cielo.com.br/TransactionalVNext/Checkout/Index/afc71f2f-7477-4904-96fa-9fb3df5ac71b'
    profile: 'CheckoutCielo'
    integrationType: string
    version: string
  }
}

/* eslint-disable camelcase */
export type Address = {
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
  }

export type Product = {
  id: number
  nome: string
  descricao: string
  imagem_principal: string
}

export type Shop = {
  products: Array<number>
}

export type Producer = Address &
  Contact & {
    cidade: number
    id: number
    lista_produtos: Array<Product>
    nome: string
    username: string
  }

export type App = {
  markets: Array<Market>
  producers: Array<Producer>
  selectedMarket: number
}

export type Store = {
  app: App
  shop: Shop
}

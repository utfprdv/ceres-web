import { Store } from '../types'

const initialState: Store = {
  delivery: null,
  user: {
    telefone: '',
    token: '',
    name: '',
    id: '',
    provider: 'facebook',
    addresses: [],
    client: -1,
  },
  app: {
    filter: '',
    products: {},
    cities: {},
    markets: {},
    producers: {},
    selectedMarket: 0,
    selectedProduct: 0,
  },
  cart: {},
}

export default initialState

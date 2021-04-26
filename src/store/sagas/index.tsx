/* eslint-disable camelcase */
import {
  all,
  call,
  put,
  fork,
  takeLatest,
  takeEvery,
  select,
  takeLeading,
} from 'redux-saga/effects'
import {
  Address,
  CartItem,
  Cidade,
  CieloResponse,
  Market,
  Producer,
  Store,
} from 'types'
import { get, post } from 'services/api'
import { storage } from 'utils'
import * as actions from '../actions'
import * as C from '../contants'

function* loadProducers(marketId: number) {
  try {
    const producers: Array<Producer> = yield call(
      get,
      `feira/${marketId}/produtor/`,
    )
    yield put(actions.loadProducers(producers))

    const products = Object.values(producers).reduce((acc, curr) => {
      const list = curr.lista_produtos.reduce((accP, currP) => {
        return {
          ...accP,
          [currP.id]: currP,
        }
      }, {})
      return {
        ...acc,
        ...list,
      }
    }, {})
    yield put(actions.loadProducts(products))
  } catch (error) {
    yield put(actions.error(error))
  }
}

function* loadMarket(marketId: number) {
  try {
    const market: Market = yield call(get, `feira/${marketId}/`)
    if (market.id) {
      yield put(actions.loadMarket(market))
      yield call(loadProducers, market.id)
    } else {
      throw new Error('Feira não encontrada')
    }
  } catch (error) {
    yield put(actions.error(error))
  }
}

// Load all registered cities to be used in Feira dropdown
function* loadCities() {
  try {
    const cities: Array<Cidade> = yield call(get, 'cidade/')
    yield put(actions.loadCities(cities))

    // TODO: let user pick city
    const [dv] = cities
    if (dv) {
      yield call(loadMarket, dv.id)
    }
  } catch (error) {
    yield put(actions.error(error))
  }
}

function* processPayment() {
  try {
    const { data } = storage.get(C.STORAGE_USER, JSON.parse)
    const store: Store = yield select((state: Store) => state)

    const {
      cidade_id,
      cliente_id,
      endereco_bairro,
      endereco_complemento,
      endereco_logradouro,
      endereco_numero,
    }: any = store.delivery

    const order = {
      cidade: cidade_id,
      client: cliente_id,
      endereco_bairro,
      endereco_complemento,
      endereco_logradouro,
      endereco_numero,
      phone: '46996304344',
      products: Object.values(store.cart).reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (acc: Array<any>, curr: CartItem) => {
          const prod = store.app.products[curr.id]
          return [
            ...acc,
            {
              ...curr,
              preco: prod.preco,
              unidade: prod.unidade,
            },
          ]
        },
        [],
      ),
    }

    if (data && data.token) {
      const payment: CieloResponse = yield call(post, 'pedidos/checkout', {
        body: JSON.stringify(order),
        Authorization: `Token ${data.token}`,
      })

      yield put({ type: 'PAYMENT_RESPONSE', payload: payment })
    }
  } catch (error) {
    yield put(actions.error(error))
  }
}

function* saveLocalCart() {
  const memoryStore: Store['cart'] = yield (store: Store) => store.cart
  storage.set(C.STORAGE_CART, memoryStore)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* removeLocalItem() {
  const memoryStore: Store['cart'] = yield select((store: Store) => store.cart)
  // override local cart with updated on
  // saga is run after reducer, so item was alread removed
  storage.set(C.STORAGE_CART, memoryStore)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* saveAddress({ payload }: any) {
  const { res, rej, ...rest } = payload

  try {
    const { data } = storage.get(C.STORAGE_USER, JSON.parse)

    if (data && data.token) {
      const address: Address = yield call(post, 'address', {
        body: JSON.stringify({
          ...rest,
        }),
        Authorization: `Token ${data.token}`,
      })
      res(address)
      yield put({ type: C.NEW_ADDRESS, payload: address })
    }
  } catch (err) {
    rej(err)
  }
}

function* watchPayment() {
  yield takeLatest(C.PAYMENT_CREATE, processPayment)
  yield takeEvery(C.CART_ADD, saveLocalCart)
  yield takeEvery(C.CART_REMOVE, removeLocalItem)
  yield takeLeading(C.ADD_ADDRESS, saveAddress)
}

function* bootstrap() {
  const { data: payload } = yield call(storage.get, C.STORAGE_USER, JSON.parse)
  if (payload) {
    yield put({ type: C.LOAD_USER, payload })
  }

  const { data: cart } = yield call(storage.get, C.STORAGE_CART, JSON.parse)
  if (cart) {
    delete cart.timestamp
    yield put({ type: C.HYDRATE_CART, payload: cart })
  }
}

export default function* rootSaga(): Generator {
  yield all([fork(bootstrap), fork(loadCities), watchPayment()])
}

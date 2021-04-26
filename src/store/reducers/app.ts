import * as C from '../contants'
import { Store, Action, Cidade, Market, Producer, Product } from '../../types'
import initialState from '../initiaState'

type AppType = Store['app']
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionsType = { [k: string]: (...args: any[]) => AppType }

const actions: ActionsType = {
  [C.LOAD_CITIES]: (state: AppType, citites: Array<Cidade>): AppType => {
    return {
      ...state,
      cities: citites.reduce((acc, curr) => {
        acc[curr.id] = curr
        return acc
      }, {} as AppType['cities']),
    }
  },
  [C.LOAD_MARKET]: (state: AppType, market: Market): AppType => {
    return {
      ...state,
      selectedMarket: market.id,
      markets: {
        ...state.markets,
        [market.id]: market,
      },
    }
  },
  [C.LOAD_PRODUCERS]: (state: AppType, producers: Array<Producer>) => {
    const producersUpdated = producers.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.id]: curr,
      }
    }, state.producers)

    return {
      ...state,
      producers: producersUpdated,
    }
  },
  [C.SELECT_PRODUCT]: (state: AppType, payload: number) => {
    return {
      ...state,
      selectedProduct: payload,
    }
  },
  [C.LOAD_PRODUCTS]: (state: AppType, payload: { [k: number]: Product }) => {
    return {
      ...state,
      products: payload,
    }
  },
  [C.CLEAR_PRODUCT]: (state: AppType) => {
    return {
      ...state,
      selectedProduct: 0,
    }
  },
  [C.FILTER]: (state: AppType, payload: string) => ({
    ...state,
    filter: payload,
  }),
}

const appReducer = (
  state: AppType = initialState.app,
  action: Action<keyof typeof actions>,
): AppType => {
  return actions[action.type]
    ? actions[action.type](state, action.payload)
    : state
}

export default appReducer

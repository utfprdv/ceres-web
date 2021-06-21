import { Cidade, Market, Producer, Product } from '../types'
import * as C from './contants'

type ActionReturn<T, P = null> = {
  readonly type: T
  readonly payload?: P
}

export const loadMarkets = (
  markets: Array<Market>,
): ActionReturn<typeof C.LOAD_MARKET, Array<Market>> => ({
  type: C.LOAD_MARKET,
  payload: markets,
})

export const loadMarket = (
  market: Market,
): ActionReturn<typeof C.LOAD_MARKET, Market> => ({
  type: C.LOAD_MARKET,
  payload: market,
})

export const loadCities = (
  cities: Array<Cidade>,
): ActionReturn<typeof C.LOAD_CITIES, Array<Cidade>> => ({
  type: C.LOAD_CITIES,
  payload: cities,
})

export const loadHistory = (
  history: Array<History>,
): ActionReturn<typeof C.LOAD_HISTORY, Array<History>> => ({
  type: C.LOAD_HISTORY,
  payload: history,
})

type loadedProducers = Array<Producer>

export const loadProducers = (
  producers: loadedProducers,
): ActionReturn<typeof C.LOAD_PRODUCERS, loadedProducers> => ({
  type: C.LOAD_PRODUCERS,
  payload: producers,
})

export const loadProducts = (products: {
  [k: number]: Product
}): ActionReturn<
  typeof C.LOAD_PRODUCTS,
  {
    [k: number]: Product
  }
> => ({
  type: C.LOAD_PRODUCTS,
  payload: products,
})

// Generic Error catcher
// used to notify user about a network error
export const error = (
  err: string,
): ActionReturn<typeof C.NETWORK_ERROR, string> => ({
  type: C.NETWORK_ERROR,
  payload: err,
})

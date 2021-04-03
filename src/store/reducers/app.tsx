import { AnyAction } from 'redux'
import { MARKETS, PRODUCERS, SELECT_MARKET } from '../contants'
import { App } from '../../types'

const initState = {
  markets: [],
  producers: [],
  selectedMarket: 1,
}

const app = (state = initState, action: AnyAction): App => {
  switch (action.type) {
    case MARKETS:
      return {
        ...state,
        markets: action.payload,
      }
    case PRODUCERS:
      return {
        ...state,
        producers: action.payload,
      }
    case SELECT_MARKET:
      return {
        ...state,
        selectedMarket: action.payload,
      }
    default:
      return state
  }
}

export default app

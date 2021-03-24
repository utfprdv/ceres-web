import { MARKETS, PRODUCERS, SELECT_MARKET } from 'store/contants'

const initState = {
  markets: [],
  producers: [],
  selectedMarket: 1,
}

export default function app(state = initState, action: any) {
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

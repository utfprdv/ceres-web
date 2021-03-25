import { AnyAction } from 'redux'
import { ADD_PRODUCT } from '../contants'
import { Shop } from '../../types'

const initialState = {
  products: [],
}

const shop = (state = initialState, action: AnyAction): Shop => {
  let hasProd: number | undefined = 0
  switch (action.type) {
    case ADD_PRODUCT:
      hasProd = state.products.find(p => p === action.payload)
      if (hasProd) {
        return {
          products: state.products.filter(p => p !== action.payload),
        }
      }
      return {
        products: [...state.products, action.payload],
      }
    default:
      return state
  }
}

export default shop

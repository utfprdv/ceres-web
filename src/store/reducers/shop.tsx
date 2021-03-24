import { CartState } from '../types'
import { ADD_PRODUCT } from '../contants'

const initialState: CartState = {
  products: [],
}

export default function shop(
  state: CartState = initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: any; payload: any },
): CartState {
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

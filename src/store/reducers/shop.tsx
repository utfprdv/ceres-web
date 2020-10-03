import { CartState } from '../types';
import { ADD_PRODUCT } from '../contants';

const initialState: CartState = {
  products: [],
}

export default function shop(state: CartState = initialState, action: { type: any, payload: any }): CartState {
  switch (action.type) {
    case ADD_PRODUCT:
      const hasProd = state.products.find((p) => p === action.payload)
      if (hasProd) {
        return {
          products: state.products.filter(p => p !== action.payload)
        }
      }
      return {
        products: [
          ...state.products,
          action.payload
        ]
      }
    default:
      return state
  }
}

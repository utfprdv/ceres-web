import { Store, Action, CartItem } from '../../types'
import * as C from '../contants'
import initialState from '../initiaState'

type CartType = Store['cart']

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const actions: { [k: string]: (...args: any[]) => CartType } = {
  [C.CART_ADD]: (state: CartType, product: CartItem) => ({
    ...state,
    [product.id]: product,
  }),

  [C.CART_REMOVE]: (state: CartType, productId: number) => {
    const newState = { ...state }
    delete newState[productId]
    return newState
  },

  [C.CART_UPDATE]: (state: CartType, updatedProduct: CartItem) => {
    return {
      ...state,
      [updatedProduct.id]: updatedProduct,
    }
  },
  [C.HYDRATE_CART]: (_state: CartType, cart: CartType) => cart,
}

const cart = (
  state: CartType = initialState.cart,
  action: Action<keyof typeof actions>,
): CartType => {
  return actions[action.type]
    ? actions[action.type](state, action.payload)
    : state
}

export default cart

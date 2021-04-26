import * as C from '../contants'
import { Store, Action, Address } from '../../types'
import initialState from '../initiaState'

type DeliveryType = Store['delivery']
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ActionsType = { [k: string]: (...args: any[]) => DeliveryType }

const actions: ActionsType = {
  [C.DELIVERY]: (state: DeliveryType, address: Address): DeliveryType => {
    return {
      ...state,
      ...address,
    }
  },
}

const appReducer = (
  state: DeliveryType = initialState.delivery,
  action: Action<keyof typeof actions>,
): DeliveryType => {
  return actions[action.type]
    ? actions[action.type](state, action.payload)
    : state
}

export default appReducer

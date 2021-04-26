/* eslint-disable @typescript-eslint/no-explicit-any */
import { Store, Action, User } from '../../types'
import * as C from '../contants'
import initialState from '../initiaState'
import { storage } from '../../utils'

type UserType = Store['user']

const actions: { [k: string]: (...args: any[]) => UserType } = {
  [C.USER]: (_state: UserType, user: User) => {
    storage.set(C.STORAGE_USER, user)
    return user
  },
  [C.USER_LOGOUT]: () => {
    storage.delete(C.STORAGE_USER)
    return initialState.user
  },
  [C.USER_UPDATE]: (_state: UserType, user: User) => user,
  [C.LOAD_USER]: (_state: UserType, user: User) => {
    storage.set(C.STORAGE_USER, user)
    return user
  },
  [C.NEW_ADDRESS]: (state: UserType, payload) => {
    const updatedUser = {
      ...state,
      addresses: [...state.addresses, payload],
    }
    storage.set(C.STORAGE_USER, updatedUser)
    return updatedUser
  },
}

const cart = (
  state: UserType = initialState.user,
  action: Action<keyof typeof actions>,
): UserType => {
  return actions[action.type]
    ? actions[action.type](state, action.payload)
    : state
}

export default cart

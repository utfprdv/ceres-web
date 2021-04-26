import { combineReducers } from 'redux'
import app from './app'
import cart from './cart'
import user from './user'
import delivery from './delivery'

const rootReducer = combineReducers({ cart, app, user, delivery })
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer

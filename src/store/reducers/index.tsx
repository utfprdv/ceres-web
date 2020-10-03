import { combineReducers } from 'redux'
import app from './app'
import shop from './shop'

const rootReducer = combineReducers({ app, shop })
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer

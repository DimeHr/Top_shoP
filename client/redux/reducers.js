import { combineReducers } from 'redux'
import homeReducer from './home/home.reducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    home: homeReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer

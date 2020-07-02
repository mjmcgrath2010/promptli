import { combineReducers } from 'redux'
import widgetReducer from './widgetReducer'
import itemsReducer from './itemsReducer'
import APIReducer from './apiReducer'
import checkoutReducer from './checkoutReducer'
import categoriesReducer from './categoriesReducer'

const rootReducer = combineReducers({
  widget: widgetReducer,
  items: itemsReducer,
  api: APIReducer,
  checkout: checkoutReducer,
  categories: categoriesReducer,
})

export default rootReducer

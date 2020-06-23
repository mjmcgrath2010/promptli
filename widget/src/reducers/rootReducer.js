import { combineReducers } from 'redux'
import widgetReducer from './widgetReducer'
import itemsReducer from './itemsReducer'
import APIReducer from './apiReducer'

const rootReducer = combineReducers({
  widget: widgetReducer,
  items: itemsReducer,
  api: APIReducer,
})

export default rootReducer

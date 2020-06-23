import { combineReducers } from 'redux'
import widgetReducer from './widgetReducer'
import itemsReducer from './itemsReducer'

const rootReducer = combineReducers({
  widget: widgetReducer,
  items: itemsReducer,
})

export default rootReducer

import { SET_ITEMS, SET_ITEMS_VIEW, SET_ITEM } from '../actions/items/actionsTypes'
import { act } from 'preact/test-utils'

const initialState = {
  items: [],
  view: 'index',
  item: {},
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload }
    case SET_ITEMS_VIEW:
      return { ...state, view: action.payload }
    case SET_ITEM:
      return { ...state, item: action.payload }
    default:
      return state
  }
}

export default itemsReducer

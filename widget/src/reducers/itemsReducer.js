import { SET_ITEMS, SET_ITEM, FETCH_ITEMS_SUCCESS } from '../actions/items/actionsTypes'

const initialState = {
  items: [],
  view: 'index',
  item: {},
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload }
    case FETCH_ITEMS_SUCCESS:
      return { ...state, ...action.payload }
    case SET_ITEM:
      return { ...state, item: action.payload }
    default:
      return state
  }
}

export default itemsReducer

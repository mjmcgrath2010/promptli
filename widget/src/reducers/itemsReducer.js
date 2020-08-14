import { SET_ITEMS, SET_ITEM, FETCH_ITEMS_SUCCESS, SELECT_ITEM, REMOVE_ITEM } from '../actions/items/actionsTypes'

const initialState = {
  items: [],
  view: 'index',
  item: {},
  selectedItems: [],
  itemsLoaded: false,
}

const itemsReducer = (state = initialState, action) => {
  const currentItems = [...state.selectedItems]

  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload, itemsLoaded: !!action.payload.length }
    case FETCH_ITEMS_SUCCESS:
      return { ...state, ...action.payload, itemsLoaded: true }
    case SET_ITEM:
      return { ...state, ...action.payload }
    case REMOVE_ITEM:
      const index = currentItems.indexOf(action.payload)
      return { ...state, selectedItems: currentItems.splice(index, 1) }
    case SELECT_ITEM:
      return { ...state, selectedItems: Array.from(new Set([...currentItems, action.payload])) }
    default:
      return state
  }
}

export default itemsReducer

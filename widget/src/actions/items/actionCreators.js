import { SET_ITEMS, SET_ITEMS_VIEW, SET_ITEM, SELECT_ITEM, REMOVE_ITEM } from './actionsTypes'

export const setItems = payload => {
  return {
    type: SET_ITEMS,
    payload,
  }
}

export const setItemsView = (payload = 'index') => {
  return {
    type: SET_ITEMS_VIEW,
    payload,
  }
}

export const setItem = payload => {
  return {
    type: SET_ITEM,
    payload,
  }
}

export const selectItem = payload => {
  return {
    type: SELECT_ITEM,
    payload,
  }
}

export const removeItem = payload => {
  return {
    type: REMOVE_ITEM,
    payload,
  }
}

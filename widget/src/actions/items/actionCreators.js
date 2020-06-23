import { SET_ITEMS } from './actionsTypes'

export const setItems = payload => {
  return {
    type: SET_ITEMS,
    payload,
  }
}

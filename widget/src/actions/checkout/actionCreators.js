import { SET_CHECKOUT_VIEW } from './actionTypes'

export const setView = (payload) => {
  return {
    type: SET_CHECKOUT_VIEW,
    payload
  }
}

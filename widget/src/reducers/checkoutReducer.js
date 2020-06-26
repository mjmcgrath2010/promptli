import { SET_CHECKOUT_VIEW } from '../actions/checkout/actionTypes'

const initialState = {
  view: 'review'
}

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHECKOUT_VIEW:
      return {...state, view: action.payload}
    default:
      return state
  }
}

export default checkoutReducer

import { INIT_API_INTERFACE, API_ERROR_RESPONSE } from '../actions/api/actionTypes'

const initialState = {
  API: {},
  error: null,
  identifier: undefined,
  widgetId: undefined,
  ready: false,
}

const APIReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_API_INTERFACE:
      return { ...state, ...action.payload }
    case API_ERROR_RESPONSE:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default APIReducer

import { INIT_WIDGET_SUCCESS, INIT_WIDGET_ERROR, SET_ACTIVE_CONTAINER } from './actionTypes'
import { makeApiRequest } from '../api/actionCreators'

export const initWidget = () => dispatch => {
  return dispatch(makeApiRequest({ method: 'init', onSuccess: initWidgetSuccess, onError: handleWidgetInitError }))
}

const initWidgetSuccess = payload => {
  return {
    type: INIT_WIDGET_SUCCESS,
    payload,
  }
}

const handleWidgetInitError = payload => {
  return {
    type: INIT_WIDGET_ERROR,
    payload,
  }
}

export const setActiveContainer = activeContainer => {
  return {
    type: SET_ACTIVE_CONTAINER,
    payload: { activeContainer },
  }
}

import {
  SET_ITEMS,
  SET_ITEM,
  SELECT_ITEM,
  REMOVE_ITEM,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
} from './actionsTypes'
import { makeApiRequest } from '../api/actionCreators'

export const fetchItems = data => dispatch => {
  dispatch(fetchItemsRequest())

  return dispatch(
    makeApiRequest({ data, method: 'fetchItems', onSuccess: fetchItemsSuccess, onError: fetchItemsFailure })
  )
}

export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST,
  }
}

export const fetchItemsSuccess = payload => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload,
  }
}

export const fetchItemsFailure = payload => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload,
  }
}

export const setItems = payload => {
  return {
    type: SET_ITEMS,
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

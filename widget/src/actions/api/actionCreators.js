import { API_ERROR_RESPONSE, INIT_API_INTERFACE, MAKE_API_REQUEST } from './actionTypes'
import PromptliAPI from '../../api'

export const makeApiRequest = ({ method, data, onSuccess, onError = handleApiErrors }) => (dispatch, getState) => {
  const {
    api: { API, ready },
  } = getState()

  if (API[method] && ready) {
    return API[method](data)
      .then(payload => {
        dispatch(onSuccess(payload))
      })
      .catch(e => dispatch(onError(e)))
  }

  return onError({ message: 'Something went wrong' })
}

export const initPromptliApi = ({ identifier, widgetId }) => {
  return {
    type: INIT_API_INTERFACE,
    payload: {
      API: new PromptliAPI(identifier, widgetId),
      identifier,
      widgetId,
      ready: true,
    },
  }
}

const handleApiErrors = payload => {
  return {
    type: API_ERROR_RESPONSE,
    payload,
  }
}

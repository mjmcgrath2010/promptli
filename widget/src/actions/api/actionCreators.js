import { API_ERROR_RESPONSE, INIT_API_INTERFACE } from './actionTypes'

export const makeApiRequest = ({ method, data, onSuccess, onError = handleApiErrors }) => (dispatch, getState) => {
  const {
    api: { API, ready },
  } = getState()
  const request = API[method]
  if (request && ready) {
    return request(data)
      .then(payload => onSuccess(payload))
      .catch(e => onError(e))
  }
  return onError({ message: 'Something went wrong' })
}

export const initPromptliApi = ({ api, identifier, widgetId }) => {
  const PromptliAPI = new api(identifier, widgetId)
  return {
    type: INIT_API_INTERFACE,
    payload: {
      api: PromptliAPI,
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

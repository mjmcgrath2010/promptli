import { INIT_WIDGET } from './actionTypes'

const initWidget = payload => {
  return {
    type: INIT_WIDGET,
    payload,
  }
}

export default {
  initWidget,
}

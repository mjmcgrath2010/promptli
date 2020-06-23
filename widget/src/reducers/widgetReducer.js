import { INIT_WIDGET_SUCCESS } from '../actions/widget/actionTypes'

const initialState = {
  items: [],
  title: '',
  ctaText: '',
  account: '',
  styles: [],
  initialized: false,
}

const WidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_WIDGET_SUCCESS:
      return { ...state, ...action.payload, initialized: true }
    default:
      return state
  }
}

export default WidgetReducer

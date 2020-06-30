import { INIT_WIDGET_SUCCESS, SET_ACTIVE_CONTAINER } from '../actions/widget/actionTypes'

const initialState = {
  items: [],
  categories: [],
  title: '',
  ctaText: '',
  account: '',
  styles: {},
  activeContainer: 'categories',
  initialized: false,
}

const WidgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_WIDGET_SUCCESS:
      return { ...state, ...action.payload, initialized: true }
    case SET_ACTIVE_CONTAINER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default WidgetReducer

import { INIT_WIDGET_SUCCESS } from '../actions/widget/actionTypes'
import { FILTER_CATEGORIES } from '../actions/categories/actionTypes'

const initialState = {
  categories: [],
  filteredCategories: [],
}

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_WIDGET_SUCCESS:
      return {
        ...state,
        categories: action.payload.categories,
        filteredCategories: action.payload.categories,
        initialized: true,
      }
    case FILTER_CATEGORIES:
      const categories = state.categories
      const results = categories.filter(category => {
        if (category.title.match(new RegExp(action.payload, 'gi'))) {
          return true
        }

        if (category.location.city.match(new RegExp(action.payload, 'gi'))) {
          return true
        }

        if (category.location.zipCode.toString().match(new RegExp(action.payload, 'gi'))) {
          return true
        }
      })
      return { ...state, filteredCategories: results }
    default:
      return state
  }
}

export default categoriesReducer

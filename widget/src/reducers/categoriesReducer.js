import { INIT_WIDGET_SUCCESS } from '../actions/widget/actionTypes'
import { FILTER_CATEGORIES, SELECT_ACTIVE_CATEGORY } from '../actions/categories/actionTypes'

const initialState = {
  categories: [],
  activeCategory: {},
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
    case SELECT_ACTIVE_CATEGORY:
      return { ...state, ...action.activeCategory }
    default:
      return state
  }
}

export default categoriesReducer

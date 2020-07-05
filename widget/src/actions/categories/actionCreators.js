import { FILTER_CATEGORIES, SELECT_ACTIVE_CATEGORY } from './actionTypes'

export const filterCategories = search => {
  return {
    type: FILTER_CATEGORIES,
    payload: search,
  }
}

export const setActiveCategory = activeCategory => {
  return {
    type: SELECT_ACTIVE_CATEGORY,
    payload: { activeCategory },
  }
}

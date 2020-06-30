import { FILTER_CATEGORIES } from './actionTypes'

export const filterCategories = search => {
  return {
    type: FILTER_CATEGORIES,
    payload: search,
  }
}

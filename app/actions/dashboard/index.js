import { dashboardActionTypes } from '../../constants/index'
import API from '../../utils/api'

const dashboardActions = {
  initDashboardRequest() {
    return dispatch => {
      this.initDashboard()
      return API.initDashboard()
        .then(({ data }) => {
          return dispatch(this.handleSuccess(dashboardActionTypes.INIT_DASHBOARD_SUCCESS, data))
        })
        .catch(e => dispatch(this.handleError(dashboardActionTypes.INIT_DASHBOARD_FAILURE, e)))
    }
  },
  initDashboard() {
    return { type: dashboardActionTypes.INIT_DASHBOARD_REQUEST }
  },
  handleSuccess(type, payload) {
    return {
      type,
      payload,
    }
  },
  handleError(type, payload) {
    return {
      type,
      payload,
    }
  },
  connectGoogleAccountReq() {
    return {
      type: dashboardActionTypes.CONNECT_GOOGLE_ACCOUNT_REQUEST,
    }
  },
  connectGoogleAccount(payload) {
    return dispatch => {
      dispatch(this.connectGoogleAccountReq())
      API.connectGoogleAccount(payload)
        .then(({ data }) => {
          window.location = data
        })
        .catch(e => this.handleError(dashboardActionTypes.CONNECT_GOOGLE_ACCOUNT_FAILURE))
    }
  },
  createItem() {
    return {
      type: dashboardActionTypes.CREATE_ITEM_REQUEST,
    }
  },
  createItemRequest(payload) {
    return dispatch => {
      dispatch(this.createItem())
      return API.createItem(payload)
        .then(({ data }) => {
          return dispatch(this.createItemSuccess(data))
        })
        .catch(e => this.createItemError(e))
    }
  },
  createItemSuccess(payload) {
    return {
      type: dashboardActionTypes.CREATE_ITEM_SUCCESS,
      payload,
    }
  },
  createItemError(error) {
    return {
      type: dashboardActionTypes.CREATE_ITEM_FAILURE,
      error,
    }
  },
  createCategoryRequest(payload) {
    return dispatch => {
      dispatch(this.createCategory())
      return API.createCategory(payload)
        .then(({ data }) => {
          return dispatch(this.createCategorySuccess(data))
        })
        .catch(e => this.createCategoryError(e))
    }
  },
  createCategory() {
    return {
      type: dashboardActionTypes.CREATE_CATEGORY_REQUEST,
    }
  },
  createCategorySuccess(payload) {
    return {
      type: dashboardActionTypes.CREATE_CATEGORY_SUCCESS,
      payload,
    }
  },
  createCategoryError(error) {
    return {
      type: dashboardActionTypes.CREATE_CATEGORY_FAILURE,
      error,
    }
  },
}

export default dashboardActions

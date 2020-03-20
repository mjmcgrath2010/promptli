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
  createServiceRequest(payload) {
    return dispatch => {
      dispatch(this.createService())
      return API.createService(payload).then(({ data }) => this.createServiceSucces(data))
    }
  },
  createService() {
    return {
      type: dashboardActionTypes.CREATE_SERVICE_REQUEST,
    }
  },
  createServiceSucces(payload) {
    return {
      type: dashboardActionTypes.CREATE_SERVICE_SUCCESS,
      payload,
    }
  },
  createPackage() {
    return {
      type: dashboardActionTypes.CREATE_PACKAGE_REQUEST,
    }
  },
  createPackageRequest(payload) {
    return dispatch => {
      dispatch(this.createPackage())
      return API.createPackage(payload)
        .then(({ data }) => {
          return dispatch(this.createPackageSuccess(data))
        })
        .catch(e => this.createPackageError(e))
    }
  },
  createPackageSuccess(payload) {
    return {
      type: dashboardActionTypes.CREATE_PACKAGE_SUCCESS,
      payload,
    }
  },
  createPackageError(error) {
    return {
      type: dashboardActionTypes.CREATE_PACKAGE_FAILURE,
      error,
    }
  },
}

export default dashboardActions

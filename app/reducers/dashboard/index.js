import { dashboardActionTypes, loginActionTypes } from '../../constants/index'

const initialState = {
  profile: {},
  account: {},
  services: [],
  packages: [],
  reservations: [],
  displays: [],
}

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case dashboardActionTypes.INIT_DASHBOARD_SUCCESS:
      const activeAccount = action.payload.profile.accounts[0]
      return { ...state, account: activeAccount, ...action.payload }
    case loginActionTypes.LOGOUT_SUCCESS:
    case dashboardActionTypes.CREATE_PACKAGE_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default dashboard

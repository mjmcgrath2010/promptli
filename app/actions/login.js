import Router from 'next/router'
import { loginActionTypes } from '../constants/index'
import API from '../utils/api'
import Cookies from 'js-cookie'
import { dashboardActions } from './index'

const loginActions = {
    loginRequest: () => {
        return { type: loginActionTypes.LOGIN_REQUEST }
    },
    makeLoginRequest(payload) {
        return async dispatch => {
            dispatch(this.loginRequest())
            return API.authenticate(payload)
                .then(response => {
                    const { data } = response
                    Router.push('/dashboard')
                    Cookies.set('token', data.token, { expires: 7 })
                    dispatch(this.loginSuccess(data))
                    dispatch(dashboardActions.initDashboard())
                })
                .catch(e =>
                    dispatch(
                        this.handleError(
                            loginActionTypes.LOGIN_FAILURE,
                            'Invalid username or password'
                        )
                    )
                )
        }
    },
    loginSuccess(payload) {
        return {
            type: loginActionTypes.LOGIN_SUCCESS,
            payload,
        }
    },
    logoutRequest() {
        return {
            type: loginActionTypes.LOGOUT_REQUEST,
        }
    },
    makeLogoutRequest() {
        return dispatch => {
            dispatch(this.logoutRequest())
            return API.logout()
                .then(() => {
                    Cookies.remove('token')
                    Router.push('/login')
                    return dispatch(
                        this.handleSuccess(loginActionTypes.LOGOUT_SUCCESS)
                    )
                })
                .catch(e =>
                    dispatch(this.handleError(loginActionTypes.LOGIN_FAILURE))
                )
        }
    },
    checkAuth() {
        return {
            type: loginActionTypes.CHECK_AUTH,
        }
    },
    checkAuthRequest() {
        return dispatch => {
            dispatch(this.checkAuth())
            return API.checkAuth()
                .then(({ data }) => {
                    Cookies.set('token', data.token)
                    dispatch(
                        this.handleSuccess(loginActionTypes.AUTH_SUCCESS, data)
                    )
                    return Router.push('/dashboard')
                })
                .catch(e => {
                    return dispatch(
                        this.handleError(loginActionTypes.AUTH_FAILURE)
                    )
                })
        }
    },
    createUser() {
        return {
            type: loginActionTypes.CREATE_USER_REQUEST,
        }
    },
    createUserRequest(payload) {
        return async dispatch => {
            dispatch(this.createUser())
            API.createUser(payload)
                .then(({ data }) => {
                    Cookies.set('token', data.token)
                    dispatch(
                        this.handleSuccess(loginActionTypes.CREATE_USER_SUCCESS)
                    )
                    dispatch(this.checkAuthRequest())
                    return dispatch(this.loginSuccess({ auth: data }))
                })
                .catch(e =>
                    dispatch(
                        this.handleError(loginActionTypes.CREATE_USER_FAILURE)
                    )
                )
        }
    },
    handleError(type, payload) {
        return {
            type,
            payload,
        }
    },
    handleSuccess(type, payload) {
        return {
            type,
            payload,
        }
    },
    resetPassword() {
        return {
            type: loginActionTypes.RESET_PASSWORD_REQUEST,
        }
    },
    resetPasswordRequest(payload) {
        this.resetPassword()
        return dispatch => {
            API.resetPassword(payload)
                .then(({ data }) => {
                    Cookies.set('token', data.token)
                    dispatch(this.checkAuthRequest())
                    return dispatch(this.resetPasswordSuccess(data))
                })
                .catch(e => this.resetPasswordFailure(e))
        }
    },
    resetPasswordSuccess(payload) {
        return {
            type: loginActionTypes.RESET_PASSWORD_SUCCESS,
            payload,
        }
    },
    resetPasswordFailure(payload) {
        return {
            type: loginActionTypes.RESET_PASSWORD_SUCCESS,
            payload,
        }
    },
    forgotPassword() {
        return {
            type: loginActionTypes.FORGOT_PASSWORD_REQUEST,
        }
    },
    forgotPasswordRequest(payload) {
        return dispatch => {
            this.forgotPassword()
            return API.forgotPassword(payload)
                .then(({ data }) => {
                    return dispatch(this.forgotPasswordSuccess(data))
                })
                .catch(e => this.forgotPasswordFailure(e))
        }
    },
    forgotPasswordSuccess(payload) {
        return {
            type: loginActionTypes.FORGOT_PASSWORD_SUCCESS,
            payload,
        }
    },
    forgotPasswordFailure(payload) {
        return {
            type: loginActionTypes.FORGOT_PASSWORD_FAILURE,
            payload,
        }
    },
}

export default loginActions

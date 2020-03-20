import { loginActionTypes } from '../constants/index'

const initialState = {
    loading: false,
    user: {},
    token: {},
    isLoggedIn: false,
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case loginActionTypes.LOGIN_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            })
        case loginActionTypes.LOGIN_SUCCESS:
            return Object.assign({}, state, action.payload, {
                isLoggedIn: true,
            })
        case loginActionTypes.LOGIN_FAILURE:
            return Object.assign({}, state, {
                error: action.payload,
            })
        case loginActionTypes.AUTH_SUCCESS:
            const { payload } = action
            return { ...state, ...payload }
        case loginActionTypes.LOGOUT_SUCCESS:
            return initialState
        default:
            return state
    }
}

export default auth

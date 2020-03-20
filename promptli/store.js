import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import { dashboard, admin, auth } from './reducers/index'

export const initialState = {}

const rootReducer = combineReducers({
    dashboard,
    admin,
    auth,
})

export function initializeStore() {
    const isClient = typeof window !== 'undefined'
    let store

    if (isClient) {
        const { persistReducer } = require('redux-persist')
        const storage = require('redux-persist/lib/storage').default
        const persistConfig = {
            key: 'root',
            storage,
        }
        store = createStore(
            persistReducer(persistConfig, rootReducer),
            initialState,
            composeWithDevTools(applyMiddleware(thunk))
        )
        store.__PERSISTOR = persistStore(store)
    } else {
        store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    }
    return store
}

import App from 'next/app'
import React from 'react'
import * as Sentry from '@sentry/browser'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../lib/theme'
import { appWithTranslation } from '../lib/i18n'

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN_CLIENT,
  })
}

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.c
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <PersistGate persistor={reduxStore.__PERSISTOR} loading={null}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    )
  }
}

export default withReduxStore(appWithTranslation(MyApp))

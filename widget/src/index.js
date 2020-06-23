import { render, h } from 'preact'
import { useState, useEffect, useMemo } from 'preact/hooks'
import Widget from './containers/index'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import theme from './theme'
import store from './store'

const App = props => {
  const [state, setState] = useState({ dialogOpen: false })

  useEffect(() => {
    setState({ ...state, ...props })
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Widget {...state} />
      </ThemeProvider>
    </Provider>
  )
}

export const init = (config, selector) => render(<App {...config} />, document.getElementById(selector))

const wrapper = document.getElementById('promptli-widget-preview-container')
wrapper ? init({ title: 'hello world!' }, 'promptli-widget-preview-container') : false

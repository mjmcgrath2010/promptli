import { render, h } from 'preact'
import { useState, useEffect, useMemo } from 'preact/hooks'
import Widget from './containers/index'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const App = props => {
  const [state, setState] = useState({ dialogOpen: false })

  useEffect(() => {
    setState({ ...state, ...props })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Widget {...state} />
    </ThemeProvider>
  )
}

export const init = (config, selector) => render(<App {...config} />, document.getElementById(selector))

const wrapper = document.getElementById('promptli-widget-preview-container')
wrapper ? init({ title: 'hello world!' }, 'promptli-widget-preview-container') : false

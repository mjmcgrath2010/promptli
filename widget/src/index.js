import { render, h } from 'preact'
import { useState, useEffect, useMemo } from 'preact/hooks'
import Widget from './containers/index'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import theme from './theme'
import store from './store'
import { createGlobalStyle } from 'styled-components'

// Setup Font Icons and Custom Fonts

const iconLink = document.createElement('link')
const montserratLink = document.createElement('link')
const root = document.head

montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap'
iconLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'
montserratLink.rel = 'stylesheet'
iconLink.rel = 'stylesheet'

root.appendChild(montserratLink)
root.appendChild(iconLink)

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;  
  }
  
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
`

const App = props => {
  const [state, setState] = useState({ dialogOpen: false })

  useEffect(() => {
    setState({ ...state, ...props })
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Widget {...state} />
      </ThemeProvider>
    </Provider>
  )
}

export const init = (config, selector) => render(<App {...config} />, document.getElementById(selector))

const wrapper = document.getElementById('promptli-widget-preview-container')
wrapper ? init({ title: 'hello world!' }, 'promptli-widget-preview-container') : false

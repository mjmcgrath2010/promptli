import { render, h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import Widget from './containers/index'

const App = props => {
  const [state, setState] = useState({ dialogOpen: false })

  useEffect(() => {
    setState({ ...state, ...props })
  }, [])

  return (
    <div>
      <Widget {...state} />
    </div>
  )
}

export const init = (config, selector) => render(<App {...config} />, document.getElementById(selector))

const wrapper = document.getElementById('promptli-widget-preview-container')
wrapper ? init({ title: 'hello world!' }, 'promptli-widget-preview-container') : false

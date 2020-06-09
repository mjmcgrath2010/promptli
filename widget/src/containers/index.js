import { h } from 'preact'
import FullScreenModal from '../displays/FullScreenModal'
import { useEffect, useState } from 'preact/hooks'
import PromptliAPI from '../api'

const Widget = props => {
  const { identifier, widgetId } = props
  const [state, setState] = useState({ items: [] })
  const api = new PromptliAPI(identifier, widgetId)
  const { items, ...rest } = state

  useEffect(() => {
    if (identifier) {
      api.init().then(state => {
        setState(state)
      })
    }
  }, [identifier])

  return (
    <div>
      <FullScreenModal api={api} itemIds={items} {...rest} />
    </div>
  )
}

export default Widget

import { h } from 'preact'
import FullScreenModal from '../displays/FullScreenModal'
import { useEffect, useState } from 'preact/hooks'
import PromptliAPI from '../api'

const Widget = props => {
  const { ctaText, title } = props
  const { identifier, widgetId } = props
  const [items, setItems] = useState([])
  const api = new PromptliAPI(identifier, widgetId)

  useEffect(() => {
    api.init().then(({ items }) => {
      setItems(items)
    })
  }, [identifier])

  return (
    <div>
      <FullScreenModal api={api} itemIds={items} ctaText={ctaText} title={title} />
    </div>
  )
}

export default Widget

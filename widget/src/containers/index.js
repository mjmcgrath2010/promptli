import { h } from 'preact'
import FullScreenModal from '../displays/FullScreenModal'
import { useEffect, useState } from 'preact/hooks'
import PromptliAPI from '../api'

const Widget = props => {
  const { identifier, widgetId } = props
  const [state, setState] = useState({ items: [] })
  const [selectedItems, setSelectedItems] = useState([])
  const api = new PromptliAPI(identifier, widgetId)
  const { items, ...rest } = state

  useEffect(() => {
    if (identifier) {
      api.init().then(state => {
        setState(state)
      })
    }
  }, [identifier])

  const selectItem = itemId => {
    const newItems = Array.from(new Set([...selectedItems, itemId]))
    setSelectedItems(newItems)
  }

  const removeItem = itemId => {
    const index = selectedItems.indexOf(itemId)
    setSelectedItems(items => items.splice(index, 1))
  }

  return (
    <div>
      <FullScreenModal
        api={api}
        itemIds={items}
        selectedItems={selectedItems}
        removeItem={removeItem}
        selectItem={selectItem}
        {...rest}
      />
    </div>
  )
}

export default Widget

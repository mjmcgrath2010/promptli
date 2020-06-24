import { h, Fragment } from 'preact'
import FullScreenModal from '../displays/FullScreenModal'
import { useState } from 'preact/hooks'
import PromptliAPI from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { initPromptliApi } from '../actions/api/actionCreators'
import { initWidget } from '../actions/widget/actionCreators'

const Widget = props => {
  const { identifier, widgetId } = props
  const [selectedItems, setSelectedItems] = useState([])

  const dispatch = useDispatch()
  const apiReady = useSelector(({ api: { ready } }) => ready)
  const widgetState = useSelector(({ widget }) => widget)
  const { items, initialized, ...rest } = widgetState

  if (identifier && widgetId && !apiReady) {
    dispatch(initPromptliApi({ identifier, widgetId }))
  }

  if (apiReady && !initialized) {
    dispatch(initWidget())
  }

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
      {initialized ? (
        <FullScreenModal
          itemIds={items}
          selectedItems={selectedItems}
          removeItem={removeItem}
          selectItem={selectItem}
          {...rest}
        />
      ) : (
        <Fragment />
      )}
    </div>
  )
}

export default Widget

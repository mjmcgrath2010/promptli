import { h } from 'preact'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'preact/hooks'
import dayjs from 'dayjs'

import Items from './Items'
import Item from './Item'
import { setItems, setItemsView, setItem, fetchItems } from '../../actions/items/actionCreators'

const ItemsContainer = ({ api, itemIds, selectedItems, selectItem, removeItem }) => {
  const dispatch = useDispatch()
  const view = useSelector(({ items }) => items.view)
  const items = useSelector(({ items }) => items.items)
  const item = useSelector(({ items }) => items.item)

  useEffect(() => {
    dispatch(fetchItems({ startDate: dayjs().format(), endDate: dayjs().format(), items: itemIds.join(',') }))
  }, [])

  const dispatchSetItems = items => dispatch(setItems(items))
  const dispatchItemsView = (view = 'index') => dispatch(setItemsView(view))
  const dispatchSetItem = item => dispatch(setItem(item))

  const showView = (view, opts) => {
    switch (view) {
      case 'show':
        dispatchItemsView('show')
        dispatchSetItem(opts)
        return (
          <Item
            onClickBack={dispatchItemsView}
            selectItem={selectItem}
            removeItem={removeItem}
            showViewMode={showView}
            {...opts}
          />
        )

      case 'index':
      default:
        dispatchItemsView('index')
        return (
          <Items
            api={api}
            selectedItems={selectedItems}
            selectItem={selectItem}
            removeItem={removeItem}
            itemIds={itemIds}
            setItems={dispatchSetItems}
            showViewMode={showView}
          />
        )
    }
  }

  return <div>{showView(view, item)}</div>
}

ItemsContainer.defaultProps = {}

ItemsContainer.propTypes = {
  api: PropTypes.func.isRequired,
  itemIds: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default ItemsContainer

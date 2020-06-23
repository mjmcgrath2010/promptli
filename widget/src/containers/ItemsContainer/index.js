import { h } from 'preact'
import PropTypes from 'prop-types'
import Items from './Items'
import Item from './Item'
import { useEffect, useState } from 'preact/hooks'
import dayjs from 'dayjs'

const ItemsContainer = ({ api, itemIds, selectedItems, selectItem, removeItem }) => {
  const [view, setView] = useState('index')
  const [item, setItem] = useState({})
  const [items, setItems] = useState([])

  useEffect(() => {
    itemIds.length &&
      api
        .fetchItems({ startDate: dayjs().format(), endDate: dayjs().format(), items: itemIds.join(',') })
        .then(({ items }) => {
          setItems(items)
        })
  }, [])

  const showView = (view, opts) => {
    switch (view) {
      case 'show':
        setView('show')
        setItem(opts)
        return <Item selectItem={selectItem} removeItem={removeItem} showViewMode={showView} {...opts} />

      case 'index':
      default:
        setView('index')
        return (
          <Items
            api={api}
            selectedItems={selectedItems}
            selectItem={selectItem}
            removeItem={removeItem}
            itemIds={itemIds}
            setItems={setItems}
            items={items}
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

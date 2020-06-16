import { h } from 'preact'
import PropTypes from 'prop-types'
import Items from './Items'
import Item from './Item'
import { useEffect, useState } from 'preact/hooks'
import dayjs from 'dayjs'

const ItemsContainer = ({ api, itemIds }) => {
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
  }, [itemIds])

  const showView = (view, opts) => {
    switch (view) {
      case 'show':
        setView('show')
        setItem(opts)
        return <Item showViewMode={showView} {...opts} />

      case 'index':
      default:
        setView('index')
        return <Items api={api} itemIds={itemIds} setItems={setItems} items={items} showViewMode={showView} />
    }
  }

  return <div>{showView(view, item)}</div>
}

ItemsContainer.defaultProps = {}

ItemsContainer.propTypes = {}

export default ItemsContainer

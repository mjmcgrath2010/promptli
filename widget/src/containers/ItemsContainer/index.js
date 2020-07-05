import { h } from 'preact'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'preact/hooks'
import dayjs from 'dayjs'

import Items from './Items'
import Item from './Item'
import { setItems, setItem, fetchItems } from '../../actions/items/actionCreators'
import useSteps from '../../useSteps'

const steps = [{ id: 'index' }, { id: 'show' }]

const ItemsContainer = ({ itemIds, selectedItems, selectItem, removeItem, navigation: containerNavigation }) => {
  const dispatch = useDispatch()
  const item = useSelector(({ items }) => items.item)
  const { step, navigation } = useSteps({ steps })

  useEffect(() => {
    dispatch(fetchItems({ startDate: dayjs().format(), endDate: dayjs().format(), items: itemIds.join(',') }))
  }, [])

  const dispatchSetItems = items => dispatch(setItems(items))
  const dispatchSetItem = item => dispatch(setItem(item))

  const next = item => {
    dispatchSetItem(item)
    navigation.next()
  }
  const showView = (view, opts = {}) => {
    switch (view) {
      case 'show':
        dispatchSetItem(opts)
        return <Item onClickBack={navigation.previous} selectItem={selectItem} removeItem={removeItem} {...opts} />

      case 'index':
      default:
        return (
          <Items
            selectedItems={selectedItems}
            selectItem={selectItem}
            removeItem={removeItem}
            itemIds={itemIds}
            setItems={dispatchSetItems}
            showItem={next}
            containerNavigation={containerNavigation}
          />
        )
    }
  }
  const { id } = step

  return <div>{showView(id, item)}</div>
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

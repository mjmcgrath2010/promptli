import { h } from 'preact'
import PropTypes from 'prop-types'
import Modal from '../components/ui/Modal'
import { useState } from 'preact/hooks'
import Button from '../components/ui/Button'
import CheckoutContainer from '../containers/CheckoutContainer'
import ItemsContainer from '../containers/ItemsContainer'
import CategoriesContainer from '../containers/CategoriesContainer'
import useSteps from '../useSteps'

const steps = [{ id: 'categories' }, { id: 'items' }, { id: 'checkout' }]

const FullScreenModal = ({ ctaText, title, itemIds, selectedItems, selectItem, removeItem }) => {
  const [state, setState] = useState({ dialogOpen: false })
  const { step, navigation } = useSteps({ steps })

  const { dialogOpen } = state

  const views = {
    categories: <CategoriesContainer navigation={navigation} />,
    items: (
      <ItemsContainer
        itemIds={itemIds}
        navigation={navigation}
        selectedItems={selectedItems}
        selectItem={selectItem}
        removeItem={removeItem}
      />
    ),
    checkout: <CheckoutContainer navigation={navigation} />,
  }

  const getScreen = ({ id }) => {
    return (views[id] && views[id]) || views[1]
  }

  const openDialog = () => setState({ ...state, dialogOpen: true })

  const closeDialog = () => setState({ ...state, dialogOpen: false })
  return (
    <div>
      <Button onClick={openDialog} text={ctaText || 'Click here!'} />
      <Modal open={dialogOpen} title={title} onClose={closeDialog}>
        {getScreen(step)}
      </Modal>
    </div>
  )
}

export default FullScreenModal

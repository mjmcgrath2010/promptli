import { h } from 'preact'
import PropTypes from 'prop-types'
import Modal from '../components/ui/Modal'
import { useState } from 'preact/hooks'
import Button from '../components/ui/Button'
import CheckoutContainer from '../containers/CheckoutContainer'
import ItemsContainer from '../containers/ItemsContainer'
import CategoriesContainer from '../containers/CategoriesContainer'
import { useSelector } from 'react-redux'

const FullScreenModal = props => {
  const [state, setState] = useState({ dialogOpen: false })
  const [screen, setScreen] = useState(1)
  const { ctaText, title, itemIds, selectedItems, selectItem, removeItem } = props
  const { dialogOpen } = state
  const { activeContainer } = useSelector(({ widget }) => widget)
  const views = {
    categories: <CategoriesContainer />,
    items: (
      <ItemsContainer itemIds={itemIds} selectedItems={selectedItems} selectItem={selectItem} removeItem={removeItem} />
    ),
    checkout: <CheckoutContainer />,
  }

  const getScreen = (screen = 1) => {
    return (views[screen] && views[screen]) || views[1]
  }

  const openDialog = () => setState({ ...state, dialogOpen: true })

  const handleNext = () => {
    const nextScreen = screen + 1
    views[nextScreen] && setScreen(nextScreen)
  }

  const handleBack = () => {
    const nextScreen = screen - 1
    views[nextScreen] && setScreen(nextScreen)
  }

  const closeDialog = () => setState({ ...state, dialogOpen: false })

  return (
    <div>
      <Button onClick={openDialog} text={ctaText || 'Click here!'} />
      <Modal
        screen={screen}
        open={dialogOpen}
        title={title}
        onClickNext={handleNext}
        onClickBack={handleBack}
        onClose={closeDialog}
      >
        {getScreen(activeContainer)}
      </Modal>
    </div>
  )
}

export default FullScreenModal

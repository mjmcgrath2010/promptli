import { h } from 'preact'
import PropTypes from 'prop-types'
import Modal from '../components/ui/Modal'
import { useState } from 'preact/hooks'
import Button from '../components/ui/Button'
import ConfirmationContainer from '../containers/ConfirmationContainer'
import ItemsContainer from '../containers/ItemsContainer'

const FullScreenModal = props => {
  const [state, setState] = useState({ dialogOpen: false })
  const [screen, setScreen] = useState(1)

  const views = {
    1: <ItemsContainer />,
    2: <ConfirmationContainer />,
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
  const { dialogOpen } = state
  const { ctaText, title } = props
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
        {getScreen(screen)}
      </Modal>
    </div>
  )
}

export default FullScreenModal

import { render, h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import Button from '../components/Button'
import Modal from '../components/Modal'

const Widget = props => {
  const [state, setState] = useState({ dialogOpen: false })

  const openDialog = () => setState({ ...state, dialogOpen: true })

  const closeDialog = () => setState({ ...state, dialogOpen: false })

  const { dialogOpen } = state
  const { btnText, title } = props
  return (
    <div>
      <Button onClick={openDialog} text={btnText || 'Click here!'} />
      {dialogOpen && <Modal title={title} onClose={closeDialog} />}
    </div>
  )
}

export default Widget

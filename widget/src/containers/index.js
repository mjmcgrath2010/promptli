import { render, h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'

const Widget = props => {
  const [state, setState] = useState({ dialogOpen: false })

  const openDialog = () => setState({ ...state, dialogOpen: true })

  const closeDialog = () => setState({ ...state, dialogOpen: false })

  const { dialogOpen } = state
  const { ctaText, title } = props
  return (
    <div>
      <Button onClick={openDialog} text={ctaText || 'Click here!'} />
      {dialogOpen && <Modal title={title} onClose={closeDialog} />}
    </div>
  )
}

export default Widget

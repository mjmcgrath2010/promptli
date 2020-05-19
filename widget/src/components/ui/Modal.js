import { h } from 'preact'
import styled, { keyframes, css } from 'styled-components'
import PropTypes from 'prop-types'
import Title from '../Title'
import DateTimePicker from './DateTImeSelector'
import Card from './Card'
import Services from '../../containers/ServicesContainer/Services'

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`

const slideDown = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
`

const FullScreenModal = styled.div`
  animation: ${({ open }) =>
    css`
      ${open ? slideUp : slideDown} 0.2s linear forwards;
    `}
  height: 100vh;
  z-index: 100000;
  width: 100vw;
  background: #fffdfd;
  font-family: 'Open Sans', 'sans-serif';
  position: fixed;
  top: 0;
  left: 0;
`

const ModalHeader = styled.div`
  height: 70px;
  width: 100%;
  color: rgba(24, 33, 82, 1);
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
`

const ModalBody = styled.div`
  position: relative;
  width: 100vw;
  padding: 0 24px;
`

const CloseButton = styled.div`
  padding: 8px 16px;
  border-radius: 4em;
  border: 2px solid rgba(24, 33, 82, 1);
  color: #000;
  background: transparent;
  position: absolute;
  top: 16px;
  font-weight: 600;
  font-size: 18px;
  right: 24px;
  &:before {
    content: 'X';
  }
  &:hover {
    background: rgba(24, 33, 82, 1);
    color: #fff;
    border: 2px solid #fff;
  }
`
const Modal = props => {
  const { title, onClose, open } = props
  return (
    <FullScreenModal open={open}>
      <CloseButton onClick={onClose} />
      <ModalHeader>
        <Title text={title} />
      </ModalHeader>
      <ModalBody>
        <Services />
      </ModalBody>
    </FullScreenModal>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default Modal

import { h } from 'preact'
import styled, { keyframes, css } from 'styled-components'
import PropTypes from 'prop-types'

const fade = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
    opacity: 100%;
  }
`

const slideDown = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
     opacity: 0%;
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
  opacity: 0;
  transform: translateY(100%);
`

const ModalBody = styled.div``

const CloseButton = styled.div`
  padding: 6px 12px;
  border: ${({ theme }) => `2px solid ${theme.primary}`};
  color: #000;
  background: transparent;
  position: absolute;
  top: 18px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.smFont};
  right: 24px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  &:before {
    content: 'X';
  }
  &:hover {
    background: ${({ theme }) => theme.secondaryHover};
    border: ${({ theme }) => `2px solid ${theme.secondary}`};
    color: ${({ theme }) => theme.white};
    transition: background-color 0.2s ease-in;
  }
`
const Modal = props => {
  const FadeIn = styled.div`
    animation: ${fade} 0.5s linear forwards;
  `

  const { onClose, open, children } = props
  return (
    <FullScreenModal open={open}>
      <CloseButton onClick={onClose} />
      <ModalBody>
        <FadeIn>{children}</FadeIn>
      </ModalBody>
    </FullScreenModal>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal

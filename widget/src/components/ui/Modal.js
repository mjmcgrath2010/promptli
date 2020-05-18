import { h } from 'preact'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Title from '../Title'
import DateTimePicker from './DateTImeSelector'
import Card from './Card'

const FullScreenModal = styled.div`
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
  color: blue;
  box-shadow: 2px 3px rgba(0, 0, 0, 0.3);
`

const ModalBody = styled.div`
  position: relative;
  width: 100vw;
  padding: 24px;
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
  const { title, onClose } = props
  return (
    <FullScreenModal>
      <CloseButton onClick={onClose} />
      <ModalHeader>
        <Title text={title} />
      </ModalHeader>
      <ModalBody>
        <DateTimePicker />
        <Card
          primaryAction={() => console.log('next')}
          title="Example Service"
          primaryBtnText="Select"
          description="This is an amazing service!"
        />
      </ModalBody>
    </FullScreenModal>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal

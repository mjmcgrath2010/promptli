import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import ReviewScreen from './ReviewScreen'
import ConfirmationScreen from './ConfirmationScreen'
import ReservationScreen from './ReservationScreen'

const StyledContainerContainer = styled.div``

const ConfirmationContainer = props => {
  const { title, navigation } = props
  const { view } = useSelector(({ checkout }) => checkout)

  switch (view) {
    case 'review':
      return <ReviewScreen />
    case 'confirm':
      return <ConfirmationScreen />
    case 'success':
      return <ReservationScreen />
  }
}

ConfirmationContainer.defaultProps = {
  title: 'Confirmation Container',
}

ConfirmationContainer.propTypes = {}

export default ConfirmationContainer

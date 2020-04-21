import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ConfirmationScreenContainer = styled.div``

const ConfirmationScreen = props => {
  const { title } = props
  return <ConfirmationScreenContainer>{title}</ConfirmationScreenContainer>
}

ConfirmationScreen.defaultProps = {}

ConfirmationScreen.propTypes = {}

export default ConfirmationScreen

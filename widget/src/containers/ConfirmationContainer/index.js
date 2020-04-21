import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainerContainer = styled.div``

const ConfirmationContainer = props => {
  const { title } = props
  return <StyledContainerContainer>{title}</StyledContainerContainer>
}

ConfirmationContainer.defaultProps = {}

ConfirmationContainer.propTypes = {}

export default ConfirmationContainer

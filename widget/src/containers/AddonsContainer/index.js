import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAddonsContainer = styled.div``

const AddonsContainer = props => {
  const { title } = props
  return <StyledAddonsContainer>{title}</StyledAddonsContainer>
}

AddonsContainer.defaultProps = {}

AddonsContainer.propTypes = {}

export default AddonsContainer

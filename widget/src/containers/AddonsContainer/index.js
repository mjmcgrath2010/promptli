import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAddonsContainer = styled.div``

const AddonsContainer = props => {
  const { title } = props
  return (
    <StyledAddonsContainer>
      <h1>{title}</h1>
    </StyledAddonsContainer>
  )
}

AddonsContainer.defaultProps = {
  title: 'Addons Container',
}

AddonsContainer.propTypes = {}

export default AddonsContainer

import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextInputContainer = styled.div``

const TextInput = props => {
  const { title } = props
  return <TextInputContainer>{title}</TextInputContainer>
}

TextInput.defaultProps = {}

TextInput.propTypes = {}

export default TextInput

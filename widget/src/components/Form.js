import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormContainer = styled.div``

const Form = props => {
  const { title } = props
  return <FormContainer>{title}</FormContainer>
}

Form.defaultProps = {}

Form.propTypes = {}

export default Form

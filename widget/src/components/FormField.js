import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormInputField = styled.div``

const FormField = props => {
  const { title } = props
  return <FormInputField>{title}</FormInputField>
}

FormField.defaultProps = {}

FormField.propTypes = {}

export default FormField

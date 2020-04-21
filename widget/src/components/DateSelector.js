import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DateSelectorContainer = styled.div``

const DateSelector = props => {
  const { title } = props
  return <DateSelectorContainer>{title}</DateSelectorContainer>
}

DateSelector.defaultProps = {}

DateSelector.propTypes = {}

export default DateSelector

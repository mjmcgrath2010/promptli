import { h } from 'preact'
import PropTypes from 'prop-types'
import Dropdown from './Dropdown'
import styled from 'styled-components'

import { timeOptions } from '../../utils/dateHelpers'

const Container = styled.div`
  margin: 0.25em 1em;
`

const StyledDropDown = styled(Dropdown)`
  background-color: #eaeaea;
  border-radius: 6px;

  .Dropdown-control {
    background-color: #eaeaea;
  }
`

const TimeSelector = props => {
  const { label, onSelect, name, value } = props

  return (
    <Container>
      <StyledDropDown label={label} value={value} name={name} options={timeOptions} onSelect={onSelect} />
    </Container>
  )
}

TimeSelector.defaultProps = {
  value: timeOptions[0],
}

TimeSelector.propTypes = {
  value: PropTypes.string,
}

export default TimeSelector

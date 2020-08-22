import { h } from 'preact'
import PropTypes from 'prop-types'
import Dropdown from './Dropdown'
import styled, { css } from 'styled-components'

import { timeOptions } from '../../utils/dateHelpers'

const Container = styled.div`
  margin: 0.25em 1em;
`

const StyledDropDown = styled(Dropdown)`
  background-color: #eaeaea;
  border-radius: 6px;
  transition: 0.5s ease-in-out all;

  .Dropdown-control {
    background-color: #eaeaea;
  }

  ${({ displayMode }) =>
    displayMode &&
    css`
      display: inline-flex;
      width: fit-content;
      transition: 0.5s ease-in-out all;

      .Dropdown-placeholder.is-selected {
        font-size: 12px;
        transition: 0.5s ease-in-out all;
      }

      .Dropdown-control {
        background-color: transparent;
        display: inline-flex;
        padding: 6px 8px;
        transition: 0.5s ease-in-out all;
        border: none;
        border-radius: 5px;
      }

      .Dropdown-arrow {
        display: none;
      }
    `}
`

const TimeSelector = props => {
  const { label, onSelect, name, value, displayMode } = props

  return (
    <Container>
      <StyledDropDown
        displayMode={displayMode}
        disabled={displayMode}
        label={label}
        value={value}
        name={name}
        options={timeOptions}
        onSelect={onSelect}
      />
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

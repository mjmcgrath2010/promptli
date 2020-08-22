import { h, Fragment } from 'preact'
import DatePicker from './DatePicker'
import TimePicker from './TimesPicker'
import styled, { css } from 'styled-components'

const DateSelectorContainer = styled.div`
  grid-column: span 12;
  ${({ displayMode }) =>
    displayMode &&
    css`
      grid-column: span 4;
    `}
`

const TimePickerContainer = styled.div`
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${({ displayMode }) =>
    displayMode &&
    css`
      grid-column: span 8;
    `}
`
const DateTimePicker = ({ onChange, ...rest }) => {
  const handleChange = (updatedState = {}) => {
    onChange(updatedState)
  }

  return (
    <Fragment>
      <DateSelectorContainer {...rest}>
        <DatePicker {...rest} onChange={handleChange} />
      </DateSelectorContainer>
      <TimePickerContainer {...rest}>
        <TimePicker {...rest} onChange={handleChange} />
      </TimePickerContainer>
    </Fragment>
  )
}

DateTimePicker.defaultProps = {
  onChange: () => {},
}

export default DateTimePicker

import { h, Fragment } from 'preact'
import DatePicker from './DatePicker'
import TimePicker from './TimesPicker'
import styled from 'styled-components'

const DateSelectorContainer = styled.div`
  grid-column: span 12;
`

const TimePickerContainer = styled.div`
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const DateTimePicker = ({ onChange, ...rest }) => {
  const handleChange = (updatedState = {}) => {
    onChange(updatedState)
  }

  return (
    <Fragment>
      <DateSelectorContainer>
        <DatePicker {...rest} onChange={handleChange} />
      </DateSelectorContainer>
      <TimePickerContainer>
        <TimePicker {...rest} onChange={handleChange} />
      </TimePickerContainer>
    </Fragment>
  )
}

DateTimePicker.defaultProps = {
  onChange: val => {
    console.log(val)
  },
}

export default DateTimePicker

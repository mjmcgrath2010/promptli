import { h, Fragment } from 'preact'
import DatePicker from './DatePicker'
import TimePicker from './TimesPicker'
import { useState } from 'preact/hooks'
import styled from 'styled-components'

const DateSelectorContainer = styled.div`
  grid-column: span 12;
`

const TimePickerContainer = styled.div`
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const DateTimePicker = props => {
  const { onChange } = props
  const [state, setState] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  })

  const handleChange = (updatedState = {}) => {
    setState({
      ...state,
      ...updatedState,
    })

    onChange({
      ...state,
      ...updatedState,
    })
  }

  return (
    <Fragment>
      <DateSelectorContainer>
        <DatePicker onChange={handleChange} />
      </DateSelectorContainer>
      <TimePickerContainer>
        <TimePicker onChange={handleChange} />
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

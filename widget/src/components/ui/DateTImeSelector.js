import { h } from 'preact'
import Column from './Column'
import DatePicker from './DatePicker'
import TimePicker from './TimesPicker'
import { useState } from 'preact/hooks'

const DateTimePicker = props => {
  const { onChange } = props
  const [state, setState] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  })

  const handleChange = (updatedState = {}) => {
    console.log(state)
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
    <Column>
      <DatePicker onChange={handleChange} />
      <TimePicker onChange={handleChange} />
    </Column>
  )
}

DateTimePicker.defaultProps = {
  onChange: val => {
    console.log(val)
  },
}

export default DateTimePicker

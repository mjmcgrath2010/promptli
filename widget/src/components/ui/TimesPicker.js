import { h } from 'preact'
import PropTypes from 'prop-types'
import TimeSelector from './TimeSelector'
import Column from './Column'

const TimePicker = props => {
  const { onChange } = props
  const handleChange = val => {
    onChange(val)
  }
  return (
    <Column>
      <TimeSelector label="Start Time" name="startTime" onSelect={handleChange} />
      <TimeSelector label="End Time" name="endTime" onSelect={handleChange} />
    </Column>
  )
}

TimePicker.defaultProps = {}

TimePicker.propTypes = {}

export default TimePicker

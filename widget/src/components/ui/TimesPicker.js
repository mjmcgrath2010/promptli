import { h, Fragment } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useEffect, useState } from 'preact/hooks'
import date from 'dayjs'

import TimeSelector from './TimeSelector'
import { getHourNumber } from '../../utils/dateHelpers'

const SelectorContainer = styled.div`
  grid-column: span 1;
`
const initialTime = date()
  .add(1, 'hour')
  .startOf('hour')

const TimePicker = props => {
  const [{ startTime, endTime }, setState] = useState({
    startTime: undefined,
    endTime: undefined,
  })

  useEffect(() => {
    setDefaultValues()
  }, [])

  const { onChange } = props

  const setDefaultValues = () => {
    const defaults = {
      startTime: initialTime.format('h:mm A'),
      endTime: initialTime.add(1, 'hour').format('h:mm A'),
    }
    setState(defaults)
    onChange(defaults)
  }

  const handleChange = val => {
    const [[name, { value }]] = Object.entries(val)

    setState(prevState => {
      let update = { ...prevState, [name]: value }
      const { startTime: newStart, endTime: newEnd } = update

      let start = date()
        .hour(getHourNumber(newStart))
        .startOf('hour')
      let end = date()
        .hour(getHourNumber(newEnd))
        .startOf('hour')

      const isLessThanStart = getHourNumber(newEnd) < getHourNumber(startTime)
      const isGreaterThanEnd = getHourNumber(newStart) > getHourNumber(endTime)

      if (isGreaterThanEnd) {
        update = {
          startTime: start.format('h:mm A'),
          endTime: start.add(1, 'hour').format('h:mm A'),
        }
      } else if (isLessThanStart) {
        update = {
          startTime: end.subtract(1, 'hour').format('h:mm A'),
          endTime: end.format('h:mm A'),
        }
      }

      console.log(update)

      return update
    })
    onChange(val)
  }

  return (
    <Fragment>
      <SelectorContainer>
        <TimeSelector {...props} value={startTime} label="Start Time" name="startTime" onSelect={handleChange} />
      </SelectorContainer>
      <SelectorContainer>
        <TimeSelector {...props} value={endTime} label="End Time" name="endTime" onSelect={handleChange} />
      </SelectorContainer>
    </Fragment>
  )
}

TimePicker.defaultProps = {
  onChange: () => {},
}

TimePicker.propTypes = {
  onChange: PropTypes.func,
}

export default TimePicker

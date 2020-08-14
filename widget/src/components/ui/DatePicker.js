import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import date from 'dayjs'

import DateSelector from './DateSelector'

const DatesContainer = styled.div`
  width: auto;
  padding: 0.5em 1em;
  grid-column: span 12;
`

const DatePicker = ({ onChange, initialValue, startDate }) => {
  useEffect(() => {
    onChange({
      startDate: initialValue.format('MM-DD-YYYY'),
      endDate: initialValue.format('MM-DD-YYYY'),
    })
  }, [])

  const handleChange = date => {
    onChange({
      startDate: date.format('MM-DD-YYYY'),
      endDate: date.format('MM-DD-YYYY'),
    })
  }

  return (
    <DatesContainer>
      <DateSelector
        value={startDate ? date(startDate) : initialValue}
        name="startDate"
        onChange={handleChange}
        title="Date"
        minDate={date().toDate()}
      />
    </DatesContainer>
  )
}

DatePicker.defaultProps = {
  onChange: () => {},
  initialValue: date(),
}

DatePicker.propTypes = {
  onChange: PropTypes.func,
}

export default DatePicker

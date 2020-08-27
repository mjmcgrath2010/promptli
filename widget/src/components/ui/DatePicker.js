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

const DatePicker = ({ onChange, initialValue, startDate, ...rest }) => {
  useEffect(() => {
    onChange({
      startDate: initialValue,
      endDate: initialValue,
    })
  }, [])

  const handleChange = d => {
    onChange({
      startDate: d,
      endDate: d,
    })
  }

  return (
    <DatesContainer>
      <DateSelector
        value={date(startDate ? startDate : initialValue)}
        name="startDate"
        onChange={handleChange}
        title="Date"
        minDate={date().toDate()}
        {...rest}
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

import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import date from 'dayjs'

import DateSelector from './DateSelector'
import Column from './Column'

const DatesContainer = styled.div`
  width: auto;
  padding: 0.5em 1em;
  grid-column: span 12;
`

const DatePicker = ({ onChange }) => {
  const [startDate, setStartDate] = useState(date())

  useEffect(() => {
    onChange({
      startDate: startDate.format('MM-DD-YYYY'),
      endDate: startDate.format('MM-DD-YYYY'),
    })
  }, [startDate])

  return (
    <DatesContainer>
      <Column>
        <DateSelector
          value={startDate}
          name="startDate"
          onChange={setStartDate}
          title="Start Date"
          minDate={date().toDate()}
        />
      </Column>
    </DatesContainer>
  )
}

DatePicker.defaultProps = {
  onChange: () => {},
}

DatePicker.propTypes = {
  onChange: PropTypes.func,
}

export default DatePicker

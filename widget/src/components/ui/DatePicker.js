import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import date from 'dayjs'

import DateSelector from './DateSelector'
import Column from './Column'

const DatesContainer = styled.div`
  display: flex;
  width: auto;
  padding: 0.5em 1em;
  flex-direction: row;
  justify-content: flex-start;
`

const DatePicker = ({ onChange }) => {
  const [startDate, setStartDate] = useState(date())
  const [endDate, setEndDate] = useState(date().add(1, 'day'))

  useEffect(() => {
    onChange({
      startDate: startDate.format('MM-DD-YYYY'),
      endDate: endDate.format('MM-DD-YYYY'),
    })

    if (startDate.diff(endDate) > 0) {
      setEndDate(startDate)
    }
  }, [startDate, endDate])

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
      <Column>
        <DateSelector
          value={endDate}
          name="endDate"
          minDate={startDate.toDate()}
          onChange={setEndDate}
          title="End Date"
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

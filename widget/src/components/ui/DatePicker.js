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
  const [startDate, setStartDate] = useState(date().format('MM/DD/YYYY'))
  const [endDate, setEndDate] = useState(date().format('MM/DD/YYYY'))

  const onDateChange = cb => {
    return date => cb(date)
  }

  useEffect(() => {
    onChange({
      startDate,
      endDate,
    })
  }, [startDate, endDate])

  return (
    <DatesContainer>
      <Column>
        <DateSelector value={startDate} name="startDate" onChange={onDateChange(setStartDate)} title="Start Date" />
      </Column>
      <Column>
        <DateSelector value={endDate} name="endDate" onChange={onDateChange(setEndDate)} title="End Date" />
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

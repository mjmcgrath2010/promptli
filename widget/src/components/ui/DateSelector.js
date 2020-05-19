import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import date from 'dayjs'

//https://www.npmjs.com/package/datepickerdate
import 'datepickerdate/lib/index.css'
import { Datepicker } from 'datepickerdate'

import '../../assests/datepicker.css'

const DateSelectorContainer = styled.div`
  max-width: 300px;
`

const Title = styled.div`
  padding: 0.25em;
  font-size: ${({ theme }) => theme.smFont};
`

const DateSelector = props => {
  const { title, onChange, value, name } = props

  const handleChange = (name, value) => onChange(value)

  return (
    <DateSelectorContainer>
      <div className="promptli">
        <Title>{title}</Title>
        <Datepicker
          className="promptli"
          name={name}
          value={value}
          placeholder="Your custom placeholder"
          onDateChanged={handleChange}
        />
      </div>
    </DateSelectorContainer>
  )
}

DateSelector.defaultProps = {
  onChange: () => {},
  value: date().format('MM/DD/YYYY'),
}

DateSelector.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export default DateSelector

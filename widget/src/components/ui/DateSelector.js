import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import date from 'dayjs'

import DatePicker from 'react-date-picker'

const DateSelectorContainer = styled.div``

const DateSelectorComponent = styled(DatePicker)`
  width: 100%;
  background-color: #eaeaea;
  border-radius: 6px;
  padding: 0.5em;

  .react-date-picker__wrapper {
    border: none;
  }
`

const Title = styled.div`
  padding: 0.25em;
  font-size: ${({ theme }) => theme.smFont};
`

const DateSelector = props => {
  const { title, onChange, value, name, minDate, maxDate, ...rest } = props

  return (
    <DateSelectorContainer>
      <div className="promptli">
        <Title>{title}</Title>
        <DateSelectorComponent
          yearPlaceholder={value.format('YYYY')}
          dayPlaceholder={value.format('DD')}
          monthPlaceholder={value.format('MM')}
          clearIcon={null}
          onChange={val => onChange(date(val))}
          value={value.toDate()}
          name={name}
          minDate={minDate}
          maxDate={maxDate}
          {...rest}
        />
      </div>
    </DateSelectorContainer>
  )
}

DateSelector.defaultProps = {
  onChange: () => {},
}

DateSelector.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default DateSelector

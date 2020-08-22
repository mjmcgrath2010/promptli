import { h } from 'preact'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import date from 'dayjs'

import DatePicker from 'react-date-picker'

const DateSelectorContainer = styled.div``

const DateSelectorComponent = styled(DatePicker)`
  width: 100%;
  background-color: #eaeaea;
  border-radius: 6px;
  padding: 0.5em;
  transition: 0.5s ease-in-out all;
  ${({ displayMode }) =>
    displayMode &&
    css`
      width: auto;
      display: inline-flex;
      transition: 0.5s ease-in-out all;
      padding: 0.25em;

      .react-date-picker__inputGroup {
        font-size: 12px;
      }

      .react-date-picker.react-date-picker--closed.react-date-picker--enabled.sc-AxheI.bgrbqw {
        padding: 8px;
        width: fit-content;
      }

      button.react-date-picker__calendar-button.react-date-picker__button {
        display: none;
      }
    `}

  .react-date-picker__wrapper {
    border: none;
  }
`

const Title = styled.div`
  padding: 0.25em;
  font-size: ${({ theme }) => theme.smFont};
`

const DateSelector = props => {
  const { title, onChange, value, name, minDate, maxDate, displayMode, ...rest } = props

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
          displayMode={displayMode}
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

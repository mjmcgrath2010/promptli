import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DatePicker from 'react-date-picker'

const DateSelectorContainer = styled.div`
  width: 150px;
`

const DateSelectorComponent = styled(DatePicker)``

const Title = styled.div`
  padding: 0.25em;
  font-size: ${({ theme }) => theme.smFont};
`

const DateSelector = props => {
  const { title, onChange, value, name } = props

  return (
    <DateSelectorContainer>
      <div className="promptli">
        <Title>{title}</Title>
        <DateSelectorComponent
          monthPlaceholder={value.format('YYYY')}
          dayPlaceholder={value.format('DD')}
          monthPlaceholder={value.format('MM')}
          clearIcon={null}
          onChange={onChange}
          value={value.toDate()}
          name={name}
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

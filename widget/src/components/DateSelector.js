import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

//https://www.npmjs.com/package/datepickerdate
// js file with bundler(webpack)
import 'datepickerdate/lib/index.css'
import { Datepicker } from 'datepickerdate'

const DateSelectorContainer = styled.div``

const DateSelector = props => {
  const { title } = props
  const onDateChanged = val => console.log(val)
  return (
    <DateSelectorContainer>
      {title}
      <Datepicker
        name="yourFormControlName"
        value="2019-08-28"
        placeholder="Your custom placeholder"
        onDateChanged={onDateChanged}
      />
    </DateSelectorContainer>
  )
}

DateSelector.defaultProps = {}

DateSelector.propTypes = {}

export default DateSelector

import { h, Fragment } from 'preact'
import PropTypes from 'prop-types'
import TimeSelector from './TimeSelector'
import styled from 'styled-components'

const SelectorContainer = styled.div`
  grid-column: span 1;
`

const TimePicker = props => {
  const { onChange } = props
  const handleChange = val => {
    onChange(val)
  }

  return (
    <Fragment>
      <SelectorContainer>
        <TimeSelector label="Start Time" name="startTime" onSelect={handleChange} />
      </SelectorContainer>
      <SelectorContainer>
        <TimeSelector label="End Time" name="endTime" onSelect={handleChange} />
      </SelectorContainer>
    </Fragment>
  )
}

TimePicker.defaultProps = {}

TimePicker.propTypes = {}

export default TimePicker

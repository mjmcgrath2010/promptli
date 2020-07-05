import { h } from 'preact'
import PropTypes from 'prop-types'
import Dropdown from './Dropdown'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0.25em 1em;
`

const StyledDropDown = styled(Dropdown)`
  background-color: #eaeaea;
  border-radius: 6px;

  .Dropdown-control {
    background-color: #eaeaea;
  }
`

const TimeSelector = props => {
  const { label, onSelect, name } = props
  return (
    <Container>
      <StyledDropDown
        label={label}
        initialValue={'12:00 PM'}
        name={name}
        options={[
          '5:00 AM',
          '6:00 AM',
          '7:00 AM',
          '8:00 AM',
          '9:00 AM',
          '10:00 AM',
          '11:00 AM',
          '12:00 PM',
          '1:00 PM',
          '2:00 PM',
          '3:00 PM',
          '4:00 PM',
          '5:00 PM',
          '6:00 PM',
          '7:00 PM',
          '8:00 PM',
          '9:00 PM',
          '10:00 PM',
          '11:00 PM',
          '12:00 AM',
          '1:00 AM',
          '2:00 AM',
          '3:00 AM',
          '4:00 AM',
        ]}
        onSelect={onSelect}
      />
    </Container>
  )
}

TimeSelector.defaultProps = {}

TimeSelector.propTypes = {}

export default TimeSelector

import { h, Fragment } from 'preact'
import PropTypes from 'prop-types'
import { useState } from 'preact/hooks'
import Dd from 'react-dropdown'
import 'react-dropdown/style.css'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`
const Label = styled.div`
  grid-column: span 1;
  font-size: ${({ theme }) => theme.smFont};
  margin: 0.25em 0;
`

const StyledDropdown = styled(Dd)`
  grid-column: span 1;
`

const Dropdown = props => {
  const { initialValue, options, label, onSelect, name, ...rest } = props
  const [selected, setSelected] = useState(options[options.indexOf(initialValue)])

  const onOptionSelect = opt => {
    setSelected(opt)
    onSelect({ [name]: opt })
  }

  return (
    <Container>
      <Label>{label}</Label>
      <StyledDropdown
        options={options}
        onChange={onOptionSelect}
        value={selected}
        placeholder="Select an option"
        {...rest}
      />
    </Container>
  )
}

Dropdown.defaultProps = {
  initialValue: '12:00 PM',
  options: [],
  label: '',
}

Dropdown.propTypes = {}

export default Dropdown

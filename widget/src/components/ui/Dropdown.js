import { h } from 'preact'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useState } from 'preact/hooks'
import Container from './Container'

const DropdownInput = styled.select`
  display: flex;
  width: 8em;
  position: relative;
  border: 2px solid rgba(24, 33, 82, 1);
  height: 2.5em;
  margin-bottom: 0;
  background: transparent;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`

const SelectedOption = styled.option`
  display: none;
`

const Label = styled.label`
  font-size: 16px;
  padding: 0.25em;
`

const ListContainer = styled.ul`
  width: 7em;
  height: 10em;
  overflow-y: scroll;
  background: transparent;
  margin: 0;
  display: ${({ open }) => (open ? 'block' : 'none')};
  list-style: none;
  padding: inherit;
  border-radius: 0 5px;
  outline: none;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(24, 33, 82, 1);
  position: absolute;
  bottom: calc(0px - 6.1em);
`

const ListItem = styled.li`
  width: 100%;
  margin: 0.5em 0 0em;
  padding: 0.25em 0.5em;
  text-align: left;
  border-bottom: 2px solid #dbdbdb;
  cursor: pointer;
  &:hover {
    background: rgba(24, 33, 82, 1);
    color: white;
  }
`

const Dropdown = props => {
  const { initialValue, options, label, onSelect, name } = props
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(initialValue)

  const toggleDrawer = e => {
    e.preventDefault()
    setOpen(!open)
  }

  const onOptionSelect = opt => {
    setSelected(opt)
    setOpen(false)
    onSelect({ [name]: opt })
  }

  return (
    <Container onMouseLeave={() => setOpen(false)}>
      <Label for={label.toLowerCase()}>{label}</Label>
      <DropdownInput id={label.toLowerCase()} onClick={toggleDrawer}>
        <SelectedOption value="volvo">{selected}</SelectedOption>
      </DropdownInput>
      <ListContainer open={open}>
        {options.map(opt => {
          return (
            <ListItem onClick={() => onOptionSelect(opt)} name={opt} key={opt}>
              {opt}
            </ListItem>
          )
        })}
      </ListContainer>
    </Container>
  )
}

Dropdown.defaultProps = {
  initialTime: '12:00 PM',
  options: [],
  label: '',
}

Dropdown.propTypes = {}

export default Dropdown

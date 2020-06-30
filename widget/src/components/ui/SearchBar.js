import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSearchBar = styled.input`
  padding: 0.5em 1em;
  font-size: 18px;
  outline: none;
  margin: 0.5em 1em;
  border-radius: 10px;
  box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.3);
`

const SearchBar = props => {
  const { value, onChange, name, placeholder } = props
  return (
    <StyledSearchBar
      placehodler={placeholder}
      value={value}
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

SearchBar.defaultProps = {
  placeholder: 'Search',
}
SearchBar.PropTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchBar

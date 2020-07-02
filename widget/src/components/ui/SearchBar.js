import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  font-size: 18px;
  margin: 0.5em 2em;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5);
  padding: 0.75em 4px 0.75em 1em;
  border: none;
  background: #fff;
`

const Icon = styled.span`
  grid-column: span 1;
  opacity: 0.4;
  color: #000000;
`

const StyledSearchBar = styled.input`
  grid-column: span 11;
  font-size: inherit;
  outline: none;
  border: none;
  &::placeholder {
    font-size: 12px;
  }
`

const SearchBar = props => {
  const { value, onChange, name, placeholder } = props
  return (
    <SearchBarContainer>
      <StyledSearchBar
        placehodler={placeholder}
        value={value}
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Icon className="material-icons">search</Icon>
    </SearchBarContainer>
  )
}

SearchBar.defaultProps = {
  placeholder: 'Search',
}
SearchBar.PropTypes = {
  onChange: PropTypes.func.isRequired,
}

export default SearchBar

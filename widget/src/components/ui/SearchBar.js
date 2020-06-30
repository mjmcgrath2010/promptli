import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  font-size: 18px;
  margin: 0.5em 1em;
  border-radius: 10px;
  box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.3);
  padding: 0.5em 0 0.5em 1em;
  border: 2px solid #dbdbdb;
`

const Icon = styled.span`
  grid-column: span 1;

  &.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }
`

const StyledSearchBar = styled.input`
  grid-column: span 11;
  font-size: inherit;
  outline: none;
  border: none;
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

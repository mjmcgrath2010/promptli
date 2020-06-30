import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  font-size: 18px;
  margin: 0.5em 1em;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5);
  padding: 0.75em 4px 0.75em 1em;
  border: none;
`

const Icon = styled.span`
  grid-column: span 1;
  opacity: 0.4;
  color: #000000;

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
  font-family: 'Montserrat';
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

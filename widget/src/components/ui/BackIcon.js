import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BackIconContainer = styled.div`
  grid-column: span 12;
  font-size: 24px;
  color: ${({ dark }) => (dark ? '#000' : '#fff')};
  span {
    padding: 1em;
    cursor: pointer;
  }
`

const BackIcon = ({ onClick, dark, ...rest }) => {
  return (
    <BackIconContainer dark={dark} onClick={onClick} {...rest}>
      <div>
        <span className="material-icons">arrow_back</span>
      </div>
    </BackIconContainer>
  )
}

BackIcon.defaultProps = {
  onClick: () => {},
  dark: false,
}

BackIcon.propTypes = {
  onClick: PropTypes.func,
  dark: PropTypes.bool,
}

export default BackIcon

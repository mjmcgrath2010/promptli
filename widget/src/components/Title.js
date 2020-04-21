import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const getSize = size => {
  const sizing = {
    small: '1.5em',
    medium: '2em',
    large: '2.5em',
  }

  return sizing[size] || sizing.medium
}

const TitleContainer = styled.div`
  width: 100%;
  height: 75px;
  text-align: ${({ alignment }) => alignment};
  font-size: ${({ size }) => getSize(size)};
`

const Title = ({ text, alignment, size }) => {
  return (
    <TitleContainer alignment={alignment} size={size}>
      {text}
    </TitleContainer>
  )
}

Title.defaultProps = {
  alignment: 'center',
  size: 'medium',
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  alignment: PropTypes.string,
  size: PropTypes.string,
}

export default Title

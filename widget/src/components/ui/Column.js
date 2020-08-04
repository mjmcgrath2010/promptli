import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledColumn = styled.div`
  grid-column: ${({ colWidth }) => `span ${colWidth}`};
  margin: 0.5em 0.5em;
  align-items: center;
`

const Column = ({ children, colWidth, ...rest }) => (
  <StyledColumn colWidth={colWidth} {...rest}>
    {children}
  </StyledColumn>
)

Column.defaultProps = {
  colWidth: 1,
}

Column.propTypes = {
  colWidth: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default Column

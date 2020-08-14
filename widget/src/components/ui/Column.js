import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledColumn = styled.div`
  grid-column: ${({ colWidth }) => `span ${colWidth}`};
  align-items: center;
  padding: 0.5em;
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

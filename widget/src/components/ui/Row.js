import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRow = styled.div`
  grid-row: ${({ rowHeight }) => `span ${rowHeight}`};
  grid-template-columns: inherit;
`

const Row = ({ children, rowHeight, ...rest }) => (
  <StyledRow rowHeight={rowHeight} {...rest}>
    {children}
  </StyledRow>
)

Row.defaultProps = {
  rowHeight: 1,
}

Row.propTypes = {
  rowHeight: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default Row

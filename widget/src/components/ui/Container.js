import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledContainer = styled.div`
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  padding: 0.5em 0.5em;
`

const Container = ({ children, rows, columns, ...rest }) => (
  <StyledContainer rows={rows} columns={columns} {...rest}>
    {children}
  </StyledContainer>
)

Container.defaultProps = {
  rows: 1,
  columns: 1,
}

Container.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default Container

import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 0.5em 2em;
  font-size: ${({ theme }) => theme.mdFont};
  font-family: ${({ theme }) => theme.primaryFont};
  background: ${({ type, theme }) => theme[type] || theme['primary']};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  max-height: 60px;
  outline: none;
  cursor: pointer;
  &.primary {
    &:hover {
      background: ${({ theme }) => theme.primaryHover};
    }
  }
  &.secondary {
    &:hover {
      background: ${({ theme }) => theme.secondaryHover};
    }
  }
  &:disabled {
    background: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
    &:hover {
      background: ${({ theme }) => theme.disabled};
      cursor: not-allowed;
    }
  }
`

const Button = ({ text, onClick, variant, type, disabled }) => (
  <StyledButton className={type} disabled={disabled} type={type} onClick={onClick} variant={variant}>
    {text}
  </StyledButton>
)

Button.defaultProps = {
  variant: 'default',
  disabled: false,
  type: 'primary',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  variant: PropTypes.oneOf(['default', 'outlined', 'success', 'error', 'warning']),
}

export default Button

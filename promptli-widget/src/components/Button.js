import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5em 2em;
  font-size: 16px;
  font-family: "Open Sans", "sans-serif";
  background: rgba(24, 33, 82, 1);
  color: #fff;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.42);
`;

const Button = ({ text, onClick, variant }) => (
  <StyledButton onClick={onClick} variant={variant}>
    {text}
  </StyledButton>
);

Button.defaultProps = {
  variant: "default"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf([
    "default",
    "outlined",
    "success",
    "error",
    "warning"
  ])
};

export default Button;
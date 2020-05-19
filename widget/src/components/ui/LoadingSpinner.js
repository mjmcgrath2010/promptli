import { h } from 'preact'
import PropTypes from 'prop-types'

import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingSpinner = styled.div`
  animation: ${rotate360} 0.6s linear infinite;
  transform: translateZ(0);
  border-top: 3px solid grey;
  border-right: 3px solid grey;
  border-bottom: 3px solid grey;
  border-left: 3px solid black;
  background: transparent;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

export default LoadingSpinner

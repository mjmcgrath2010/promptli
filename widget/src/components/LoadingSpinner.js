import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LoadingSpinnerContainer = styled.div``

const LoadingSpinner = props => {
  const { title } = props
  return <LoadingSpinnerContainer>{title}</LoadingSpinnerContainer>
}

LoadingSpinner.defaultProps = {}

LoadingSpinner.propTypes = {}

export default LoadingSpinner

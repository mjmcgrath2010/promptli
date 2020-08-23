import { h } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LoadingSpinnerContainer = styled.div``

const LoadingSpinner = props => {
  return (
    <LoadingSpinnerContainer>
      <div>LoadingSpinner</div>
    </LoadingSpinnerContainer>
  )
}

LoadingSpinner.defaultProps = {}
LoadingSpinner.propTypes = {}

export default LoadingSpinner

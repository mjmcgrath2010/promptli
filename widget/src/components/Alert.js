import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AlertContainer = styled.div``

const Alert = props => {
  const { title } = props
  return <AlertContainer>{title}</AlertContainer>
}

Alert.defaultProps = {}

Alert.propTypes = {}

export default Alert

import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledServicesContainer = styled.div``

const ServicesContainer = props => {
  const { title } = props
  return <StyledServicesContainer>{title}</StyledServicesContainer>
}

ServicesContainer.defaultProps = {}

ServicesContainer.propTypes = {}

export default ServicesContainer

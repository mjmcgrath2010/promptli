import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Services from './Services'

const StyledServicesContainer = styled.div``

const ServicesContainer = props => {
  const { title } = props
  return <Services />
}

ServicesContainer.defaultProps = {}

ServicesContainer.propTypes = {}

export default ServicesContainer
